import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  maxWidth: '900px',
  margin: '0 auto',
});

const ContentCard = styled('div', {
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
  marginBottom: '$5',
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

const Textarea = styled('textarea', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  minHeight: '120px',
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
  marginTop: '$6',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

export const DiscountForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    noOfUses: '',
    endDate: '',
    applicableOn: '',
    terms: '',
  });

  const handleSave = () => {
    navigate('/vehicle/discounts');
  };

  return (
    <VehicleLayout title="Discount Code">
      <Container>
        <ContentCard>
          <Section>
            <SectionTitle>Name of Code</SectionTitle>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Discount Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Value</Label>
                <Input
                  type="text"
                  placeholder="% 40"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>No. of Uses</Label>
                <Select
                  value={formData.noOfUses}
                  onChange={(e) => setFormData({ ...formData, noOfUses: e.target.value })}
                >
                  <option value="">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Applicable on</Label>
                <Input
                  type="text"
                  placeholder="OMR  Enter amount"
                  value={formData.applicableOn}
                  onChange={(e) => setFormData({ ...formData, applicableOn: e.target.value })}
                />
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Terms and Conditions</SectionTitle>
            <FormGroup>
              <Label>Enter Terms and Conditions</Label>
              <Textarea
                placeholder="Enter terms and conditions..."
                value={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
              />
            </FormGroup>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ContentCard>
      </Container>
    </VehicleLayout>
  );
};

