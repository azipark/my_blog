/**
 * Site basic information type
 * @description Contains site title and description
 * @property {string} name - Site name
 * @property {string} title - Site title
 * @property {string} base - Site base path
 * @property {string} description - Site description
 * @property {string} author - Author name
 * @property {string} url - Site URL
 * @property {string} website - Website address
 * @property {string} ogImage - OGP image address
 */
export interface SiteInfo {
  name: string
  title: string
  base: string
  description: string
  author: string
  url: string
  website: string
  ogImage: string
}

/**
 * Hero image aspect ratio type
 * @description Possible values: '16/9' and '3/4'
 */
export type HeroImageAspectRatio = '16/9' | '3/4'

/**
 * Hero image layout type
 * @description Possible values: 'left' and 'right'
 */
export type HeroImageLayout = 'left' | 'right'

/**
 * Post card type
 * @description Possible values: 'compact', 'image' and 'timeLine'
 */
export type PostCardType = 'compact' | 'image' | 'timeLine'

/**
 * Post card page configuration interface
 * @description Used to configure how post cards are displayed on pages
 * @property {PostCardType} type - Card display type
 * @property {number} size - Number of items per page
 * @property {HeroImageLayout} heroImageLayout - Hero image layout position
 */
export interface PostCardPageConfig {
  type: PostCardType
  size: number
  heroImageLayout?: HeroImageLayout
}

/**
 * Post configuration interface
 * @description Used to configure global settings for blog posts
 * @property {string} title - Post title
 * @property {string} description - Post description
 * @property {string} introduce - Post introduce
 * @property {string} author - Author name
 * @property {PostCardPageConfig} homePageConfig - Home page posts display configuration
 * @property {PostCardPageConfig} postPageConfig - Posts list page display configuration
 * @property {PostCardPageConfig} tagsPageConfig - Post display configuration for tags page
 * @property {string} defaultHeroImage - Default hero image for posts
 * @property {HeroImageAspectRatio} defaultHeroImageAspectRatio - Default image aspect ratio
 * @property {boolean} imageDarkenInDark - Whether to darken images in dark mode
 * @property {string} readMoreText - "Read more" button text
 * @property {string} prevPageText - Previous page button text
 * @property {string} nextPageText - Next page button text
 * @property {string} tocText - Table of contents text
 * @property {string} backToPostsText - Back to posts list button text
 * @property {string} nextPostText - Next post button text
 * @property {string} prevPostText - Previous post button text
 */
export interface PostConfig {
  title: string
  description: string
  introduce: string
  author: string
  homePageConfig: PostCardPageConfig
  postPageConfig: PostCardPageConfig
  tagsPageConfig: PostCardPageConfig
  defaultHeroImage: string
  defaultHeroImageAspectRatio: HeroImageAspectRatio
  imageDarkenInDark: boolean
  readMoreText: string
  prevPageText: string
  nextPageText: string
  tocText: string
  backToPostsText: string
  nextPostText: string
  prevPostText: string
}

/**
 * Tags configuration interface
 * @property {string} title - Tags page title
 * @property {string} description - Tags page description
 * @property {string} introduce - Tags page introduce
 */
export interface TagsConfig {
  title: string
  description: string
  introduce: string
}

export interface Skill {
  icon: string
  name: string
}

export interface SkillData {
  direction: 'left' | 'right'
  skills: Skill[]
}

/**
 * SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - Skills showcase data
 * @property {string} SKILLS_DATA.direction - Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - Skills icon
 * @property {string} SKILLS_DATA.skills.name - Skills name
 */
export interface SkillsShowcaseConfig {
  SKILLS_ENABLED: boolean
  SKILLS_DATA: SkillData[]
}

/**
 * GitHub configuration type
 * @property {boolean} ENABLED - Whether to enable GitHub features
 * @property {number} CACHE_DURATION - Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - Use mock data in development
 */
export type GithubConfig = {
  ENABLED: boolean
  CACHE_DURATION: number
  USE_MOCK_DATA_FOR_DEVELOPMENT: boolean
}

/**
 * Link type
 * @property {string} name - Link display name
 * @property {string} url - Link URL
 */
export type Link = {
  name: string
  url: string
}

/**
 * Project configuration interface
 * @property {string} title - Project title
 * @property {string} description - Project description
 * @property {string} introduce - Project introduce
 */
export interface ProjectConfig {
  title: string
  description: string
  introduce: string
}

/**
 * Experience configuration interface
 * @property {boolean} enable - Whether to enable Experience section
 * @property {string} title - Experience page title
 * @property {string} description - Experience page description
 * @property {string} intro - Experience page introduce
 */
export interface ExperienceConfig {
  enable: boolean
  title: string
  description: string
  intro?: string
}

/**
 * Experience type
 * @description School or work experience
 */
export type ExperienceType = 'education' | 'work'

/**
 * Experience interface
 * @property {string} title - Position or degree title
 * @property {string} organization - Company or school name
 * @property {string} location - Location
 * @property {string} startDate - Start date
 * @property {string} endDate - End date (or 'Present' if current)
 * @property {ExperienceType} type - Experience type
 * @property {string} description - Experience description
 * @property {string[]} skills - Related skills or achievements
 * @property {string} [logo] - Company or school logo
 */
export interface Experience {
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  type: ExperienceType
  description: string
  skills: string[]
  logo?: string
}

// 项目图标类型 / Project icon type
export type IconType = 'icon' | 'image'

