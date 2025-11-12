import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const BackButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const Title = styled('h1', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Controls = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
});

const SearchInput = styled('div', {
  position: 'relative',
  
  '& svg': {
    position: 'absolute',
    left: '$3',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    color: '$textLight',
  },
  
  '& input': {
    width: '300px',
    padding: '$3 $3 $3 $10',
    border: '1px solid #e5e7eb',
    borderRadius: '$md',
    fontSize: '14px',
    fontFamily: 'Figtree, sans-serif',
    
    '&:focus': {
      outline: 'none',
      borderColor: '#64C2C8',
    },
    
    '&::placeholder': {
      color: '#9CA3AF',
    },
  },
});

const SortButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const NotificationsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const NotificationCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$5',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$4',
  position: 'relative',
});

const NotificationIcon = styled('div', {
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  
  '& svg': {
    width: '24px',
    height: '24px',
    color: '$text',
  },
});

const NotificationContent = styled('div', {
  flex: 1,
});

const NotificationTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationDescription = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  lineHeight: '1.6',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationActions = styled('div', {
  display: 'flex',
  gap: '$3',
  fontSize: '13px',
  fontFamily: 'Figtree, sans-serif',
  
  '& span': {
    color: '$textLight',
  },
  
  '& button': {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#64C2C8',
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'Figtree, sans-serif',
    fontWeight: '$medium',
    
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const CloseButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  color: '$textLight',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const notifications = [
  {
    id: 1,
    title: 'Notification title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'Notification title',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const AllNotifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <VehicleLayout title="All Notifications">
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </BackButton>
          <Title>All Notifications</Title>
        </Header>

        <Controls>
          <SearchInput>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </SearchInput>
          <SortButton>
            Sort By Date
            <CalendarIcon />
          </SortButton>
        </Controls>

        <NotificationsList>
          {notifications.map((notification) => (
            <NotificationCard key={notification.id}>
              <NotificationIcon>
                <BoltIcon />
              </NotificationIcon>
              <NotificationContent>
                <NotificationTitle>{notification.title}</NotificationTitle>
                <NotificationDescription>{notification.description}</NotificationDescription>
                <NotificationActions>
                  <span>Click to action</span>
                  <button>Click to action</button>
                </NotificationActions>
              </NotificationContent>
              <CloseButton>
                <XIcon />
              </CloseButton>
            </NotificationCard>
          ))}
        </NotificationsList>
      </Container>
    </VehicleLayout>
  );
};
