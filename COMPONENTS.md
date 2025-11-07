# Component Library Reference 📚

Complete reference for all custom components and utilities in Profit.io.

## Animation Components

### PageTransition

Provides smooth page transitions using Framer Motion.

**Location:** `components/page-transition.tsx`

**Usage:**

```tsx
import { PageTransition } from "@/components/page-transition";

<PageTransition>{children}</PageTransition>;
```

**Props:** None (automatically uses pathname)

**Features:**

- Fade in/out transitions
- Smooth vertical slide
- Automatic page detection

---

### FadeIn

Animates elements as they enter the viewport with fade and directional slide.

**Location:** `components/fade-in.tsx`

**Usage:**

```tsx
import { FadeIn } from "@/components/fade-in";

<FadeIn delay={0.2} duration={0.5} direction="up">
  <h1>Animated Content</h1>
</FadeIn>;
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to animate |
| `className` | string | undefined | Additional CSS classes |
| `delay` | number | 0 | Delay before animation starts (seconds) |
| `duration` | number | 0.5 | Animation duration (seconds) |
| `direction` | "up" \| "down" \| "left" \| "right" | "up" | Slide direction |

**Example:**

```tsx
<FadeIn direction="right" delay={0.3}>
  <p>This slides in from the right</p>
</FadeIn>
```

---

### StaggerContainer & StaggerItem

Creates staggered animations for lists and groups of elements.

**Location:** `components/stagger-container.tsx`

**Usage:**

```tsx
import { StaggerContainer, StaggerItem } from "@/components/stagger-container";

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>;
```

**StaggerContainer Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | StaggerItem components |
| `className` | string | undefined | Additional CSS classes |
| `staggerDelay` | number | 0.1 | Delay between each item (seconds) |

**StaggerItem Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to animate |
| `className` | string | undefined | Additional CSS classes |

**Example:**

```tsx
<StaggerContainer staggerDelay={0.15}>
  <StaggerItem>
    <div>Item 1</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 2</div>
  </StaggerItem>
  <StaggerItem>
    <div>Item 3</div>
  </StaggerItem>
</StaggerContainer>
```

---

## Custom Hooks

### useScrollProgress

Tracks scroll progress with smooth spring animation.

**Location:** `hooks/use-scroll-progress.ts`

**Usage:**

```tsx
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { motion } from "framer-motion";

function MyComponent() {
  const { scrollYProgress, smoothProgress } = useScrollProgress();

  return <motion.div style={{ opacity: smoothProgress }}>Content fades based on scroll</motion.div>;
}
```

**Returns:**

```typescript
{
  scrollYProgress: MotionValue<number>; // Raw scroll progress (0-1)
  smoothProgress: MotionValue<number>; // Spring-animated progress (0-1)
}
```

**Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `ref` | RefObject<HTMLElement> | undefined | Target element (undefined = viewport) |

---

### useParallax

Creates parallax scroll effects.

**Location:** `hooks/use-scroll-progress.ts`

**Usage:**

```tsx
import { useParallax } from "@/hooks/use-scroll-progress";
import { motion } from "framer-motion";
import { useRef } from "react";

function ParallaxSection() {
  const ref = useRef(null);
  const y = useParallax(ref, 100);

  return (
    <div ref={ref}>
      <motion.div style={{ y }}>Moves with parallax effect</motion.div>
    </div>
  );
}
```

**Returns:** `MotionValue<number>` - Y-axis transform value

**Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `ref` | RefObject<HTMLElement> | undefined | Target element |
| `distance` | number | 100 | Parallax distance in pixels |

---

## Utility Functions

### cn (Class Name Helper)

Combines class names with Tailwind merge support.

**Location:** `lib/utils.ts`

**Usage:**

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class", "text-lg font-bold")}>Content</div>;
```

**Why use it?**

- Merges Tailwind classes intelligently (no conflicts)
- Handles conditional classes
- Combines multiple class sources

**Examples:**

```tsx
// Conditional classes
cn("px-4 py-2", isLarge && "px-6 py-3");

// Merging conflicting classes (last wins)
cn("bg-red-500", "bg-blue-500"); // → "bg-blue-500"

// With arrays and objects
cn(["base", "classes"], { active: isActive });
```

---

## Shadcn/UI Components

### Button

Pre-built button component with variants.

**Location:** `components/ui/button.tsx`

**Usage:**

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large Button</Button>
```

**Variants:**

- `default` - Primary button style
- `destructive` - Danger/delete actions
- `outline` - Outlined button
- `secondary` - Secondary style
- `ghost` - Minimal style
- `link` - Link style

**Sizes:**

- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `icon` - Square icon button

---

### Card

Container component with consistent styling.

**Location:** `components/ui/card.tsx`

**Usage:**

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

---

## Styling Utilities

### CSS Modules (SCSS)

**Example Location:** `styles/example.module.scss`

**Usage:**

```tsx
import styles from "@/styles/example.module.scss";

<div className={styles.container}>
  <div className={styles.card}>Content</div>
</div>;
```

**Features:**

- SCSS syntax (variables, mixins, nesting)
- Scoped to component
- Works with TypeScript

---

## Animation Patterns

### Hover Effects

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Interactive element
</motion.div>
```

### Scroll-triggered Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Appears on scroll
</motion.div>
```

### Loading Spinner

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
>
  <Loader2 className="h-6 w-6" />
</motion.div>
```

### Slide-in Menu

```tsx
<motion.div
  initial={{ x: -300 }}
  animate={{ x: 0 }}
  exit={{ x: -300 }}
  transition={{ type: "spring", damping: 20 }}
>
  Navigation Menu
</motion.div>
```

---

## Best Practices

1. **Use `"use client"` directive** for components with Framer Motion
2. **Memoize heavy animations** with `useMemo` or `React.memo`
3. **Limit simultaneous animations** to avoid performance issues
4. **Use `viewport={{ once: true }}`** for scroll animations (prevents re-triggering)
5. **Combine animations** with the `variants` API for complex sequences
6. **Test on mobile devices** - animations should be smooth on all devices

---

## Adding More Components

```bash
# Browse available Shadcn/UI components
npx shadcn@latest

# Add specific components
npx shadcn@latest add dialog dropdown-menu tabs
```

---

## Custom Component Template

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MyComponentProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "fancy";
}

export function MyComponent({ children, className, variant = "default" }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("base-styles", variant === "fancy" && "fancy-styles", className)}
    >
      {children}
    </motion.div>
  );
}
```

---

For more examples, see the homepage (`app/page.tsx`) which demonstrates all these components in action.
