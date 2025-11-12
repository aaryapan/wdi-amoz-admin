import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate } from 'react-router-dom';
import { EditIcon } from '@/components/icons/Icons';

const ProfileContainer = styled('div', {
  maxWidth: '1000px',
});

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  position: 'relative',
});

const Section = styled('div', {
  marginBottom: '$7',
  
  '&:last-child': {
    marginBottom: 0,
  },
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$4',
  fontFamily: 'Figtree, sans-serif',
});

const InfoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',
});

const InfoItem = styled('div', {});

const InfoLabel = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const InfoValue = styled('p', {
  fontSize: '16px',
  color: '$text',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
});

const CitiesContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: '$3',
});

const CityChip = styled('span', {
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  color: '$text',
  borderRadius: '20px',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
});

const EditButton = styled('button', {
  position: 'absolute',
  bottom: '$6',
  right: '$6',
  padding: '$3 $6',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <GasLayout title="My Profile">
      <ProfileContainer>
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
            <InfoLabel>Following Cities</InfoLabel>
            <CitiesContainer>
              <CityChip>Mumbai</CityChip>
              <CityChip>Pune</CityChip>
              <CityChip>Delhi</CityChip>
              <CityChip>Bangalore</CityChip>
            </CitiesContainer>
          </Section>

          <Section>
            <SectionTitle>Banking Details</SectionTitle>
            <InfoItem>
              <InfoLabel>Account Number:</InfoLabel>
              <InfoValue>15243865435</InfoValue>
            </InfoItem>
          </Section>

          <EditButton onClick={() => navigate('/gas/profile/edit')}>
            <EditIcon /> Edit
          </EditButton>
        </ProfileCard>
      </ProfileContainer>
    </GasLayout>
  );
};
