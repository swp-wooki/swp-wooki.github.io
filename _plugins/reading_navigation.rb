# Build small, deterministic reading paths without client-side tracking.
module Jekyll
  class ReadingNavigation < Generator
    safe true
    priority :low

    def generate(site)
      posts = site.posts.docs.sort_by { |post| [post.date, post.url] }
      topics = Array(site.data['blog_categories']).flat_map { |group| [group] + Array(group['children']) }
      labels = topics.to_h { |topic| [topic['slug'], topic['title']] }
      series = topics.select { |topic| topic['series'] }
      posts.each do |post|
        text = post.content.gsub(/<[^>]*>/, ' ').gsub(/\$\$.*?\$\$/m, ' ')
        post.data['reading_minutes'] = [(text.scan(/[[:alnum:]_]+/).size / 200.0).ceil, 1].max
        post.data['topic_label'] = labels[Array(post.data['categories']).first] || Array(post.data['categories']).first.to_s.tr('-', ' ').split.map(&:capitalize).join(' ')
        post.data['reading_path'] = nil
        post.data['recommendations'] = []
      end
      series.each do |topic|
        chapters = posts.select { |post| Array(post.data['categories']).include?(topic['slug']) }
        chapters.each_with_index do |post, index|
          post.data['reading_path'] = {
            'title' => topic['title'], 'slug' => topic['slug'], 'position' => index + 1,
            'total' => chapters.size, 'chapters' => chapters.map { |chapter| summary(chapter) },
            'previous' => index.positive? ? summary(chapters[index - 1]) : nil,
            'next' => chapters[index + 1] ? summary(chapters[index + 1]) : nil
          }
        end
      end
      posts.each do |post|
        path = post.data['reading_path']
        neighbors = path ? [path.dig('previous', 'url'), path.dig('next', 'url')].compact : []
        ranked = posts.reject { |candidate| candidate == post || neighbors.include?(candidate.data['redirect'] || candidate.url) }.filter_map do |candidate|
          categories = Array(post.data['categories']) & Array(candidate.data['categories'])
          tags = Array(post.data['tags']) & Array(candidate.data['tags'])
          next if categories.empty? && tags.empty?

          # Specific title terms distinguish posts that share broad course tags.
          terms = title_terms(post) & title_terms(candidate)
          score = categories.size * 4 + tags.size * 2 + terms.size * 3
          reason = categories.empty? ? "Shared topic: #{tags.first.tr('-', ' ')}" : "More in #{labels[categories.first] || categories.first.tr('-', ' ')}"
          [candidate, score, reason]
        end
        ranked.sort_by! { |candidate, score, _reason| [-score, (candidate.date - post.date).abs, candidate.url] }
        limit = site.config.dig('related_blog_posts', 'max_related') || 3
        post.data['recommendations'] = ranked.first(limit).map { |candidate, _score, reason| summary(candidate).merge('reason' => reason) }
      end
    end

    private

    def title_terms(post)
      post.data['title'].to_s.downcase.scan(/[[:alpha:]]{3,}/).uniq - %w[the and for with from real analysis appendix]
    end

    def summary(post)
      {
        'title' => post.data['title'], 'url' => post.data['redirect'] || post.url,
        'description' => post.data['description'], 'date' => post.date,
        'reading_minutes' => post.data['reading_minutes']
      }
    end
  end
end
