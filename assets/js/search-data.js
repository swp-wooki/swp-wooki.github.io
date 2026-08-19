// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected projects in optimization, applied mathematics, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-books",
          title: "Books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic background, professional experience, projects, certifications, activities, skills, and awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-real-analysis-appendix-complex-fourier-series-and-holomorphic-functions",
        
          title: "Real Analysis Appendix: Complex Fourier Series and Holomorphic Functions",
        
        description: "복소 삼각계와 복소 Fourier 계수를 정리하고, 정칙함수와 실변수 함수의 차이를 살펴본다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-complex-fourier-series/";
          
        },
      },{id: "post-real-analysis-17-compact-operators",
        
          title: "Real Analysis 17: Compact Operators",
        
        description: "콤팩트 연산자와 대칭 콤팩트 연산자의 스펙트럼 정리를 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-compact-operators/";
          
        },
      },{id: "post-real-analysis-16-linear-transformations-and-the-riesz-representation-theorem",
        
          title: "Real Analysis 16: Linear Transformations and the Riesz Representation Theorem",
        
        description: "유계 선형변환, 선형범함수, Riesz 표현정리와 adjoint를 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-linear-transformations/";
          
        },
      },{id: "post-real-analysis-15-closed-subspaces-and-orthogonal-projections",
        
          title: "Real Analysis 15: Closed Subspaces and Orthogonal Projections",
        
        description: "닫힌 부분공간, 직교여공간과 직교사영의 구조를 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-orthogonal-projections/";
          
        },
      },{id: "post-real-analysis-14-fourier-series-and-fatou-39-s-theorem",
        
          title: "Real Analysis 14: Fourier Series and Fatou&#39;s Theorem",
        
        description: "Hilbert 공간 관점의 Fourier 급수와 Fatou 정리를 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-fourier-fatou/";
          
        },
      },{id: "post-real-analysis-13-hilbert-spaces-orthogonality-and-unitary-mappings",
        
          title: "Real Analysis 13: Hilbert Spaces—Orthogonality and Unitary Mappings",
        
        description: "Hilbert 공간의 기하, 직교성, 정규직교계, unitary 사상과 pre-Hilbert 공간을 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-hilbert-spaces/";
          
        },
      },{id: "post-real-analysis-12-the-hilbert-space-l2",
        
          title: "Real Analysis 12: The Hilbert Space L2",
        
        description: "L2 공간의 내적과 노름, 완비성과 분리가능성을 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-l2-space/";
          
        },
      },{id: "post-real-analysis-11-rectifiable-curves",
        
          title: "Real Analysis 11: Rectifiable Curves",
        
        description: "수정가능 곡선과 호의 길이 매개화, 등주부등식을 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-rectifiable-curves/";
          
        },
      },{id: "post-real-analysis-10-functions-of-bounded-variation-and-absolute-continuity",
        
          title: "Real Analysis 10: Functions of Bounded Variation and Absolute Continuity",
        
        description: "유계변동함수, 절대연속함수, 점프함수의 미분가능성을 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-differentiability-functions/";
          
        },
      },{id: "post-real-analysis-9-good-kernels-and-approximation",
        
          title: "Real Analysis 9: Good Kernels and Approximation",
        
        description: "좋은 커널과 항등원 근사, 합성곱을 통한 함수 근사를 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-good-kernels/";
          
        },
      },{id: "post-real-analysis-8-lebesgue-differentiation-and-the-hardy-littlewood-maximal-function",
        
          title: "Real Analysis 8: Lebesgue Differentiation and the Hardy–Littlewood Maximal Function",
        
        description: "Hardy–Littlewood 극대함수와 약형 추정, 르베그 미분정리를 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-differentiation-integral/";
          
        },
      },{id: "post-real-analysis-7-fubini-39-s-theorem",
        
          title: "Real Analysis 7: Fubini&#39;s Theorem",
        
        description: "곱공간의 단면과 Fubini·Tonelli 정리, 대표적인 응용을 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-fubini-theorem/";
          
        },
      },{id: "post-real-analysis-6-the-space-l1",
        
          title: "Real Analysis 6: The Space L1",
        
        description: "적분가능함수의 공간 L1, 완비성, 조밀성, 평행이동과 합성곱의 기본 성질을 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-l1-space/";
          
        },
      },{id: "post-real-analysis-5-the-lebesgue-integral",
        
          title: "Real Analysis 5: The Lebesgue Integral",
        
        description: "단순함수에서 일반 가측함수까지 르베그 적분을 구성하고 주요 수렴정리를 증명한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-lebesgue-integral/";
          
        },
      },{id: "post-real-analysis-4-measurable-functions",
        
          title: "Real Analysis 4: Measurable Functions",
        
        description: "가측함수의 기본 성질과 거의 모든 곳에서의 성질, 단순함수와 계단함수 근사를 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-measurable-functions/";
          
        },
      },{id: "post-real-analysis-3-measurable-sets-and-lebesgue-measure",
        
          title: "Real Analysis 3: Measurable Sets and Lebesgue Measure",
        
        description: "르베그 가측집합과 르베그 측도, 가산 가법성, Borel 집합과 불변성을 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-lebesgue-measure/";
          
        },
      },{id: "post-real-analysis-2-exterior-measure",
        
          title: "Real Analysis 2: Exterior Measure",
        
        description: "외측도의 정의와 단조성, 가산 준가법성, 열린집합에 의한 근사를 다룬다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-exterior-measure/";
          
        },
      },{id: "post-real-analysis-1-preliminaries",
        
          title: "Real Analysis 1: Preliminaries",
        
        description: "직사각형과 정육면체, 거의 서로소인 집합, 열린집합의 구조와 칸토어 집합을 정리한다.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/real-analysis-preliminaries/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-finish-undergraduate-ra-program-for-analysis-and-pdes",
          title: 'Finish Undergraduate RA program for Analysis and PDEs',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-entered-into-bs-ms-program-for-department-of-industrial-engineering-hanyang-university",
          title: 'Entered into BS-MS program for Department of Industrial Engineering, Hanyang University.',
          description: "",
          section: "News",},{id: "projects-optimization-grand-challenge-2025",
          title: 'Optimization Grand Challenge 2025',
          description: "Graph-theoretic ALNS for RoRo ship stowage and vehicle rehandling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optimization-grand-challenge-2025/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%73%77%6F%6F%6B@%68%61%6E%79%61%6E%67.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/swp-wooki", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
