/**
 * Copy this file to `app/blog/[slug]/page.tsx` when you add your first blog post.
 * Static export requires at least one post in `data/blog.ts` for the build to succeed.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article className="space-y-4">
      <Link
        href="/blog"
        className="text-xs text-neutral-500 hover:underline underline-offset-4"
      >
        ← Back to blog
      </Link>

      <header>
        <h1 className="text-lg font-bold">{post.title}</h1>
        <p className="text-xs text-neutral-400 mt-1">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-neutral-500 bg-neutral-100 dark:bg-neutral-800 rounded px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
