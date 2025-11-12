import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse } from '@/types/api.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

// Types for Plumbing Service
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  categories: string[];
  rating: number;
  image: string;
  active: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  active: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  date: string;
  time: string;
  location: string;
  status: 'pending' | 'assigned' | 'completed' | 'cancelled';
  assignedTo?: string;
  amount: number;
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

export const plumbingApi = createApi({
  reducerPath: 'plumbingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/plumbing`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Employees', 'Services', 'Bookings', 'Payments', 'Profile'],
  endpoints: (builder) => ({
    // Employee Management
    getEmployees: builder.query<ApiResponse<Employee[]>, void>({
      query: () => '/employees',
      providesTags: ['Employees'],
    }),

    getEmployeeById: builder.query<ApiResponse<Employee>, string>({
      query: (id) => `/employees/${id}`,
      providesTags: ['Employees'],
    }),

    addEmployee: builder.mutation<ApiResponse<Employee>, Partial<Employee>>({
      query: (employee) => ({
        url: '/employees',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),

    updateEmployee: builder.mutation<ApiResponse<Employee>, { id: string; data: Partial<Employee> }>({
      query: ({ id, data }) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Employees'],
    }),

    deleteEmployee: builder.mutation<ApiResponse<void>, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employees'],
    }),

    // Service Management
    getServiceCategories: builder.query<ApiResponse<ServiceCategory[]>, void>({
      query: () => '/services/categories',
      providesTags: ['Services'],
    }),

    getServices: builder.query<ApiResponse<Service[]>, void>({
      query: () => '/services',
      providesTags: ['Services'],
    }),

    addService: builder.mutation<ApiResponse<Service>, Partial<Service>>({
      query: (service) => ({
        url: '/services',
        method: 'POST',
        body: service,
      }),
      invalidatesTags: ['Services'],
    }),

    updateService: builder.mutation<ApiResponse<Service>, { id: string; data: Partial<Service> }>({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Services'],
    }),

    toggleServiceStatus: builder.mutation<ApiResponse<Service>, { id: string; active: boolean }>({
      query: ({ id, active }) => ({
        url: `/services/${id}/toggle`,
        method: 'PATCH',
        body: { active },
      }),
      invalidatesTags: ['Services'],
    }),

    // Booking Management
    getBookings: builder.query<ApiResponse<Booking[]>, { status?: string; date?: string }>({
      query: (params) => ({
        url: '/bookings',
        params,
      }),
      providesTags: ['Bookings'],
    }),

    getBookingById: builder.query<ApiResponse<Booking>, string>({
      query: (id) => `/bookings/${id}`,
      providesTags: ['Bookings'],
    }),

    assignBooking: builder.mutation<ApiResponse<Booking>, { bookingId: string; employeeId: string }>({
      query: ({ bookingId, employeeId }) => ({
        url: `/bookings/${bookingId}/assign`,
        method: 'POST',
        body: { employeeId },
      }),
      invalidatesTags: ['Bookings'],
    }),

    updateBookingStatus: builder.mutation<ApiResponse<Booking>, { id: string; status: Booking['status'] }>({
      query: ({ id, status }) => ({
        url: `/bookings/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Bookings'],
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
      numberOfStaff: number;
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
      numberOfStaff: number;
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
      activeEmployees: number;
      completedToday: number;
      monthlyRevenue: number;
    }>, void>({
      query: () => '/dashboard/stats',
    }),
  }),
});

export const {
  // Employee hooks
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  
  // Service hooks
  useGetServiceCategoriesQuery,
  useGetServicesQuery,
  useAddServiceMutation,
  useUpdateServiceMutation,
  useToggleServiceStatusMutation,
  
  // Booking hooks
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useAssignBookingMutation,
  useUpdateBookingStatusMutation,
  
  // Payment hooks
  useGetPaymentsQuery,
  useGetPaymentStatsQuery,
  
  // Profile hooks
  useGetCompanyProfileQuery,
  useUpdateCompanyProfileMutation,
  
  // Dashboard hooks
  useGetDashboardStatsQuery,
} = plumbingApi;
