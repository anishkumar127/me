import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on full stack development, SharePoint, and SaaS.",
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-500">
        Thoughts on full stack development, Microsoft 365, and building SaaS
        products.
      </p>

      {blogPosts.length === 0 ? (
        <div className="rounded-md border border-dashed border-neutral-300 dark:border-neutral-700 p-8 text-center">
          <p className="text-sm text-neutral-500">
            No posts yet — check back soon.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li
              key={post.slug}
              className="border border-neutral-200 dark:border-neutral-800 rounded-md p-4"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                {post.title}
              </Link>
              <p className="text-xs text-neutral-400 mt-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-xs text-neutral-500 mt-2">{post.excerpt}</p>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
