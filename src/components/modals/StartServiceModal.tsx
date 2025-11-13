import React from 'react';
import { styled } from '@/styles/theme';

const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

const ModalContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  width: '600px',
  maxWidth: '90vw',
});

const Title = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$5',
  fontFamily: 'Figtree, sans-serif',
});

const Label = styled('p', {
  fontSize: '14px',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const UploadArea = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  border: '2px dashed #e5e7eb',
  borderRadius: '$md',
  cursor: 'pointer',
  backgroundColor: '#f9fafb',
  marginBottom: '$6',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#E6F7F8',
  },
  
  '& svg': {
    width: '40px',
    height: '40px',
    color: '$textLight',
    marginBottom: '$2',
  },
});

const UploadText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const HiddenInput = styled('input', {
  display: 'none',
});

const StartButton = styled('button', {
  width: '100%',
  padding: '$4',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

interface StartServiceModalProps {
  onClose: () => void;
}

export const StartServiceModal: React.FC<StartServiceModalProps> = ({ onClose }) => {
  const handleStart = () => {
    // Start service logic - timer starts here
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>Start Service</Title>
        
        <Label>Upload Before photos and videos of the vehicle*</Label>
        
        <UploadArea>
          <UploadIcon />
          <UploadText>Add an attachment</UploadText>
          <HiddenInput
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={() => {/* file upload handler */}}
          />
        </UploadArea>

        <StartButton onClick={handleStart}>Start Service</StartButton>
      </ModalContainer>
    </Overlay>
  );
};

