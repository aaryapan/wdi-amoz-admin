import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled('header', {
  height: '80px',
  backgroundColor: '$white',
  borderBottom: '1px solid #e5e5e5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $8',
  marginLeft: '220px',
  position: 'fixed',
  top: 0,
  right: 0,
  left: '220px',
  zIndex: 10,
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
  gap: '$4',
});

const NotificationIcon = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  color: '$text',

  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
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
    backgroundColor: '#f5f5f5',
  },
});

const UserAvatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const UserName = styled('span', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const DropdownIcon = styled('span', {
  color: '$textLight',
  
  '& svg': {
    width: '12px',
    height: '12px',
  },
});

interface GasHeaderProps {
  title: string;
}

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

export const GasHeader: React.FC<GasHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    navigate('/gas/notifications');
  };

  const handleProfileClick = () => {
    navigate('/gas/profile');
  };

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      
      <RightSection>
        <NotificationIcon onClick={handleNotificationClick}>
          <BellIcon />
        </NotificationIcon>
        
        <UserSection onClick={handleProfileClick}>
          <UserAvatar
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
          />
          <UserName>Jackson</UserName>
          <DropdownIcon>
            <ChevronDownIcon />
          </DropdownIcon>
        </UserSection>
      </RightSection>
    </HeaderContainer>
  );
};
