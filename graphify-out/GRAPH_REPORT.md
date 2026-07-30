# Graph Report - me  (2026-07-30)

## Corpus Check
- 29 files · ~70,892 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 163 nodes · 204 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0f600bbb`
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `site` - 8 edges
3. `scripts` - 5 edges
4. `include` - 5 edges
5. `blogPosts` - 4 edges
6. `getBlogPost()` - 4 edges
7. `lib` - 4 edges
8. `EasterEgg()` - 3 edges
9. `TerminalContext` - 3 edges
10. `about` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Page()` --calls--> `getAllTech()`  [EXTRACTED]
  app/projects/page.tsx → data/projects.ts
- `BlogPostPage()` --calls--> `getBlogPost()`  [EXTRACTED]
  templates/blog-post-page.tsx → data/blog.ts
- `generateMetadata()` --calls--> `getBlogPost()`  [EXTRACTED]
  templates/blog-post-page.tsx → data/blog.ts

## Import Cycles
- None detected.

## Communities (13 total, 4 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.07
Nodes (29): autoprefixer, clsx, eslint, eslint-config-next, next, next-themes, dependencies, autoprefixer (+21 more)

### Community 1 - "topbar.tsx"
Cohesion: 0.10
Nodes (12): Analytics(), Footer(), JsonLd(), commands, helpCommand, routes, navItems, metadata (+4 more)

### Community 2 - "app/page.tsx"
Cohesion: 0.18
Nodes (11): EasterEgg(), useTypingEffect(), EducationTimeline(), ExperienceTimeline(), SectionHeading(), metadata, about, education (+3 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "projects/page.tsx"
Cohesion: 0.12
Nodes (20): categoryLabels, categoryStyles, getLinkLabel(), ProjectCard(), matchesSearch(), ProjectsBrowser(), ProjectsBrowserProps, StatusFilter (+12 more)

### Community 5 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 6 - "include"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 12 - "blog-post-page.tsx"
Cohesion: 0.21
Nodes (7): metadata, BlogPost, blogPosts, getBlogPost(), BlogPostPage(), generateMetadata(), Props

## Knowledge Gaps
- **67 isolated node(s):** `extends`, `next/core-web-vitals`, `metadata`, `categoryStyles`, `categoryLabels` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `site` connect `topbar.tsx` to `app/page.tsx`, `blog-post-page.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `metadata` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `topbar.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10114942528735632 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._