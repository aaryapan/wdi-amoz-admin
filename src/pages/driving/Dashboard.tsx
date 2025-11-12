import React from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';

const Container = styled('div', {
  maxWidth: '1128px',
});

// Stats Cards Section
const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
  marginBottom: '$6',
});

const StatCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$6 $4',
  boxShadow: '8px 8px 11px 0px rgba(0,0,0,0.09), 2px 2px 6px 0px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'hidden',
});

const StatLabel = styled('p', {
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#6a6a6a',
  textTransform: 'capitalize',
  lineHeight: '20px',
  marginBottom: '$4',
});

const StatValue = styled('p', {
  fontSize: '32px',
  fontWeight: '$bold',
  fontFamily: 'Figtree, sans-serif',
  color: '$onboardingPrimary',
  lineHeight: '40px',
  textTransform: 'capitalize',
  marginBottom: '$2',
});

const StatChange = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '2px 4px',
  borderRadius: '2px',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    trend: {
      positive: {
        border: '0.6px solid rgba(5, 193, 104, 0.55)',
        color: '#14CA74',
      },
      negative: {
        border: '0.6px solid rgba(255, 90, 101, 0.2)',
        color: '#FF5A65',
      },
    },
  },
});

// Today's Bookings Section
const BookingsSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$8 $6',
  marginBottom: '$6',
  boxShadow: '8px 8px 11px 0px rgba(0,0,0,0.09), 2px 2px 6px 0px rgba(0,0,0,0.1)',
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
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  textTransform: 'capitalize',
  lineHeight: '24px',
});

const ViewAllButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0,
  
  '& span': {
    fontSize: '16px',
    fontWeight: '$semibold',
    fontFamily: 'Figtree, sans-serif',
    color: '$onboardingPrimary',
    lineHeight: '16px',
  },
  
  '&:hover': {
    opacity: 0.8,
  },
});

const BookingsScroll = styled('div', {
  display: 'flex',
  gap: '$4',
  overflowX: 'auto',
  paddingBottom: '$4',
  
  '&::-webkit-scrollbar': {
    height: '6px',
  },
  
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#F5F5F5',
    borderRadius: '$sm',
  },
  
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$onboardingPrimary',
    borderRadius: '$sm',
  },
});

const BookingCard = styled('div', {
  backgroundColor: '$white',
  border: '1px solid $onboardingPrimary',
  borderRadius: '$md',
  padding: '$4',
  minWidth: '351px',
  flexShrink: 0,
  position: 'relative',
});

const BookingId = styled('span', {
  display: 'inline-block',
  padding: '$2',
  fontSize: '16px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '#626262',
  lineHeight: '20px',
});

const StatusBadge = styled('span', {
  position: 'absolute',
  top: '$4',
  right: '$6',
  padding: '$2 $3',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: '20px',
  
  variants: {
    status: {
      pending: {
        backgroundColor: 'rgba(237, 181, 37, 0.1)',
        color: '#EDB525',
      },
      accepted: {
        backgroundColor: 'rgba(61, 167, 29, 0.1)',
        color: '#3DA71D',
      },
      declined: {
        backgroundColor: 'rgba(211, 47, 47, 0.1)',
        color: '#D32F2F',
      },
    },
  },
});

const CustomerInfo = styled('p', {
  fontSize: '16px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  lineHeight: '20px',
  marginBottom: '$4',
  
  '& span': {
    fontWeight: '$semibold',
  },
});

const BookingDetails = styled('div', {
  display: 'flex',
  gap: '$8',
  alignItems: 'center',
});

const DetailItem = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  
  '& img': {
    width: '20px',
    height: '20px',
  },
  
  '& span': {
    fontSize: '14px',
    fontWeight: '$medium',
    fontFamily: 'Figtree, sans-serif',
    color: '$text',
    lineHeight: '20px',
  },
});

// Revenue Overview Section
const RevenueSection = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$8',
  boxShadow: '8px 8px 11px 0px rgba(0,0,0,0.09), 2px 2px 6px 0px rgba(0,0,0,0.1)',
});

const ChartHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const TimePeriods = styled('div', {
  display: 'flex',
  gap: '$2',
});

