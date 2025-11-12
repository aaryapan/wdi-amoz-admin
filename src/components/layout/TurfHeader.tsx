import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { NotificationPopup } from '@/components/modals/NotificationPopup';

const HeaderContainer = styled('div', {
  height: '80px',
  backgroundColor: '$white',
  borderBottom: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $8',
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
  gap: '$5',
});

const NotificationIcon = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  color: '$textLight',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '24px',
    height: '24px',
  },
});

const UserSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  padding: '$2 $3',
  borderRadius: '$md',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
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
  display: 'flex',
  alignItems: 'center',
  color: '$textLight',
  
  '& svg': {
    width: '20px',
    height: '20px',
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

interface TurfHeaderProps {
  title: string;
}

export const TurfHeader: React.FC<TurfHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  const handleProfileClick = () => {
    navigate('/turf/profile');
  };

  return (
    <>
      <HeaderContainer>
        <Title>{title}</Title>
        <RightSection>
          <NotificationIcon onClick={handleNotificationClick}>
            <BellIcon />
          </NotificationIcon>
          <UserSection onClick={handleProfileClick}>
            <UserAvatar src="https://i.pravatar.cc/150?img=12" alt="User" />
            <UserName>Jackson</UserName>
            <DropdownIcon>
              <ChevronDownIcon />
            </DropdownIcon>
          </UserSection>
        </RightSection>
      </HeaderContainer>
      
      {showNotifications && (
        <NotificationPopup onClose={() => setShowNotifications(false)} />
      )}
    </>
  );
};

