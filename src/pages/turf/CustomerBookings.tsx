import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';
import { ClockIcon, CalendarIcon, StarIcon, MapPinIcon } from '@/components/icons/Icons';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SearchContainer = styled('div', {
  position: 'relative',
  width: '300px',
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
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const BookingsButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
});

const ContentRow = styled('div', {
  display: 'flex',
  gap: '$6',
  height: 'calc(100vh - 280px)',
});

const LeftPanel = styled('div', {
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  overflowY: 'auto',
});

const BookingItem = styled('div', {
  padding: '$4',
  backgroundColor: '$white',
  border: '1px solid #e5e7eb',
  borderRadius: '$lg',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#f9fafb',
  },
  
  variants: {
    selected: {
      true: {
        borderColor: '#64C2C8',
        backgroundColor: '#E6F7F8',
      },
    },
  },
});

const BookingHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',
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
      completed: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
      confirmed: {
        backgroundColor: '#DBEAFE',
        color: '#2563EB',
      },
      cancelled: {
        backgroundColor: '#FEE2E2',
        color: '#DC2626',
      },
    },
  },
});

const BookingName = styled('p', {
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

const RightPanel = styled('div', {
  flex: 1,
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  overflowY: 'auto',
});

const DetailSection = styled('div', {
  marginBottom: '$6',
  
  '&:last-child': {
    marginBottom: 0,
  },
});

const DetailHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ToggleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const ToggleLabel = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Toggle = styled('button', {
  width: '48px',
  height: '24px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.3s ease',
  
  variants: {
    active: {
      true: {
        backgroundColor: '#10B981',
      },
      false: {
        backgroundColor: '#D1D5DB',
      },
    },
  },
  
  '&::after': {
    content: '',
    position: 'absolute',
    top: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '$white',
    transition: 'all 0.3s ease',
  },
});

const DetailBox = styled('div', {
  padding: '$4',
  backgroundColor: '#f9fafb',
  borderRadius: '$md',
});

const DetailText = styled('p', {
  fontSize: '14px',
  color: '$text',
  lineHeight: 1.6,
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
  
  '&:last-child': {
    marginBottom: 0,
  },
});

const DetailRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',
  
  '&:last-child': {
    marginBottom: 0,
  },
});

const DetailLabel = styled('span', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const DetailValue = styled('span', {
  fontSize: '14px',
  color: '$text',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      received: {
        color: '#059669',
      },
    },
  },
});

const RatingRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',
});

const RatingDisplay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '& svg': {
    width: '18px',
    height: '18px',
    color: '#FCD34D',
  },
});

