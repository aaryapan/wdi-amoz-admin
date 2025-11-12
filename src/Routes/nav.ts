export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

// Cleaning service navigation items
export const cleaningNavigationItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/cleaning/dashboard',
    icon: 'dashboard',
  },
  {
    id: 'assign-booking',
    label: 'Assigning Booking',
    path: '/cleaning/assign-booking',
    icon: 'calendar',
  },
  {
    id: 'employees',
    label: 'Manage Employee',
    path: '/cleaning/employees',
    icon: 'users',
  },
  {
    id: 'services',
    label: 'Service Management',
    path: '/cleaning/services',
    icon: 'settings',
  },
  {
    id: 'payments',
    label: 'Payment Management',
    path: '/cleaning/payments',
    icon: 'dollar',
  },
];

