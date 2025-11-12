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
  maxHeight: '90vh',
  overflowY: 'auto',
});

const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$5',
});

const InfoIcon = styled('div', {
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    width: '24px',
    height: '24px',
    color: '#3B82F6',
  },
});

const Title = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Details = styled('div', {
  marginBottom: '$6',
});

const DetailRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',
  fontSize: '15px',
  fontFamily: 'Figtree, sans-serif',
  
  '& .label': {
    color: '$textLight',
  },
  
  '& .value': {
    color: '$text',
    fontWeight: '$medium',
  },
});

const Actions = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$6',
});

const Button = styled('button', {
  flex: 1,
  padding: '$3',
  borderRadius: '$md',
  fontSize: '15px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: 'none',
  
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

const InfoIconSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

interface PackageExtendModalProps {
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export const PackageExtendModal: React.FC<PackageExtendModalProps> = ({ onClose, onAccept, onDecline }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <InfoIcon>
            <InfoIconSvg />
          </InfoIcon>
          <Title>Package Extend request</Title>
        </Header>
        
        <Details>
          <DetailRow>
            <span className="label">Duration:</span>
            <span className="value">3 Days</span>
          </DetailRow>
          <DetailRow>
            <span className="label">Date:</span>
            <span className="value">09/12/2024-12/12/2024</span>
          </DetailRow>
          <DetailRow>
            <span className="label">Cost:</span>
            <span className="value">300 OMR</span>
          </DetailRow>
        </Details>

        <Actions>
          <Button variant="secondary" onClick={onDecline}>
            Decline
          </Button>
          <Button variant="primary" onClick={onAccept}>
            Accept
          </Button>
        </Actions>
      </ModalContainer>
    </Overlay>
  );
};

