import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const Welcome = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
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
  color: '$textLight',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const StatValue = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '$2',
});

const StatNumber = styled('h3', {
  fontSize: '32px',
  fontWeight: '$bold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StatChange = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    type: {
      positive: {
        color: '#10b981',
      },
      negative: {
        color: '#ef4444',
      },
    },
  },
});

const Section = styled('div', {
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

const SectionTitle = styled('h3', {
  fontSize: '18px',
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
  color: '#64C2C8',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
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
  padding: '$4',
  border: '1px solid #e5e7eb',
  borderRadius: '$lg',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const BookingHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const BookingId = styled('span', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StatusBadge = styled('span', {
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      pending: {
        backgroundColor: '#fef3c7',
        color: '#d97706',
      },
      accepted: {
        backgroundColor: '#d1fae5',
        color: '#059669',
      },
      declined: {
        backgroundColor: '#fee2e2',
        color: '#dc2626',
      },
    },
  },
});

const BookingDetail = styled('p', {
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  margin: 0,
});

const BookingDetailBold = styled('span', {
  fontWeight: '$semibold',
  color: '$text',
});

const BookingDateTime = styled('div', {
  display: 'flex',
  gap: '$2',
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  
  '& svg': {
    width: '16px',
    height: '16px',
    flexShrink: 0,
  },
});

const ChartTabs = styled('div', {
  display: 'flex',
  gap: '$2',
  marginBottom: '$6',
});

const ChartTab = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$textLight',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$sm',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  variants: {
    active: {
      true: {
        color: '$text',
        fontWeight: '$semibold',
      },
    },
  },
});

const ChartContainer = styled('div', {
  height: '300px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$4',
  padding: '$4 0',
  position: 'relative',
});

const Bar = styled('div', {
  flex: 1,
  backgroundColor: '#64C2C8',
  borderRadius: '$sm $sm 0 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
});

const BarLabel = styled('span', {
  position: 'absolute',
  bottom: '-24px',
  fontSize: '12px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
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

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const revenueData = {
    daily: [
      { day: 'Sun', value: 150 },
      { day: 'Mon', value: 200 },
      { day: 'Tues', value: 130 },
      { day: 'Wed', value: 180 },
      { day: 'Thurs', value: 100 },
      { day: 'Fri', value: 120 },
      { day: 'Sat', value: 160 },
    ],
  };

  const maxValue = Math.max(...revenueData.daily.map((d) => d.value));

  return (
    <VehicleLayout title="">
      <Container>
        <Welcome>Welcome, User</Welcome>

        <StatsGrid>
          <StatCard>
            <StatLabel>Total Number Of Booked Services:</StatLabel>
            <StatValue>
              <StatNumber>520</StatNumber>
              <StatChange type="positive">+8.21 ↑</StatChange>
            </StatValue>
          </StatCard>

          <StatCard>
            <StatLabel>Total Number Of Services Offered:</StatLabel>
            <StatValue>
              <StatNumber>52</StatNumber>
              <StatChange type="positive">+2.05 ↑</StatChange>
            </StatValue>
          </StatCard>

          <StatCard>
            <StatLabel>Booking Rate:</StatLabel>
            <StatValue>
              <StatNumber>10%</StatNumber>
              <StatChange type="negative">-6.05 ↓</StatChange>
            </StatValue>
          </StatCard>
        </StatsGrid>

        <Section>
          <SectionHeader>
            <SectionTitle>Today's Bookings</SectionTitle>
            <ViewAllButton>
              View All <ChevronRightIcon />
            </ViewAllButton>
          </SectionHeader>

          <BookingsGrid>
            <BookingCard>
              <BookingHeader>
                <BookingId>#589554</BookingId>
                <StatusBadge status="pending">Pending</StatusBadge>
              </BookingHeader>
              <BookingDetail>
                Customer Name: <BookingDetailBold>Sam Tak</BookingDetailBold>
              </BookingDetail>
              <BookingDetail>
                Vehicle: <BookingDetailBold>Car</BookingDetailBold>
              </BookingDetail>
              <BookingDateTime>
                <ClockIcon /> 4:00-6:00 PM <CalendarIcon /> 02/12/2024
              </BookingDateTime>
            </BookingCard>

            <BookingCard>
              <BookingHeader>
                <BookingId>#589554</BookingId>
                <StatusBadge status="accepted">Accepted</StatusBadge>
              </BookingHeader>
              <BookingDetail>
                Customer Name: <BookingDetailBold>Sam Tak</BookingDetailBold>
              </BookingDetail>
              <BookingDetail>
                Vehicle: <BookingDetailBold>Car</BookingDetailBold>
              </BookingDetail>
              <BookingDateTime>
                <ClockIcon /> 4:00-6:00 PM <CalendarIcon /> 02/12/2024
              </BookingDateTime>
            </BookingCard>

            <BookingCard>
              <BookingHeader>
                <BookingId>#589554</BookingId>
                <StatusBadge status="declined">Decline</StatusBadge>
              </BookingHeader>
              <BookingDetail>
                Customer Name: <BookingDetailBold>Sam Tak</BookingDetailBold>
              </BookingDetail>
              <BookingDetail>
                Vehicle: <BookingDetailBold>Car</BookingDetailBold>
              </BookingDetail>
              <BookingDateTime>
                <ClockIcon /> 4:00-6:00 PM <CalendarIcon /> 02/12/2024
              </BookingDateTime>
            </BookingCard>
          </BookingsGrid>
        </Section>

        <Section>
          <SectionHeader>
            <SectionTitle>Revenue Overview</SectionTitle>
            <ChartTabs>
              <ChartTab active={activeTab === 'daily'} onClick={() => setActiveTab('daily')}>
                Daily
              </ChartTab>
              <ChartTab active={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')}>
                Weekly
              </ChartTab>
              <ChartTab active={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')}>
                Monthly
              </ChartTab>
            </ChartTabs>
          </SectionHeader>

          <ChartContainer>
            {revenueData.daily.map((item, index) => (
              <Bar key={index} style={{ height: `${(item.value / maxValue) * 100}%` }}>
                <BarLabel>{item.day}</BarLabel>
              </Bar>
            ))}
          </ChartContainer>
        </Section>
      </Container>
    </VehicleLayout>
  );
};

