import React, { useState } from 'react';
import { styled } from '@/styles/theme';

const ModalOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

const ModalContent = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$8',
  maxWidth: '500px',
  width: '90%',
  position: 'relative',
});

const ModalHeader = styled('div', {
  backgroundColor: '$onboardingPrimary',
  margin: '-$8 -$8 $6 -$8',
  padding: '$4 $8',
  borderTopLeftRadius: '$lg',
  borderTopRightRadius: '$lg',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ModalTitle = styled('h2', {
  fontSize: '18px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const CloseButton = styled('button', {
  width: '24px',
  height: '24px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const RadioGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginBottom: '$6',
});

const RadioOption = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  fontSize: '16px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const RadioInput = styled('input', {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});

const TextAreaLabel = styled('label', {
  display: 'block',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  marginBottom: '$2',
});

const TextArea = styled('textarea', {
  width: '100%',
  minHeight: '120px',
  padding: '$4',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  resize: 'vertical',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
  
  '&::placeholder': {
    color: '#999',
  },
});

const ConfirmButton = styled('button', {
  width: '100%',
  padding: '$3',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '#D32F2F',
  color: '$white',
  cursor: 'pointer',
  marginTop: '$4',
  
  '&:hover': {
    backgroundColor: '#B71C1C',
  },
});

interface CancelBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string, details: string) => void;
}

export const CancelBookingModal: React.FC<CancelBookingModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [details, setDetails] = useState('');

  const reasons = [
    'No Longer Needed',
    'Found Alternative Provider',
    'Emergency Situation',
    'Incorrect Booking Details',
    'Other',
  ];

  const handleConfirm = () => {
    onConfirm(selectedReason, details);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Cancel Booking</ModalTitle>
          <CloseButton onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </CloseButton>
        </ModalHeader>

        <RadioGroup>
          {reasons.map((reason) => (
            <RadioOption key={reason}>
              <RadioInput
                type="radio"
                name="reason"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
              />
              {reason}
            </RadioOption>
          ))}
        </RadioGroup>

        <div>
          <TextAreaLabel>Enter reason for cancelling the booking</TextAreaLabel>
          <TextArea
            placeholder="Enter here"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <ConfirmButton onClick={handleConfirm}>Cancel Booking</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
};

