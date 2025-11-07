# Quick Start Guide 🎯

This guide will help you get started with Profit.io in minutes.

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Basic knowledge of React and TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Start Building

The main page is located at `app/page.tsx`. Start editing to see live changes!

## Key Concepts

### Page Transitions

Page transitions are automatically applied via the `PageTransition` component in `app/layout.tsx`. All pages will have smooth enter/exit animations.

### Adding Components

#### Using Shadcn/UI

```bash
# Install a component
npx shadcn@latest add button

# Use it in your code
import { Button } from "@/components/ui/button";
```

#### Creating Custom Components

```tsx
// components/my-component.tsx
"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

export function MyComponent() {
  return (
    <FadeIn>
      <motion.div whileHover={{ scale: 1.05 }}>
        <h2>My Animated Component</h2>
      </motion.div>
    </FadeIn>
  );
}
```

### Styling Options

#### 1. Tailwind (Most Common)

```tsx
<div className="bg-primary flex items-center gap-4 rounded-lg p-4">Content</div>
```

#### 2. CSS Modules

```tsx
// Create: components/my-component.module.scss
.container {
  display: flex;
  gap: 1rem;
}

// Use:
import styles from "./my-component.module.scss";
<div className={styles.container}>Content</div>
```

#### 3. Combining Classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")}>Content</div>;
```

### Adding Icons

```tsx
// Lucide React (Recommended)
import { Heart, Star, Menu } from "lucide-react";

<Heart className="h-6 w-6" />;

// React Icons
import { FaGithub, FaTwitter } from "react-icons/fa";

<FaGithub className="h-6 w-6" />;
```

### Animations

#### Simple Hover Effect

```tsx
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Click me
</motion.div>
```

#### Scroll Animations

```tsx
<FadeIn direction="up" delay={0.2}>
  <h1>Animates on scroll</h1>
</FadeIn>
```

#### Staggered Lists

```tsx
<StaggerContainer>
  {items.map((item) => (
    <StaggerItem key={item.id}>{item.content}</StaggerItem>
  ))}
</StaggerContainer>
```

## File Structure Explained

```
app/
├── layout.tsx         → Root layout (add global providers here)
├── page.tsx           → Homepage
├── globals.css        → Tailwind + CSS variables
└── [route]/
    └── page.tsx       → Route pages

components/
├── ui/                → Shadcn/UI components
└── [custom]/          → Your custom components

hooks/
└── [custom-hooks]/    → Reusable hooks

lib/
└── utils.ts           → Utility functions

styles/
└── [scss-files]/      → SCSS stylesheets
```

## Development Tips

### 1. Use TypeScript

Always add proper types for props:

```tsx
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return <button onClick={onClick}>{title}</button>;
}
```

### 2. Client vs Server Components

- Use `"use client"` for components that need interactivity or hooks
- Server components (default) are better for static content

```tsx
"use client"; // Add this for interactive components

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 3. Format Your Code

```bash
# Auto-format all files
npm run format

# Check formatting without changes
npm run format:check
```

### 4. Run Linter

```bash
npm run lint
```

## Common Tasks

### Adding a New Page

1. Create `app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
}
```

2. Navigate to `/about` - page transitions work automatically!

### Adding a Navigation Menu

```tsx
// components/navigation.tsx
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

### Using Forms

```bash
# Install form library (optional)
npm install react-hook-form zod @hookform/resolvers
```

### Adding Dark Mode

Shadcn/UI includes dark mode support. Add a theme provider:

```bash
npx shadcn@latest add theme-provider
```

## Performance Tips

1. **Use `next/image`** for images (automatic optimization)
2. **Lazy load components** with `next/dynamic`
3. **Memoize expensive computations** with `useMemo`
4. **Avoid unnecessary re-renders** with `React.memo`

## Troubleshooting

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors

```bash
# Check tsconfig.json paths
# Restart your IDE/editor
```

## Next Steps

- [ ] Customize colors in `app/globals.css`
- [ ] Add more Shadcn/UI components
- [ ] Create your first animated component
- [ ] Build your navigation system
- [ ] Deploy to Vercel

## Resources

- [Project README](./README.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Tailwind UI Components](https://tailwindui.com/)

Happy coding! 🚀
