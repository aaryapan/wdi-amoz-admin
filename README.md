# WDI AMOZ Admin Dashboard

Production-ready React 18 + TypeScript admin dashboard for AMOZit multi-service platform.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Redux Toolkit** with RTK Query for state management
- **React Router DOM v6+** for routing
- **Stitches** for styling
- **Radix UI** for accessible UI primitives
- **Vite** for build tooling

## 🎯 Features

### Multi-Service Admin Dashboards
- **Cleaning Service** - Booking management, employee management, service tracking
- **Plumbing Service** - Service requests, technician management
- **Electrical Service** - Job assignments, electrician tracking
- **Personal Driving Instructor** - Student bookings, instructor management, car details
- **Gas Cylinder Booking** - Cylinder tracking, delivery management
- **Turf Bookings** - Court management, booking calendar, add-ons
- **Rent a Vehicle** - Vehicle fleet management, rental tracking, customer bookings

### Core Functionality
- 📱 Responsive dashboard layouts
- 🔐 Authentication & authorization
- 📊 Real-time data with RTK Query
- 🎨 Theme system with dark mode support
- 📅 Calendar views and booking management
- 💬 Chat interfaces
- 📄 Document uploads
- ⭐ Ratings and feedback
- 💰 Payment tracking
- 📧 Notification system

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── layout/      # Header, Sidebar, Layout wrappers
│   ├── modals/      # Modal components
│   └── ui/          # Radix UI wrapped components
├── features/        # Feature-based modules
├── pages/           # Page components by service
│   ├── cleaning/
│   ├── plumbing/
│   ├── electrical/
│   ├── driving/
│   ├── gas/
│   ├── turf/
│   └── vehicle/
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── Routes/          # Route configurations
├── styles/          # Global styles and theme
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🛠️ Setup & Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Coding Standards (WDI)

- **PascalCase** for components and types
- **camelCase** for utilities, variables, and functions
- **UPPER_SNAKE_CASE** for constants
- One component per file
- Functional components with typed props
- Strict TypeScript configuration
- Absolute imports using `@/` prefix

## 🎨 Design System

- Primary Color: `#64C2C8` (Teal)
- Background: `#f5f6f7`
- Text: `#1d1d1d`
- Border Radius: `8px` (small), `12px` (medium), `16px` (large)
- Font: Figtree

## 🔑 Key Components

### Service-Specific Dashboards
Each service has its own complete admin interface including:
- Dashboard with key metrics
- Booking/Request management
- Staff/Employee management
- Payment tracking
- Profile management
- Notification system

### Onboarding Flow
- Splash screen with auto-navigation
- Service selection
- Login/Registration
- Approval waiting screen

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_url_here
```

## 📄 License

Proprietary - All rights reserved

## 👥 Development Team

WDI Standards Compliant Project

---

Built with ❤️ for AMOZit
