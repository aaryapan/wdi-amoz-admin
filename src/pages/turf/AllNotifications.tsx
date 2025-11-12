import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$6',
});

const BackButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  color: '$text',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '24px',
    height: '24px',
  },
});

const HeaderTitle = styled('h1', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const FilterRow = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$6',
  padding: '$4',
  backgroundColor: '$white',
  borderRadius: '$lg',
});

const SearchContainer = styled('div', {
  position: 'relative',
  flex: 1,
});

const SearchIcon = styled('span', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$2 $3 $2 $8',
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
});

const SortButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
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
  display: 'flex',
  gap: '$4',
  position: 'relative',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
});

const NotificationIcon = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#E6F7F8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#64C2C8',
  
  '& svg': {
    width: '20px',
    height: '20px',
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

const NotificationText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  lineHeight: 1.5,
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationActions = styled('div', {
  display: 'flex',
  gap: '$3',
  fontSize: '13px',
  fontFamily: 'Figtree, sans-serif',
});

const ActionLink = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  fontSize: '13px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const CloseButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  color: '$textLight',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
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

const SearchIconSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CalendarIconSVG = () => (
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

const CloseIconSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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
];

export const AllNotifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <TurfLayout title="">
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </BackButton>
          <HeaderTitle>All Notifications</HeaderTitle>
        </Header>

        <FilterRow>
          <SearchContainer>
            <SearchIcon>
              <SearchIconSVG />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
          <SortButton>
            <CalendarIconSVG />
            Sort By Date
          </SortButton>
        </FilterRow>

        <NotificationsList>
          {notifications.map((notification) => (
            <NotificationCard key={notification.id}>
              <NotificationIcon>
                <BoltIcon />
              </NotificationIcon>
              <NotificationContent>
                <NotificationTitle>{notification.title}</NotificationTitle>
                <NotificationText>{notification.text}</NotificationText>
                <NotificationActions>
                  <ActionLink>Click to action</ActionLink>
                  <span>Click to action</span>
                </NotificationActions>
              </NotificationContent>
              <CloseButton>
                <CloseIconSVG />
              </CloseButton>
            </NotificationCard>
          ))}
        </NotificationsList>
      </Container>
    </TurfLayout>
  );
};

