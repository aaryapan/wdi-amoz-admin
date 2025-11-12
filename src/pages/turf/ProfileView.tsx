import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';
import { EditIcon } from '@/components/icons/Icons';

const Container = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
});

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  position: 'relative',
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

const InfoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  marginBottom: '$4',
});

const InfoItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const InfoLabel = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const InfoValue = styled('span', {
  fontSize: '16px',
  fontWeight: '$normal',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CitiesContainer = styled('div', {
  marginTop: '$4',
});

const CityTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  marginTop: '$3',
});

const CityTag = styled('span', {
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '$pill',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const EditButton = styled('button', {
  position: 'absolute',
  bottom: '$6',
  right: '$6',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $6',
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
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
});

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <TurfLayout title="My Profile">
      <Container>
        <ProfileCard>
          <Section>
            <SectionTitle>Company Information</SectionTitle>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Company Name:</InfoLabel>
                <InfoValue>SparkleClean Solutions</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Number of Staff:</InfoLabel>
                <InfoValue>80</InfoValue>
              </InfoItem>
            </InfoGrid>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Phone number:</InfoLabel>
                <InfoValue>9825533622</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email id:</InfoLabel>
                <InfoValue>example@email.com</InfoValue>
              </InfoItem>
            </InfoGrid>
          </Section>

          <Section>
            <SectionTitle>Operating Location</SectionTitle>
            <CitiesContainer>
              <InfoLabel>Following Cities</InfoLabel>
              <CityTags>
                <CityTag>Mumbai</CityTag>
                <CityTag>Pune</CityTag>
                <CityTag>Delhi</CityTag>
                <CityTag>Bangalore</CityTag>
              </CityTags>
            </CitiesContainer>
          </Section>

          <Section>
            <SectionTitle>Banking Details</SectionTitle>
            <InfoItem>
              <InfoLabel>Account Number:</InfoLabel>
              <InfoValue>15243865435</InfoValue>
            </InfoItem>
          </Section>

          <EditButton onClick={() => navigate('/turf/profile/edit')}>
            <EditIcon /> Edit
          </EditButton>
        </ProfileCard>
      </Container>
    </TurfLayout>
  );
};

