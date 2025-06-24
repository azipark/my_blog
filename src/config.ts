import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, SiteInfo, SkillsShowcaseConfig, SocialLink, TagsConfig, ExperienceConfig, Experience, Award } from '~/types'

export const SITE: SiteInfo = {
  name: 'My Blog',
  title: 'My Blog',
  description: '이것은 블로그 설명입니다.',
  author: 'Your Name',
  base: '/',
  website: 'https://yourdomain.com',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Experience',
    url: '/experience',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
]

export const FOOTER_LINKS: Link[] = []

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/azipark7721',
    icon: 'icon-[ri--github-fill]',
  }
]

/**
 * SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - Skills showcase data
 * @property {string} SKILLS_DATA.direction - Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - Skills icon
 * @property {string} SKILLS_DATA.skills.name - Skills name
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[mdi--language-javascript]',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
        },
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
        },
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
        },
        {
          name: 'Vue.js',
          icon: 'icon-[mdi--vuejs]', // 단색/라인, Material Design Icons
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[mdi--tailwind]',
        },
        {
          name: 'SCSS',
          icon: 'icon-[mdi--language-css3]', // 라인/단색, 스타일 계열
        },
        {
          name: 'Bootstrap',
          icon: 'icon-[mdi--bootstrap]',
        },
        {
          name: 'WebSquare',
          icon: 'icon-[mdi--web]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
        },
        {
          name: 'SVN',
          icon: 'icon-[simple-icons--subversion]',
        },
        {
          name: 'Figma',
          icon: 'icon-[lineicons--figma]',
        },
        {
          name: 'Zeplin',
          icon: 'icon-[mdi--palette-outline]', // 라인, Material Design Icons
        },
        {
          name: 'Sketch',
          icon: 'icon-[lineicons--sketch]',
        },
        {
          name: 'Adobe XD',
          icon: 'icon-[simple-icons--adobexd]', // simple-icons 사용
        },
        {
          name: 'Adobe Photoshop',
          icon: 'icon-[simple-icons--adobephotoshop]', // simple-icons 사용
        },
        {
          name: 'Cursor AI',
          icon: 'icon-[mdi--robot]', // 공식 아이콘 없음, 대체 아이콘 사용
        },
      ],
    },
  ],
}

/**
 * GitHub configuration
 * @property {boolean} ENABLED - Whether to enable GitHub features
 * @property {number} CACHE_DURATION - Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - Use mock data in development
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5,
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}

export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Dnzzk2',
  introduce: 'Here, I will share the usage instructions for this theme to help you quickly use it.',
  author: 'Dnzzk2',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'timeLine',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'Catalogue',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'The examples of my projects.',
  introduce: 'The examples of my projects.',
}

export const EXPERIENCE_CONFIG: ExperienceConfig = {
  enable: true,
  title: 'Experience',
  description: 'My professional journey and educational background',
  intro: 'Here is an overview of my career path, education, and the skills I have developed along the way.'
}

// get icon https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: 'Litos',
    description: 'A Simple & Modern Blog Theme for Astro.',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'image',
    icon: '/projects/logo.png',
    star: 11,
    fork: 4,
  },
]

export const ExperienceList: Experience[] = [
  {
    title: '웹 퍼블리셔',
    organization: 'OK금융그룹',
    location: '서울시 중구',
    startDate: '2023-09',
    endDate: 'Present',
    type: 'work',
    employmentType: 'full-time',
    description: 'Developed and maintained modern web applications using React, TypeScript, and various frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences.',
    skills: ['VueJS', 'WebSquare5', 'HTML', 'CSS', 'SCSS/SASS', 'JavaScript', 'jQuery', 'BXM', 'ChangeFlow', 'Git', 'SVN', 'Zeplin', 'Figma', 'CursorAI', 'Superflex'],
    logo: '/experience/company-logo.png'
  },
  {
    title: '웹 퍼블리셔',
    organization: '원 유니버스',
    location: '서울시 강남구', 
    startDate: '2023-04',
    endDate: '2023-08',
    type: 'work',
    employmentType: 'freelance',
    description: '신규 게임 관리자 페이지 UI 개발',
    skills: ['HTML', 'SCSS/SASS', 'jQuery', 'Bootstrap', 'Chart.js', 'Adobe.js'],
    logo: '/experience/startup-logo.png'
  },
  {
    title: '웹 퍼블리셔',
    organization: '한화생명보험',
    location: '서울시', 
    startDate: '2023-06',
    endDate: '2023-06',
    type: 'work',
    employmentType: 'freelance',
    description: '한화생명보험 x 미국 스타트업 Need 공동 런칭 페이지 UI 개발',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Adobe Indesign', 'Adobe Photoshop'],
    logo: '/experience/startup-logo.png'
  },
  {
    title: '웹 퍼블리셔',
    organization: '플레이위드 코리아',
    location: '경기도 성남시', 
    startDate: '2021-06',
    endDate: '2023-04',
    type: 'work',
    employmentType: 'full-time',
    description: '이벤트 ',
    skills: ['JavaScript', 'Vue.js', 'CSS', 'HTML'],
    logo: '/experience/startup-logo.png'
  },
  {
    title: '전기전자컴퓨터공학과',
    organization: '고려대학교',
    location: '서울시 성북구',
    startDate: '2022-08',
    endDate: '2026-02',
    type: 'education',
    description: '',
    skills: [],
    logo: '/experience/university-logo.png'
  },
  {
    title: '세무학 전공, 경영학 부전공',
    organization: '강남대학교',
    location: '경기도 용인시',
    startDate: '2008-03',
    endDate: '2014-08',
    type: 'education',
    description: '',
    skills: [],
    logo: '/experience/university-logo.png'
  }
]

export const AwardsList: Award[] = [
  {
    title: '2019 공개 SW 컨트리뷰톤 장려상',
    organization: '과학기술정보통신부 주최',
    date: '2019-12',
    description: '과학기술정보통신부 주최, 정보통신산업진흥원 주관의 공개 SW 컨트리뷰톤에서 "자바스크립트 튜토리얼 한글화" 프로젝트에 기여하여 장려상 수상',
    image: '/awards/frontend-award.png'
  },
]
