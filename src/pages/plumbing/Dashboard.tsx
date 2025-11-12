import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  maxWidth: '1200px',
});

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$6',
});

const StatCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const StatLabel = styled('div', {
  fontSize: '14px',
  fontWeight: '$normal',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
});

const StatValueRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const StatValue = styled('div', {
  fontSize: '48px',
  fontWeight: '$bold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: 1,
});

const StatChange = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  variants: {
    type: {
      positive: {
        color: '#00C853',
      },
      negative: {
        color: '#FF5252',
      },
    },
  },
});

const BookingsSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const SectionHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$5',
});

const SectionTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ViewAllButton = styled('button', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$onboardingPrimary',
  fontFamily: 'Figtree, sans-serif',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const BookingsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
});

const BookingCard = styled('div', {
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const BookingId = styled('div', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const BookingStatus = styled('div', {
  display: 'inline-flex',
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  alignSelf: 'flex-start',
  variants: {
    status: {
      pending: {
        backgroundColor: '#FFF3E0',
        color: '#F57C00',
      },
      accepted: {
        backgroundColor: '#E8F5E9',
        color: '#2E7D32',
      },
    },
  },
});

const BookingInfo = styled('div', {
  fontSize: '14px',
  fontWeight: '$normal',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const BookingDetail = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  fontWeight: '$normal',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const RevenueSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const TabsContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$5',
});

const Tab = styled('button', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '$2 $3',
  borderRadius: '$sm',
  variants: {
    active: {
      true: {
        color: '$onboardingPrimary',
        backgroundColor: 'rgba(100, 194, 200, 0.1)',
      },
      false: {
        color: '#666',
      },
    },
  },
});

const ChartContainer = styled('div', {
  height: '400px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$4',
  padding: '$4',
  position: 'relative',
});

const ChartBar = styled('div', {
  flex: 1,
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$sm $sm 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

const ChartLabel = styled('div', {
  fontSize: '12px',
  fontWeight: '$normal',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
  textAlign: 'center',
});

export const Dashboard: React.FC = () => {
  const [revenueTab, setRevenueTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const stats = [
    { label: 'Total Number Of Booked Services:', value: 520, change: '+28.4%', changeType: 'positive' as const },
    { label: 'Total Number Of Services Offered:', value: 52, change: '+28.4%', changeType: 'positive' as const },
    { label: 'Booking Rate:', value: '10%', change: '-12.6%', changeType: 'negative' as const },
  ];

  const bookings = [
    { id: '#589654', customer: 'Sam Tek', category: 'Hair Care', time: '4:00-6:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', customer: 'Sam Tek', category: 'Hair Care', time: '4:00-6:00 PM', date: '02/12/2024', status: 'accepted' as const },
    { id: '#589654', customer: 'Sam Tek', category: 'Hair Care', time: '4:00-6:00 PM', date: '02/12/2024', status: 'pending' as const },
  ];

  const revenueData = [
    { day: 'Sun', value: 140 },
    { day: 'Mon', value: 200 },
    { day: 'Tues', value: 120 },
    { day: 'Wed', value: 180 },
    { day: 'Thurs', value: 100 },
    { day: 'Fri', value: 110 },
    { day: 'Sat', value: 150 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.value));

  return (
    <PlumbingLayout title="Welcome, User">
      <Container>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatLabel>{stat.label}</StatLabel>
              <StatValueRow>
                <StatValue>{stat.value}</StatValue>
                <StatChange type={stat.changeType}>{stat.change}</StatChange>
              </StatValueRow>
            </StatCard>
          ))}
        </StatsGrid>

        <BookingsSection>
          <SectionHeader>
            <SectionTitle>Today's Bookings</SectionTitle>
            <ViewAllButton>
              View All
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ViewAllButton>
          </SectionHeader>
          <BookingsGrid>
            {bookings.map((booking, index) => (
              <BookingCard key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <BookingId>{booking.id}</BookingId>
                  <BookingStatus status={booking.status}>
                    {booking.status === 'pending' ? 'Pending' : 'Accepted'}
                  </BookingStatus>
                </div>
                <BookingInfo>Customer Name: {booking.customer}</BookingInfo>
                <BookingInfo>Category: {booking.category}</BookingInfo>
                <BookingDetail>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#666" strokeWidth="1.5"/>
                    <path d="M8 4V8L11 11" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {booking.time}
                </BookingDetail>
                <BookingDetail>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="1" stroke="#666" strokeWidth="1.5"/>
                    <path d="M3 6H13M6 3V2M10 3V2" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {booking.date}
                </BookingDetail>
              </BookingCard>
            ))}
          </BookingsGrid>
        </BookingsSection>

        <RevenueSection>
          <SectionHeader>
            <SectionTitle>Revenue Overview</SectionTitle>
            <TabsContainer>
              <Tab active={revenueTab === 'daily'} onClick={() => setRevenueTab('daily')}>Daily</Tab>
              <Tab active={revenueTab === 'weekly'} onClick={() => setRevenueTab('weekly')}>Weekly</Tab>
              <Tab active={revenueTab === 'monthly'} onClick={() => setRevenueTab('monthly')}>Monthly</Tab>
            </TabsContainer>
          </SectionHeader>
          <ChartContainer>
            {revenueData.map((data, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ChartBar style={{ height: `${(data.value / maxRevenue) * 100}%`, minHeight: '40px' }} />
                <ChartLabel>{data.day}</ChartLabel>
              </div>
            ))}
          </ChartContainer>
        </RevenueSection>
      </Container>
    </PlumbingLayout>
  );
};

