# SAPPCON GmbH - SAP Consulting Website

## Overview

This is a modern, single-page React website for SAPPCON GmbH, a professional SAP consulting firm based in Heilbronn, Germany. The application showcases the company's expertise in SAP S/4HANA, BW/4HANA, and Analytics through an animated, responsive design with smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: TailwindCSS with custom SAPPCON brand colors (primary: #1D4ED8, accent: #60A5FA)
- **Component Library**: ShadCN/UI providing consistent, accessible components
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Font**: Inter from Google Fonts for professional typography

### Backend Architecture
- **Runtime**: Node.js with Express.js for API endpoints
- **Language**: TypeScript throughout the entire stack
- **Storage**: In-memory storage for contact form submissions (development/demo setup)
- **Validation**: Zod for runtime data validation on both client and server

### Key Components

#### Navigation & Layout
- Sticky navigation bar with scroll-spy functionality
- Smooth-scroll anchor links to page sections
- Mobile-responsive hamburger menu
- Scroll-to-top button (appears after 500px scroll)

#### Page Sections
1. **Hero Section**: Full-screen animated gradient background with call-to-action
2. **Services ("What We Do")**: Three animated cards showcasing SAP expertise
3. **Industries**: Icon grid displaying target industries
4. **Projects**: Success stories with client case studies
5. **Team & Culture**: Company leadership profiles
6. **Contact**: Interactive form with validation and backend integration

#### Form Handling
- React Hook Form for client-side form management
- Real-time validation with error messaging
- Backend API integration for form submission
- Toast notifications for user feedback

## Data Flow

### Contact Form Submission
1. User fills out contact form (name, company, email, message)
2. Client-side validation using React Hook Form + Zod schemas
3. Form data sent to `/api/contact` endpoint via TanStack Query mutation
4. Server validates data using shared Zod schemas
5. Data stored in memory storage (in production, would use database)
6. Success/error response sent back to client
7. User receives toast notification with submission status

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact-submissions` - Retrieve all submissions (admin)

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: API state management and caching
- **framer-motion**: Animation library for smooth transitions
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod
- **lucide-react**: Icon library for consistent iconography

### Database & ORM
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Schema validation integration
- Database configuration ready for PostgreSQL deployment

### UI Components
- Complete ShadCN/UI component library
- Radix UI primitives for accessibility
- TailwindCSS for utility-first styling

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Replit integration with development banner
- TypeScript compilation and type checking
- Express server for API endpoints

### Production Build
- Vite production build with code splitting and optimization
- esbuild for server-side bundling
- Static assets served from `/dist/public`
- Environment variable configuration for database connection

### Database Setup
- Drizzle migrations in `/migrations` directory
- Database schema defined in `/shared/schema.ts`
- Configuration supports PostgreSQL via `DATABASE_URL` environment variable
- Development uses in-memory storage, production ready for database integration

### File Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express API
├── shared/          # Shared schemas and types
├── migrations/      # Database migration files
└── attached_assets/ # Static assets and content
```

The application follows a monorepo structure with clear separation between frontend, backend, and shared code, enabling efficient development and deployment workflows.