# Deployment Guide 🚀

## Vercel Deployment (Recommended)

Vercel is the platform built by the creators of Next.js and offers the best integration.

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Profit.io setup"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Done!**
   - Your site will be live at `<project-name>.vercel.app`
   - Every push to `main` will trigger a new deployment
   - Pull requests get preview deployments

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

### For Local Development

1. Copy the example file:
   ```bash
   cp env.example .env.local
   ```

2. Fill in your values in `.env.local`

### For Vercel

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables:
   ```
   NEXT_PUBLIC_APP_NAME=Profit.io
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

## Custom Domain

### On Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Vercel will automatically generate SSL certificates

## Build Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` locally - ensure it succeeds
- [ ] Run `npm run lint` - fix any errors
- [ ] Test all pages and features
- [ ] Update metadata in `app/layout.tsx`
- [ ] Update README.md with your project info
- [ ] Add environment variables to Vercel
- [ ] Configure custom domain (if applicable)

## Other Deployment Options

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

2. **Deploy**
   - Connect your GitHub repo
   - Configure build settings
   - Deploy

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t profit-io .
docker run -p 3000:3000 profit-io
```

### Self-Hosted (Node.js)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "profit-io" -- start
   pm2 save
   pm2 startup
   ```

## Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Use `next/image` for all images
   - Provide proper width/height
   - Use WebP format when possible

2. **Code Splitting**
   - Use dynamic imports for large components
   ```tsx
   const HeavyComponent = dynamic(() => import('./HeavyComponent'))
   ```

3. **Analyze Bundle**
   ```bash
   npm install -D @next/bundle-analyzer
   ```
   
   Add to `next.config.ts`:
   ```typescript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer(config)
   ```
   
   Run:
   ```bash
   ANALYZE=true npm run build
   ```

## Monitoring & Analytics

### Vercel Analytics

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Install:
```bash
npm install @vercel/analytics
```

### Google Analytics

1. Add tracking code to `app/layout.tsx`
2. Use `next/script` for proper loading

## Security Checklist

- [ ] Never commit `.env.local` (it's in .gitignore)
- [ ] Use environment variables for sensitive data
- [ ] Enable security headers in `next.config.ts`
- [ ] Keep dependencies updated
- [ ] Use HTTPS (automatic on Vercel)
- [ ] Implement Content Security Policy (CSP)

## Troubleshooting Deployment

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check Vercel dashboard for correct values

### Images Not Loading

- Ensure images are in `public/` folder
- Use `next/image` component
- Configure `next.config.ts` for external images

### CSS Not Loading

- Check Tailwind configuration
- Ensure `globals.css` is imported
- Clear browser cache

## Post-Deployment

1. **Test Your Site**
   - Visit all pages
   - Test on mobile devices
   - Check console for errors

2. **Monitor Performance**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Monitor error rates

3. **Set Up Continuous Deployment**
   - Push to `main` for production
   - Use branches for staging
   - Enable preview deployments

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Select "Deployments"
3. Find a working deployment
4. Click "Promote to Production"

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

---

**Your project is ready for deployment!** 🎉

Follow this guide to get your Profit.io app live on the web.

