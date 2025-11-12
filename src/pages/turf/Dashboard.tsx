import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { TurfLayout } from '@/components/layout/TurfLayout';
import { ChevronRightIcon } from '@/components/icons/Icons';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$6',
});

const StatCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const StatLabel = styled('p', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$textLight',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const StatValueRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const StatValue = styled('h3', {
  fontSize: '36px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StatChange = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    positive: {
      true: {
        color: '#10B981',
      },
      false: {
        color: '#EF4444',
      },
    },
  },
});

const BookingsSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const SectionHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const SectionTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ViewAllButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '#64C2C8',
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

const BookingsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
});

const BookingCard = styled('div', {
  backgroundColor: '#f9fafb',
  borderRadius: '$lg',
  padding: '$4',
  border: '1px solid #e5e7eb',
});

const BookingHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',
});

const BookingId = styled('p', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StatusBadge = styled('span', {
  padding: '$1 $3',
  borderRadius: '12px',
  fontSize: '13px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      pending: {
        backgroundColor: '#FEF3C7',
        color: '#D97706',
      },
      accepted: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
      declined: {
        backgroundColor: '#FEE2E2',
        color: '#DC2626',
      },
    },
  },
});

const BookingCustomer = styled('p', {
  fontSize: '14px',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const BookingMeta = styled('div', {
  display: 'flex',
  gap: '$3',
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const MetaItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  
  '& svg': {
    width: '14px',
    height: '14px',
  },
});

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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

const RevenueSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const RevenueHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const TabContainer = styled('div', {
  display: 'flex',
  gap: '$4',
});

const Tab = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$textLight',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '#E6F7F8',
        color: '#64C2C8',
      },
    },
  },
});

const ChartContainer = styled('div', {
  height: '300px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '$3',
  padding: '$4 0',
});

const BarContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
});

const Bar = styled('div', {
  width: '100%',
  backgroundColor: '#64C2C8',
  borderRadius: '4px 4px 0 0',
  transition: 'all 0.3s ease',
});

const BarLabel = styled('span', {
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const YAxisLabels = styled('div', {
  position: 'absolute',
  left: '0',
  top: '0',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '12px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const ChartWrapper = styled('div', {
  position: 'relative',
  paddingLeft: '$8',
});

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const bookings = [
    { id: '#589654', customer: 'Sam Tek', time: '4:00-6:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', customer: 'Sam Tek', time: '4:00-6:00 PM', date: '02/12/2024', status: 'accepted' as const },
    { id: '#589654', customer: 'Sam Tek', time: '4:00-6:00 PM', date: '02/12/2024', status: 'declined' as const },
  ];

  const revenueData = [
    { day: 'Sun', value: 140 },
    { day: 'Mon', value: 200 },
    { day: 'Tues', value: 120 },
    { day: 'Wed', value: 180 },
    { day: 'Thurs', value: 90 },
    { day: 'Fri', value: 110 },
    { day: 'Sat', value: 150 },
  ];

  const maxValue = Math.max(...revenueData.map(d => d.value));

  return (
    <TurfLayout title="Welcome, User">
      <Container>
        <StatsGrid>
          <StatCard>
            <StatLabel>Total Number Of Booked Services:</StatLabel>
            <StatValueRow>
              <StatValue>520</StatValue>
              <StatChange positive={true}>28.4% ↑</StatChange>
            </StatValueRow>
          </StatCard>
          <StatCard>
            <StatLabel>Total Number Of Services Offered:</StatLabel>
            <StatValueRow>
              <StatValue>52</StatValue>
              <StatChange positive={true}>28.4% ↑</StatChange>
            </StatValueRow>
          </StatCard>
          <StatCard>
            <StatLabel>Booking Rate:</StatLabel>
            <StatValueRow>
              <StatValue>10%</StatValue>
              <StatChange positive={false}>12.6% ↓</StatChange>
            </StatValueRow>
          </StatCard>
        </StatsGrid>

        <BookingsSection>
          <SectionHeader>
            <SectionTitle>Today's Bookings</SectionTitle>
            <ViewAllButton>
              View All <ChevronRightIcon />
            </ViewAllButton>
          </SectionHeader>
          <BookingsGrid>
            {bookings.map((booking, index) => (
              <BookingCard key={index}>
                <BookingHeader>
                  <BookingId>{booking.id}</BookingId>
                  <StatusBadge status={booking.status}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </StatusBadge>
                </BookingHeader>
                <BookingCustomer>Customer Name: {booking.customer}</BookingCustomer>
                <BookingMeta>
                  <MetaItem>
                    <ClockIcon /> {booking.time}
                  </MetaItem>
                  <MetaItem>
                    <CalendarIcon /> {booking.date}
                  </MetaItem>
                </BookingMeta>
              </BookingCard>
            ))}
          </BookingsGrid>
        </BookingsSection>

        <RevenueSection>
          <RevenueHeader>
            <SectionTitle>Revenue Overview</SectionTitle>
            <TabContainer>
              <Tab active={activeTab === 'daily'} onClick={() => setActiveTab('daily')}>
                Daily
              </Tab>
              <Tab active={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')}>
                Weekly
              </Tab>
              <Tab active={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')}>
                Monthly
              </Tab>
            </TabContainer>
          </RevenueHeader>
          <ChartWrapper>
            <YAxisLabels>
              <span>250K</span>
              <span>200K</span>
              <span>150K</span>
              <span>100K</span>
              <span>50K</span>
              <span>25K</span>
              <span>0K</span>
            </YAxisLabels>
            <ChartContainer>
              {revenueData.map((data, index) => (
                <BarContainer key={index}>
                  <Bar style={{ height: `${(data.value / maxValue) * 250}px` }} />
                  <BarLabel>{data.day}</BarLabel>
                </BarContainer>
              ))}
            </ChartContainer>
          </ChartWrapper>
        </RevenueSection>
      </Container>
    </TurfLayout>
  );
};

