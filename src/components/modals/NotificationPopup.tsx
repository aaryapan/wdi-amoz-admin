import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  paddingTop: '80px',
  paddingRight: '$8',
});

const PopupContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '12px',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
  width: '400px',
  maxHeight: '500px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const PopupHeader = styled('div', {
  padding: '$4 $5',
  borderBottom: '1px solid #e5e5e5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const PopupTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '$textLight',
  padding: 0,
  
  '&:hover': {
    color: '$text',
  },
});

const NotificationList = styled('div', {
  flex: 1,
  overflowY: 'auto',
  padding: '$4 0',
});

const NotificationItem = styled('div', {
  padding: '$4 $5',
  borderBottom: '1px solid #f5f5f5',
  display: 'flex',
  gap: '$3',
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const NotificationIcon = styled('div', {
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const NotificationContent = styled('div', {
  flex: 1,
});

const NotificationTitle = styled('h4', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationText = styled('p', {
  fontSize: '13px',
  color: '$textLight',
  lineHeight: 1.5,
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationAction = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '13px',
  color: '#64C2C8',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  color: '$textLight',
  padding: 0,
  
  '&:hover': {
    color: '#DC2626',
  },
});

const PopupFooter = styled('div', {
  padding: '$4 $5',
  borderTop: '1px solid #e5e5e5',
  display: 'flex',
  justifyContent: 'flex-end',
});

const ViewAllButton = styled('button', {
  padding: '$2 $5',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
});

interface NotificationPopupProps {
  onClose: () => void;
}

export const NotificationPopup: React.FC<NotificationPopupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const notifications = [
    {
      title: 'Notification title',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Notification title',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Notification title',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const handleViewAll = () => {
    onClose();
    navigate('/gas/notifications');
  };

  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupTitle>Notifications</PopupTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </PopupHeader>

        <NotificationList>
          {notifications.map((notification, index) => (
            <NotificationItem key={index}>
              <NotificationIcon>⚡</NotificationIcon>
              <NotificationContent>
                <NotificationTitle>{notification.title}</NotificationTitle>
                <NotificationText>{notification.text}</NotificationText>
                <NotificationAction>Click to action</NotificationAction> <NotificationAction>Click to action</NotificationAction>
              </NotificationContent>
              <RemoveButton>×</RemoveButton>
            </NotificationItem>
          ))}
        </NotificationList>

        <PopupFooter>
          <ViewAllButton onClick={handleViewAll}>View All</ViewAllButton>
        </PopupFooter>
      </PopupContainer>
    </Overlay>
  );
};

