import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate, useParams } from 'react-router-dom';

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  color: '$textLight',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    color: '#64C2C8',
    textDecoration: 'underline',
  },
});

const FormCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  maxWidth: '600px',
});

const Section = styled('div', {
  marginBottom: '$7',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$5',
  fontFamily: 'Figtree, sans-serif',
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
  padding: '$3',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const Input = styled('input', {
  width: '100%',
  padding: '$3',
  border: '1px solid #e5e5e5',
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

const SaveButton = styled('button', {
  padding: '$3 $8',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
});

export const ServiceEdit: React.FC = () => {
  const navigate = useNavigate();
  const { spec } = useParams();

  const handleSave = () => {
    navigate(`/gas/services/${spec}`);
  };

  return (
    <GasLayout title="Service Management">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/services')}>
          Service Management
        </BreadcrumbLink>
        <span>›</span>
        <span>Edit Service</span>
      </Breadcrumb>

      <FormCard>
        <Section>
          <SectionTitle>Cylinder Specification</SectionTitle>
          <FormGroup>
            <Label>Select Category</Label>
            <Select defaultValue="11 Kg">
              <option>11 Kg</option>
              <option>22 Kg</option>
              <option>44 Kg</option>
              <option>88 Kg</option>
            </Select>
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Price Details</SectionTitle>
          <FormGroup>
            <Label>Price</Label>
            <Input type="text" placeholder="OMR 200" defaultValue="OMR 200" />
          </FormGroup>
        </Section>

        <SaveButton onClick={handleSave}>Save</SaveButton>
      </FormCard>
    </GasLayout>
  );
};

