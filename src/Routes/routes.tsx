import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load pages for code splitting
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

// Onboarding pages
const SplashScreen = lazy(() =>
  import('@/pages/onboarding/SplashScreen').then((module) => ({
    default: module.SplashScreen,
  }))
);

const SelectService = lazy(() =>
  import('@/pages/onboarding/SelectService').then((module) => ({
    default: module.SelectService,
  }))
);

const Login = lazy(() =>
  import('@/pages/onboarding/Login').then((module) => ({
    default: module.Login,
  }))
);

const Registration = lazy(() =>
  import('@/pages/onboarding/Registration').then((module) => ({
    default: module.Registration,
  }))
);

const VerifyOTP = lazy(() =>
  import('@/pages/onboarding/VerifyOTP').then((module) => ({
    default: module.VerifyOTP,
  }))
);

const SetPassword = lazy(() =>
  import('@/pages/onboarding/SetPassword').then((module) => ({
    default: module.SetPassword,
  }))
);

const BusinessHours = lazy(() =>
  import('@/pages/onboarding/BusinessHours').then((module) => ({
    default: module.BusinessHours,
  }))
);

const ProfileDetails = lazy(() =>
  import('@/pages/onboarding/ProfileDetails').then((module) => ({
    default: module.ProfileDetails,
  }))
);

const RegistrationComplete = lazy(() =>
  import('@/pages/onboarding/RegistrationComplete').then((module) => ({
    default: module.RegistrationComplete,
  }))
);