const TimePeriod = styled('button', {
  padding: '$2 0',
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'capitalize',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  lineHeight: '16px',
  borderBottom: '2px solid transparent',
  
  variants: {
    active: {
      true: {
        color: '$onboardingPrimary',
        borderBottomColor: '$onboardingPrimary',
      },
      false: {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
});

const ChartContainer = styled('div', {
  position: 'relative',
  height: '380px',
  marginTop: '$6',
});

const ChartGrid = styled('div', {
  position: 'absolute',
  inset: '60px 40px 40px 90px',
});

const YAxisLabels = styled('div', {
  position: 'absolute',
  left: '30px',
  top: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '42px',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  textAlign: 'right',
  lineHeight: '20px',
});

const XAxisLabels = styled('div', {
  position: 'absolute',
  left: '115px',
  bottom: '0',
  right: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  textAlign: 'center',
  lineHeight: '20px',
});

const BarsContainer = styled('div', {
  position: 'absolute',
  left: '117px',
  bottom: '30px',
  right: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  height: '316px',
});

const Bar = styled('div', {
  backgroundColor: '$onboardingPrimary',
  width: '27px',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',
});

export const Dashboard: React.FC = () => {
  return (
    <DrivingLayout title="Welcome, User">
      <Container>
        {/* Stats Cards */}
        <StatsGrid>
          <StatCard>
            <StatLabel>Total Number of Booked Services:</StatLabel>
            <StatValue>520</StatValue>
            <StatChange trend="positive">
              28.4% ↗
            </StatChange>
          </StatCard>
          
          <StatCard>
            <StatLabel>Total Number of Services Offered:</StatLabel>
            <StatValue>52</StatValue>
            <StatChange trend="positive">
              28.4% ↗
            </StatChange>
          </StatCard>
          
          <StatCard>
            <StatLabel>Booking Rate:</StatLabel>
            <StatValue>10%</StatValue>
            <StatChange trend="negative">
              12.6% ↘
            </StatChange>
          </StatCard>
        </StatsGrid>

        {/* Today's Bookings */}
        <BookingsSection>
          <SectionHeader>
            <SectionTitle>Today's Bookings</SectionTitle>
            <ViewAllButton>
              <span>View All</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="#64C2C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ViewAllButton>
          </SectionHeader>
          
          <BookingsScroll>
            <BookingCard>
              <BookingId>#589654</BookingId>
              <StatusBadge status="pending">Pending</StatusBadge>
              <CustomerInfo>Customer Name: <span>Sam Tek</span></CustomerInfo>
              <BookingDetails>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/e5e6e77a-49ea-4d8d-b744-88e0b7cb37f2" alt="Time" />
                  <span>4:00-6:00 PM</span>
                </DetailItem>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/360627b3-7acf-43cf-b564-eefaa9afd5ca" alt="Date" />
                  <span>02/12/2024</span>
                </DetailItem>
              </BookingDetails>
            </BookingCard>
            
            <BookingCard>
              <BookingId>#589654</BookingId>
              <StatusBadge status="accepted">Accepted</StatusBadge>
              <CustomerInfo>Customer Name: <span>Sam Tek</span></CustomerInfo>
              <BookingDetails>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/e5e6e77a-49ea-4d8d-b744-88e0b7cb37f2" alt="Time" />
                  <span>4:00-6:00 PM</span>
                </DetailItem>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/360627b3-7acf-43cf-b564-eefaa9afd5ca" alt="Date" />
                  <span>02/12/2024</span>
                </DetailItem>
              </BookingDetails>
            </BookingCard>
            
            <BookingCard>
              <BookingId>#589654</BookingId>
              <StatusBadge status="declined">Declined</StatusBadge>
              <CustomerInfo>Customer Name: <span>Sam Tek</span></CustomerInfo>
              <BookingDetails>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/e5e6e77a-49ea-4d8d-b744-88e0b7cb37f2" alt="Time" />
                  <span>4:00-6:00 PM</span>
                </DetailItem>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/360627b3-7acf-43cf-b564-eefaa9afd5ca" alt="Date" />
                  <span>02/12/2024</span>
                </DetailItem>
              </BookingDetails>
            </BookingCard>
            
            <BookingCard>
              <BookingId>#589654</BookingId>
              <StatusBadge status="pending">Pending</StatusBadge>
              <CustomerInfo>Customer Name: <span>Sam Tek</span></CustomerInfo>
              <BookingDetails>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/e5e6e77a-49ea-4d8d-b744-88e0b7cb37f2" alt="Time" />
                  <span>4:00-6:00 PM</span>
                </DetailItem>
                <DetailItem>
                  <img src="https://www.figma.com/api/mcp/asset/360627b3-7acf-43cf-b564-eefaa9afd5ca" alt="Date" />
                  <span>02/12/2024</span>
                </DetailItem>
              </BookingDetails>
            </BookingCard>
          </BookingsScroll>
        </BookingsSection>

        {/* Revenue Overview */}
        <RevenueSection>
          <ChartHeader>
            <SectionTitle>Revenue Overview</SectionTitle>
            <TimePeriods>
              <TimePeriod active>Daily</TimePeriod>
              <TimePeriod active={false}>Weekly</TimePeriod>
              <TimePeriod active={false}>Monthly</TimePeriod>
            </TimePeriods>
          </ChartHeader>
          
          <ChartContainer>
            <YAxisLabels>
              <span>250K</span>
              <span>200K</span>
              <span>150K</span>
              <span>100K</span>
              <span>50K</span>
              <span>25K</span>
              <span>0K</span>
            </YAxisLabels>
            
            <XAxisLabels>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tues</span>
              <span>Wed</span>
              <span>Thurs</span>
              <span>Fri</span>
              <span>Sat</span>
            </XAxisLabels>
            
            <BarsContainer>
              <Bar style={{ height: '236px' }} />
              <Bar style={{ height: '316px' }} />
              <Bar style={{ height: '210px' }} />
              <Bar style={{ height: '286px' }} />
              <Bar style={{ height: '181px' }} />
              <Bar style={{ height: '198px' }} />
              <Bar style={{ height: '249px' }} />
            </BarsContainer>
          </ChartContainer>
        </RevenueSection>
      </Container>
    </DrivingLayout>
  );
};
