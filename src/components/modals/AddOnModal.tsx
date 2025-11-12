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
  backgroundColor: '#E6F7F8',
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
});

const Title = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$text',
  
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const UploadBox = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  backgroundColor: '#f3f4f6',
  borderRadius: '$md',
  border: '2px dashed #d1d5db',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#e6f7f8',
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

const Input = styled('input', {
  width: '100%',
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const Select = styled('select', {
  width: '100%',
  padding: '$3',
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

const AddButton = styled('button', {
  width: '100%',
  padding: '$4',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$4',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

interface AddOnModalProps {
  onClose: () => void;
}

export const AddOnModal: React.FC<AddOnModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    turfName: '',
    price: '',
    quantity: '',
  });

  const handleSubmit = () => {
    // Handle form submission
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add On</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>

        <FormGroup>
          <Label>Upload product image</Label>
          <UploadBox>
            <UploadIcon />
            <UploadText>Upload product image</UploadText>
            <HiddenInput type="file" accept="image/*" />
          </UploadBox>
        </FormGroup>

        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label>Turf Name</Label>
          <Select
            value={formData.turfName}
            onChange={(e) => setFormData({ ...formData, turfName: e.target.value })}
          >
            <option value="">Select</option>
            <option value="turf1">Sultan's Green Meadow</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Price</Label>
          <Input
            type="text"
            placeholder="OMR"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantity</Label>
          <Input
            type="text"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </FormGroup>

        <AddButton onClick={handleSubmit}>Add</AddButton>
      </ModalContainer>
    </Overlay>
  );
};

