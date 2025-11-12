export interface Booking {
  id: string;
  bookingNumber: string;
  customerName: string;
  serviceName: string;
  status: BookingStatus;
  startTime: string;
  endTime?: string;
  date: string;
  time: string;
  location: string;
  email: string;
  phone: string;
  paymentType: string;
  paymentStatus?: string;
  amount: number;
  currency: string;
  documents?: Document[];
}

export type BookingStatus = 
  | 'accepted' 
  | 'pending' 
  | 'assigned' 
  | 'declined' 
  | 'cancelled';

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Onboarding types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface RegistrationRequest {
  email: string;
  phone: string;
  companyName?: string;
  services: string[];
}

export interface VerifyOTPRequest {
  email: string;
  phone: string;
  otp: string;
}

export interface SetPasswordRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface BusinessHoursRequest {
  workingDays: string[];
  startTime: string;
  endTime: string;
  documents: {
    commerceCertificate: {
      file: string; // base64 or URL
      expiryDate: string;
    };
    occiCertificate: {
      file: string; // base64 or URL
      expiryDate: string;
    };
  };
}

export interface ProfileDetailsRequest {
  companyName: string;
  phone: string;
  email: string;
  operatingCities: string[];
  numberOfStaff: number;
  serviceCategory: string;
  bankingDetails: {
    bankName: string;
    accountNumber: string;
    proofDocument: string; // base64 or URL
  };
}

