require 'minitest/autorun'
require 'jekyll'
require_relative '../_plugins/reading_navigation'

class ReadingNavigationTest < Minitest::Test
  Post = Struct.new(:data, :content, :date, :url)
  Posts = Struct.new(:docs)
  Site = Struct.new(:posts, :data, :config)

  def post(title, day, categories: ['analysis'], tags: ['lecture-notes'], content: 'A short note.')
    Post.new({ 'title' => title, 'categories' => categories, 'tags' => tags }, content, Time.utc(2026, 1, day), "/blog/#{day}/")
  end

  def generate(posts, limit: 3)
    site = Site.new(Posts.new(posts), { 'blog_categories' => [{ 'slug' => 'mathematics', 'title' => 'Mathematics', 'children' => [{ 'slug' => 'analysis', 'title' => 'Analysis', 'series' => true }] }] }, { 'related_blog_posts' => { 'max_related' => limit } })
    Jekyll::ReadingNavigation.new.generate(site)
  end

  def test_series_is_chronological_and_does_not_wrap
    first, middle, last = [post('First', 1), post('Middle', 2), post('Last', 3)]
    generate([last, first, middle])
    assert_nil first.data.dig('reading_path', 'previous')
    assert_equal middle.url, first.data.dig('reading_path', 'next', 'url')
    assert_equal 2, middle.data.dig('reading_path', 'position')
    assert_equal first.url, middle.data.dig('reading_path', 'previous', 'url')
    assert_equal last.url, middle.data.dig('reading_path', 'next', 'url')
    assert_nil last.data.dig('reading_path', 'next')
    assert_equal [first.url, middle.url, last.url], first.data.dig('reading_path', 'chapters').map { |chapter| chapter['url'] }
  end

  def test_recommendations_exclude_self_and_adjacent_chapters
    posts = (1..6).map { |day| post("Note #{day}", day) }
    generate(posts)
    urls = posts[2].data['recommendations'].map { |item| item['url'] }
    assert_equal 3, urls.size
    assert_empty urls & posts[1..3].map(&:url)
    assert_equal urls.uniq, urls
  end

  def test_specific_shared_terms_rank_above_generic_tags
    current = post('Fourier convergence', 1, categories: ['math'])
    generic = post('Set theory', 2, categories: ['math'])
    related = post('Fourier transforms', 3, categories: ['math'])
    generate([current, generic, related], limit: 1)
    assert_equal [related.url], current.data['recommendations'].map { |item| item['url'] }
  end

  def test_unrelated_posts_are_not_falsely_recommended
    current = post('Analysis', 1)
    unrelated = post('Travel', 2, categories: ['travel'], tags: [])
    generate([current, unrelated])
    assert_empty current.data['recommendations']
    assert_nil unrelated.data['reading_path']
  end

  def test_shared_tag_connects_different_categories
    current = post('Numerical methods', 1, categories: ['math'], tags: ['optimization'])
    related = post('Solver', 2, categories: ['programming'], tags: ['optimization'])
    generate([current, related])
    assert_equal related.url, current.data['recommendations'].first['url']
    assert_equal 'Shared topic: optimization', current.data['recommendations'].first['reason']
  end

  def test_reading_estimate_has_a_minimum_and_rounds_up
    short = post('Empty', 1, content: '')
    long = post('Long', 2, content: 'word ' * 401)
    generate([short, long])
    assert_equal 1, short.data['reading_minutes']
    assert_equal 3, long.data['reading_minutes']
  end

  def test_empty_site_is_supported
    generate([])
  end
end
