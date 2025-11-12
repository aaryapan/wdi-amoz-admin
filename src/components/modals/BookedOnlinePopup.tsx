import React from 'react';
import { styled } from '@/styles/theme';

const PopupOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

const PopupContent = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  maxWidth: '400px',
  width: '90%',
  position: 'relative',
});

const PopupHeader = styled('div', {
  backgroundColor: '$onboardingPrimary',
  margin: '-$6 -$6 $5 -$6',
  padding: '$3 $6',
  borderTopLeftRadius: '$lg',
  borderTopRightRadius: '$lg',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const PopupTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const CloseButton = styled('button', {
  width: '20px',
  height: '20px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const BookingId = styled('div', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  marginBottom: '$3',
});

const CustomerName = styled('div', {
  fontSize: '18px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  marginBottom: '$2',
  
  '& span': {
    fontWeight: '$normal',
    fontSize: '16px',
  },
});

const BookingTime = styled('div', {
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
});

interface BookedOnlinePopupProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: string;
  customerName: string;
  timeRange: string;
  date: string;
}

export const BookedOnlinePopup: React.FC<BookedOnlinePopupProps> = ({
  isOpen,
  onClose,
  bookingId,
  customerName,
  timeRange,
  date,
}) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupTitle>Booked Online</PopupTitle>
          <CloseButton onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </CloseButton>
        </PopupHeader>

        <BookingId>{bookingId}</BookingId>
        <CustomerName>By <span>{customerName}</span></CustomerName>
        <BookingTime>{timeRange} • {date}</BookingTime>
      </PopupContent>
    </PopupOverlay>
  );
};

