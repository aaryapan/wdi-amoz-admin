import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.example.com';

export const turfApi = createApi({
  reducerPath: 'turfApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Turf', 'Booking', 'Discount', 'Payment', 'AddOn'],
  endpoints: (builder) => ({
    // Turf endpoints
    getTurfs: builder.query({
      query: () => '/turfs',
      providesTags: ['Turf'],
    }),
    getTurf: builder.query({
      query: (id) => `/turfs/${id}`,
      providesTags: ['Turf'],
    }),
    createTurf: builder.mutation({
      query: (turf) => ({
        url: '/turfs',
        method: 'POST',
        body: turf,
      }),
      invalidatesTags: ['Turf'],
    }),
    updateTurf: builder.mutation({
      query: ({ id, ...turf }) => ({
        url: `/turfs/${id}`,
        method: 'PUT',
        body: turf,
      }),
      invalidatesTags: ['Turf'],
    }),
    deleteTurf: builder.mutation({
      query: (id) => ({
        url: `/turfs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Turf'],
    }),

    // Booking endpoints
    getBookings: builder.query({
      query: () => '/bookings',
      providesTags: ['Booking'],
    }),
    getBooking: builder.query({
      query: (id) => `/bookings/${id}`,
      providesTags: ['Booking'],
    }),
    updateBookingStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/bookings/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Booking'],
    }),

    // Discount endpoints
    getDiscounts: builder.query({
      query: () => '/discounts',
      providesTags: ['Discount'],
    }),
    createDiscount: builder.mutation({
      query: (discount) => ({
        url: '/discounts',
        method: 'POST',
        body: discount,
      }),
      invalidatesTags: ['Discount'],
    }),
    updateDiscount: builder.mutation({
      query: ({ id, ...discount }) => ({
        url: `/discounts/${id}`,
        method: 'PUT',
        body: discount,
      }),
      invalidatesTags: ['Discount'],
    }),

    // Payment endpoints
    getPayments: builder.query({
      query: () => '/payments',
      providesTags: ['Payment'],
    }),

    // Add-On endpoints
    getAddOns: builder.query({
      query: () => '/add-ons',
      providesTags: ['AddOn'],
    }),
    createAddOn: builder.mutation({
      query: (addOn) => ({
        url: '/add-ons',
        method: 'POST',
        body: addOn,
      }),
      invalidatesTags: ['AddOn'],
    }),
  }),
});

export const {
  useGetTurfsQuery,
  useGetTurfQuery,
  useCreateTurfMutation,
  useUpdateTurfMutation,
  useDeleteTurfMutation,
  useGetBookingsQuery,
  useGetBookingQuery,
  useUpdateBookingStatusMutation,
  useGetDiscountsQuery,
  useCreateDiscountMutation,
  useUpdateDiscountMutation,
  useGetPaymentsQuery,
  useGetAddOnsQuery,
  useCreateAddOnMutation,
} = turfApi;

