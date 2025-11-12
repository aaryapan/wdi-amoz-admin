import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types for Vehicle service
export interface Vehicle {
  id: string;
  category: string;
  brand: string;
  variant: string;
  vehicleId: string;
  active: boolean;
}

export interface Booking {
  id: string;
  customer: string;
  vehicle: string;
  time: string;
  date: string;
  status: 'pending' | 'accepted' | 'declined';
}

export interface Payment {
  srNo: string;
  bookingId: string;
  vehicleName: string;
  vehicleId: string;
  duration: string;
  serviceStatus: string;
  paymentStatus: string;
  paymentType: string;
  totalAmount: string;
}

export const vehicleApi = createApi({
  reducerPath: 'vehicleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/vehicle/' }),
  tagTypes: ['Vehicle', 'Booking', 'Payment', 'Discount'],
  endpoints: (builder) => ({
    // Vehicle Management endpoints
    getVehicles: builder.query<Vehicle[], void>({
      query: () => 'vehicles',
      providesTags: ['Vehicle'],
    }),
    getVehicleById: builder.query<Vehicle, string>({
      query: (id) => `vehicles/${id}`,
      providesTags: ['Vehicle'],
    }),
    createVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: (vehicle) => ({
        url: 'vehicles',
        method: 'POST',
        body: vehicle,
      }),
      invalidatesTags: ['Vehicle'],
    }),
    updateVehicle: builder.mutation<Vehicle, { id: string; data: Partial<Vehicle> }>({
      query: ({ id, data }) => ({
        url: `vehicles/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Vehicle'],
    }),
    deleteVehicle: builder.mutation<void, string>({
      query: (id) => ({
        url: `vehicles/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vehicle'],
    }),

    // Booking Management endpoints
    getBookings: builder.query<Booking[], void>({
      query: () => 'bookings',
      providesTags: ['Booking'],
    }),
    getBookingById: builder.query<Booking, string>({
      query: (id) => `bookings/${id}`,
      providesTags: ['Booking'],
    }),
    updateBookingStatus: builder.mutation<Booking, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `bookings/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Booking'],
    }),

    // Payment endpoints
    getPayments: builder.query<Payment[], void>({
      query: () => 'payments',
      providesTags: ['Payment'],
    }),

    // Discount endpoints
    getDiscounts: builder.query<any[], void>({
      query: () => 'discounts',
      providesTags: ['Discount'],
    }),
    createDiscount: builder.mutation<any, Partial<any>>({
      query: (discount) => ({
        url: 'discounts',
        method: 'POST',
        body: discount,
      }),
      invalidatesTags: ['Discount'],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
  useGetBookingsQuery,
  useGetBookingByIdQuery,
  useUpdateBookingStatusMutation,
  useGetPaymentsQuery,
  useGetDiscountsQuery,
  useCreateDiscountMutation,
} = vehicleApi;