// Cleaning service pages
const CleaningDashboard = lazy(() =>
  import('@/pages/cleaning/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const CleaningProfileView = lazy(() =>
  import('@/pages/cleaning/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const CleaningProfileEdit = lazy(() =>
  import('@/pages/cleaning/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const AllNotifications = lazy(() =>
  import('@/pages/cleaning/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const ManageEmployees = lazy(() =>
  import('@/pages/cleaning/ManageEmployees').then((module) => ({
    default: module.ManageEmployees,
  }))
);

const ServiceManagement = lazy(() =>
  import('@/pages/cleaning/ServiceManagement').then((module) => ({
    default: module.ServiceManagement,
  }))
);

const PaymentTracking = lazy(() =>
  import('@/pages/cleaning/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

const AssignBooking = lazy(() =>
  import('@/pages/cleaning/AssignBooking').then((module) => ({
    default: module.AssignBooking,
  }))
);

const AssignBookingChat = lazy(() =>
  import('@/pages/cleaning/AssignBookingChat').then((module) => ({
    default: module.AssignBookingChat,
  }))
);

const AssignBookingPrevious = lazy(() =>
  import('@/pages/cleaning/AssignBookingPrevious').then((module) => ({
    default: module.AssignBookingPrevious,
  }))
);

const EmployeeDetails = lazy(() =>
  import('@/pages/cleaning/EmployeeDetails').then((module) => ({
    default: module.EmployeeDetails,
  }))
);

const EmployeeEdit = lazy(() =>
  import('@/pages/cleaning/EmployeeEdit').then((module) => ({
    default: module.EmployeeEdit,
  }))
);

const EmployeeCalendar = lazy(() =>
  import('@/pages/cleaning/EmployeeCalendar').then((module) => ({
    default: module.EmployeeCalendar,
  }))
);

const EmployeeServiceLogs = lazy(() =>
  import('@/pages/cleaning/EmployeeServiceLogs').then((module) => ({
    default: module.EmployeeServiceLogs,
  }))
);

const ServiceView = lazy(() =>
  import('@/pages/cleaning/ServiceView').then((module) => ({
    default: module.ServiceView,
  }))
);

const ServiceEdit = lazy(() =>
  import('@/pages/cleaning/ServiceEdit').then((module) => ({
    default: module.ServiceEdit,
  }))
);

// Plumbing service pages
const PlumbingDashboard = lazy(() =>
  import('@/pages/plumbing/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const PlumbingProfileView = lazy(() =>
  import('@/pages/plumbing/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const PlumbingProfileEdit = lazy(() =>
  import('@/pages/plumbing/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const PlumbingAllNotifications = lazy(() =>
  import('@/pages/plumbing/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const PlumbingManageEmployees = lazy(() =>
  import('@/pages/plumbing/ManageEmployees').then((module) => ({
    default: module.ManageEmployees,
  }))
);

const PlumbingServiceManagement = lazy(() =>
  import('@/pages/plumbing/ServiceManagement').then((module) => ({
    default: module.ServiceManagement,
  }))
);

const PlumbingPaymentTracking = lazy(() =>
  import('@/pages/plumbing/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

const PlumbingAssignBooking = lazy(() =>
  import('@/pages/plumbing/AssignBooking').then((module) => ({
    default: module.AssignBooking,
  }))
);

const PlumbingAssignBookingChat = lazy(() =>
  import('@/pages/plumbing/AssignBookingChat').then((module) => ({
    default: module.AssignBookingChat,
  }))
);

const PlumbingAssignBookingPrevious = lazy(() =>
  import('@/pages/plumbing/AssignBookingPrevious').then((module) => ({
    default: module.AssignBookingPrevious,
  }))
);

const PlumbingEmployeeDetails = lazy(() =>
  import('@/pages/plumbing/EmployeeDetails').then((module) => ({
    default: module.EmployeeDetails,
  }))
);

const PlumbingEmployeeEdit = lazy(() =>
  import('@/pages/plumbing/EmployeeEdit').then((module) => ({
    default: module.EmployeeEdit,
  }))
);

const PlumbingEmployeeCalendar = lazy(() =>
  import('@/pages/plumbing/EmployeeCalendar').then((module) => ({
    default: module.EmployeeCalendar,
  }))
);

const PlumbingEmployeeServiceLogs = lazy(() =>
  import('@/pages/plumbing/EmployeeServiceLogs').then((module) => ({
    default: module.EmployeeServiceLogs,
  }))
);

const PlumbingServiceView = lazy(() =>
  import('@/pages/plumbing/ServiceView').then((module) => ({
    default: module.ServiceView,
  }))
);

const PlumbingServiceEdit = lazy(() =>
  import('@/pages/plumbing/ServiceEdit').then((module) => ({
    default: module.ServiceEdit,
  }))
);

// Electrical service pages
const ElectricalDashboard = lazy(() =>
  import('@/pages/electrical/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const ElectricalProfileView = lazy(() =>
  import('@/pages/electrical/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const ElectricalProfileEdit = lazy(() =>
  import('@/pages/electrical/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const ElectricalAllNotifications = lazy(() =>
  import('@/pages/electrical/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const ElectricalManageEmployees = lazy(() =>
  import('@/pages/electrical/ManageEmployees').then((module) => ({
    default: module.ManageEmployees,
  }))
);

const ElectricalServiceManagement = lazy(() =>
  import('@/pages/electrical/ServiceManagement').then((module) => ({
    default: module.ServiceManagement,
  }))
);

const ElectricalPaymentTracking = lazy(() =>
  import('@/pages/electrical/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

const ElectricalAssignBooking = lazy(() =>
  import('@/pages/electrical/AssignBooking').then((module) => ({
    default: module.AssignBooking,
  }))
);

const ElectricalAssignBookingChat = lazy(() =>
  import('@/pages/electrical/AssignBookingChat').then((module) => ({
    default: module.AssignBookingChat,
  }))
);

const ElectricalAssignBookingPrevious = lazy(() =>
  import('@/pages/electrical/AssignBookingPrevious').then((module) => ({
    default: module.AssignBookingPrevious,
  }))
);

const ElectricalEmployeeDetails = lazy(() =>
  import('@/pages/electrical/EmployeeDetails').then((module) => ({
    default: module.EmployeeDetails,
  }))
);

const ElectricalEmployeeEdit = lazy(() =>
  import('@/pages/electrical/EmployeeEdit').then((module) => ({
    default: module.EmployeeEdit,
  }))
);

const ElectricalEmployeeCalendar = lazy(() =>
  import('@/pages/electrical/EmployeeCalendar').then((module) => ({
    default: module.EmployeeCalendar,
  }))
);

const ElectricalEmployeeServiceLogs = lazy(() =>
  import('@/pages/electrical/EmployeeServiceLogs').then((module) => ({
    default: module.EmployeeServiceLogs,
  }))
);

const ElectricalServiceView = lazy(() =>
  import('@/pages/electrical/ServiceView').then((module) => ({
    default: module.ServiceView,
  }))
);

const ElectricalServiceEdit = lazy(() =>
  import('@/pages/electrical/ServiceEdit').then((module) => ({
    default: module.ServiceEdit,
  }))
);

// Driving Instructor service pages
const DrivingDashboard = lazy(() =>
  import('@/pages/driving/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const DrivingProfileView = lazy(() =>
  import('@/pages/driving/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const DrivingProfileEdit = lazy(() =>
  import('@/pages/driving/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const DrivingAllNotifications = lazy(() =>
  import('@/pages/driving/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const CustomerBookings = lazy(() =>
  import('@/pages/driving/CustomerBookings').then((module) => ({
    default: module.CustomerBookings,
  }))
);

const DrivingPaymentTracking = lazy(() =>
  import('@/pages/driving/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

const SubscriptionModel = lazy(() =>
  import('@/pages/driving/SubscriptionModel').then((module) => ({
    default: module.SubscriptionModel,
  }))
);

const DrivingBookingsCalendar = lazy(() =>
  import('@/pages/driving/BookingsCalendar').then((module) => ({
    default: module.BookingsCalendar,
  }))
);

// Gas Cylinder service pages
const GasDashboard = lazy(() =>
  import('@/pages/gas/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const GasProfileView = lazy(() =>
  import('@/pages/gas/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const GasProfileEdit = lazy(() =>
  import('@/pages/gas/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const GasAllNotifications = lazy(() =>
  import('@/pages/gas/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const GasAssignBooking = lazy(() =>
  import('@/pages/gas/AssignBooking').then((module) => ({
    default: module.AssignBooking,
  }))
);

const GasManageEmployees = lazy(() =>
  import('@/pages/gas/ManageEmployees').then((module) => ({
    default: module.ManageEmployees,
  }))
);

const GasEmployeeDetails = lazy(() =>
  import('@/pages/gas/EmployeeDetails').then((module) => ({
    default: module.EmployeeDetails,
  }))
);

const GasEmployeeEdit = lazy(() =>
  import('@/pages/gas/EmployeeEdit').then((module) => ({
    default: module.EmployeeEdit,
  }))
);

const GasEmployeeCalendar = lazy(() =>
  import('@/pages/gas/EmployeeCalendar').then((module) => ({
    default: module.EmployeeCalendar,
  }))
);

const GasEmployeeServiceLogs = lazy(() =>
  import('@/pages/gas/EmployeeServiceLogs').then((module) => ({
    default: module.EmployeeServiceLogs,
  }))
);

const GasServiceManagement = lazy(() =>
  import('@/pages/gas/ServiceManagement').then((module) => ({
    default: module.ServiceManagement,
  }))
);

const GasServiceView = lazy(() =>
  import('@/pages/gas/ServiceView').then((module) => ({
    default: module.ServiceView,
  }))
);

const GasServiceAdd = lazy(() =>
  import('@/pages/gas/ServiceAdd').then((module) => ({
    default: module.ServiceAdd,
  }))
);

const GasServiceEdit = lazy(() =>
  import('@/pages/gas/ServiceEdit').then((module) => ({
    default: module.ServiceEdit,
  }))
);

const GasPaymentManagement = lazy(() =>
  import('@/pages/gas/PaymentManagement').then((module) => ({
    default: module.PaymentManagement,
  }))
);

// Turf Bookings service pages
const TurfDashboard = lazy(() =>
  import('@/pages/turf/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const TurfProfileView = lazy(() =>
  import('@/pages/turf/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const TurfProfileEdit = lazy(() =>
  import('@/pages/turf/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const TurfAllNotifications = lazy(() =>
  import('@/pages/turf/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const TurfCustomerBookings = lazy(() =>
  import('@/pages/turf/CustomerBookings').then((module) => ({
    default: module.CustomerBookings,
  }))
);

const TurfBookingsCalendar = lazy(() =>
  import('@/pages/turf/BookingsCalendar').then((module) => ({
    default: module.BookingsCalendar,
  }))
);

const TurfDiscountManagement = lazy(() =>
  import('@/pages/turf/DiscountManagement').then((module) => ({
    default: module.DiscountManagement,
  }))
);

const TurfDiscountForm = lazy(() =>
  import('@/pages/turf/DiscountForm').then((module) => ({
    default: module.DiscountForm,
  }))
);

const TurfPaymentTracking = lazy(() =>
  import('@/pages/turf/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

const TurfSubscriptionModel = lazy(() =>
  import('@/pages/turf/SubscriptionModel').then((module) => ({
    default: module.SubscriptionModel,
  }))
);

const TurfManageTurfs = lazy(() =>
  import('@/pages/turf/ManageTurfs').then((module) => ({
    default: module.ManageTurfs,
  }))
);

const TurfView = lazy(() =>
  import('@/pages/turf/TurfView').then((module) => ({
    default: module.TurfView,
  }))
);

const TurfEdit = lazy(() =>
  import('@/pages/turf/TurfEdit').then((module) => ({
    default: module.TurfEdit,
  }))
);

const TurfManageAddOns = lazy(() =>
  import('@/pages/turf/ManageAddOns').then((module) => ({
    default: module.ManageAddOns,
  }))
);

// Vehicle/Rent a Vehicle service pages
const VehicleDashboard = lazy(() =>
  import('@/pages/vehicle/Dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

const VehicleProfileView = lazy(() =>
  import('@/pages/vehicle/ProfileView').then((module) => ({
    default: module.ProfileView,
  }))
);

const VehicleProfileEdit = lazy(() =>
  import('@/pages/vehicle/ProfileEdit').then((module) => ({
    default: module.ProfileEdit,
  }))
);

const VehicleAllNotifications = lazy(() =>
  import('@/pages/vehicle/AllNotifications').then((module) => ({
    default: module.AllNotifications,
  }))
);

const VehicleList = lazy(() =>
  import('@/pages/vehicle/VehicleList').then((module) => ({
    default: module.VehicleList,
  }))
);

const VehicleView = lazy(() =>
  import('@/pages/vehicle/VehicleView').then((module) => ({
    default: module.VehicleView,
  }))
);

const VehicleAdd = lazy(() =>
  import('@/pages/vehicle/VehicleAdd').then((module) => ({
    default: module.VehicleAdd,
  }))
);

const ManageAddOns = lazy(() =>
  import('@/pages/vehicle/ManageAddOns').then((module) => ({
    default: module.ManageAddOns,
  }))
);

const VehicleBookingManagement = lazy(() =>
  import('@/pages/vehicle/BookingManagement').then((module) => ({
    default: module.BookingManagement,
  }))
);

const VehicleBookingsCalendar = lazy(() =>
  import('@/pages/vehicle/BookingsCalendar').then((module) => ({
    default: module.BookingsCalendar,
  }))
);

const VehicleDiscountManagement = lazy(() =>
  import('@/pages/vehicle/DiscountManagement').then((module) => ({
    default: module.DiscountManagement,
  }))
);

const VehicleDiscountForm = lazy(() =>
  import('@/pages/vehicle/DiscountForm').then((module) => ({
    default: module.DiscountForm,
  }))
);

const VehicleSubscriptionModel = lazy(() =>
  import('@/pages/vehicle/SubscriptionModel').then((module) => ({
    default: module.SubscriptionModel,
  }))
);

const VehiclePaymentTracking = lazy(() =>
  import('@/pages/vehicle/PaymentTracking').then((module) => ({
    default: module.PaymentTracking,
  }))
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/onboarding/splash" replace />} />
        
        {/* Onboarding routes */}
        <Route path="/onboarding/splash" element={<SplashScreen />} />
        <Route path="/onboarding/select-service" element={<SelectService />} />
        <Route path="/onboarding/login" element={<Login />} />
        <Route path="/onboarding/registration" element={<Registration />} />
        <Route path="/onboarding/verify-otp" element={<VerifyOTP />} />
        <Route path="/onboarding/set-password" element={<SetPassword />} />
        <Route path="/onboarding/business-hours" element={<BusinessHours />} />
        <Route path="/onboarding/profile-details" element={<ProfileDetails />} />
        <Route path="/onboarding/complete" element={<RegistrationComplete />} />
        
        {/* Cleaning service routes */}
        <Route path="/cleaning/dashboard" element={<CleaningDashboard />} />
        <Route path="/cleaning/profile" element={<CleaningProfileView />} />
        <Route path="/cleaning/profile/edit" element={<CleaningProfileEdit />} />
        <Route path="/cleaning/notifications" element={<AllNotifications />} />
        <Route path="/cleaning/payments" element={<PaymentTracking />} />
        
        {/* Service Management routes */}
        <Route path="/cleaning/services" element={<ServiceManagement />} />
        <Route path="/cleaning/services/:categoryId/:serviceId" element={<ServiceView />} />
        <Route path="/cleaning/services/:categoryId/edit" element={<ServiceEdit />} />
        
        {/* Assign Booking routes */}
        <Route path="/cleaning/assign-booking" element={<AssignBooking />} />
        <Route path="/cleaning/assign-booking/chat" element={<AssignBookingChat />} />
        <Route path="/cleaning/assign-booking/previous" element={<AssignBookingPrevious />} />
        
        {/* Employee Management routes */}
        <Route path="/cleaning/employees" element={<ManageEmployees />} />
        <Route path="/cleaning/employees/:id" element={<EmployeeDetails />} />
        <Route path="/cleaning/employees/:id/edit" element={<EmployeeEdit />} />
        <Route path="/cleaning/employees/:id/calendar" element={<EmployeeCalendar />} />
        <Route path="/cleaning/employees/:id/logs" element={<EmployeeServiceLogs />} />
        
        {/* Plumbing service routes */}
        <Route path="/plumbing/dashboard" element={<PlumbingDashboard />} />
        <Route path="/plumbing/profile" element={<PlumbingProfileView />} />
        <Route path="/plumbing/profile/edit" element={<PlumbingProfileEdit />} />
        <Route path="/plumbing/notifications" element={<PlumbingAllNotifications />} />
        <Route path="/plumbing/payments" element={<PlumbingPaymentTracking />} />
        
        {/* Plumbing Service Management routes */}
        <Route path="/plumbing/services" element={<PlumbingServiceManagement />} />
        <Route path="/plumbing/services/:categoryId/:serviceId" element={<PlumbingServiceView />} />
        <Route path="/plumbing/services/:categoryId/edit" element={<PlumbingServiceEdit />} />
        
        {/* Plumbing Assign Booking routes */}
        <Route path="/plumbing/assign-booking" element={<PlumbingAssignBooking />} />
        <Route path="/plumbing/assign-booking/chat" element={<PlumbingAssignBookingChat />} />
        <Route path="/plumbing/assign-booking/previous" element={<PlumbingAssignBookingPrevious />} />
        
        {/* Plumbing Employee Management routes */}
        <Route path="/plumbing/employees" element={<PlumbingManageEmployees />} />
        <Route path="/plumbing/employees/:id" element={<PlumbingEmployeeDetails />} />
        <Route path="/plumbing/employees/:id/edit" element={<PlumbingEmployeeEdit />} />
        <Route path="/plumbing/employees/:id/calendar" element={<PlumbingEmployeeCalendar />} />
        <Route path="/plumbing/employees/:id/logs" element={<PlumbingEmployeeServiceLogs />} />
        
        {/* Electrical service routes */}
        <Route path="/electrical/dashboard" element={<ElectricalDashboard />} />
        <Route path="/electrical/profile" element={<ElectricalProfileView />} />
        <Route path="/electrical/profile/edit" element={<ElectricalProfileEdit />} />
        <Route path="/electrical/notifications" element={<ElectricalAllNotifications />} />
        <Route path="/electrical/payments" element={<ElectricalPaymentTracking />} />
        
        {/* Electrical Service Management routes */}
        <Route path="/electrical/services" element={<ElectricalServiceManagement />} />
        <Route path="/electrical/services/:categoryId/:serviceId" element={<ElectricalServiceView />} />
        <Route path="/electrical/services/:categoryId/edit" element={<ElectricalServiceEdit />} />
        
        {/* Electrical Assign Booking routes */}
        <Route path="/electrical/assign-booking" element={<ElectricalAssignBooking />} />
        <Route path="/electrical/assign-booking/chat" element={<ElectricalAssignBookingChat />} />
        <Route path="/electrical/assign-booking/previous" element={<ElectricalAssignBookingPrevious />} />
        
        {/* Electrical Employee Management routes */}
        <Route path="/electrical/employees" element={<ElectricalManageEmployees />} />
        <Route path="/electrical/employees/:id" element={<ElectricalEmployeeDetails />} />
        <Route path="/electrical/employees/:id/edit" element={<ElectricalEmployeeEdit />} />
        <Route path="/electrical/employees/:id/calendar" element={<ElectricalEmployeeCalendar />} />
        <Route path="/electrical/employees/:id/logs" element={<ElectricalEmployeeServiceLogs />} />
        
        {/* Driving Instructor service routes */}
        <Route path="/driving/dashboard" element={<DrivingDashboard />} />
        <Route path="/driving/profile" element={<DrivingProfileView />} />
        <Route path="/driving/profile/edit" element={<DrivingProfileEdit />} />
        <Route path="/driving/notifications" element={<DrivingAllNotifications />} />
        <Route path="/driving/bookings" element={<CustomerBookings />} />
        <Route path="/driving/bookings/calendar" element={<DrivingBookingsCalendar />} />
        <Route path="/driving/payments" element={<DrivingPaymentTracking />} />
        <Route path="/driving/subscription" element={<SubscriptionModel />} />
        
        {/* Gas Cylinder service routes */}
        <Route path="/gas/dashboard" element={<GasDashboard />} />
        <Route path="/gas/profile" element={<GasProfileView />} />
        <Route path="/gas/profile/edit" element={<GasProfileEdit />} />
        <Route path="/gas/notifications" element={<GasAllNotifications />} />
        <Route path="/gas/bookings" element={<GasAssignBooking />} />
        <Route path="/gas/employees" element={<GasManageEmployees />} />
        <Route path="/gas/employees/:id" element={<GasEmployeeDetails />} />
        <Route path="/gas/employees/:id/edit" element={<GasEmployeeEdit />} />
        <Route path="/gas/employees/:id/calendar" element={<GasEmployeeCalendar />} />
        <Route path="/gas/employees/:id/logs" element={<GasEmployeeServiceLogs />} />
        <Route path="/gas/services" element={<GasServiceManagement />} />
        <Route path="/gas/services/add" element={<GasServiceAdd />} />
        <Route path="/gas/services/:spec" element={<GasServiceView />} />
        <Route path="/gas/services/:spec/edit" element={<GasServiceEdit />} />
        <Route path="/gas/payments" element={<GasPaymentManagement />} />
        
        {/* Turf Bookings service routes */}
        <Route path="/turf/dashboard" element={<TurfDashboard />} />
        <Route path="/turf/profile" element={<TurfProfileView />} />
        <Route path="/turf/profile/edit" element={<TurfProfileEdit />} />
        <Route path="/turf/notifications" element={<TurfAllNotifications />} />
        <Route path="/turf/bookings" element={<TurfCustomerBookings />} />
        <Route path="/turf/bookings/calendar" element={<TurfBookingsCalendar />} />
        <Route path="/turf/discounts" element={<TurfDiscountManagement />} />
        <Route path="/turf/discounts/add" element={<TurfDiscountForm />} />
        <Route path="/turf/discounts/edit" element={<TurfDiscountForm />} />
        <Route path="/turf/payments" element={<TurfPaymentTracking />} />
        <Route path="/turf/subscription" element={<TurfSubscriptionModel />} />
        <Route path="/turf/turfs" element={<TurfManageTurfs />} />
        <Route path="/turf/turfs/add-ons" element={<TurfManageAddOns />} />
        <Route path="/turf/turfs/:id" element={<TurfView />} />
        <Route path="/turf/turfs/:id/edit" element={<TurfEdit />} />
        
        {/* Vehicle/Rent a Vehicle service routes */}
        <Route path="/vehicle/dashboard" element={<VehicleDashboard />} />
        <Route path="/vehicle/profile" element={<VehicleProfileView />} />
        <Route path="/vehicle/profile/edit" element={<VehicleProfileEdit />} />
        <Route path="/vehicle/notifications" element={<VehicleAllNotifications />} />
        <Route path="/vehicle/vehicles" element={<VehicleList />} />
        <Route path="/vehicle/vehicles/add" element={<VehicleAdd />} />
        <Route path="/vehicle/vehicles/:id/view" element={<VehicleView />} />
        <Route path="/vehicle/vehicles/:id/edit" element={<VehicleAdd />} />
        <Route path="/vehicle/vehicles/add-ons" element={<ManageAddOns />} />
        <Route path="/vehicle/bookings" element={<VehicleBookingManagement />} />
        <Route path="/vehicle/bookings/calendar" element={<VehicleBookingsCalendar />} />
        <Route path="/vehicle/discounts" element={<VehicleDiscountManagement />} />
        <Route path="/vehicle/discounts/add" element={<VehicleDiscountForm />} />
        <Route path="/vehicle/discounts/edit" element={<VehicleDiscountForm />} />
        <Route path="/vehicle/payments" element={<VehiclePaymentTracking />} />
        <Route path="/vehicle/subscription" element={<VehicleSubscriptionModel />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

