# Graph Report - me  (2026-07-30)

## Corpus Check
- 32 files · ~71,260 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 176 nodes · 230 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0f50008f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- topbar.tsx
- app/page.tsx
- compilerOptions
- projects/page.tsx
- package.json
- include
- .eslintrc.json
- next.config.js
- README.md
- tailwind.config.ts
- blog-post-page.tsx
- vercel.json
- blog-post-page.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `site` - 11 edges
3. `canonicalUrl()` - 8 edges
4. `scripts` - 7 edges
5. `include` - 5 edges
6. `blogPosts` - 4 edges
7. `getBlogPost()` - 4 edges
8. `lib` - 4 edges
9. `EasterEgg()` - 3 edges
10. `JsonLd()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `sitemap()` --calls--> `canonicalUrl()`  [EXTRACTED]
  app/sitemap.ts → lib/seo.ts
- `JsonLd()` --calls--> `canonicalUrl()`  [EXTRACTED]
  app/components/json-ld.tsx → lib/seo.ts
- `BlogPostPage()` --calls--> `getBlogPost()`  [EXTRACTED]
  templates/blog-post-page.tsx → data/blog.ts
- `generateMetadata()` --calls--> `getBlogPost()`  [EXTRACTED]
  templates/blog-post-page.tsx → data/blog.ts

## Import Cycles
- None detected.

## Communities (15 total, 4 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.07
Nodes (29): autoprefixer, clsx, eslint, eslint-config-next, next, next-themes, dependencies, autoprefixer (+21 more)

### Community 1 - "topbar.tsx"
Cohesion: 0.09
Nodes (11): Analytics(), Footer(), commands, helpCommand, routes, navItems, metadata, roboto_mono (+3 more)

### Community 2 - "app/page.tsx"
Cohesion: 0.18
Nodes (11): EasterEgg(), useTypingEffect(), EducationTimeline(), ExperienceTimeline(), SectionHeading(), metadata, about, education (+3 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "projects/page.tsx"
Cohesion: 0.13
Nodes (17): categoryLabels, categoryStyles, getLinkLabel(), ProjectCard(), matchesSearch(), ProjectsBrowser(), ProjectsBrowserProps, StatusFilter (+9 more)

### Community 5 - "package.json"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, clean, dev, lint, preview (+2 more)

### Community 6 - "include"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 12 - "blog-post-page.tsx"
Cohesion: 0.22
Nodes (8): metadata, JsonLd(), metadata, sitemap(), BlogPost, blogPosts, site, canonicalUrl()

### Community 13 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, framework, outputDirectory, trailingSlash

### Community 14 - "blog-post-page.tsx"
Cohesion: 0.47
Nodes (4): getBlogPost(), BlogPostPage(), generateMetadata(), Props

## Knowledge Gaps
- **74 isolated node(s):** `extends`, `next/core-web-vitals`, `metadata`, `categoryStyles`, `categoryLabels` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `site` connect `blog-post-page.tsx` to `topbar.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `canonicalUrl()` connect `blog-post-page.tsx` to `app/page.tsx`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `metadata` to the rest of the system?**
  _74 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `topbar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08994708994708994 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._