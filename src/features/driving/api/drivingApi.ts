import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse } from '@/types/api.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

// Types for Driving Instructor Service
export interface CustomerBooking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  location: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  amount: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  active: boolean;
}

export interface Payment {
  id: string;
  bookingId: string;
  customerName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
  transactionId?: string;
}

export const drivingApi = createApi({
  reducerPath: 'drivingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/driving`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Bookings', 'SubscriptionPlans', 'Payments', 'Profile'],
  endpoints: (builder) => ({
    // Customer Booking Management
    getBookings: builder.query<ApiResponse<CustomerBooking[]>, { status?: string; date?: string }>({
      query: (params) => ({
        url: '/bookings',
        params,
      }),
      providesTags: ['Bookings'],
    }),

    getBookingById: builder.query<ApiResponse<CustomerBooking>, string>({
      query: (id) => `/bookings/${id}`,
      providesTags: ['Bookings'],
    }),

    updateBookingStatus: builder.mutation<ApiResponse<CustomerBooking>, { id: string; status: CustomerBooking['status'] }>({
      query: ({ id, status }) => ({
        url: `/bookings/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Bookings'],
    }),

    cancelBooking: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/bookings/${id}/cancel`,
        method: 'POST',
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Subscription Plan Management
    getSubscriptionPlans: builder.query<ApiResponse<SubscriptionPlan[]>, void>({
      query: () => '/subscription-plans',
      providesTags: ['SubscriptionPlans'],
    }),

    getSubscriptionPlanById: builder.query<ApiResponse<SubscriptionPlan>, string>({
      query: (id) => `/subscription-plans/${id}`,
      providesTags: ['SubscriptionPlans'],
    }),

    addSubscriptionPlan: builder.mutation<ApiResponse<SubscriptionPlan>, Partial<SubscriptionPlan>>({
      query: (plan) => ({
        url: '/subscription-plans',
        method: 'POST',
        body: plan,
      }),
      invalidatesTags: ['SubscriptionPlans'],
    }),

    updateSubscriptionPlan: builder.mutation<ApiResponse<SubscriptionPlan>, { id: string; data: Partial<SubscriptionPlan> }>({
      query: ({ id, data }) => ({
        url: `/subscription-plans/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['SubscriptionPlans'],
    }),

    togglePlanStatus: builder.mutation<ApiResponse<SubscriptionPlan>, { id: string; active: boolean }>({
      query: ({ id, active }) => ({
        url: `/subscription-plans/${id}/toggle`,
        method: 'PATCH',
        body: { active },
      }),
      invalidatesTags: ['SubscriptionPlans'],
    }),

    deleteSubscriptionPlan: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/subscription-plans/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['SubscriptionPlans'],
    }),

    // Payment Management
    getPayments: builder.query<ApiResponse<Payment[]>, { status?: string; dateRange?: { start: string; end: string } }>({
      query: (params) => ({
        url: '/payments',
        params,
      }),
      providesTags: ['Payments'],
    }),

    getPaymentStats: builder.query<ApiResponse<{
      totalRevenue: number;
      completedPayments: number;
      pendingPayments: number;
      failedPayments: number;
    }>, void>({
      query: () => '/payments/stats',
      providesTags: ['Payments'],
    }),

    // Profile Management
    getCompanyProfile: builder.query<ApiResponse<{
      companyName: string;
      phone: string;
      email: string;
      operatingCities: string[];
      serviceCategory: string;
      accountNumber: string;
    }>, void>({
      query: () => '/profile',
      providesTags: ['Profile'],
    }),

    updateCompanyProfile: builder.mutation<ApiResponse<void>, Partial<{
      companyName: string;
      phone: string;
      email: string;
      operatingCities: string[];
      serviceCategory: string;
      accountNumber: string;
    }>>({
      query: (data) => ({
        url: '/profile',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Dashboard Stats
    getDashboardStats: builder.query<ApiResponse<{
      totalBookings: number;
      activeStudents: number;
      completedToday: number;
      monthlyRevenue: number;
    }>, void>({
      query: () => '/dashboard/stats',
    }),
  }),
});

export const {
  // Booking hooks
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useUpdateBookingStatusMutation,
  useCancelBookingMutation,
  
  // Subscription Plan hooks
  useGetSubscriptionPlansQuery,
  useGetSubscriptionPlanByIdQuery,
  useAddSubscriptionPlanMutation,
  useUpdateSubscriptionPlanMutation,
  useTogglePlanStatusMutation,
  useDeleteSubscriptionPlanMutation,
  
  // Payment hooks
  useGetPaymentsQuery,
  useGetPaymentStatsQuery,
  
  // Profile hooks
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
  
  // Dashboard hooks
  useGetDashboardStatsQuery,
} = drivingApi;

