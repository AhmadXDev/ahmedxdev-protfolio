# Quick Reference Card 📋

## Essential Commands

```bash
npm run dev              # Start development server (http://localhost:3000)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Check code quality
npm run format           # Auto-format all files
npm run format:check     # Check formatting without changes
```

## Add Components

```bash
npx shadcn@latest add button       # Add button component
npx shadcn@latest add card         # Add card component
npx shadcn@latest add dialog       # Add dialog component
npx shadcn@latest add               # See all available components
```

## Common Imports

```tsx
// Layout & Pages
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Animations
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

// Icons
import { Heart, Star, Menu } from "lucide-react"; // Lucide
import { FaGithub } from "react-icons/fa"; // React Icons

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Utilities
import { cn } from "@/lib/utils";
```

## Code Snippets

### Client Component with Animation

```tsx
"use client";

import { motion } from "framer-motion";

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      Content
    </motion.div>
  );
}
```

### Scroll Animation

```tsx
import { FadeIn } from "@/components/fade-in";

<FadeIn direction="up" delay={0.2}>
  <h1>Animated Heading</h1>
</FadeIn>;
```

### Staggered List

```tsx
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

<StaggerContainer>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>;
```

### Conditional Classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class", variant === "large" && "large-class")}>
  Content
</div>;
```

### Button with Variants

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
```

## File Locations

| What          | Where                  |
| ------------- | ---------------------- |
| Pages         | `app/[route]/page.tsx` |
| Layout        | `app/layout.tsx`       |
| Global Styles | `app/globals.css`      |
| Components    | `components/`          |
| UI Components | `components/ui/`       |
| Custom Hooks  | `hooks/`               |
| Utils         | `lib/utils.ts`         |
| SCSS          | `styles/`              |
| Static Files  | `public/`              |

## Key Concepts

### Client vs Server Components

- **Server** (default): Use for static content, data fetching
- **Client** (`"use client"`): Use for interactivity, hooks, animations

### Path Aliases

- `@/` → Project root
- `@/components` → Components folder
- `@/lib` → Utilities folder
- `@/hooks` → Custom hooks folder

### Tailwind Classes

```tsx
// Layout
flex items-center justify-between gap-4

// Sizing
w-full h-screen max-w-4xl

// Spacing
p-4 px-6 py-8 m-4 mx-auto

// Colors
bg-primary text-white border-border

// Effects
shadow-lg rounded-lg hover:shadow-xl

// Responsive
sm:text-lg md:flex-row lg:grid-cols-3
```

## Framer Motion Basics

### Simple Animation

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Hover/Tap

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Scroll Trigger

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

## Common Tasks

### Add New Page

1. Create `app/about/page.tsx`
2. Export default function
3. Navigate to `/about`

### Add Navigation

```tsx
import Link from "next/link";

<nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
</nav>;
```

### Use Images

```tsx
import Image from "next/image";

<Image src="/logo.png" alt="Logo" width={200} height={100} priority />;
```

### Environment Variables

1. Copy `env.example` to `.env.local`
2. Add your variables
3. Use `process.env.NEXT_PUBLIC_VAR_NAME`

## Documentation Files

- `README.md` - Main documentation
- `SETUP.md` - Getting started guide
- `COMPONENTS.md` - Component reference
- `PROJECT_SUMMARY.md` - Complete overview
- `QUICK_REFERENCE.md` - This file

## Helpful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Troubleshooting

### Port in use

```bash
npm run dev -- -p 3001
```

### Clear cache

```bash
rm -rf .next node_modules
npm install
```

### TypeScript errors

- Restart editor/IDE
- Check `tsconfig.json`
- Run `npm run build` to see all errors

---

**Keep this handy for quick lookups!** 📌
