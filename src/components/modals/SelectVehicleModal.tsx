import React, { useState } from 'react';
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
  width: '500px',
  maxWidth: '90vw',
  position: 'relative',
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
  paddingBottom: '$4',
  borderBottom: '1px solid #e5e7eb',
});

const Title = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '$md',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const FormGroup = styled('div', {
  marginBottom: '$5',
});

const Label = styled('label', {
  display: 'block',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const Select = styled('select', {
  width: '100%',
  padding: '$3 $4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface SelectVehicleModalProps {
  onClose: () => void;
  onSelect: (category: string, vehicleId: string) => void;
}

export const SelectVehicleModal: React.FC<SelectVehicleModalProps> = ({ onClose }) => {
  const [category, setCategory] = useState('');
  const [vehicleId, setVehicleId] = useState('');

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Select A Vehicle</Title>
          <CloseButton onClick={onClose}>
            <XIcon />
          </CloseButton>
        </Header>

        <FormGroup>
          <Label>Select Category</Label>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="yacht">Yacht</option>
            <option value="jetski">Jet Ski</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Select Vehicle Id</Label>
          <Select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
            <option value="">Select</option>
            <option value="X27899123">X27899123</option>
            <option value="X27899124">X27899124</option>
            <option value="X27899125">X27899125</option>
          </Select>
        </FormGroup>
      </ModalContainer>
    </Overlay>
  );
};

