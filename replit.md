# Design Agency Portfolio Website

## Project Overview
A modern design agency portfolio website migrated from Figma to Replit. Features a dark-themed interface showcasing services, portfolio projects, team information, and contact details.

## Architecture
- **Frontend**: React with Vite, TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Storage**: In-memory storage (MemStorage) for development
- **Styling**: Tailwind CSS with custom CSS variables from Figma design system

## Key Features
- Responsive design agency homepage
- Service showcase with color-coded categories
- Portfolio project grid
- Team member profiles
- Contact section with consultation CTA
- Dark theme with custom color palette
- Figma asset integration

## Tech Stack
- React 18.3.1
- Express 4.21.2
- TypeScript 5.6.3
- Tailwind CSS 3.4.17
- Drizzle ORM 0.39.1
- shadcn/ui components
- Lucide React icons

## File Structure
```
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Homepage.tsx
│   │   │   ├── sections/
│   │   │   │   ├── HeaderSection.tsx
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   ├── TeamSection.tsx
│   │   │   │   └── FooterSection.tsx
│   │   ├── components/ui/
│   │   ├── lib/
│   │   └── index.css
│   └── public/
│       └── figmaAssets/
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
└── shared/
    └── schema.ts
```

## Design System
The project uses a comprehensive design system with custom CSS variables:
- Color palette: Black variants (100-900), blues, and accent colors
- Typography: Display, heading, and text styles with Inter font
- Component spacing and sizing based on Figma specifications

## Development
- Run `npm run dev` to start the development server
- Server runs on port 5000 (both API and frontend)
- Hot reload enabled for development

## Migration Status
✅ Successfully migrated from Figma to Replit environment
✅ All dependencies installed and configured
✅ Secure architecture with client/server separation
✅ Figma assets properly integrated
✅ Workflow running without errors

## Recent Changes
- **2025-08-05**: Initial migration from Figma completed
- Project structure established with proper security practices
- All design assets transferred to `/figmaAssets/` directory
- Custom CSS variables implemented from Figma design system

## User Preferences
- Clean, modern design following Figma specifications
- Responsive layout for all screen sizes
- Dark theme with professional appearance