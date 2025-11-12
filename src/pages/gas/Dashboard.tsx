import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { ClockIcon, CalendarIcon, ChevronRightIcon } from '@/components/icons/Icons';

const WelcomeText = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$6',
  fontFamily: 'Figtree, sans-serif',
});

const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',
  marginBottom: '$8',
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

const StatValueRow = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '$3',
});

const StatValue = styled('h3', {
  fontSize: '36px',
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
        color: '#10B981',
      },
      negative: {
        color: '#EF4444',
      },
    },
  },
});

const Section = styled('section', {
  marginBottom: '$8',
});

const SectionHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$5',
});

const SectionTitle = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ViewAllButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#64C2C8',
  fontSize: '16px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
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
  gap: '$5',
});

const BookingCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$5',
  border: '1px solid #e5e5e5',
  position: 'relative',
});

const BookingId = styled('p', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const StatusBadge = styled('span', {
  position: 'absolute',
  top: '$5',
  right: '$5',
  padding: '$1 $3',
  borderRadius: '20px',
  fontSize: '14px',
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
      decline: {
        backgroundColor: '#FEE2E2',
        color: '#DC2626',
      },
    },
  },
});

const BookingDetail = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const BookingValue = styled('span', {
  color: '$text',
  fontWeight: '$medium',
});

const BookingMeta = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$3',
  paddingTop: '$3',
  borderTop: '1px solid #f0f0f0',
});

const MetaItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  
  '& svg': {
    width: '14px',
    height: '14px',
  },
});

const ChartSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const ChartHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const TabGroup = styled('div', {
  display: 'flex',
  gap: '$2',
});

const Tab = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$textLight',
  cursor: 'pointer',
  borderRadius: '$md',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  
  variants: {
    active: {
      true: {
        color: '#64C2C8',
        backgroundColor: '#E6F7F8',
      },
    },
  },
});

const ChartContainer = styled('div', {
  height: '300px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '$4',
  paddingTop: '$4',
  position: 'relative',
});

const ChartBar = styled('div', {
  flex: 1,
  backgroundColor: '#64C2C8',
  borderRadius: '8px 8px 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  minHeight: '40px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
});

const DayLabel = styled('p', {
  fontSize: '12px',
  color: '$textLight',
  marginTop: '$2',
  textAlign: 'center',
  fontFamily: 'Figtree, sans-serif',
});

const YAxisLabels = styled('div', {
  position: 'absolute',
  left: '-50px',
  top: 0,
  bottom: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '12px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

export const Dashboard: React.FC = () => {
  const [chartTab, setChartTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const stats = [
    { label: 'Total Number Of Booked Services:', value: '520', change: '+28.4%', positive: true },
    { label: 'Total Number Of Services Offered:', value: '52', change: '+28.4%', positive: true },
    { label: 'Booking Rate:', value: '10%', change: '-12.6%', positive: false },
  ];

  const todaysBookings = [
    { id: '#589654', customer: 'Sam Tek', category: '11 Kg', time: '4:00-6:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', customer: 'Sam Tek', category: '22 Kg', time: '4:00-6:00 PM', date: '02/12/2024', status: 'accepted' as const },
    { id: '#589654', customer: 'Sam Tek', category: '11 Kg', time: '4:00-6:00 PM', date: '02/12/2024', status: 'decline' as const },
  ];

  const revenueData = [
    { day: 'Sun', value: 140 },
    { day: 'Mon', value: 210 },
    { day: 'Tues', value: 120 },
    { day: 'Wed', value: 180 },
    { day: 'Thurs', value: 95 },
    { day: 'Fri', value: 110 },
    { day: 'Sat', value: 150 },
  ];

  const maxRevenue = 250;

  return (
    <GasLayout title="Welcome, User">
      <WelcomeText>Welcome, User</WelcomeText>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatLabel>{stat.label}</StatLabel>
            <StatValueRow>
              <StatValue>{stat.value}</StatValue>
              <StatChange type={stat.positive ? 'positive' : 'negative'}>
                {stat.change}
              </StatChange>
            </StatValueRow>
          </StatCard>
        ))}
      </StatsGrid>

      <Section>
        <SectionHeader>
          <SectionTitle>Today's Bookings</SectionTitle>
          <ViewAllButton>
            View All <ChevronRightIcon />
          </ViewAllButton>
        </SectionHeader>

        <BookingsGrid>
          {todaysBookings.map((booking, index) => (
            <BookingCard key={index}>
              <BookingId>{booking.id}</BookingId>
              <StatusBadge status={booking.status}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </StatusBadge>
              
              <BookingDetail>
                Customer Name: <BookingValue>{booking.customer}</BookingValue>
              </BookingDetail>
              <BookingDetail>
                Category: <BookingValue>{booking.category}</BookingValue>
              </BookingDetail>
              
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
      </Section>

      <Section>
        <ChartSection>
          <ChartHeader>
            <SectionTitle>Revenue Overview</SectionTitle>
            <TabGroup>
              <Tab active={chartTab === 'daily'} onClick={() => setChartTab('daily')}>
                Daily
              </Tab>
              <Tab active={chartTab === 'weekly'} onClick={() => setChartTab('weekly')}>
                Weekly
              </Tab>
              <Tab active={chartTab === 'monthly'} onClick={() => setChartTab('monthly')}>
                Monthly
              </Tab>
            </TabGroup>
          </ChartHeader>

          <div style={{ position: 'relative', paddingLeft: '60px' }}>
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
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <ChartBar style={{ height: `${(data.value / maxRevenue) * 100}%` }} />
                  <DayLabel>{data.day}</DayLabel>
                </div>
              ))}
            </ChartContainer>
          </div>
        </ChartSection>
      </Section>
    </GasLayout>
  );
};

