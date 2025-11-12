import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { NotificationPopup } from './NotificationPopup';

const HeaderContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: '312px',
  right: 0,
  height: '68px',
  backgroundColor: '$white',
  borderBottom: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $9',
  zIndex: 9,
});

const Title = styled('h1', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'capitalize',
});

const RightSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
});

const NotificationButton = styled('button', {
  position: 'relative',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const NotificationIcon = styled('img', {
  width: '100%',
  height: '100%',
});

const ProfileSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.8,
  },
});

const ProfileImage = styled('img', {
  width: '43px',
  height: '43px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const ProfileName = styled('span', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '#4f4f4f',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'capitalize',
});

const DropdownIcon = styled('div', {
  width: '10px',
  height: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const DropdownSvg = styled('svg', {
  width: '100%',
  height: '100%',
});

interface CleaningHeaderProps {
  title: string;
  onProfileClick?: () => void;
}

export const CleaningHeader: React.FC<CleaningHeaderProps> = ({
  title,
  onProfileClick,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Title>{title}</Title>
        
        <RightSection>
          <NotificationButton onClick={() => setShowNotifications(!showNotifications)}>
            <NotificationIcon
              src="https://www.figma.com/api/mcp/asset/392b1b79-3a25-4756-9f1a-db8d9f157f05"
              alt="Notifications"
            />
          </NotificationButton>
          
          <ProfileSection onClick={onProfileClick}>
            <ProfileImage
              src="https://www.figma.com/api/mcp/asset/0b87da28-717b-4b21-ac71-5dac04f3bb2a"
              alt="Profile"
            />
            <ProfileName>Jackson</ProfileName>
            <DropdownIcon>
              <DropdownSvg viewBox="0 0 10 5" fill="none" stroke="#505050">
                <path d="M0 0L5 5L10 0" strokeWidth="1.5" />
              </DropdownSvg>
            </DropdownIcon>
          </ProfileSection>
        </RightSection>
      </HeaderContainer>
      
      {showNotifications && (
        <NotificationPopup onClose={() => setShowNotifications(false)} />
      )}
    </>
  );
};

