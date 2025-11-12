import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { ElectricalLayout } from '@/components/layout/ElectricalLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
  maxWidth: '1080px',
});

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6 $4',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
});

const SectionTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
});

const FormRow = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$3',
});

const InfoField = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const Label = styled('span', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Value = styled('span', {
  fontSize: '15px',
  fontWeight: '$normal',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CitiesContainer = styled('div', {
  display: 'flex',
  gap: '11px',
  marginTop: '$4',
  flexWrap: 'wrap',
});

const CityChip = styled('div', {
  padding: '$3 $5',
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  borderRadius: '52px',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  width: '180px',
  textAlign: 'center',
});

const EditButton = styled('button', {
  alignSelf: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const EditIcon = styled('img', {
  width: '18px',
  height: '18px',
});

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ElectricalLayout title="My Profile">
      <Container>
        <Card>
          <SectionTitle>Company Information</SectionTitle>
          <FormRow>
            <InfoField>
              <Label>Company Name:</Label>
              <Value>SparkleClean Solutions</Value>
            </InfoField>
            <InfoField>
              <Label>Number of Staff:</Label>
              <Value>80</Value>
            </InfoField>
          </FormRow>
        </Card>

        <Card>
          <SectionTitle>Contact Information</SectionTitle>
          <FormRow>
            <InfoField>
              <Label>Phone number</Label>
              <Value>9825533622</Value>
            </InfoField>
            <InfoField>
              <Label>Email id</Label>
              <Value>example@email.com</Value>
            </InfoField>
          </FormRow>
        </Card>

        <Card>
          <SectionTitle>Operating Location</SectionTitle>
          <Label style={{ marginTop: '14px', display: 'block' }}>Following Cities</Label>
          <CitiesContainer>
            <CityChip>Mumbai</CityChip>
            <CityChip>Pune</CityChip>
            <CityChip>Delhi</CityChip>
            <CityChip>Bangalore</CityChip>
          </CitiesContainer>
        </Card>

        <Card>
          <SectionTitle>Service category</SectionTitle>
          <InfoField style={{ marginTop: '12px' }}>
            <Label>Category:</Label>
            <Value>Haircare</Value>
          </InfoField>
        </Card>

        <Card>
          <SectionTitle>Banking Details</SectionTitle>
          <InfoField style={{ marginTop: '12px' }}>
            <Label>Account Number:</Label>
            <Value>15243865435</Value>
          </InfoField>
        </Card>

        <EditButton onClick={() => navigate('/electrical/profile/edit')}>
          <EditIcon
            src="https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21"
            alt="Edit"
          />
          Edit
        </EditButton>
      </Container>
    </ElectricalLayout>
  );
};

