import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';
import { PackageExtendModal } from '@/components/modals/PackageExtendModal';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  height: 'calc(100vh - 68px)',
});

const TopBar = styled('div', {
  backgroundColor: '$white',
  borderBottom: '1px solid #e9ebf0',
  padding: '$5 $9',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TabsContainer = styled('div', {
  display: 'flex',
  gap: '$8',
});

const Tab = styled('button', {
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  color: '#7a8699',
  transition: 'color 0.2s ease',
  
  '&:hover': {
    color: '#286d71',
  },
  
  variants: {
    active: {
      true: {
        color: '#286d71',
      },
    },
  },
});

const RightSection = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
});

const SearchInput = styled('div', {
  position: 'relative',
  width: '400px',
  
  '& svg': {
    position: 'absolute',
    left: '$3',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  
  '& input': {
    width: '100%',
    padding: '$3 $3 $3 $10',
    border: '1px solid #eaecf0',
    borderRadius: '12px',
    fontSize: '14px',
    fontFamily: 'Figtree, sans-serif',
    
    '&:focus': {
      outline: 'none',
      borderColor: '#64C2C8',
    },
    
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

const BookingsButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3',
  backgroundColor: 'rgba(100, 194, 200, 0.1)',
  border: 'none',
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '#1d1d1d',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: 'rgba(100, 194, 200, 0.2)',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const FiltersBar = styled('div', {
  backgroundColor: '$white',
  borderBottom: '1px solid #e9ebf0',
  padding: '$4 $9',
  display: 'flex',
  gap: '$4',
});

const Select = styled('select', {
  padding: '$3 $4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  minWidth: '180px',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const MainContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '380px 1fr',
  height: 'calc(100% - 120px)',
  overflow: 'hidden',
});

const BookingsList = styled('div', {
  backgroundColor: '#f5f6f7',
  overflowY: 'auto',
  padding: '$4',
});

const BookingCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$4',
  marginBottom: '$3',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  
  '&:hover': {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
  },
  
  variants: {
    selected: {
      true: {
        borderLeft: '4px solid #64C2C8',
        backgroundColor: '#E6F7F8',
      },
    },
  },
});

const BookingCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',
});

const BookingId = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const InfoBadge = styled('div', {
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: '#3B82F6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: '$bold',
  color: '$white',
});

const StatusBadge = styled('span', {
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      new: {
        backgroundColor: '#d1fae5',
        color: '#059669',
      },
      ongoing: {
        backgroundColor: '#fed7aa',
        color: '#ea580c',
      },
      completed: {
        backgroundColor: '#dbeafe',
        color: '#2563eb',
      },
      pending: {
        backgroundColor: '#fed7aa',
        color: '#ea580c',
      },
      assigned: {
        backgroundColor: '#d1fae5',
        color: '#059669',
      },
    },
  },
});

const BookingCardBody = styled('div', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
  fontWeight: '$semibold',
});

const BookingCardMeta = styled('div', {
  display: 'flex',
  gap: '$4',
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  
  '& svg': {
    width: '14px',
    height: '14px',
    marginRight: '4px',
  },
});

const DetailPanel = styled('div', {
  backgroundColor: '$white',
  overflowY: 'auto',
  padding: '$6 $9',
  position: 'relative',
});

const DetailHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const DetailTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const DetailId = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const EditIcon = styled('button', {
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  color: '#64C2C8',
  
  '&:hover': {
    backgroundColor: '#E6F7F8',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const Section = styled('div', {
  marginBottom: '$6',
});

const SectionTitle = styled('h4', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$4',
  fontFamily: 'Figtree, sans-serif',
});

const DetailRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '& .label': {
    color: '$textLight',
  },
  
  '& .value': {
    color: '$text',
    fontWeight: '$medium',
  },
  
  variants: {
    status: {
      success: {
        '& .value': {
          color: '#059669',
        },
      },
      pending: {
        '& .value': {
          color: '#ea580c',
        },
      },
    },
  },
});

const DocumentLinks = styled('div', {
  display: 'flex',
  gap: '$3',
  marginTop: '$3',
});

const DocumentLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '$md',
  fontSize: '13px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const ImagesLabel = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const ImagesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$3',
  marginBottom: '$4',
});

const FeedbackSection = styled('div', {
  marginTop: '$4',
});

const RatingDisplay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$3',
});

const RatingNumber = styled('span', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Stars = styled('div', {
  display: 'flex',
  gap: '$1',
  
  '& svg': {
    width: '18px',
    height: '18px',
    fill: '#FCD34D',
    stroke: 'none',
  },
});

const FeedbackDate = styled('span', {
  fontSize: '13px',
  color: '$textLight',
  marginLeft: 'auto',
  fontFamily: 'Figtree, sans-serif',
});

const FeedbackText = styled('p', {
  fontSize: '14px',
  color: '$text',
  lineHeight: '1.6',
  fontFamily: 'Figtree, sans-serif',
});

const ActionButtons = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$6',
  justifyContent: 'flex-end',
});

const ActionButton = styled('button', {
  padding: '$3 $6',
  borderRadius: '$md',
  fontSize: '15px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: 'none',
  minWidth: '120px',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '#64C2C8',
        color: '$white',
        
        '&:hover': {
          backgroundColor: '#50aeb4',
        },
      },
      secondary: {
        backgroundColor: '#e5e7eb',
        color: '$text',
        
        '&:hover': {
          backgroundColor: '#d1d5db',
        },
      },
    },
  },
});

// Icons
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
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

const CalendarSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const EditIconSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

type TabType = 'new' | 'active' | 'completed';

interface Booking {
  id: string;
  vehicle: string;
  duration: string;
  date: string;
  status: 'new' | 'ongoing' | 'completed' | 'pending' | 'assigned';
  hasInfo?: boolean;
  customer: string;
  vehicleId: string;
  paymentType: string;
  durationDays: string;
  amountPerDay: string;
  total: string;
  paymentStatus: string;
  address: string;
  license: string;
  omanId: string;
  beforeImages?: string[];
  afterImages?: string[];
  feedback?: {
    rating: number;
    date: string;
    text: string;
  };
}

const mockBookings: Record<TabType, Booking[]> = {
  new: [
    {
      id: '#589654',
      vehicle: 'Turbo Falcon 3000',
      duration: '7 Days',
      date: '02/12/2024',
      status: 'new',
      customer: 'Sam Tek',
      vehicleId: '158445A484',
      paymentType: 'Cash on delivery',
      durationDays: '7 Days',
      amountPerDay: '500',
      total: '3500 OMR',
      paymentStatus: 'Received',
      address: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St,Ruwi,Muscat',
      license: 'Document.pdf',
      omanId: 'Document.pdf',
    },
    {
      id: '#589654',
      vehicle: 'Turbo Falcon 3000',
      duration: '7 Days',
      date: '02/12/2024',
      status: 'new',
      customer: 'Sam Tek',
      vehicleId: '158445A484',
      paymentType: 'Cash on delivery',
      durationDays: '7 Days',
      amountPerDay: '500',
      total: '3500 OMR',
      paymentStatus: 'Received',
      address: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St,Ruwi,Muscat',
      license: 'Document.pdf',
      omanId: 'Document.pdf',
    },
  ],
  active: [
    {
      id: '#589654',
      vehicle: 'Turbo Falcon 3000',
      duration: '7 Days',
      date: '02/12/2024',
      status: 'ongoing',
      hasInfo: true,
      customer: 'Sam Tek',
      vehicleId: '158445A484',
      paymentType: 'Cash on delivery',
      durationDays: '7 Days',
      amountPerDay: '500',
      total: '3500 OMR',
      paymentStatus: 'Received',
      address: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St,Ruwi,Muscat',
      license: 'Document.pdf',
      omanId: 'Document.pdf',
      beforeImages: ['img.jpg', 'img.jpg'],
    },
    {
      id: '#589654',
      vehicle: 'Turbo Falcon 3000',
      duration: '7 Days',
      date: '02/12/2024',
      status: 'new',
      customer: 'Sam Tek',
      vehicleId: '158445A484',
      paymentType: 'Cash on delivery',
      durationDays: '7 Days',
      amountPerDay: '500',
      total: '3500 OMR',
      paymentStatus: 'Received',
      address: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St,Ruwi,Muscat',
      license: 'Document.pdf',
      omanId: 'Document.pdf',
    },
  ],
  completed: [
    {
      id: '#589654',
      vehicle: 'Turbo Falcon 3000',
      duration: '7 Days',
      date: '02/12/2024',
      status: 'completed',
      customer: 'Sam Tek',
      vehicleId: '158445A484',
      paymentType: 'Cash on delivery',
      durationDays: '7 Days',
      amountPerDay: '500',
      total: '3500 OMR',
      paymentStatus: 'Pending',
      address: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St,Ruwi,Muscat',
      license: 'Document.pdf',
      omanId: 'Document.pdf',
      beforeImages: ['img.jpg', 'img.jpg'],
      afterImages: ['img.jpg', 'img.jpg'],
      feedback: {
        rating: 4,
        date: '04/10/2024',
        text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Praesent At Urna Vel Nibh Gravida Porttitor. Vestibulum In Hendrerit Metus, Non Tincidunt Purus. In Sagittis Nisi Ut Nisl Fringilla Imperdiet. Class',
      },
    },
  ],
};

