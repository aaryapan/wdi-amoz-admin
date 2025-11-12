import React from 'react';
import { styled } from '@/styles/theme';
import { CleaningLayout } from '@/components/layout/CleaningLayout';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  maxWidth: '1080px',
});

const TopBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$8',
});

const BackButton = styled('button', {
  width: '24px',
  height: '24px',
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

const SearchBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '10px $3',
  backgroundColor: '$white',
  border: '1px solid #eaecf0',
  borderRadius: '$md',
  width: '300px',
});

const SearchIcon = styled('img', {
  width: '20px',
  height: '20px',
});

const SearchText = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: 'rgba(0, 0, 0, 0.6)',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'capitalize',
});

const SortButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  padding: '10px $3',
  backgroundColor: '$white',
  border: '1px solid #eaecf0',
  borderRadius: '$md',
  width: '221px',
  cursor: 'pointer',
  marginLeft: 'auto',
  
  '&:hover': {
    backgroundColor: '#f9f9f9',
  },
});

const NotificationList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const NotificationCard = styled('div', {
  backgroundColor: '$white',
  border: '1px solid #eaecf0',
  borderRadius: '14px',
  padding: '$3',
  display: 'flex',
  gap: '$4',
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

const CloseButton = styled('button', {
  width: '20px',
  height: '20px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.7,
  },
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
  backgroundColor: 'transparent',
  
  '&:hover': {
    opacity: 0.8,
  },
  
  variants: {
    variant: {
      secondary: {
        color: '#656d76',
      },
      primary: {
        color: '$text',
      },
    },
  },
});

export const AllNotifications: React.FC = () => {
  const navigate = useNavigate();
  
  const notifications = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: 'Notification title',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }));

  return (
    <CleaningLayout title="All Notifications">
      <Container>
        <TopBar>
          <BackButton onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </BackButton>
          
          <SearchBar>
            <SearchIcon src="https://www.figma.com/api/mcp/asset/f7cfa1d6-9a11-441e-840a-32d40a78fb6e" alt="Search" />
            <SearchText>Search</SearchText>
          </SearchBar>
          
          <SortButton>
            <SearchText>sort by date</SearchText>
            <SearchIcon src="https://www.figma.com/api/mcp/asset/cdf4af85-39f5-4bf7-beb6-79fd55d3a67c" alt="Calendar" />
          </SortButton>
        </TopBar>

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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
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
      </Container>
    </CleaningLayout>
  );
};

