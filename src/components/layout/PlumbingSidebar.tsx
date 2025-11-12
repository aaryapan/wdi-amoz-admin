import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarContainer = styled('div', {
  width: '312px',
  height: '100vh',
  backgroundColor: '$onboardingPrimary',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 10,
});

const LogoContainer = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '15px',
  transform: 'translateX(-50%)',
  width: '158px',
  height: '50px',
});

const LogoImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const NavList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  padding: '0 $5',
  marginTop: '98px',
});

const NavItem = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$4 $3',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  textAlign: 'left',
  fontFamily: 'Inter, sans-serif',
  
  '&:hover': {
    opacity: 0.8,
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '$onboardingBg',
      },
    },
  },
});

const NavIcon = styled('img', {
  width: '20px',
  height: '20px',
  objectFit: 'contain',
});

interface NavItemData {
  id: string;
  label: string;
  path: string;
  icon: string;
}

const navItems: NavItemData[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/plumbing/dashboard',
    icon: 'https://www.figma.com/api/mcp/asset/b752c184-9735-4d82-87ba-103e5c867cd0',
  },
  {
    id: 'assigning',
    label: 'Assigning Booking',
    path: '/plumbing/assign-booking',
    icon: 'https://www.figma.com/api/mcp/asset/be9dd6e0-23ad-4fd2-ba52-7b0bd70b57e6',
  },
  {
    id: 'employees',
    label: 'Manage Employee',
    path: '/plumbing/employees',
    icon: 'https://www.figma.com/api/mcp/asset/5244a789-eb8c-454b-876b-260200a80729',
  },
  {
    id: 'services',
    label: 'Service Management',
    path: '/plumbing/services',
    icon: 'https://www.figma.com/api/mcp/asset/b752c184-9735-4d82-87ba-103e5c867cd0',
  },
  {
    id: 'payments',
    label: 'Payment Tracking',
    path: '/plumbing/payments',
    icon: 'https://www.figma.com/api/mcp/asset/b752c184-9735-4d82-87ba-103e5c867cd0',
  },
];

export const PlumbingSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage
          src="https://www.figma.com/api/mcp/asset/fb7d8806-a421-40d9-9df3-97dd013091e0"
          alt="Amozit Logo"
        />
      </LogoContainer>

      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            active={location.pathname === item.path}
            onClick={() => handleNavClick(item.path)}
          >
            <NavIcon src={item.icon} alt={item.label} />
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};
