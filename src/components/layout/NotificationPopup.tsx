import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: '312px',
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  zIndex: 100,
});

const PopupContainer = styled('div', {
  position: 'fixed',
  top: '74px',
  right: '50%',
  transform: 'translateX(50%)',
  width: '762px',
  maxHeight: '611px',
  backgroundColor: '$onboardingBg',
  borderRadius: '10px',
  boxShadow: '0px 12px 3.5px rgba(0,0,0,0), 0px 4px 2.6px rgba(0,0,0,0.05)',
  overflow: 'hidden',
  zIndex: 101,
});

const PopupHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2 $4',
  height: '46px',
  borderBottom: '1px solid #b9b9b9',
});

const PopupTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$normal',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  width: '20px',
  height: '20px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const CloseIcon = styled('svg', {
  width: '12px',
  height: '12px',
});

const NotificationList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '500px',
  overflowY: 'auto',
});

const NotificationCard = styled('div', {
  backgroundColor: '$white',
  border: '1px solid #eaecf0',
  borderRadius: '14px',
  padding: '$3',
  display: 'flex',
  gap: '$4',
  
  '& + &': {
    borderTop: 'none',
  },
});

const NotificationIcon = styled('div', {
  width: '36px',
  height: '36px',
  borderRadius: '$md',
  border: '1px solid #eaecf0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const NotificationContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const NotificationHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const NotificationTitle = styled('h4', {
  fontSize: '14px',
  fontWeight: '$bold',
  color: '#333333',
  fontFamily: 'Figtree, sans-serif',
  flex: 1,
});

const NotificationText = styled('p', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '#656d76',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: '20px',
  maxWidth: '350px',
});

const NotificationActions = styled('div', {
  display: 'flex',
  gap: '$2',
});

const ActionButton = styled('button', {
  padding: '$2 $4',
  borderRadius: '$md',
  border: 'none',
  fontSize: '14px',
  fontWeight: '$bold',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  transition: 'opacity 0.2s',
  
  '&:hover': {
    opacity: 0.8,
  },
  
  variants: {
    variant: {
      secondary: {
        backgroundColor: 'transparent',
        color: '#656d76',
      },
      primary: {
        backgroundColor: 'transparent',
        color: '#161619',
      },
    },
  },
});

const Footer = styled('div', {
  height: '65px',
  backgroundColor: '#d6eff0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 $6',
});

const ViewAllButton = styled('button', {
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.9,
  },
});

interface NotificationPopupProps {
  onClose: () => void;
  service?: string;
}

export const NotificationPopup: React.FC<NotificationPopupProps> = ({ onClose, service = 'cleaning' }) => {
  const navigate = useNavigate();
  const notifications = [
    {
      id: 1,
      title: 'Notification title',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Notification title',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Notification title',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <PopupHeader>
          <PopupTitle>Notifications</PopupTitle>
          <CloseButton onClick={onClose}>
            <CloseIcon viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </CloseIcon>
          </CloseButton>
        </PopupHeader>

        <NotificationList>
          {notifications.map((notification) => (
            <NotificationCard key={notification.id}>
              <NotificationIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 3.33334L11.4167 9.16667H17.0833L12.8333 12.5L14.25 18.3333L10 15L5.75 18.3333L7.16667 12.5L2.91667 9.16667H8.58333L10 3.33334Z"
                    fill="#474747"
                  />
                </svg>
              </NotificationIcon>
              
              <NotificationContent>
                <NotificationHeader>
                  <NotificationTitle>{notification.title}</NotificationTitle>
                  <CloseButton>
                    <CloseIcon viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </CloseIcon>
                  </CloseButton>
                </NotificationHeader>
                
                <NotificationText>{notification.text}</NotificationText>
                
                <NotificationActions>
                  <ActionButton variant="secondary">Click to action</ActionButton>
                  <ActionButton variant="primary">Click to action</ActionButton>
                </NotificationActions>
              </NotificationContent>
            </NotificationCard>
          ))}
        </NotificationList>

        <Footer>
          <ViewAllButton onClick={() => {
            navigate(`/${service}/notifications`);
            onClose();
          }}>View All</ViewAllButton>
        </Footer>
      </PopupContainer>
    </>
  );
};

