import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api.example.com';

export const gasApi = createApi({
  reducerPath: 'gasApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Bookings', 'Employees', 'Services', 'Profile', 'Payments', 'Notifications'],
  endpoints: (builder) => ({
    // Bookings endpoints
    getBookings: builder.query({
      query: () => '/gas/bookings',
      providesTags: ['Bookings'],
    }),
    getBookingById: builder.query({
      query: (id) => `/gas/bookings/${id}`,
      providesTags: ['Bookings'],
    }),
    assignBooking: builder.mutation({
      query: ({ id, employeeId }) => ({
        url: `/gas/bookings/${id}/assign`,
        method: 'POST',
        body: { employeeId },
      }),
      invalidatesTags: ['Bookings'],
    }),

    // Employee endpoints
    getEmployees: builder.query({
      query: () => '/gas/employees',
      providesTags: ['Employees'],
    }),
    getEmployeeById: builder.query({
      query: (id) => `/gas/employees/${id}`,
      providesTags: ['Employees'],
    }),
    createEmployee: builder.mutation({
      query: (employee) => ({
        url: '/gas/employees',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...employee }) => ({
        url: `/gas/employees/${id}`,
        method: 'PUT',
        body: employee,
      }),
      invalidatesTags: ['Employees'],
    }),
    getEmployeeCalendar: builder.query({
      query: (id) => `/gas/employees/${id}/calendar`,
      providesTags: ['Employees'],
    }),
    getEmployeeServiceLogs: builder.query({
      query: (id) => `/gas/employees/${id}/logs`,
      providesTags: ['Employees'],
    }),

    // Services endpoints
    getServices: builder.query({
      query: () => '/gas/services',
      providesTags: ['Services'],
    }),
    getServiceBySpec: builder.query({
      query: (spec) => `/gas/services/${spec}`,
      providesTags: ['Services'],
    }),
    createService: builder.mutation({
      query: (service) => ({
        url: '/gas/services',
        method: 'POST',
        body: service,
      }),
      invalidatesTags: ['Services'],
    }),
    updateService: builder.mutation({
      query: ({ spec, ...service }) => ({
        url: `/gas/services/${spec}`,
        method: 'PUT',
        body: service,
      }),
      invalidatesTags: ['Services'],
    }),
    toggleServiceStatus: builder.mutation({
      query: ({ spec, active }) => ({
        url: `/gas/services/${spec}/toggle`,
        method: 'PATCH',
        body: { active },
      }),
      invalidatesTags: ['Services'],
    }),

    // Profile endpoints
    getProfile: builder.query({
      query: () => '/gas/profile',
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: (profile) => ({
        url: '/gas/profile',
        method: 'PUT',
        body: profile,
      }),
      invalidatesTags: ['Profile'],
    }),

    // Payment endpoints
    getPayments: builder.query({
      query: () => '/gas/payments',
      providesTags: ['Payments'],
    }),

    // Notifications endpoints
    getNotifications: builder.query({
      query: () => '/gas/notifications',
      providesTags: ['Notifications'],
    }),
    markNotificationAsRead: builder.mutation({
      query: (id) => ({
        url: `/gas/notifications/${id}/read`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Notifications'],
    }),

    // Dashboard endpoints
    getDashboardStats: builder.query({
      query: () => '/gas/dashboard/stats',
    }),
    getTodaysBookings: builder.query({
      query: () => '/gas/dashboard/bookings/today',
      providesTags: ['Bookings'],
    }),
    getRevenueData: builder.query({
      query: (period = 'daily') => `/gas/dashboard/revenue?period=${period}`,
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useAssignBookingMutation,
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useGetEmployeeCalendarQuery,
  useGetEmployeeServiceLogsQuery,
  useGetServicesQuery,
  useGetServiceBySpecQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useToggleServiceStatusMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetPaymentsQuery,
  useGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useGetDashboardStatsQuery,
  useGetTodaysBookingsQuery,
  useGetRevenueDataQuery,
} = gasApi;

