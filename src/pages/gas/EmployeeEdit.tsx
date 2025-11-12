import React, { useState } from 'react';
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
});

const EmployeeHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  marginBottom: '$8',
  paddingBottom: '$6',
  borderBottom: '1px solid #e5e5e5',
});

const AvatarContainer = styled('div', {
  position: 'relative',
});

const Avatar = styled('img', {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const OnlineBadge = styled('div', {
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  width: '14px',
  height: '14px',
  backgroundColor: '#10B981',
  border: '3px solid $white',
  borderRadius: '50%',
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

const InputGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',
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

const UploadArea = styled('div', {
  border: '2px dashed #e5e5e5',
  borderRadius: '$md',
  padding: '$8',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#f9fafb',
  },
});

const UploadIcon = styled('div', {
  fontSize: '32px',
  marginBottom: '$3',
});

const UploadText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
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
  float: 'right',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
});

export const EmployeeEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSave = () => {
    navigate(`/gas/employees/${id}`);
  };

  return (
    <GasLayout title="Manage Employee">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/employees')}>
          Manage Employee
        </BreadcrumbLink>
        <span>›</span>
        <BreadcrumbLink onClick={() => navigate(`/gas/employees/${id}`)}>
          View Details
        </BreadcrumbLink>
        <span>›</span>
        <span>Edit Details</span>
      </Breadcrumb>

      <FormCard>
        <EmployeeHeader>
          <AvatarContainer>
            <Avatar src="https://i.pravatar.cc/300?img=15" alt="Adam John" />
            <OnlineBadge />
          </AvatarContainer>
        </EmployeeHeader>

        <Section>
          <SectionTitle>Name</SectionTitle>
          <FormGroup>
            <Input type="text" defaultValue="Adam John" />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <InputGrid>
            <FormGroup>
              <Label>Phone number</Label>
              <Input type="tel" placeholder="Mobile Number" defaultValue="9825533622" />
            </FormGroup>
            <FormGroup>
              <Label>Employee id</Label>
              <Input type="text" placeholder="Emp id" />
            </FormGroup>
            <FormGroup>
              <Label>Email id</Label>
              <Input type="email" placeholder="example@email.com" defaultValue="example@email.com" />
            </FormGroup>
          </InputGrid>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <FormGroup>
            <Label>Number of years</Label>
            <Select defaultValue="4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
            </Select>
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Documents</SectionTitle>
          
          <FormGroup>
            <Label>Upload Passport</Label>
            <UploadArea>
              <UploadIcon>📎</UploadIcon>
              <UploadText>Add an attachment</UploadText>
            </UploadArea>
          </FormGroup>

          <FormGroup>
            <Label>Past certification (optional)...</Label>
            <UploadArea>
              <UploadIcon>📎</UploadIcon>
              <UploadText>Add an attachment</UploadText>
            </UploadArea>
          </FormGroup>

          <FormGroup>
            <Label>Upload Residential ID</Label>
            <UploadArea>
              <UploadIcon>📎</UploadIcon>
              <UploadText>Add an attachment</UploadText>
            </UploadArea>
          </FormGroup>

          <FormGroup>
            <Label>Residential ID Expiry Date</Label>
            <Input type="date" />
          </FormGroup>
        </Section>

        <SaveButton onClick={handleSave}>Save</SaveButton>
        <div style={{ clear: 'both' }} />
      </FormCard>
    </GasLayout>
  );
};

