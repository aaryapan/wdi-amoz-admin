import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';
import { RescheduleBookingModal } from '@/components/modals/RescheduleBookingModal';
import { CancelBookingModal } from '@/components/modals/CancelBookingModal';
import { BookedOnlinePopup } from '@/components/modals/BookedOnlinePopup';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 120px)',
  gap: 0,
});

// Left Panel - Booking List
const LeftPanel = styled('div', {
  width: '420px',
  backgroundColor: '$white',
  borderRight: '1px solid #E0E0E0',
  display: 'flex',
  flexDirection: 'column',
});

const TopBar = styled('div', {
  borderBottom: '1px solid rgba(0, 31, 84, 0.25)',
  padding: '20px 24px',
});

const TabMenu = styled('div', {
  display: 'flex',
  gap: '$8',
  marginBottom: '$4',
});

const Tab = styled('button', {
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  lineHeight: '16px',
  
  variants: {
    active: {
      true: {
        color: '#286d71',
      },
      false: {
        color: '#7a8699',
      },
    },
  },
});

const SearchContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  gap: '$3',
  marginTop: '$4',
});

const SearchInput = styled('input', {
  flex: 1,
  height: '40px',
  padding: '0 16px 0 40px',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
  
  '&::placeholder': {
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

const SearchIcon = styled('div', {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  
  '& svg': {
    width: '20px',
    height: '20px',
    color: '#666',
  },
});

const BookingsButton = styled('button', {
  padding: '0 $4',
  height: '40px',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  backgroundColor: 'transparent',
  border: '1px solid $onboardingPrimary',
  color: '$onboardingPrimary',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: 'rgba(100, 194, 200, 0.1)',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const BookingList = styled('div', {
  flex: 1,
  overflowY: 'auto',
  padding: '$4',
});

const BookingItem = styled('div', {
  padding: '$4',
  marginBottom: '$3',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: '1px solid transparent',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  
  variants: {
    selected: {
      true: {
        backgroundColor: '#F0F9FA',
        border: '1px solid $onboardingPrimary',
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

const BookingId = styled('span', {
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const StatusBadge = styled('span', {
  padding: '4px 8px',
  borderRadius: '$sm',
  fontSize: '12px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  
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
      assigned: {
        backgroundColor: 'rgba(61, 167, 29, 0.1)',
        color: '#3DA71D',
      },
      cancelled: {
        backgroundColor: 'rgba(211, 47, 47, 0.1)',
        color: '#D32F2F',
      },
      declined: {
        backgroundColor: 'rgba(211, 47, 47, 0.1)',
        color: '#D32F2F',
      },
    },
  },
});

const CustomerName = styled('div', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  marginBottom: '$2',
});

const BookingMeta = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
});

const MetaItem = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  fontSize: '12px',
  color: '#666',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

// Right Panel - Booking Details
const RightPanel = styled('div', {
  flex: 1,
  backgroundColor: '$white',
  padding: '$6',
  overflowY: 'auto',
});

const DetailsHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const BookingIdLarge = styled('span', {
  fontSize: '20px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const MoreButton = styled('button', {
  width: '32px',
  height: '32px',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  backgroundColor: '$white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const PopupMenu = styled('div', {
  position: 'absolute',
  right: 0,
  top: '40px',
  backgroundColor: '$white',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '$2',
  minWidth: '150px',
  zIndex: 10,
});

const MenuItem = styled('button', {
  width: '100%',
  padding: '$3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  textAlign: 'left',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  
  variants: {
    variant: {
      default: {
        color: '$text',
      },
      danger: {
        color: '#D32F2F',
      },
    },
  },
});

const DetailsSection = styled('div', {
  marginBottom: '$6',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  marginBottom: '$4',
});

const DetailRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$3',
  
  '& svg': {
    width: '20px',
    height: '20px',
    color: '#666',
  },
});

const DetailLabel = styled('span', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  minWidth: '100px',
});

const DetailValue = styled('span', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const DocumentLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '$onboardingPrimary',
  textDecoration: 'none',
  border: '1px solid $onboardingPrimary',
  borderRadius: '$md',
  
  '&:hover': {
    backgroundColor: 'rgba(100, 194, 200, 0.1)',
  },
});

const FeedbackSection = styled('div', {
  marginTop: '$6',
});

const RatingRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$3',
});

const RatingStars = styled('div', {
  display: 'flex',
  gap: '$1',
  
  '& svg': {
    width: '20px',
    height: '20px',
    fill: '#FFB800',
  },
});

const RatingDate = styled('span', {
  fontSize: '12px',
  fontFamily: 'Figtree, sans-serif',
  color: '#999',
});

const FeedbackText = styled('p', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  lineHeight: 1.6,
  margin: 0,
});

