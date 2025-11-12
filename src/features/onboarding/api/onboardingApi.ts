import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  VerifyOTPRequest,
  SetPasswordRequest,
  BusinessHoursRequest,
  ProfileDetailsRequest,
} from '@/types/api.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

interface OnboardingState {
  email?: string;
  phone?: string;
  token?: string;
}

export const onboardingApi = createApi({
  reducerPath: 'onboardingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/onboarding`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('onboarding_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['OnboardingStatus'],
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation<ApiResponse<LoginResponse>, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: ApiResponse<LoginResponse>) => {
        if (response.data?.token) {
          localStorage.setItem('auth_token', response.data.token);
        }
        return response;
      },
    }),

    // Registration endpoint
    register: builder.mutation<ApiResponse<{ email: string; phone: string }>, RegistrationRequest>({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: ApiResponse<{ email: string; phone: string }>) => {
        if (response.data) {
          localStorage.setItem('onboarding_email', response.data.email);
          localStorage.setItem('onboarding_phone', response.data.phone);
        }
        return response;
      },
    }),

    // Verify OTP endpoint
    verifyOTP: builder.mutation<ApiResponse<{ verified: boolean; token: string }>, VerifyOTPRequest>({
      query: (data) => ({
        url: '/verify-otp',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: ApiResponse<{ verified: boolean; token: string }>) => {
        if (response.data?.token) {
          localStorage.setItem('onboarding_token', response.data.token);
        }
        return response;
      },
    }),

    // Resend OTP endpoint
    resendOTP: builder.mutation<ApiResponse<{ sent: boolean }>, { email: string; phone: string }>({
      query: (data) => ({
        url: '/resend-otp',
        method: 'POST',
        body: data,
      }),
    }),

    // Set password endpoint
    setPassword: builder.mutation<ApiResponse<{ success: boolean }>, SetPasswordRequest>({
      query: (data) => ({
        url: '/set-password',
        method: 'POST',
        body: data,
      }),
    }),

    // Submit business hours and documents
    submitBusinessHours: builder.mutation<ApiResponse<{ success: boolean }>, BusinessHoursRequest>({
      query: (data) => ({
        url: '/business-hours',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['OnboardingStatus'],
    }),

    // Submit profile details
    submitProfileDetails: builder.mutation<ApiResponse<{ success: boolean; companyId: string }>, ProfileDetailsRequest>({
      query: (data) => ({
        url: '/profile-details',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: ApiResponse<{ success: boolean; companyId: string }>) => {
        if (response.data?.companyId) {
          localStorage.setItem('company_id', response.data.companyId);
        }
        return response;
      },
      invalidatesTags: ['OnboardingStatus'],
    }),

    // Check onboarding status
    getOnboardingStatus: builder.query<ApiResponse<{ status: 'pending' | 'approved' | 'rejected'; step: string }>, void>({
      query: () => '/status',
      providesTags: ['OnboardingStatus'],
    }),

    // Upload document endpoint
    uploadDocument: builder.mutation<ApiResponse<{ fileUrl: string }>, FormData>({
      query: (formData) => ({
        url: '/upload-document',
        method: 'POST',
        body: formData,
        formData: true,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyOTPMutation,
  useResendOTPMutation,
  useSetPasswordMutation,
  useSubmitBusinessHoursMutation,
  useSubmitProfileDetailsMutation,
  useGetOnboardingStatusQuery,
  useUploadDocumentMutation,
} = onboardingApi;

