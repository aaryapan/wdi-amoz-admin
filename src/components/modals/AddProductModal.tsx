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
  maxHeight: '90vh',
  overflowY: 'auto',
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const Title = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$textLight',
  
  '&:hover': {
    color: '$text',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
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

const Input = styled('input', {
  width: '100%',
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const ImageUploadArea = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$6',
  border: '2px dashed #e5e7eb',
  borderRadius: '$md',
  cursor: 'pointer',
  backgroundColor: '#f9fafb',
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

const ImagePreview = styled('div', {
  marginTop: '$3',
  width: '100%',
  height: '120px',
  borderRadius: '$md',
  overflow: 'hidden',
  backgroundColor: '#f3f4f6',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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

const XIcon = () => (
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

interface AddProductModalProps {
  onClose: () => void;
  onSave: (product: { name: string; price: string; quantity: string; image: string | null }) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (name && price && quantity) {
      onSave({ name, price, quantity, image: imagePreview });
      onClose();
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add Product</Title>
          <CloseButton onClick={onClose}>
            <XIcon />
          </CloseButton>
        </Header>

        <FormGroup>
          <Label>Product Image</Label>
          <ImageUploadArea>
            <UploadIcon />
            <UploadText>Upload Image</UploadText>
            <HiddenInput type="file" accept="image/*" onChange={handleImageChange} />
          </ImageUploadArea>
          {imagePreview && (
            <ImagePreview>
              <img src={imagePreview} alt="Preview" />
            </ImagePreview>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Product Name</Label>
          <Input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Price (OMR)</Label>
          <Input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Quantity</Label>
          <Input
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormGroup>

        <Actions>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Product
          </Button>
        </Actions>
      </ModalContainer>
    </Overlay>
  );
};

