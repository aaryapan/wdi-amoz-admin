# Getting Started with Company Admin

This guide will help you set up and run the Company Admin booking management application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

Check your versions:
```bash
node --version  # Should be 18.x or higher
npm --version
```

## Installation Steps

### 1. Navigate to the project directory

```bash
cd "/Users/yoschanraksa/Desktop/Amoz React Files/Company Admin"
```

### 2. Install dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Redux Toolkit & RTK Query
- React Router DOM v6
- Radix UI components
- Stitches (CSS-in-JS)
- Vite (build tool)

### 3. Start the development server

```bash
npm run dev
```

The application will start at **http://localhost:5173**

### 4. Open in your browser

Navigate to [http://localhost:5173](http://localhost:5173)

You should see the **Booking Management** interface!

## Project Structure Overview

```
src/
├── app/                    # Redux store configuration
│   ├── store.ts           # Redux store setup with RTK Query
│   └── hooks.ts           # Typed useDispatch and useSelector hooks
│
├── features/              # Feature-based modules
│   └── bookings/
│       ├── api/
│       │   └── bookingsApi.ts        # RTK Query API for bookings
│       └── components/
│           ├── BookingCard.tsx       # Individual booking card
│           └── BookingDetails.tsx    # Detailed booking view
│
├── contexts/              # React Context providers
│   ├── ThemeContext.tsx   # Light/Dark theme management
│   ├── AuthContext.tsx    # Authentication state
│   └── AppContext.tsx     # Global app state (notifications, etc.)
│
├── components/            # Shared UI components
│   ├── ui/               # Radix UI wrappers with Stitches styling
│   │   ├── Button.tsx
│   │   ├── Dialog.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Tabs.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBoundary.tsx
│   └── layout/           # Layout components
│       ├── Header.tsx    # Top navigation bar
│       ├── Sidebar.tsx   # Side navigation
│       └── Layout.tsx    # Main layout wrapper
│
├── hooks/                # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useDebounce.ts
│
├── types/                # TypeScript type definitions
│   ├── api.types.ts      # API response types
│   └── common.types.ts   # Common UI types
│
├── utils/                # Utility functions
│   ├── constants.ts      # App constants
│   └── helpers.ts        # Helper functions
│
├── pages/                # Route-level page components
│   ├── BookingManagement.tsx   # Main booking page (matches Figma)
│   └── NotFound.tsx            # 404 page
│
├── Routes/               # Routing configuration
│   ├── routes.tsx        # Route definitions with lazy loading
│   └── nav.ts           # Navigation metadata
│
└── styles/               # Styling configuration
    ├── theme.ts          # Stitches theme (colors, spacing, etc.)
    └── globals.css       # Global CSS styles
```

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally for testing.

### Linting

```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Key Features Implemented

### ✅ Booking Management Dashboard
- Real-time booking list with multiple status types (Accepted, Pending, Assigned, Declined, Cancelled)
- Each status has distinct color coding matching the Figma design
- Click on any booking to view full details

### ✅ Booking Details Panel
- Customer information (name, email, phone, location)
- Booking time and date
- Document attachments (if available)
- Payment details (type and amount)
- Accept/Decline action buttons (for pending bookings)
- Status indicator (for accepted bookings)
- Three-dot menu for additional actions

### ✅ Search & Filter
- Search bookings by customer name or booking number
- Debounced search for optimal performance
- Tab navigation for Active/Previous bookings

### ✅ Responsive Layout
- Fixed sidebar navigation (312px width)
- Top header with user profile and notifications
- Scrollable booking list and details panel

### ✅ UI Components (Radix UI + Stitches)
All interactive elements use accessible Radix UI primitives:
- Button with variants (primary, secondary, outline, ghost, danger)
- Dialog modals
- Dropdown menus
- Tabs
- Loading spinners
- Error boundaries

### ✅ State Management
- **RTK Query** for all API calls with automatic caching
- **Context API** for theme, auth, and app-wide state
- **Local useState** for component-specific UI state

### ✅ Type Safety
- Strict TypeScript mode enabled
- No `any` types used
- Comprehensive type definitions for all data structures

### ✅ Code Splitting
- All route pages lazy-loaded with React.lazy
- Suspense boundaries with loading states

## Design Fidelity

The BookingManagement page has been implemented to **exactly match** the Figma design:

✅ **Colors**: All status colors (green for accepted, orange for pending, blue for assigned, red for declined/cancelled) match the design  
✅ **Typography**: Font sizes and weights match specifications  
✅ **Spacing**: Padding and margins follow the 4px/8px grid  
✅ **Layout**: Three-column layout (sidebar 312px, booking list 276px, details panel flexible)  
✅ **Icons**: All icons (time, calendar, location, email, phone, document) are SVG-based  
✅ **Interactive States**: Hover effects, active states, and focus rings  
✅ **Status Badges**: Pill-shaped badges with background colors  

## WDI Coding Standards Compliance

This project strictly follows all WDI standards:

✅ React 18 + TypeScript with strict mode  
✅ Redux Toolkit with RTK Query for all server calls  
✅ React Router DOM v6+ for routing  
✅ Context API for global UI state  
✅ Radix UI primitives wrapped in styled components  
✅ Stitches for styling (no Tailwind)  
✅ Absolute imports via `@/*`  
✅ Feature-based folder structure  
✅ One component per file  
✅ Proper separation of concerns  
✅ Loading and error states for all data fetching  
✅ TypeScript interfaces for all props  
✅ No `any` types  
✅ PascalCase for components and types  
✅ camelCase for functions and variables  
✅ UPPER_SNAKE_CASE for constants  

## Mock Data

The application currently uses mock data for development. The booking data is defined in `src/features/bookings/api/bookingsApi.ts`.

To connect to a real API:
1. Update `VITE_API_BASE_URL` in your `.env` file
2. Remove the `queryFn` mock implementation from `getBookings` endpoint
3. Implement the actual mutations for `acceptBooking` and `declineBooking`

## Next Steps

### To add more features:

1. **Previous Bookings Tab**: Filter bookings by date/status
2. **Pagination**: Add pagination to the booking list
3. **Real-time Updates**: Integrate WebSocket for live booking updates
4. **Notifications**: Implement toast notifications for actions
5. **Authentication**: Add login/logout flow
6. **Employee Management**: Create employee CRUD pages
7. **Customer Management**: Create customer CRUD pages
8. **Service Management**: Create service configuration pages

### To customize the theme:

Edit `src/styles/theme.ts` to adjust:
- Colors
- Spacing
- Typography
- Breakpoints
- Shadows
- Border radius

The app supports both light and dark themes out of the box!

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port, or you can specify a port:

```bash
npm run dev -- --port 3000
```

### Module not found errors
Make sure all dependencies are installed:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
The project uses strict TypeScript mode. If you encounter type errors, make sure:
1. All imports use the `@/*` alias correctly
2. All function parameters and return types are properly typed
3. No `any` types are used

## Support

For questions or issues, please refer to:
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Stitches Documentation](https://stitches.dev/)

---

**Happy coding! 🚀**

