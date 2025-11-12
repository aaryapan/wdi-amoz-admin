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
  maxWidth: '600px',
  width: '90%',
  maxHeight: '90vh',
  overflowY: 'auto',
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

const DateSelector = styled('div', {
  marginBottom: '$6',
});

const SectionLabel = styled('label', {
  display: 'block',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  marginBottom: '$3',
});

const DateScroll = styled('div', {
  display: 'flex',
  gap: '$3',
  overflowX: 'auto',
  padding: '$3',
  backgroundColor: '#F0F9FA',
  borderRadius: '$md',
  
  '&::-webkit-scrollbar': {
    height: '6px',
  },
  
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#E0E0E0',
    borderRadius: '$sm',
  },
  
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$onboardingPrimary',
    borderRadius: '$sm',
  },
});

const DateButton = styled('button', {
  minWidth: '60px',
  padding: '$3',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '$white',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',
  transition: 'all 0.2s',
  
  '&:hover': {
    backgroundColor: '$onboardingPrimary',
  },
  
  variants: {
    selected: {
      true: {
        backgroundColor: '$onboardingPrimary',
      },
    },
  },
});

const DateMonth = styled('span', {
  fontSize: '12px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
});

const DateNumber = styled('span', {
  fontSize: '18px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const DateDay = styled('span', {
  fontSize: '11px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
});

const TimeSlotGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$3',
  padding: '$4',
  backgroundColor: '#F0F9FA',
  borderRadius: '$md',
  marginBottom: '$6',
});

const TimeSlotButton = styled('button', {
  padding: '$3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '$white',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  '&:hover': {
    backgroundColor: '$onboardingPrimary',
  },
  
  variants: {
    selected: {
      true: {
        backgroundColor: '$onboardingPrimary',
        fontWeight: '$semibold',
      },
    },
  },
});

const NextButton = styled('button', {
  width: '100%',
  padding: '$3',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '$onboardingPrimary',
  color: '$text',
  cursor: 'pointer',
  marginTop: '$4',
  
  '&:hover': {
    backgroundColor: '#3d9cb3',
  },
});

interface RescheduleBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string, details: string, date: string, time: string) => void;
}

export const RescheduleBookingModal: React.FC<RescheduleBookingModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [step, setStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState('');
  const [details, setDetails] = useState('');
  const [selectedDate, setSelectedDate] = useState('Jun 12');
  const [selectedTime, setSelectedTime] = useState('8.30 AM');

  const reasons = [
    'No Longer Needed',
    'Found Alternative Provider',
    'Emergency Situation',
    'Incorrect Booking Details',
    'Other',
  ];

  const dates = [
    { month: 'Jun', day: 11, dayName: 'Fri' },
    { month: 'Jun', day: 12, dayName: 'Sat' },
    { month: 'Jun', day: 13, dayName: 'Sun' },
    { month: 'Jun', day: 14, dayName: 'Mon' },
    { month: 'Jun', day: 15, dayName: 'Tue' },
    { month: 'Jun', day: 16, dayName: 'Wed' },
    { month: 'Jun', day: 17, dayName: 'Thu' },
  ];

  const timeSlots = [
    '8.30 AM', '9.00 AM', '9.30 AM', '10.00 AM',
    '10.30 AM', '11.00 AM', '11.30 AM', '12.00 PM',
    '12.30 PM', '1.00 PM', '1.30 PM', '2.00 PM',
    '2.30 PM', '3.00 PM', '3.30 PM', '4.00 PM',
    '4.30 PM', '5.00 PM', '5.30 PM', '6.00 PM',
    '6.30 PM', '7.00 PM', '7.30 PM', '8.00 PM',
    '8.30 PM',
  ];

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onConfirm(selectedReason, details, selectedDate, selectedTime);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Reschedule Booking</ModalTitle>
          <CloseButton onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </CloseButton>
        </ModalHeader>

        {step === 1 ? (
          <>
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
              <TextAreaLabel>Enter reason for rescheduling the booking</TextAreaLabel>
              <TextArea
                placeholder="Enter here"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <NextButton onClick={handleNext}>Next</NextButton>
          </>
        ) : (
          <>
            <DateSelector>
              <SectionLabel>Select Date</SectionLabel>
              <DateScroll>
                {dates.map((date) => (
                  <DateButton
                    key={`${date.month}-${date.day}`}
                    selected={selectedDate === `${date.month} ${date.day}`}
                    onClick={() => setSelectedDate(`${date.month} ${date.day}`)}
                  >
                    <DateMonth>{date.month}</DateMonth>
                    <DateNumber>{date.day}</DateNumber>
                    <DateDay>{date.dayName}</DateDay>
                  </DateButton>
                ))}
              </DateScroll>
            </DateSelector>

            <div>
              <SectionLabel>Preferred time slot</SectionLabel>
              <TimeSlotGrid>
                {timeSlots.map((time) => (
                  <TimeSlotButton
                    key={time}
                    selected={selectedTime === time}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </TimeSlotButton>
                ))}
              </TimeSlotGrid>
            </div>

            <NextButton onClick={handleNext}>Reschedule Booking</NextButton>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

