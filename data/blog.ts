export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
};

/**
 * Add posts here. When you add your first post, also create
 * `app/blog/[slug]/page.tsx` (copy from `templates/blog-post-page.tsx`).
 */
export const blogPosts: BlogPost[] = [];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
