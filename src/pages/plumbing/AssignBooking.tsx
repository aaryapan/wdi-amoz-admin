import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  display: 'flex',
  gap: '$6',
  maxWidth: '1400px',
});

const LeftPanel = styled('div', {
  flex: '0 0 380px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const RightPanel = styled('div', {
  flex: 1,
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const TabsContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$4',
});

const Tab = styled('button', {
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '$2 0',
  color: '#666',
  borderBottom: '2px solid transparent',
  
  variants: {
    active: {
      true: {
        color: '$text',
        borderBottom: '2px solid $onboardingPrimary',
      },
    },
  },
});

const SearchContainer = styled('div', {
  position: 'relative',
  marginBottom: '$4',
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $4 $3 $10',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&::placeholder': {
    color: '#999',
  },
});

const SearchIcon = styled('svg', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '20px',
  color: '#666',
});

const FiltersContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  marginBottom: '$4',
});

const FilterSelect = styled('select', {
  flex: 1,
  padding: '$2 $3',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
});

const BookingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxHeight: 'calc(100vh - 350px)',
  overflowY: 'auto',
});

const BookingCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$4',
  border: '1px solid #E0E0E0',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
  },
  
  variants: {
    selected: {
      true: {
        borderColor: '$onboardingPrimary',
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
});

const BookingHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',
});

const BookingId = styled('div', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StatusBadge = styled('div', {
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      assigned: {
        backgroundColor: '#E8F5E9',
        color: '#2E7D32',
      },
      pending: {
        backgroundColor: '#FFF3E0',
        color: '#F57C00',
      },
      rescheduled: {
        backgroundColor: '#F3E5F5',
        color: '#7B1FA2',
      },
      cancelled: {
        backgroundColor: '#FFEBEE',
        color: '#C62828',
      },
    },
  },
});

const BookingService = styled('div', {
  fontSize: '14px',
  fontWeight: '$normal',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const BookingMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const DetailsHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const DetailsTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const AcceptedBadge = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#E8F5E9',
  borderRadius: '$md',
  color: '#2E7D32',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
});

const AssignSection = styled('div', {
  marginBottom: '$6',
});

const SectionLabel = styled('div', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
});

const EmployeeSelect = styled('select', {
  width: '100%',
  padding: '$3 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
});

const DetailsSection = styled('div', {
  marginBottom: '$5',
});

const DetailsSectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
});

const ServiceDetail = styled('div', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
  lineHeight: 1.6,
});

const ServiceQuantity = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const ServiceDescription = styled('p', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: 1.6,
  marginTop: '$3',
});

const PaymentRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$2',
});

const PaymentLabel = styled('div', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const PaymentValue = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CustomerInfo = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  marginBottom: '$3',
});

const CustomerMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const ChatButton = styled('button', {
  position: 'fixed',
  bottom: '$6',
  right: '$6',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '100px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.2)',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const EmployeeAvatar = styled('img', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const AssignBooking: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'previous'>('active');
  const [selectedBookingId, setSelectedBookingId] = useState('#589654');
  const [acceptanceFilter, setAcceptanceFilter] = useState('all');
  const [assignmentFilter, setAssignmentFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const bookings = [
    { id: '#589654', service: 'Full House', time: '4:00 PM', date: '02/12/2024', status: 'assigned' as const },
    { id: '#589654', service: 'Deep Cleaning', time: '4:00 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', service: 'Deep Cleaning', time: '5:30 PM', date: '02/12/2024', status: 'pending' as const },
    { id: '#589654', service: 'Full House', time: '9:00 AM', date: '02/13/2024', status: 'pending' as const },
    { id: '#589654', service: 'Deep Cleaning', time: '1:00 PM', date: '02/13/2024', status: 'assigned' as const },
    { id: '#589654', service: 'Deep Cleaning', time: '1:00 PM', date: '02/13/2024', status: 'assigned' as const },
    { id: '#589654', service: 'Full House', time: '12:30 PM', date: '02/13/2024', status: 'pending' as const },
    { id: '#589654', service: 'Full House', time: '12:30 PM', date: '02/13/2024', status: 'pending' as const },
  ];

  const selectedBooking = bookings.find(b => b.id === selectedBookingId) || bookings[0];

  return (
    <PlumbingLayout title="Assigning Booking">
      <Container>
        <LeftPanel>
          <TabsContainer>
            <Tab active={activeTab === 'active'} onClick={() => setActiveTab('active')}>
              Active Bookings
            </Tab>
            <Tab active={activeTab === 'previous'} onClick={() => navigate('/plumbing/assign-booking/previous')}>
              Previous Bookings
            </Tab>
          </TabsContainer>

          <SearchContainer>
            <SearchIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </SearchIcon>
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>

          <FiltersContainer>
            <FilterSelect value={acceptanceFilter} onChange={(e) => setAcceptanceFilter(e.target.value)}>
              <option value="all">Acceptance Status</option>
              <option value="accepted">Accepted</option>
              <option value="pending">Pending</option>
            </FilterSelect>
            <FilterSelect value={assignmentFilter} onChange={(e) => setAssignmentFilter(e.target.value)}>
              <option value="all">Assignment Status</option>
              <option value="assigned">Assigned</option>
              <option value="unassigned">Unassigned</option>
            </FilterSelect>
            <FilterSelect value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="all">Category</option>
              <option value="fullhouse">Full House</option>
              <option value="deepcleaning">Deep Cleaning</option>
            </FilterSelect>
          </FiltersContainer>

          <BookingsList>
            {bookings.map((booking, index) => (
              <BookingCard
                key={index}
                selected={booking.id === selectedBookingId}
                onClick={() => setSelectedBookingId(booking.id)}
              >
                <BookingHeader>
                  <BookingId>{booking.id}</BookingId>
                  <StatusBadge status={booking.status}>
                    {booking.status === 'assigned' ? 'Assigned' : 'Pending'}
                  </StatusBadge>
                </BookingHeader>
                <BookingService>{booking.service}</BookingService>
                <BookingMeta>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {booking.time}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                    <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 6H13M6 3V2M10 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {booking.date}
                </BookingMeta>
              </BookingCard>
            ))}
          </BookingsList>
        </LeftPanel>

        <RightPanel>
          <DetailsHeader>
            <DetailsTitle>{selectedBooking.id}</DetailsTitle>
            <AcceptedBadge>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="#2E7D32"/>
                <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Accepted
            </AcceptedBadge>
          </DetailsHeader>

          <AssignSection>
            <SectionLabel>Assign To:</SectionLabel>
            <EmployeeSelect>
              <option value="jess">Jess E</option>
              <option value="john">John Adam</option>
              <option value="sarah">Sarah Smith</option>
            </EmployeeSelect>
          </AssignSection>

          <DetailsSection>
            <DetailsSectionTitle>Service Details</DetailsSectionTitle>
            <ServiceDetail>Full House &gt; 1 BHK Furnished Bungalow | 300 OMR</ServiceDetail>
            <ServiceQuantity>Quantity: 1</ServiceQuantity>
            <ServiceDescription>
              Repairing A Tubelight Involves A Few Simple Steps. First, Ensure The Power Is Turned Off To Avoid Any Electrical Hazards. Next, Remove The Tubelight From Its Fixture By Gently Twisting It Out. Inspect The Tube For Any Signs Of Damage Or Burnt-Out Sections. If The Tube Is Faulty, Replace It With A New One Of The Same Type. After Replacing, Securely Reattach The Tubelight To The Fixture And Restore The Power. Finally, Test The Light To Ensure It's Working Properly.
            </ServiceDescription>
            <br />
            <ServiceDetail>Bathroom | 300 OMR</ServiceDetail>
            <ServiceQuantity>Quantity: 2</ServiceQuantity>
            <ServiceDescription>
              Repairing A Tubelight Involves A Few Simple Steps. First, Ensure The Power Is Turned Off To Avoid Any Electrical Hazards. Next, Remove The Tubelight From Its Fixture By Gently Twisting It Out. Inspect The Tube For Any Signs Of Damage Or Burnt-Out Sections. If The Tube Is Faulty, Replace It With A New One Of The Same Type. After Replacing, Securely Reattach The Tubelight To The Fixture And Restore The Power. Finally, Test The Light To Ensure It's Working Properly.
            </ServiceDescription>
          </DetailsSection>

          <DetailsSection>
            <DetailsSectionTitle>Payment Details</DetailsSectionTitle>
            <PaymentRow>
              <PaymentLabel>Payment Type</PaymentLabel>
              <PaymentValue>Cash on delivery</PaymentValue>
            </PaymentRow>
            <PaymentRow>
              <PaymentLabel>Amount</PaymentLabel>
              <PaymentValue>3500 OMR</PaymentValue>
            </PaymentRow>
          </DetailsSection>

          <DetailsSection>
            <DetailsSectionTitle>Customer Details</DetailsSectionTitle>
            <CustomerInfo>
              <div>
                <ServiceDetail style={{ marginBottom: '$2' }}>Name: Sam Tek</ServiceDetail>
                <CustomerMeta>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  4:00 PM
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                    <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 6H13M6 3V2M10 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  02/12/2024
                </CustomerMeta>
                <CustomerMeta>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14C8 14 2 10 2 6C2 3 4 2 6 2C7 2 8 3 8 3C8 3 9 2 10 2C12 2 14 3 14 6C14 10 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  P.O.Box 19, Khimji's Bait Al Ahlam, Al Noor St, Ruwi, Muscat
                </CustomerMeta>
              </div>
            </CustomerInfo>
          </DetailsSection>

          <ChatButton onClick={() => navigate('/plumbing/assign-booking/chat')}>
            <EmployeeAvatar src="https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21" alt="Jess E" />
            Chat Now with Jess E
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ChatButton>
        </RightPanel>
      </Container>
    </PlumbingLayout>
  );
};
