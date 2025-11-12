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
  width: '600px',
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

const BeverageGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
  marginBottom: '$6',
});

const BeverageCard = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
  padding: '$4',
  backgroundColor: '$white',
  borderRadius: '$lg',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
});

const Checkbox = styled('input', {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});

const BeverageImage = styled('div', {
  width: '100px',
  height: '100px',
  borderRadius: '$md',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const BeverageInfo = styled('div', {
  textAlign: 'center',
});

const BeverageName = styled('p', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$1',
  fontFamily: 'Figtree, sans-serif',
});

const BeveragePrice = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const AddButton = styled('button', {
  display: 'block',
  marginLeft: 'auto',
  padding: '$3 $8',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
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

interface AddBeverageModalProps {
  onClose: () => void;
  onAdd: (selectedBeverages: string[]) => void;
}

const beverages = [
  { id: 'water-1ltr', name: 'Water 1 ltr', price: 'OMR 4', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&h=200&fit=crop' },
  { id: 'water-05ltr', name: 'Water 0.5 ltr', price: 'OMR 4', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&h=200&fit=crop' },
  { id: 'water-2ltr', name: 'Water 2 ltr', price: 'OMR 4', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&h=200&fit=crop' },
];

export const AddBeverageModal: React.FC<AddBeverageModalProps> = ({ onClose, onAdd }) => {
  const [selectedBeverages, setSelectedBeverages] = useState<string[]>([]);

  const handleToggleBeverage = (id: string) => {
    setSelectedBeverages(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const handleAdd = () => {
    onAdd(selectedBeverages);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Add Beverage</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>

        <BeverageGrid>
          {beverages.map((beverage) => (
            <BeverageCard key={beverage.id}>
              <Checkbox
                type="checkbox"
                checked={selectedBeverages.includes(beverage.id)}
                onChange={() => handleToggleBeverage(beverage.id)}
              />
              <BeverageImage>
                <img src={beverage.image} alt={beverage.name} />
              </BeverageImage>
              <BeverageInfo>
                <BeverageName>{beverage.name}</BeverageName>
                <BeveragePrice>{beverage.price}</BeveragePrice>
              </BeverageInfo>
            </BeverageCard>
          ))}
        </BeverageGrid>

        <AddButton onClick={handleAdd}>Add</AddButton>
      </ModalContainer>
    </Overlay>
  );
};

