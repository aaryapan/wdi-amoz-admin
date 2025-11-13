import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { SearchIcon, ClockIcon, CalendarIcon, CheckIcon, MapPinIcon, StarIcon } from '@/components/icons/Icons';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  height: 'calc(100vh - 180px)',
});

const TabRow = styled('div', {
  display: 'flex',
  gap: '$6',
  alignItems: 'center',
  borderBottom: '2px solid #e5e5e5',
});

const Tab = styled('button', {
  padding: '$3 0',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid transparent',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$textLight',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '-2px',
  
  '&:hover': {
    color: '$text',
  },
  
  variants: {
    active: {
      true: {
        color: '$text',
        borderBottomColor: '$text',
      },
    },
  },
});

const SearchContainer = styled('div', {
  position: 'relative',
  marginLeft: 'auto',
});

const SearchIconWrapper = styled('span', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
  display: 'flex',
  alignItems: 'center',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const SearchInput = styled('input', {
  padding: '$2 $3 $2 $8',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  width: '200px',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const FilterRow = styled('div', {
  display: 'flex',
  gap: '$3',
});

const FilterSelect = styled('select', {
  padding: '$2 $4',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  minWidth: '160px',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const ContentRow = styled('div', {
  display: 'flex',
  gap: '$6',
  flex: 1,
  overflow: 'hidden',
});

const LeftPanel = styled('div', {
  width: '320px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  overflowY: 'auto',
});

const BookingItem = styled('div', {
  padding: '$4',
  backgroundColor: '$white',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
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
      assigned: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
      pending: {
        backgroundColor: '#FEF3C7',
        color: '#D97706',
      },
      rescheduled: {
        backgroundColor: '#E9D5FF',
        color: '#7C3AED',
      },
      cancelled: {
        backgroundColor: '#FEE2E2',
        color: '#DC2626',
      },
    },
  },
});

const BookingCategory = styled('p', {
  fontSize: '14px',
  color: '$textLight',
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

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const AssignRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$4',
});

const AssignLabel = styled('label', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  minWidth: '80px',
});

const Select = styled('select', {
  flex: 1,
  padding: '$3',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const AcceptedBadge = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#D1FAE5',
  color: '#059669',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  '& svg': {
    width: '16px',
    height: '16px',
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
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
  
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

const ProviderInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const ProviderAvatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const ProviderName = styled('span', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
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

const CustomerMetaItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
  marginBottom: '$2',
  
  '&:last-child': {
    marginBottom: 0,
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
    flexShrink: 0,
    marginTop: '2px',
  },
});

export const AssignBooking: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'active' | 'previous'>('active');
  const [selectedBooking, setSelectedBooking] = useState(0);

  const activeBookings = [
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: 'assigned' as const },
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', category: '22', time: '4:00 PM', date: '02/12/2024', status: 'assigned' as const },
    { id: '#589654', category: '11', time: '4:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', category: '22', time: '4:00 PM', date: '02/12/2024', status: 'assigned' as const },
    { id: '#589654', category: '11', time: '4:00 PM', date: '02/12/2024', status: 'assigned' as const },
    { id: '#589654', category: '11', time: '4:00 PM', date: '02/12/2024', status: 'pending' as const },
  ];

  const previousBookings = [
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: undefined },
    { id: '#589654', category: '22 Kg', time: '4:00 PM', date: '02/12/2024', status: 'rescheduled' as const },
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: 'cancelled' as const },
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: undefined },
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: undefined },
    { id: '#589654', category: '11 Kg', time: '4:00 PM', date: '02/12/2024', status: undefined },
    { id: '#589654', category: '88 Kg', time: '4:00 PM', date: '02/12/2024', status: undefined },
  ];

  const bookings = selectedTab === 'active' ? activeBookings : previousBookings;

  return (
    <GasLayout title="Assigning Booking">
      <Container>
        <TabRow>
          <Tab active={selectedTab === 'active'} onClick={() => setSelectedTab('active')}>
            Active Bookings
          </Tab>
          <Tab active={selectedTab === 'previous'} onClick={() => setSelectedTab('previous')}>
            Previous Bookings
          </Tab>
          
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
        </TabRow>

        <FilterRow>
          <FilterSelect>
            <option>Acceptance Status</option>
          </FilterSelect>
          <FilterSelect>
            <option>Assignment Status</option>
          </FilterSelect>
          <FilterSelect>
            <option>Category</option>
          </FilterSelect>
        </FilterRow>

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
                  {booking.status && <StatusBadge status={booking.status}>{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</StatusBadge>}
                </BookingHeader>
                <BookingCategory>{booking.category}</BookingCategory>
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
            {selectedTab === 'active' ? (
              <>
                <DetailSection>
                  <SectionTitle>#589654</SectionTitle>
                  <AssignRow>
                    <AssignLabel>Assign To:</AssignLabel>
                    <Select>
                      <option>Jess E</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                    </Select>
                    <AcceptedBadge>
                      <CheckIcon /> Accepted
                    </AcceptedBadge>
                  </AssignRow>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Service Details</SectionTitle>
                  <DetailBox>
                    <DetailText>
                      <strong>Cylinder &gt; 11 Kg | 300 OMR</strong>
                    </DetailText>
                    <DetailText>
                      <strong>Quantity:</strong> 1
                    </DetailText>
                    <DetailText>
                      Delivering A Gas Cylinder Is A Straightforward Process. Ensure Safety Protocols Are Followed During Transportation And Installation.
                    </DetailText>
                  </DetailBox>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Payment Details</SectionTitle>
                  <DetailBox>
                    <DetailRow>
                      <DetailLabel>Payment Type</DetailLabel>
                      <DetailValue>Cash on delivery</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Amount</DetailLabel>
                      <DetailValue>3500 OMR</DetailValue>
                    </DetailRow>
                  </DetailBox>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Customer Details</SectionTitle>
                  <DetailBox>
                    <DetailText>
                      <strong>Name:</strong> Sam Tek
                    </DetailText>
                    <CustomerMetaItem>
                      <ClockIcon /> 4:00 PM <CalendarIcon /> 02/12/2024
                    </CustomerMetaItem>
                    <CustomerMetaItem>
                      <MapPinIcon /> P.O.Box 19, Khimji's Bait Al Ahlam, Al Noor St,Ruwi,Muscat
                    </CustomerMetaItem>
                  </DetailBox>
                </DetailSection>
              </>
            ) : (
              <>
                <DetailSection>
                  <SectionTitle>#589654</SectionTitle>
                  <DetailBox>
                    <DetailText style={{ marginBottom: '$3' }}>
                      <strong>Service Provider:</strong>
                    </DetailText>
                    <ProviderInfo>
                      <ProviderAvatar src="https://i.pravatar.cc/150?img=15" alt="Jess E" />
                      <ProviderName>Jess E</ProviderName>
                    </ProviderInfo>
                  </DetailBox>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Service Details</SectionTitle>
                  <DetailBox>
                    <DetailText>
                      <strong>Cylinder &gt; 11 Kg | 300 OMR</strong>
                    </DetailText>
                    <DetailText>
                      <strong>Quantity:</strong> 1
                    </DetailText>
                    <DetailText>
                      Delivering A Gas Cylinder Is A Straightforward Process. Ensure Safety Protocols Are Followed During Transportation And Installation.
                    </DetailText>
                  </DetailBox>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Payment Details</SectionTitle>
                  <DetailBox>
                    <DetailRow>
                      <DetailLabel>Payment Type</DetailLabel>
                      <DetailValue>Cash on delivery</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Amount</DetailLabel>
                      <DetailValue>3500 OMR</DetailValue>
                    </DetailRow>
                    <DetailRow>
                      <DetailLabel>Payment Status</DetailLabel>
                      <DetailValue status="received">Received</DetailValue>
                    </DetailRow>
                  </DetailBox>
                </DetailSection>

                <DetailSection>
                  <SectionTitle>Customer Details</SectionTitle>
                  <DetailBox>
                    <DetailText>
                      <strong>Name:</strong> Sam Tek
                    </DetailText>
                    <CustomerMetaItem>
                      <ClockIcon /> 4:00 PM <CalendarIcon /> 02/12/2024
                    </CustomerMetaItem>
                    <CustomerMetaItem>
                      <MapPinIcon /> P.O.Box 19, Khimji's Bait Al Ahlam, Al Noor St,Ruwi,Muscat
                    </CustomerMetaItem>
                  </DetailBox>
                </DetailSection>

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
              </>
            )}
          </RightPanel>
        </ContentRow>
      </Container>
    </GasLayout>
  );
};
