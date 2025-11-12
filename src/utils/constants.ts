export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const ROUTES = {
  HOME: '/',
  BOOKINGS: '/bookings',
  BOOKING_DETAILS: '/bookings/:id',
  LOGIN: '/login',
  NOT_FOUND: '*',
} as const;

export const BOOKING_STATUSES = {
  ACCEPTED: 'accepted',
  PENDING: 'pending',
  ASSIGNED: 'assigned',
  DECLINED: 'declined',
  CANCELLED: 'cancelled',
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
} as const;

export const QUERY_TAGS = {
  BOOKINGS: 'Bookings',
  BOOKING: 'Booking',
  USER: 'User',
} as const;

