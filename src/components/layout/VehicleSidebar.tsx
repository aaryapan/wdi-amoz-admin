import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarContainer = styled('aside', {
  width: '220px',
  minHeight: '100vh',
  backgroundColor: '#64C2C8',
  padding: '$6 0',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  left: 0,
  top: 0,
});

const Logo = styled('div', {
  padding: '0 $6',
  marginBottom: '$8',
  fontSize: '28px',
  fontWeight: '$bold',
  color: '$white',
  fontFamily: 'Figtree, sans-serif',
  textAlign: 'left',
});

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '0 $4',
});

const NavItem = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $4',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '#1a202c',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  transition: 'all 0.2s ease',
  textAlign: 'left',
  
  '& svg': {
    width: '20px',
    height: '20px',
    flexShrink: 0,
  },
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$white',
        color: '$text',
        fontWeight: '$semibold',
      },
    },
  },
});

const SubMenu = styled('div', {
  marginLeft: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  marginTop: '$1',
});

const SubMenuItem = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '#1a202c',
  fontSize: '13px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  transition: 'all 0.2s ease',
  textAlign: 'left',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  
  '&:before': {
    content: '•',
    fontSize: '16px',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontWeight: '$semibold',
      },
    },
  },
});

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const BookingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const VehicleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const DiscountIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6" />
    <circle cx="9.5" cy="9.5" r="0.5" fill="currentColor" />
    <circle cx="14.5" cy="14.5" r="0.5" fill="currentColor" />
  </svg>
);

const PaymentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const SubscriptionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const VehicleSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [vehicleMenuOpen, setVehicleMenuOpen] = useState(true);
  
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <SidebarContainer>
      <Logo>AMOZit</Logo>
      
      <Nav>
        <NavItem
          active={isActive('/vehicle/dashboard')}
          onClick={() => navigate('/vehicle/dashboard')}
        >
          <DashboardIcon />
          Dashboard
        </NavItem>
        
        <NavItem
          active={isActive('/vehicle/bookings')}
          onClick={() => navigate('/vehicle/bookings')}
        >
          <BookingIcon />
          Customer Bookings
        </NavItem>
        
        <NavItem
          active={isActive('/vehicle/vehicles')}
          onClick={() => setVehicleMenuOpen(!vehicleMenuOpen)}
        >
          <VehicleIcon />
          Vehicle Management
        </NavItem>
        
        {vehicleMenuOpen && (
          <SubMenu>
            <SubMenuItem
              active={location.pathname === '/vehicle/vehicles' || location.pathname.includes('/vehicle/vehicles/') && !location.pathname.includes('/add-ons')}
              onClick={() => navigate('/vehicle/vehicles')}
            >
              Manage Vehicles
            </SubMenuItem>
            <SubMenuItem
              active={location.pathname.includes('/add-ons')}
              onClick={() => navigate('/vehicle/vehicles/add-ons')}
            >
              Manage Add-Ons
            </SubMenuItem>
          </SubMenu>
        )}
        
        <NavItem
          active={isActive('/vehicle/discounts')}
          onClick={() => navigate('/vehicle/discounts')}
        >
          <DiscountIcon />
          Discount Management
        </NavItem>
        
        <NavItem
          active={isActive('/vehicle/payments')}
          onClick={() => navigate('/vehicle/payments')}
        >
          <PaymentIcon />
          Payment Management
        </NavItem>
        
        <NavItem
          active={isActive('/vehicle/subscription')}
          onClick={() => navigate('/vehicle/subscription')}
        >
          <SubscriptionIcon />
          Subscription Model
        </NavItem>
      </Nav>
    </SidebarContainer>
  );
};
