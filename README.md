# Ahmad Alhukail - Portfolio Website

A modern, premium portfolio website showcasing my professional identity, projects, skills, and experience. Built with cutting-edge web technologies and designed with a focus on clean UI/UX, smooth animations, and visual hierarchy.

## 🌟 Live Demo

Visit the live website: [Coming Soon]

## 🚀 Features

- **Modern Design**: Premium, portfolio-grade aesthetic with strong visual hierarchy
- **Smooth Animations**: Framer Motion-powered transitions and scroll animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **AI-Driven Content**: All content derived from actual resume data
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Friendly**: Comprehensive metadata and semantic HTML
- **Dark Mode Ready**: Design system supports light and dark themes

## 📑 Sections

1. **Hero Section**: Eye-catching introduction with name, role, and tagline
2. **Projects**: Showcase of featured projects with technologies and descriptions
3. **Experience**: Professional work experience with timeline design
4. **About**: Comprehensive overview including education, skills, and certifications
5. **Contact**: Easy-to-access contact information and social links

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - Additional styling capabilities
- **Shadcn/UI** - High-quality UI components

### Animation
- **Framer Motion** - Production-ready motion library

### Icons & Design
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets

### Code Quality
- **ESLint** - Linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
ahmedxdev-protfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main homepage
│   └── globals.css          # Global styles
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   ├── badge.tsx        # Badge component
│   │   └── section-heading.tsx  # Section heading component
│   └── navigation.tsx       # Navigation bar
├── sections/
│   ├── hero.tsx             # Hero/landing section
│   ├── projects.tsx         # Projects showcase
│   ├── experience.tsx       # Work experience
│   ├── about.tsx            # About me section
│   └── contact.tsx          # Contact information
├── data/
│   └── resume.ts            # Structured resume data
├── lib/
│   └── utils.ts             # Utility functions
└── styles/                  # Additional styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmedxdev/ahmedxdev-protfolio.git
cd ahmedxdev-protfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Customization

### Update Content

All content is centralized in `data/resume.ts`. Update this file to reflect your own information:

- Personal information (name, email, location, etc.)
- Projects with descriptions and technologies
- Work experience and responsibilities
- Education and certifications
- Skills (technical and soft skills)

### Modify Styling

- **Global styles**: Edit `app/globals.css`
- **Theme colors**: Modify CSS variables in `globals.css`
- **Component styles**: Update Tailwind classes in individual components

### Add New Sections

1. Create a new component in the `sections/` directory
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/navigation.tsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

```bash
npm run build
# Deploy the .next folder and public assets to your hosting provider
```

## 📧 Contact

- **Email**: ahmad.yasarg@gmail.com
- **LinkedIn**: [Ahmad Alhukail](https://www.linkedin.com/in/ahmad-alhukail-359342283/)
- **Location**: Riyadh, Saudi Arabia

## 📄 License

This project is open source and available for personal use and modification.

## 🙏 Acknowledgments

- Shadcn for the amazing UI component library
- Vercel for Next.js and hosting platform
- Framer for the Motion animation library

---

Built with ❤️ by Ahmad Alhukail