const PaymentStatusReceived = styled('span', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#3DA71D',
  fontWeight: '$medium',
});

const ActionButtons = styled('div', {
  display: 'flex',
  gap: '$3',
  marginTop: '$6',
});

const ActionButton = styled('button', {
  flex: 1,
  padding: '$3',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  variants: {
    variant: {
      decline: {
        backgroundColor: 'transparent',
        border: '1px solid #E0E0E0',
        color: '$text',
        
        '&:hover': {
          backgroundColor: '#F5F5F5',
        },
      },
      accept: {
        backgroundColor: '$onboardingPrimary',
        border: 'none',
        color: '$text',
        
        '&:hover': {
          backgroundColor: '#3d9cb3',
        },
      },
    },
  },
});

interface Booking {
  id: string;
  customerName: string;
  time: string;
  date: string;
  status: 'pending' | 'accepted' | 'assigned' | 'cancelled' | 'declined';
  service?: string;
  email?: string;
  phone?: string;
  location?: string;
  paymentType?: string;
  amount?: number;
  rating?: number;
  feedback?: string;
  feedbackDate?: string;
}

export const CustomerBookings: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'previous'>('active');
  const [selectedBookingId, setSelectedBookingId] = useState('#589654');
  const [showMenu, setShowMenu] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showOnlinePopup, setShowOnlinePopup] = useState(false);

  const activeBookings: Booking[] = [
    {
      id: '#589654',
      customerName: 'Saniya Sanghvi',
      time: '4:00 PM',
      date: '02/12/2024',
      status: 'accepted',
      email: 'saniyasanghvi.8967@gmail.com',
      phone: '6975235441',
      location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat',
      paymentType: 'Cash on delivery',
      amount: 3500,
    },
    {
      id: '#589654',
      customerName: 'Sam Tek',
      time: '4:00 PM',
      date: '02/12/2024',
      status: 'pending',
    },
  ];

  const previousBookings: Booking[] = [
    {
      id: '#589654',
      customerName: 'Saniya Sanghvi',
      time: '4:00 PM',
      date: '02/12/2024',
      status: 'accepted',
      email: 'saniyasanghvi.8967@gmail.com',
      phone: '6975235441',
      location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat',
      paymentType: 'Cash on delivery',
      amount: 3500,
      rating: 4,
      feedback: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Praesent At Urna Vel Nibh Gravida Porttitor. Vestibulum In Hendrerit Metus. Non Tincidunt Purus. In Sagittis Nisi Ut Nisl Fringilla Imperdiet. Class Aptent Taciti Sociosqu Ad Litora Torquent',
      feedbackDate: '04/10/2024',
    },
  ];

  const bookings = activeTab === 'active' ? activeBookings : previousBookings;
  const selectedBooking = bookings.find(b => b.id === selectedBookingId) || bookings[0];

  const handleReschedule = (reason: string, details: string, date: string, time: string) => {
    console.log('Rescheduling:', { reason, details, date, time });
  };

  const handleCancel = (reason: string, details: string) => {
    console.log('Cancelling:', { reason, details });
  };

  return (
    <DrivingLayout title="Booking Management">
      <Container>
        {/* Left Panel - Booking List */}
        <LeftPanel>
          <TopBar>
            <TabMenu>
              <Tab
                active={activeTab === 'active'}
                onClick={() => setActiveTab('active')}
              >
                Active Booking Requests
              </Tab>
              <Tab
                active={activeTab === 'previous'}
                onClick={() => setActiveTab('previous')}
              >
                Previous Bookings
              </Tab>
            </TabMenu>
            
            <SearchContainer>
              <SearchIcon>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </SearchIcon>
              <SearchInput type="text" placeholder="Search" />
              <BookingsButton onClick={() => navigate('/driving/bookings/calendar')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Bookings
              </BookingsButton>
            </SearchContainer>
          </TopBar>

          <BookingList>
            {bookings.map((booking, index) => (
              <BookingItem
                key={`${booking.id}-${index}`}
                selected={selectedBookingId === booking.id && index === 0}
                onClick={() => setSelectedBookingId(booking.id)}
              >
                <BookingHeader>
                  <BookingId>{booking.id}</BookingId>
                  <StatusBadge status={booking.status}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </StatusBadge>
                </BookingHeader>
                <CustomerName>{booking.customerName}</CustomerName>
                <BookingMeta>
                  <MetaItem>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {booking.time}
                  </MetaItem>
                  <MetaItem>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {booking.date}
                  </MetaItem>
                </BookingMeta>
              </BookingItem>
            ))}
          </BookingList>
        </LeftPanel>

        {/* Right Panel - Booking Details */}
        <RightPanel>
          <DetailsHeader>
            <BookingIdLarge>{selectedBooking.id}</BookingIdLarge>
            <MoreButton onClick={() => setShowMenu(!showMenu)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
              {showMenu && (
                <PopupMenu>
                  <MenuItem variant="default" onClick={() => {
                    setShowRescheduleModal(true);
                    setShowMenu(false);
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    Reschedule
                  </MenuItem>
                  <MenuItem variant="danger" onClick={() => {
                    setShowCancelModal(true);
                    setShowMenu(false);
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Cancel Booking
                  </MenuItem>
                </PopupMenu>
              )}
            </MoreButton>
          </DetailsHeader>

          <DetailsSection>
            <SectionTitle>Customer Details</SectionTitle>
            <DetailRow>
              <DetailLabel>Name:</DetailLabel>
              <DetailValue>{selectedBooking.customerName}</DetailValue>
            </DetailRow>
            <DetailRow>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <DetailValue>{selectedBooking.time}</DetailValue>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <DetailValue>{selectedBooking.date}</DetailValue>
            </DetailRow>
            {selectedBooking.location && (
              <DetailRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <DetailValue>{selectedBooking.location}</DetailValue>
              </DetailRow>
            )}
            {selectedBooking.email && (
              <DetailRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <DetailValue>{selectedBooking.email}</DetailValue>
              </DetailRow>
            )}
            {selectedBooking.phone && (
              <DetailRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <DetailValue>{selectedBooking.phone}</DetailValue>
              </DetailRow>
            )}
            <DetailRow>
              <DetailLabel>Licence:</DetailLabel>
              <DocumentLink href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Document.pdf
              </DocumentLink>
            </DetailRow>
          </DetailsSection>

          <DetailsSection>
            <SectionTitle>Payment Details</SectionTitle>
            <DetailRow>
              <DetailLabel>Payment Type</DetailLabel>
              <DetailValue>{selectedBooking.paymentType || 'Cash on delivery'}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Amount</DetailLabel>
              <DetailValue>{selectedBooking.amount || 3500} OMR</DetailValue>
            </DetailRow>
            {activeTab === 'previous' && (
              <DetailRow>
                <DetailLabel>Payment Status</DetailLabel>
                <PaymentStatusReceived>Received</PaymentStatusReceived>
              </DetailRow>
            )}
          </DetailsSection>

          {activeTab === 'previous' && selectedBooking.rating && (
            <FeedbackSection>
              <SectionTitle>Feedback</SectionTitle>
              <RatingRow>
                <RatingStars>
                  {Array.from({ length: selectedBooking.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </RatingStars>
                <RatingDate>{selectedBooking.feedbackDate}</RatingDate>
              </RatingRow>
              <FeedbackText>{selectedBooking.feedback}</FeedbackText>
            </FeedbackSection>
          )}

          {activeTab === 'active' && selectedBooking.status === 'pending' && (
            <ActionButtons>
              <ActionButton variant="decline">Decline</ActionButton>
              <ActionButton variant="accept">Accept</ActionButton>
            </ActionButtons>
          )}
          
          {activeTab === 'active' && selectedBooking.status === 'accepted' && (
            <ActionButtons>
              <ActionButton variant="accept">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Accepted
              </ActionButton>
            </ActionButtons>
          )}
        </RightPanel>
      </Container>

      {/* Modals */}
      <RescheduleBookingModal
        isOpen={showRescheduleModal}
        onClose={() => setShowRescheduleModal(false)}
        onConfirm={handleReschedule}
      />
      
      <CancelBookingModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
      />
      
      <BookedOnlinePopup
        isOpen={showOnlinePopup}
        onClose={() => setShowOnlinePopup(false)}
        bookingId="#515145"
        customerName="Sam Tek"
        timeRange="7:00 am - 7:30 am"
        date="21/02/21"
      />
    </DrivingLayout>
  );
};
