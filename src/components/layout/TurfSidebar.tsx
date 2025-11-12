import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarContainer = styled('div', {
  width: '220px',
  height: '100vh',
  backgroundColor: '#64C2C8',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '$5',
});

const Logo = styled('div', {
  width: '168px',
  height: '55px',
  margin: '0 auto $8',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const NavList = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '0 $3',
});

const NavItem = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $4',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: 'rgba(0, 0, 0, 0.7)',
  textAlign: 'left',
  transition: 'all 0.2s ease',
  
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
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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

const TurfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const DiscountIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
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
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

interface NavItemIcon {
  label: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { label: string; path: string }[];
}

const navItems: NavItemIcon[] = [
  { label: 'Dashboard', path: '/turf/dashboard', icon: <DashboardIcon /> },
  { label: 'Customer Bookings', path: '/turf/bookings', icon: <BookingIcon /> },
  { label: 'Turf Management', path: '/turf/turfs', icon: <TurfIcon /> },
  { label: 'Discount Management', path: '/turf/discounts', icon: <DiscountIcon /> },
  { label: 'Payment Management', path: '/turf/payments', icon: <PaymentIcon /> },
  { label: 'Subscription Model', path: '/turf/subscription', icon: <SubscriptionIcon /> },
];

export const TurfSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <SidebarContainer>
      <Logo
        style={{
          backgroundImage: `url('https://www.figma.com/api/mcp/asset/efcdf51e-5b67-4ca9-8de2-ed47ee0cb55b')`,
        }}
      />
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            active={isActive(item.path)}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

