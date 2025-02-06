import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}",
	base: 'src/content/blog'}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		image: z.string(),
		draft: z.boolean().default(false),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([])
	}),
});

const resourcesCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}",
	base: 'src/content/resources'}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		image: z.string(),
		downloadUrl: z.string(),
		fileType: z.enum(['pdf', 'code', 'template', 'other']),
		fileSize: z.string(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([])
	}),
});

const socialLinksCollection = defineCollection({
	loader: file("src/content/SocialLinks.json"),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		href: z.string().url(),
		icon: z.string(),
		title: z.string(),
		active: z.boolean().default(true)
	}),
});

// Export the collections
export const collections = {
  blog: blogCollection,
  resources: resourcesCollection,
  social: socialLinksCollection
};