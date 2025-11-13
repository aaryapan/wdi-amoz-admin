import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
});

const FormCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const Section = styled('div', {
  marginBottom: '$8',
  
  '&:last-child': {
    marginBottom: 0,
  },
});

const SectionTitle = styled('h2', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$4',
  fontFamily: 'Figtree, sans-serif',
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  marginBottom: '$4',
});

const Label = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Input = styled('input', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
    backgroundColor: '$white',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
});

const Select = styled('select', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
    backgroundColor: '$white',
  },
});

const CalendarInput = styled('div', {
  position: 'relative',
  
  '& input': {
    paddingRight: '$8',
  },
});

const CalendarIcon = styled('span', {
  position: 'absolute',
  right: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
  pointerEvents: 'none',
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
});

const TextArea = styled('textarea', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  minHeight: '100px',
  resize: 'vertical',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
    backgroundColor: '$white',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const SaveButton = styled('button', {
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

const CalendarIconSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const DiscountForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/turf/discounts');
  };

  return (
    <TurfLayout title="Discount Code">
      <Container>
        <FormCard>
          <Section>
            <SectionTitle>Name of Code</SectionTitle>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input type="text" placeholder="Company Name" />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Discount Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Value</Label>
                <Input type="text" placeholder="% 40" />
              </FormGroup>
              <FormGroup>
                <Label>Duration</Label>
                <CalendarInput>
                  <Input type="text" placeholder="Duration" />
                  <CalendarIcon>
                    <CalendarIconSVG />
                  </CalendarIcon>
                </CalendarInput>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>No. of Uses</Label>
                <Select>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Applicable on</Label>
                <FormRow>
                  <Input type="text" placeholder="OMR" />
                  <Input type="text" placeholder="Enter amount" />
                </FormRow>
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Terms and Conditions</SectionTitle>
            <FormGroup>
              <Label>Enter Terms and Conditions</Label>
              <TextArea placeholder="Enter terms and conditions here..." />
            </FormGroup>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </FormCard>
      </Container>
    </TurfLayout>
  );
};

