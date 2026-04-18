# Full Solution Website Specification

## Project Overview
Full Solution is a modern B2B beauty, fashion, and skincare company building a public-facing website at `fullsolution.vip` and an internal experience for business users and staff. The site is designed to showcase the brand, support inbound business lead capture, and provide authenticated users with profile, notification, and communication capabilities.

This project will be built using a spec-driven approach with a dedicated `specs/` folder for requirements, design guidance, AI image prompts, and email workflow documentation.

## Goals
- Launch a fast, visually striking marketing website for Full Solution.
- Support B2B business discovery and lead generation rather than direct public e-commerce.
- Provide public users the ability to register, create profiles, browse products, and communicate with staff.
- Enable internal teams to manage products, notifications, and customer inquiries.
- Keep deployment simple and modern: Vercel for frontend, GitHub Pages as a static fallback.
- Build with modern design and QA principles for performance, accessibility, and premium brand identity.

## Brand & Positioning
- Company name: **Full Solution**
- Domain: `fullsolution.vip`
- Business type: **business-to-business** beauty and fashion product showcase
- Primary audience: business buyers, distributors, retail partners, internal staff, and brand stakeholders
- Style direction: modern luxury, dark mode-first, high quality visuals, editorial beauty aesthetic, premium product storytelling

## Technology Stack
### Recommended Primary Stack
- Frontend: **Next.js (React)**
- Styling/UI: **Tailwind CSS** for responsive, mobile-first layout and rapid modern design
- Auth & database: **Supabase** for authentication, user profiles, notifications, and product data
- Hosting: **Vercel** as the primary deployment platform
- Backend: **Next.js API routes** for serverless functions, role management, and database operations

### Alternative Options
- Frontend alternative: **SvelteKit** if a leaner, highly performant framework is desired
- Styling alternative: CSS Modules, modern CSS-in-JS, or a design system can be used if Tailwind needs to be extended
- Hosting fallback: **GitHub Pages** for static rendering if dynamic Vercel features are not required

## Architecture & Deployment
- Primary structure: frontend-first mono-repo with Next.js API routes and a `specs/` folder for documentation
- Supabase handles user authentication and database storage for profiles, role metadata, product catalogs, and notifications
- `.env` stores environment-specific secrets and email configuration for local dev and production
- Local development environment uses `.env.local`; production uses platform secrets and managed Supabase credentials
- Next.js API routes handle role-based authorization, product administration, email sending, and database operations
- The site should be statically optimized where possible and server-side rendered for SEO-critical pages

## Key Features
### Public Marketing Experience
- Homepage with hero section, brand story, product highlights, value proposition, and bold visual identity
- About / Vision section describing the Full Solution mission and business offering
- Product showcase section for product families, not direct sales
- Contact page with functional inquiry form and business lead capture workflow
- Public login/register access to user profile and notifications

### Authenticated Public Experience
- User sign-up and login via Supabase
- Public profiles for registered users to view saved business interests and notifications
- Notification center for messages or alerts from staff
- Business users can browse products and request follow-up support

### Internal Staff Experience
- Role-aware access control for staff vs public users
- Staff dashboard for product management, communication, and lead tracking (future scope)
- Admin controls for user role assignment and internal notifications

### Communication & Lead Capture
- Contact form that routes inquiries into business email and optionally into Supabase or backend ticketing
- Message flow from public inquiry through internal response and notification generation
- Email template guidance stored in `specs/email-templates.md`

## User Roles
- **Visitor**: public user browsing marketing pages
- **Business User**: logged-in company representative who can view product details, save interests, and request contact
- **Internal Staff**: authenticated staff member with access to product and lead management features
- **Administrator**: manages configuration, user roles, and data access

## UX & Design Principles
- **Modern & premium**: dark, elegant, editorial beauty styling with premium UI textures and subtle motion
- **Fast & responsive**: mobile-first layout, minimal payloads, optimized media, and instant interactions
- **Accessible**: keyboard navigation, color contrast, semantic HTML, and screen reader support
- **Modular design**: use a Bento Box-style layout for adaptable sections and repeatable UI patterns
- **High-quality visuals**: large product imagery, high-resolution backgrounds, and polished interface details
- **Micro-interactions**: subtle animated transitions, hover states, and motion that feel refined

## Modern Web Design Guidelines
- Prioritize **Tailwind CSS** for speed and consistent responsive styling
- Prefer **Next.js** for SEO-friendly pages, static/exported pages, and Vercel hosting compatibility
- Build with **dark mode** support as a first-class experience
- Keep page content lean, only load dynamic scripts where needed, and optimize images using modern formats
- Use **clean typography**, generous spacing, and a calm editorial color palette
- Support **AI-ready** content blocks for future personalization and skin/beauty recommendations

## Data & Environment Configuration
### Supabase Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (for backend-only usage)

### Email & Mailbox Variables
- `EMAIL_SERVICE_PROVIDER` (SMTP, SendGrid, Mailgun, etc.)
- `EMAIL_FROM_ADDRESS`
- `EMAIL_TO_ADDRESS`
- `EMAIL_API_KEY`
- `EMAIL_SMTP_HOST`
- `EMAIL_SMTP_PORT`
- `EMAIL_SMTP_USER`
- `EMAIL_SMTP_PASSWORD`

### Local vs Production
- Local env should use `.env.local` for development values
- Production should use Vercel environment variables or a secure deployment secret store
- Ensure secrets are never committed to source control

## Image Storage Strategy
### Static Assets (Marketing Images, UI Graphics)
- **Location**: `frontend/public/images/` folder
- **Why**: Fastest loading with Next.js optimization and Vercel CDN
- **Usage**: Hero images, product showcases, brand assets
- **Format**: WebP/AVIF for performance, fallback to JPEG/PNG

### Dynamic/User-Generated Content
- **Location**: Supabase Storage
- **Why**: Scalable, secure, integrated with auth
- **Usage**: User profile images, uploaded content, dynamic assets
- **Access**: Via Supabase client with proper permissions

### Development Workflow
- Use placeholder images from Unsplash/Pexels during development
- Replace with AI-generated images once design is finalized
- Store final images in `public/images/` for optimal performance

## Implementation Notes
- Begin with a **frontend-first** implementation using Next.js and Supabase authentication
- Keep the repo structure flexible for a future `backend/` Python Flask API if role management and migrations are required
- Use `specs/` as the canonical collection of requirements, prompt strategy, and email workflow documents
- Store all design and implementation decisions here so AI models and team members can reference them consistently

## References
- `AEON Company Profile.pdf` (previous company profile and brand legacy)
- `https://aeon-beauty.com/` (design reference and modern brand inspiration)
- Modern web design trends: dark minimalist UI, B2B beauty storytelling, hyper-personalization, immersive digital experiences

---

> This document is the primary project specification and should be updated as requirements evolve.
