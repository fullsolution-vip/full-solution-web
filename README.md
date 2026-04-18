# Full Solution Website

A modern B2B beauty and fashion website built with Next.js and Tailwind CSS.

## Current Status

- `frontend/` is the primary application with the Next.js app and API routes.
- The site now uses the trimmed logo asset in `frontend/public/logo.png`.
- Branding is updated so the logo image and "Full Solution" title are separate.
- Contact information is current and uses Robbie Setton’s details.

## Project Structure

- `frontend/` - Next.js React application with Tailwind CSS and API routes
- `specs/` - Project specifications and documentation
- `data/` - Original data files and branding assets
- `.env.dev` - Development environment variables
- `.env.prod` - Production environment variables

## Technology Stack

- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes (serverless functions)
- **Database/Auth**: Supabase (planned integration)
- **Hosting**: Vercel (primary), GitHub Pages (fallback)

## Branding and Contact Updates

- Logo file: `frontend/public/logo.png`
- Navbar now separates the logo and the `Full Solution` text
- Contact page and footer use:
  - Robbie Setton
  - `robbie@fullsolution.vip`
  - `068 707 4080`

## Quick Start

### Prerequisites

- Node.js 18+
- Supabase account (optional)

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp ../.env.dev .env.local
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Set the following in `.env.dev` and `.env.prod` as needed:

### Supabase
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Email
- `EMAIL_SERVICE_PROVIDER`
- `EMAIL_FROM_ADDRESS`
- `EMAIL_TO_ADDRESS`
- `EMAIL_API_KEY`

## Deployment

### Vercel (Frontend)
1. Connect the GitHub repo to Vercel.
2. Set production environment variables in Vercel.
3. Deploy automatically on push.

### GitHub Pages (Static Fallback)

#### GitHub Variables Setup
No GitHub variables are currently required for the basic GitHub Pages deployment. The GitHub Actions workflow (`/.github/workflows/deploy.yml`) handles the build and deployment automatically.

However, if you add features that require external services (like email sending, analytics, or API integrations), you may need to add the following as GitHub repository secrets:

- **Repository Secrets** (Settings → Secrets and variables → Actions):
  - `SUPABASE_URL` - For Supabase integration
  - `SUPABASE_ANON_KEY` - For Supabase client-side operations
  - `EMAIL_API_KEY` - For email service integration
  - `VERCEL_TOKEN` - If deploying to Vercel from GitHub Actions

#### Deployment Steps
1. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "GitHub Actions" as the source
2. Push to main branch to trigger automatic deployment
3. Site will be available at: `https://fullsolution-vip.github.io/full-solution-web/`

#### Manual Deployment (Alternative)
```bash
cd frontend
npm run build
npx gh-pages -d out
```

## Notes

- Keep this README updated whenever branding, contacts, or deployment details change.
- The `specs/` folder contains the latest project requirements and company profile documentation.
- The current frontend app uses modern animations and consistent site-wide background styling.