const RatingNumber = styled('span', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  marginRight: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const FeedbackDate = styled('span', {
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const FeedbackText = styled('p', {
  fontSize: '14px',
  color: '$text',
  lineHeight: 1.6,
  fontFamily: 'Figtree, sans-serif',
});

const BookingCalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SearchIconSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const CustomerBookings: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(0);
  const [markComplete, setMarkComplete] = useState(false);

  const bookings = [
    { id: '#589654', name: 'Dan Adam', time: '4:00 PM', date: '02/12/2024', status: 'completed' as const },
    { id: '#589654', name: 'Dan Adam', time: '4:00 PM', date: '02/12/2024', status: 'completed' as const },
    { id: '#589654', name: 'Dan Adam', time: '4:00 PM', date: '02/12/2024', status: 'cancelled' as const },
    { id: '#589654', name: 'Dan Adam', time: '4:00 PM', date: '02/12/2024', status: 'confirmed' as const },
    { id: '#589654', name: 'Dan Adam', time: '4:00 PM', date: '02/12/2024', status: 'confirmed' as const },
  ];

  return (
    <TurfLayout title="Customer Bookings">
      <Container>
        <TopRow>
          <SearchContainer>
            <SearchIcon>
              <SearchIconSVG />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
          <BookingsButton onClick={() => navigate('/turf/bookings/calendar')}>
            <BookingCalendarIcon /> Bookings
          </BookingsButton>
        </TopRow>

        <ContentRow>
          <LeftPanel>
            {bookings.map((booking, index) => (
              <BookingItem
                key={index}
                selected={selectedBooking === index}
                onClick={() => setSelectedBooking(index)}
              >
                <BookingHeader>
                  <BookingId>{booking.id}</BookingId>
                  <StatusBadge status={booking.status}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </StatusBadge>
                </BookingHeader>
                <BookingName>{booking.name}</BookingName>
                <BookingMeta>
                  <MetaItem>
                    <ClockIcon /> {booking.time}
                  </MetaItem>
                  <MetaItem>
                    <CalendarIcon /> {booking.date}
                  </MetaItem>
                </BookingMeta>
              </BookingItem>
            ))}
          </LeftPanel>

          <RightPanel>
            <DetailSection>
              <DetailHeader>
                <SectionTitle>#589654</SectionTitle>
                {bookings[selectedBooking].status === 'confirmed' && (
                  <ToggleContainer>
                    <ToggleLabel>Mark as complete:</ToggleLabel>
                    <Toggle
                      active={markComplete}
                      onClick={() => setMarkComplete(!markComplete)}
                    />
                  </ToggleContainer>
                )}
                {bookings[selectedBooking].status === 'completed' && (
                  <StatusBadge status="completed">Completed</StatusBadge>
                )}
              </DetailHeader>
            </DetailSection>

            <DetailSection>
              <SectionTitle>Booking Details</SectionTitle>
              <DetailBox>
                <DetailText>
                  <strong>Name:</strong> Sam Tek
                </DetailText>
                <DetailText style={{ display: 'flex', alignItems: 'center', gap: '$2' }}>
                  <ClockIcon /> 4:00 PM <CalendarIcon /> 02/12/2024 <MapPinIcon /> 2 Hrs
                </DetailText>
              </DetailBox>
            </DetailSection>

            <DetailSection>
              <SectionTitle>Turf Details</SectionTitle>
              <DetailBox>
                <DetailText>
                  <strong>Turf Name:</strong> Be Sporty Turf
                </DetailText>
                <DetailText>
                  <MapPinIcon /> P.O.Box 19, Khimji's Bait Al Ahlam, Al Noor St,Ruwi,Muscat
                </DetailText>
                <DetailRow style={{ marginTop: '$3' }}>
                  <div>
                    <DetailText><strong>Court Name:</strong> C1</DetailText>
                    <DetailText>Capacity: 15  Pricing: 20 OMR/hr</DetailText>
                  </div>
                  <div>
                    <DetailText><strong>Court Name:</strong> C2</DetailText>
                    <DetailText>Capacity: 15  Pricing: 20 OMR/hr</DetailText>
                  </div>
                </DetailRow>
                <DetailText style={{ marginTop: '$3' }}>
                  <strong>Court Name:</strong> C3
                </DetailText>
                <DetailText>Capacity: 15  Pricing: 20 OMR/hr</DetailText>
                <DetailText style={{ marginTop: '$3' }}>
                  <strong>Add Ons:</strong> Water 250ml, Redbull
                </DetailText>
              </DetailBox>
            </DetailSection>

            <DetailSection>
              <SectionTitle>Payment Details</SectionTitle>
              <DetailBox>
                <DetailRow>
                  <DetailLabel>Payment Type</DetailLabel>
                  <DetailValue>{bookings[selectedBooking].status === 'completed' ? 'Cash on delivery' : 'Credit Card'}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Amount</DetailLabel>
                  <DetailValue>3500 OMR</DetailValue>
                </DetailRow>
                {bookings[selectedBooking].status === 'completed' && (
                  <DetailRow>
                    <DetailLabel>Payment Status</DetailLabel>
                    <DetailValue status="received">Received</DetailValue>
                  </DetailRow>
                )}
              </DetailBox>
            </DetailSection>

            {bookings[selectedBooking].status === 'completed' && (
              <DetailSection>
                <SectionTitle>Feedback</SectionTitle>
                <DetailBox>
                  <RatingRow>
                    <RatingDisplay>
                      <RatingNumber>4</RatingNumber>
                      <StarIcon filled />
                      <StarIcon filled />
                      <StarIcon filled />
                      <StarIcon filled />
                      <StarIcon />
                    </RatingDisplay>
                    <FeedbackDate>04/10/2024</FeedbackDate>
                  </RatingRow>
                  <FeedbackText>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Praesent At Urna Vel Nibh Gravida Porttitor. Vestibulum In Hendrerit Metus, Non Tincidunt Purus. In Sagittis Nisi Ut Nisl Fringilla Imperdiet. Class Aptent Taciti Sociosqu Ad Litora Torquent
                  </FeedbackText>
                </DetailBox>
              </DetailSection>
            )}
          </RightPanel>
        </ContentRow>
      </Container>
    </TurfLayout>
  );
};