/**
 * 项目类型 / Project type
 * @property {string} name - 项目名称 / Project name
 * @property {string} description - 项目描述 / Project description
 * @property {string} url - 项目URL / Project URL
 * @property {string} githubUrl - 项目github地址 / Project github address
 * @property {IconType} type - 项目图标类型 / Project icon type
 * @property {string} icon - 项目图标 / Project icon
 * @property {string} imageClass - 项目图片样式类名 / Project image style class name
 * @property {number} star - 项目star数量 / Project star count
 * @property {number} fork - 项目fork数量 / Project fork count
 * @property {string} thumbnail - 项目缩略图 / Project thumbnail
 */

export interface Project {
  name: string
  description: string
  website?: string
  githubUrl?: string
  type: IconType
  icon: string
  imageClass?: string
  star?: number
  fork?: number
  thumbnail?: string
}

export interface SEO {
  title: string
  description: string
  noindex?: boolean
  nofollow?: boolean
}

/**
 * 수상 인터페이스 / Award interface
 * @property {string} title - 상 이름 / Award title
 * @property {string} organization - 주최기관 / Awarding organization
 * @property {string} date - 수상 날짜 / Award date
 * @property {string} description - 수상 설명 / Award description
 * @property {string} [image] - 수상 이미지 / Award image
 */
export interface Award {
  title: string
  organization: string
  date: string
  description: string
  image?: string
}

/**
 * Navigation menu item type
 */
export interface MenuItem {
  /** Menu text */
  text: string
  /** Menu link */
  href: string
  /** Whether external link */
  external?: boolean
}

/**
 * Social media link type
 */
export interface SocialLink {
  /** Platform name */
  name: string
  /** Platform URL */
  url: string
  /** Platform icon */
  icon: string
}

/**
 * Hero section configuration type
 */
export interface HeroConfig {
  /** Whether to enable Hero section */
  enable: boolean
  /** Hero title */
  title?: string
  /** Hero subtitle */
  subtitle?: string
  /** Avatar image path */
  avatar?: string
  /** Social media links */
  social?: SocialLink[]
}

/**
 * About section configuration type
 */
export interface AboutConfig {
  /** Whether to enable About section */
  enable: boolean
  /** About title */
  title?: string
  /** About description */
  description?: string
}

/**
 * Blog configuration type
 */
export interface BlogConfig {
  /** Whether to enable Blog section */
  enable: boolean
  /** Blog title */
  title?: string
  /** Blog description */
  description?: string
}

/**
 * Project configuration interface
 */
export interface ProjectsConfig {
  /** Whether to enable Projects section */
  enable: boolean
  /** Projects title */
  title?: string
  /** Projects description */  
  description?: string
}

/**
 * Skills configuration interface
 */
export interface SkillsConfig {
  /** Whether to enable Skills section */
  enable: boolean
  /** Skills title */
  title?: string
  /** Skills description */
  description?: string
}

/**
 * Contact configuration interface
 */
export interface ContactConfig {
  /** Whether to enable Contact section */
  enable: boolean
  /** Contact title */
  title?: string
  /** Contact description */
  description?: string
  /** Contact email */
  email?: string
}

/**
 * SEO configuration type
 */
export interface SEOConfig {
  /** Default meta title */
  title?: string
  /** Default meta description */
  description?: string
  /** Default meta keywords */
  keywords?: string[]
  /** Default Open Graph image */
  image?: string
  /** Twitter card type */
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
}

/**
 * RSS configuration type
 */
export interface RSSConfig {
  /** Whether to enable RSS */
  enable: boolean
  /** RSS title */
  title?: string
  /** RSS description */
  description?: string
  /** Number of articles to include */
  limit?: number
}

/**
 * Comment system configuration type
 */
export interface CommentsConfig {
  /** Whether to enable comments */
  enable: boolean
  /** Comment system provider */
  provider?: 'giscus' | 'disqus'
  /** Giscus configuration */
  giscus?: {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping: string
    strict: string
    reactionsEnabled: string
    emitMetadata: string
    inputPosition: string
    theme: string
    lang: string
  }
}

/**
 * Analytics configuration type
 */
export interface AnalyticsConfig {
  /** Whether to enable analytics */
  enable: boolean
  /** Analytics provider */
  provider?: 'google' | 'umami'
  /** Google Analytics configuration */
  google?: {
    id: string
  }
  /** Umami Analytics configuration */
  umami?: {
    id: string
    src: string
  }
}

/**
 * Search configuration type
 */
export interface SearchConfig {
  /** Whether to enable search */
  enable: boolean
  /** Search provider */
  provider?: 'algolia' | 'local'
  /** Algolia configuration */
  algolia?: {
    appId: string
    apiKey: string
    indexName: string
  }
}

/**
 * Theme configuration type
 */
export interface ThemeConfig {
  /** Default theme mode */
  defaultMode?: 'light' | 'dark' | 'system'
  /** Whether to enable theme toggle */
  enableToggle?: boolean
}

/**
 * Site configuration type
 */
export interface SiteConfig {
  /** Site basic information */
  site: SiteInfo
  /** Navigation menu */
  menu: MenuItem[]
  /** Hero section configuration */
  hero: HeroConfig
  /** About section configuration */
  about: AboutConfig
  /** Blog configuration */
  blog: BlogConfig
  /** Projects configuration */
  projects: ProjectsConfig
  /** Experience configuration */
  experience: ExperienceConfig
  /** Skills configuration */
  skills: SkillsConfig
  /** Contact configuration */
  contact: ContactConfig
  /** SEO configuration */
  seo: SEOConfig
  /** RSS configuration */
  rss: RSSConfig
  /** Comments configuration */
  comments: CommentsConfig
  /** Analytics configuration */
  analytics: AnalyticsConfig
  /** Search configuration */
  search: SearchConfig
  /** Theme configuration */
  theme: ThemeConfig
}