export const BookingManagement: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('new');
  const [selectedBooking, setSelectedBooking] = useState<Booking>(mockBookings.new[0]);
  const [showPackageExtend, setShowPackageExtend] = useState(false);

  return (
    <VehicleLayout title="Booking Management">
      <Container>
        <TopBar>
          <TabsContainer>
            <Tab active={activeTab === 'new'} onClick={() => { setActiveTab('new'); setSelectedBooking(mockBookings.new[0]); }}>
              New Bookings
            </Tab>
            <Tab active={activeTab === 'active'} onClick={() => { setActiveTab('active'); setSelectedBooking(mockBookings.active[0]); }}>
              Active Bookings
            </Tab>
            <Tab active={activeTab === 'completed'} onClick={() => { setActiveTab('completed'); setSelectedBooking(mockBookings.completed[0]); }}>
              Completed Bookings
            </Tab>
          </TabsContainer>

          <RightSection>
            <SearchInput>
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </SearchInput>
            <BookingsButton onClick={() => navigate('/vehicle/bookings/calendar')}>
              <CalendarIcon />
              Bookings
            </BookingsButton>
          </RightSection>
        </TopBar>

        <FiltersBar>
          <Select>
            <option>Acceptance Status</option>
          </Select>
          <Select>
            <option>Assignment Status</option>
          </Select>
          <Select>
            <option>Category</option>
          </Select>
        </FiltersBar>

        <MainContent>
          <BookingsList>
            {mockBookings[activeTab].map((booking, index) => (
              <BookingCard
                key={`${booking.id}-${index}`}
                selected={selectedBooking === booking}
                onClick={() => setSelectedBooking(booking)}
              >
                <BookingCardHeader>
                  <BookingId>
                    {booking.id}
                    {booking.hasInfo && <InfoBadge>i</InfoBadge>}
                  </BookingId>
                  <StatusBadge status={booking.status}>
                    {booking.status === 'ongoing' ? 'Ongoing' : booking.status === 'new' ? 'New' : 'Completed'}
                  </StatusBadge>
                </BookingCardHeader>
                <BookingCardBody>{booking.vehicle}</BookingCardBody>
                <BookingCardMeta>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <ClockIcon /> {booking.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarSmallIcon /> {booking.date}
                  </span>
                </BookingCardMeta>
              </BookingCard>
            ))}
          </BookingsList>

          <DetailPanel>
            <DetailHeader>
              <DetailTitle>
                <DetailId>{selectedBooking.id}</DetailId>
                <StatusBadge status={selectedBooking.status}>
                  {selectedBooking.status === 'ongoing' ? 'Ongoing' : selectedBooking.status === 'new' ? 'New' : 'Completed'}
                </StatusBadge>
              </DetailTitle>
              <EditIcon>
                <EditIconSvg />
              </EditIcon>
            </DetailHeader>

            <Section>
              <SectionTitle>Booking Details</SectionTitle>
              <DetailRow>
                <span className="label">Vehicle Name:</span>
                <span className="value">{selectedBooking.vehicle}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Vehicle Id:</span>
                <span className="value">{selectedBooking.vehicleId}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">
                  <ClockIcon /> {selectedBooking.durationDays}
                </span>
                <span className="value">
                  <CalendarSmallIcon /> 02/12/2024 - 09/12/2024
                </span>
              </DetailRow>
            </Section>

            {selectedBooking.beforeImages && (
              <Section>
                <SectionTitle>Images</SectionTitle>
                <ImagesLabel>Before Service</ImagesLabel>
                <ImagesGrid>
                  {selectedBooking.beforeImages.map((img, idx) => (
                    <DocumentLink key={idx}>
                      <FileIcon /> {img}
                    </DocumentLink>
                  ))}
                </ImagesGrid>
                {selectedBooking.afterImages && (
                  <>
                    <ImagesLabel>After Service</ImagesLabel>
                    <ImagesGrid>
                      {selectedBooking.afterImages.map((img, idx) => (
                        <DocumentLink key={idx}>
                          <FileIcon /> {img}
                        </DocumentLink>
                      ))}
                    </ImagesGrid>
                  </>
                )}
              </Section>
            )}

            <Section>
              <SectionTitle>Payment Details</SectionTitle>
              <DetailRow>
                <span className="label">Payment Type</span>
                <span className="value">{selectedBooking.paymentType}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Duration</span>
                <span className="value">Amount \ day</span>
              </DetailRow>
              <DetailRow>
                <span className="label">{selectedBooking.durationDays}</span>
                <span className="value">{selectedBooking.amountPerDay}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Total</span>
                <span className="value">{selectedBooking.total}</span>
              </DetailRow>
              <DetailRow status={selectedBooking.paymentStatus === 'Received' ? 'success' : 'pending'}>
                <span className="label">Payment Status</span>
                <span className="value">{selectedBooking.paymentStatus}</span>
              </DetailRow>
            </Section>

            <Section>
              <SectionTitle>Customer Details</SectionTitle>
              <DetailRow>
                <span className="label">Name:</span>
                <span className="value">{selectedBooking.customer}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Address:</span>
                <span className="value">{selectedBooking.address}</span>
              </DetailRow>
              <DocumentLinks>
                <DocumentLink>
                  <FileIcon /> {selectedBooking.license}
                </DocumentLink>
                <DocumentLink>
                  <FileIcon /> {selectedBooking.omanId}
                </DocumentLink>
              </DocumentLinks>
            </Section>

            {selectedBooking.feedback && (
              <Section>
                <SectionTitle>Feedback</SectionTitle>
                <FeedbackSection>
                  <RatingDisplay>
                    <RatingNumber>{selectedBooking.feedback.rating}</RatingNumber>
                    <Stars>
                      {Array.from({ length: selectedBooking.feedback.rating }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </Stars>
                    <FeedbackDate>{selectedBooking.feedback.date}</FeedbackDate>
                  </RatingDisplay>
                  <FeedbackText>{selectedBooking.feedback.text}</FeedbackText>
                </FeedbackSection>
              </Section>
            )}

            <ActionButtons>
              {activeTab === 'new' && (
                <>
                  <ActionButton variant="secondary">Decline</ActionButton>
                  <ActionButton variant="primary">Accept</ActionButton>
                </>
              )}
              {activeTab === 'active' && (
                <ActionButton variant="secondary">Mark as Complete</ActionButton>
              )}
            </ActionButtons>
          </DetailPanel>
        </MainContent>

        {showPackageExtend && (
          <PackageExtendModal
            onClose={() => setShowPackageExtend(false)}
            onAccept={() => setShowPackageExtend(false)}
            onDecline={() => setShowPackageExtend(false)}
          />
        )}
      </Container>
    </VehicleLayout>
  );
};

