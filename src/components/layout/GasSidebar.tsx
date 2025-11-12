import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarContainer = styled('div', {
  width: '220px',
  minHeight: '100vh',
  backgroundColor: '#64C2C8',
  padding: '$4 0',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
});

const LogoSection = styled('div', {
  padding: '0 $5',
  marginBottom: '$8',
});

const Logo = styled('div', {
  color: '$white',
  fontSize: '28px',
  fontWeight: '$bold',
  fontFamily: 'Figtree, sans-serif',
  letterSpacing: '-0.5px',
});

const NavList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const NavItem = styled('li', {
  marginBottom: '$1',
});

const NavLink = styled('button', {
  width: '100%',
  padding: '$3 $5',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  transition: 'background-color 0.2s ease',
  borderRadius: '12px',
  margin: '0 $3',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$white',
        color: '#1a1a1a',
        fontWeight: '$semibold',
      },
    },
  },
});

const IconWrapper = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

interface NavItemIcon {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface GasSidebarProps {
  className?: string;
}

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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const EmployeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ServiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const PaymentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const GasSidebar: React.FC<GasSidebarProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItemIcon[] = [
    { label: 'Dashboard', path: '/gas/dashboard', icon: <DashboardIcon /> },
    { label: 'Assigning Booking', path: '/gas/bookings', icon: <BookingIcon /> },
    { label: 'Manage Employee', path: '/gas/employees', icon: <EmployeeIcon /> },
    { label: 'Service Management', path: '/gas/services', icon: <ServiceIcon /> },
    { label: 'Payment Management', path: '/gas/payments', icon: <PaymentIcon /> },
  ];

  return (
    <SidebarContainer className={className}>
      <LogoSection>
        <Logo>AMOZit</Logo>
      </LogoSection>
      
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.path}>
            <NavLink
              active={location.pathname.startsWith(item.path)}
              onClick={() => navigate(item.path)}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};
