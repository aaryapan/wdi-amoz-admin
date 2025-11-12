import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { NotificationPopup } from '@/components/layout/NotificationPopup';

const HeaderContainer = styled('header', {
  height: '68px',
  backgroundColor: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $8',
  borderBottom: '1px solid #e5e7eb',
  position: 'sticky',
  top: 0,
  zIndex: 50,
});

const Title = styled('h1', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const RightSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
});

const NotificationButton = styled('button', {
  position: 'relative',
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$text',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '24px',
    height: '24px',
  },
});

const NotificationBadge = styled('span', {
  position: 'absolute',
  top: '8px',
  right: '8px',
  width: '8px',
  height: '8px',
  backgroundColor: '#ef4444',
  borderRadius: '50%',
});

const UserSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  padding: '$2 $3',
  borderRadius: '$md',
  transition: 'background-color 0.2s ease',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});

const UserAvatar = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#64C2C8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const UserName = styled('span', {
  fontSize: '15px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ChevronDown = styled('span', {
  display: 'flex',
  alignItems: 'center',
  color: '$textLight',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface VehicleHeaderProps {
  title?: string;
}

export const VehicleHeader: React.FC<VehicleHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Title>{title || ''}</Title>
        
        <RightSection>
          <NotificationButton onClick={() => setShowNotifications(!showNotifications)}>
            <BellIcon />
            <NotificationBadge />
          </NotificationButton>
          
          <UserSection onClick={() => navigate('/vehicle/profile')}>
            <UserAvatar>
              <img src="https://i.pravatar.cc/40?img=5" alt="User" />
            </UserAvatar>
            <UserName>Jackson</UserName>
            <ChevronDown>
              <ChevronDownIcon />
            </ChevronDown>
          </UserSection>
        </RightSection>
      </HeaderContainer>
      
      {showNotifications && (
        <NotificationPopup onClose={() => setShowNotifications(false)} service="vehicle" />
      )}
    </>
  );
};

