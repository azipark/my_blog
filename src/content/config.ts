import { defineCollection, z } from 'astro:content'

import { POSTS_CONFIG } from '~/config'
import type { HeroImageAspectRatio, HeroImageLayout } from '~/types'

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    // Article title (required)
    title: z.string(),
    // Article description (optional)
    description: z.string(),
    // Publication date (required)
    pubDate: z.date(),
    // Update date (optional)
    updatedDate: z.date().optional(),
    // Whether to recommend the article, defaults to false
    recommend: z.boolean().default(false),
    // Article author, defaults to the author in global config
    author: z.string().default(POSTS_CONFIG.author),
    // Article hero image (optional)
    heroImage: z
      .string()
      .transform((val) => {
        if (!val) return undefined
        return val.startsWith('http') ? val : `/hero-images/${val}`
      })
      .optional(),
    // Open Graph image (optional)
    ogImage: z
      .string()
      .transform((val) => {
        if (!val) return undefined
        return val.startsWith('http') ? val : `/og-images/${val}`
      })
      .optional(),
    // Hero image layout method (optional)
    heroImageLayout: z.custom<HeroImageLayout>().optional(),
    // Hero image aspect ratio, defaults to global config
    heroImageAspectRatio: z.custom<HeroImageAspectRatio>().default(POSTS_CONFIG.defaultHeroImageAspectRatio),
    // Article tags list
    tags: z.array(z.string()),
  }),
})

// Export content collection configuration
export const collections = { posts }
