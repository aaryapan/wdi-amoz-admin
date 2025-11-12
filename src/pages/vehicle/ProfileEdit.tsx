import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  maxWidth: '1000px',
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

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
});

const AddLocationButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const CheckboxGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const CheckboxLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  
  '& input': {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  },
});

const FileUploadArea = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
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

const FileUploadText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
});

const FileUploadHint = styled('p', {
  fontSize: '12px',
  color: '#9CA3AF',
  fontFamily: 'Figtree, sans-serif',
});

const HiddenInput = styled('input', {
  display: 'none',
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

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: 'Company Name',
    phone: '',
    email: 'example@email.com',
    street: '',
    suburb: '',
    city: '',
    postcode: '',
    state: '',
    country: '',
    numStaff: '',
    accountNumber: '',
    debitCard: false,
    creditCard: false,
    cashOnDelivery: false,
  });

  const handleSave = () => {
    navigate('/vehicle/profile');
  };

  return (
    <VehicleLayout title="My Profile">
      <Container>
        <ContentCard>
          <Section>
            <SectionTitle>Company Name</SectionTitle>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Phone number</Label>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email id</Label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Operating Location</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Street</Label>
                <Input
                  type="text"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label>Suburb</Label>
                <Select
                  value={formData.suburb}
                  onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                >
                  <option value="">Select</option>
                </Select>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>City</Label>
                <Select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="">Select</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Postcode</Label>
                <Input
                  type="text"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>State</Label>
                <Select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                >
                  <option value="">Select</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Country</Label>
                <Select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  <option value="">Select</option>
                </Select>
              </FormGroup>
            </FormRow>
            <AddLocationButton>
              <PlusIcon /> Add More
            </AddLocationButton>
          </Section>

          <Section>
            <SectionTitle>Number of Staff</SectionTitle>
            <FormGroup>
              <Label>Enter Number</Label>
              <Input
                type="text"
                placeholder="Eg 50"
                value={formData.numStaff}
                onChange={(e) => setFormData({ ...formData, numStaff: e.target.value })}
              />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Select Preferred Payment Modes</SectionTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={formData.debitCard}
                  onChange={(e) => setFormData({ ...formData, debitCard: e.target.checked })}
                />
                Debit Card
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={formData.creditCard}
                  onChange={(e) => setFormData({ ...formData, creditCard: e.target.checked })}
                />
                Credit Card
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={formData.cashOnDelivery}
                  onChange={(e) => setFormData({ ...formData, cashOnDelivery: e.target.checked })}
                />
                Cash On Delivery
              </CheckboxLabel>
            </CheckboxGroup>
          </Section>

          <Section>
            <SectionTitle>Banking Details</SectionTitle>
            <FormGroup>
              <Label>Account Number</Label>
              <Input
                type="text"
                placeholder="Eg 1565253531"
                value={formData.accountNumber}
                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Proof of Bank Account document*</Label>
              <FileUploadArea>
                <UploadIcon />
                <FileUploadText>Add an attachment</FileUploadText>
                <FileUploadHint>Upload Bank confirmation letter/ Cease image of a Cancelled Cheque/ Bank Letterhead</FileUploadHint>
                <HiddenInput type="file" accept="image/*,application/pdf" />
              </FileUploadArea>
            </FormGroup>
          </Section>

          <SaveButton onClick={handleSave}>Save and Continue</SaveButton>
        </ContentCard>
      </Container>
    </VehicleLayout>
  );
};

