import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate } from 'react-router-dom';

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$6',
});

const BackButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '$text',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  
  '&:hover': {
    color: '#64C2C8',
  },
});

const Title = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const FilterSection = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$6',
});

const SearchContainer = styled('div', {
  position: 'relative',
  flex: 1,
  maxWidth: '400px',
});

const SearchIcon = styled('span', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $3 $3 $8',
  border: '1px solid #e5e5e5',
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
  padding: '$3 $4',
  backgroundColor: '$white',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    borderColor: '#64C2C8',
  },
});

const NotificationList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const NotificationCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '12px',
  padding: '$5',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  gap: '$4',
  alignItems: 'flex-start',
});

const NotificationIcon = styled('div', {
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '20px',
});

const NotificationContent = styled('div', {
  flex: 1,
});

const NotificationTitle = styled('h4', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  lineHeight: 1.6,
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const NotificationActions = styled('div', {
  display: 'flex',
  gap: '$4',
});

const ActionButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '14px',
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
  fontSize: '20px',
  cursor: 'pointer',
  color: '$textLight',
  padding: 0,
  
  '&:hover': {
    color: '#DC2626',
  },
});

export const AllNotifications: React.FC = () => {
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
  ];

  return (
    <GasLayout title="All Notifications">
      <Header>
        <BackButton onClick={() => navigate('/gas/dashboard')}>‹</BackButton>
        <Title>All Notifications</Title>
      </Header>

      <FilterSection>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        
        <SortButton>
          Sort By Date <span>📅</span>
        </SortButton>
      </FilterSection>

      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationCard key={index}>
            <NotificationIcon>⚡</NotificationIcon>
            <NotificationContent>
              <NotificationTitle>{notification.title}</NotificationTitle>
              <NotificationText>{notification.text}</NotificationText>
              <NotificationActions>
                <ActionButton>Click to action</ActionButton>
                <ActionButton>Click to action</ActionButton>
              </NotificationActions>
            </NotificationContent>
            <RemoveButton>×</RemoveButton>
          </NotificationCard>
        ))}
      </NotificationList>
    </GasLayout>
  );
};
