# Profit.io 🚀

A highly interactive and visually polished UI/UX web application built with Next.js 15 and React 19.

## ✨ Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for full type safety
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations and transitions
- **Shadcn/UI** for accessible, modern UI components
- **SCSS & CSS Modules** for custom styling flexibility
- **Lucide React & React Icons** for comprehensive iconography
- **ESLint & Prettier** configured for code quality
- **Vercel-ready** deployment configuration

## 🛠️ Tech Stack

| Technology    | Version   | Purpose                         |
| ------------- | --------- | ------------------------------- |
| Next.js       | 16.0.1    | React framework with App Router |
| React         | 19.2.0    | UI library                      |
| TypeScript    | ^5        | Type safety                     |
| Tailwind CSS  | ^4        | Utility-first CSS               |
| Framer Motion | ^12.23.24 | Animations                      |
| Shadcn/UI     | Latest    | Component library               |
| Lucide React  | ^0.553.0  | Icon library                    |
| React Icons   | ^5.5.0    | Additional icons                |
| SASS          | ^1.93.3   | SCSS support                    |

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## 🎨 Project Structure

```
profit-io/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with page transitions
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles with Tailwind
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/UI components
│   ├── page-transition.tsx  # Page transition wrapper
│   ├── fade-in.tsx          # Fade-in animation component
│   └── stagger-container.tsx # Stagger animation container
├── hooks/                   # Custom React hooks
│   └── use-scroll-progress.ts # Scroll animation hooks
├── lib/                     # Utility functions
│   └── utils.ts            # Class utilities (cn helper)
├── styles/                  # SCSS files
│   ├── example.module.scss # CSS Module example
│   └── globals.scss        # Global SCSS styles
└── public/                 # Static assets

```

## 🎭 Animation Components

### PageTransition

Wraps pages with smooth enter/exit animations:

```tsx
import { PageTransition } from "@/components/page-transition";

<PageTransition>{children}</PageTransition>;
```

### FadeIn

Animates elements as they enter the viewport:

```tsx
import { FadeIn } from "@/components/fade-in";

<FadeIn delay={0.2} direction="up">
  <h1>Animated Heading</h1>
</FadeIn>;
```

### StaggerContainer

Creates staggered animations for lists:

```tsx
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>;
```

## 🎨 Styling Approaches

This project supports multiple styling methods:

### 1. Tailwind CSS (Primary)

```tsx
<div className="bg-primary flex items-center gap-4 rounded-lg p-4">Content</div>
```

### 2. CSS Modules with SCSS

```tsx
import styles from "@/styles/example.module.scss";

<div className={styles.container}>
  <div className={styles.card}>Content</div>
</div>;
```

### 3. Class Variance Authority

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-black",
    },
  },
});
```

### 4. CN Helper (Tailwind Merge + clsx)

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")}>Content</div>;
```

## 🧩 Adding Shadcn/UI Components

```bash
# Add a specific component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog

# Browse available components
npx shadcn@latest
```

## 🎯 Custom Hooks

### useScrollProgress

Track scroll progress with smooth spring animation:

```tsx
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const { scrollYProgress, smoothProgress } = useScrollProgress();
```

### useParallax

Create parallax scroll effects:

```tsx
import { useParallax } from "@/hooks/use-scroll-progress";

const y = useParallax(ref, 100);
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Environment Variables

Copy `env.example` to `.env.local` and fill in your values:

```bash
cp env.example .env.local
```

## 🎨 Customization

### Colors & Theme

Edit `app/globals.css` to customize your color scheme. The project uses CSS variables with oklch color space for better color manipulation.

### Fonts

Fonts are configured in `app/layout.tsx`. The project uses:

- **Geist Sans** for body text
- **Geist Mono** for code

### Animation Settings

Adjust animation settings in component files or create your own variants.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

This is a starter template. Feel free to customize it for your needs!

## 📝 License

MIT License - feel free to use this template for your projects.

---

Built with ❤️ using the latest web technologies.
