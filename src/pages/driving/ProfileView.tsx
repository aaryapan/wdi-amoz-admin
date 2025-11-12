import React from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  maxWidth: '780px',
  margin: '0 auto',
});

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$10',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const ProfileHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$8',
  paddingBottom: '$8',
  borderBottom: '1px solid #E0E0E0',
});

const ProfileImageWrapper = styled('div', {
  position: 'relative',
  width: '100px',
  height: '100px',
});

const ProfileImage = styled('img', {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
});

const CameraIcon = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '$onboardingPrimary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProfileName = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const Section = styled('div', {
  marginBottom: '$8',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  marginBottom: '$4',
});

const InfoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',
});

const InfoItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const InfoLabel = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
});

const InfoValue = styled('span', {
  fontSize: '16px',
  fontWeight: '$normal',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const EditButton = styled('button', {
  position: 'absolute',
  bottom: '$8',
  right: '$8',
  padding: '$3 $6',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  backgroundColor: '$onboardingPrimary',
  border: 'none',
  color: '$text',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  transition: 'all 0.2s',
  
  '&:hover': {
    backgroundColor: '#3d9cb3',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const CardContainer = styled('div', {
  position: 'relative',
});

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <DrivingLayout title="My Profile">
      <Container>
        <CardContainer>
          <ProfileCard>
            <ProfileHeader>
              <ProfileImageWrapper>
                <ProfileImage
                  src="https://www.figma.com/api/mcp/asset/398b5c02-f252-43e0-bcb4-458e916e1110"
                  alt="John Adam"
                />
                <CameraIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                  </svg>
                </CameraIcon>
              </ProfileImageWrapper>
              <ProfileName>John Adam</ProfileName>
            </ProfileHeader>

            <Section>
              <SectionTitle>About You</SectionTitle>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Gender:</InfoLabel>
                  <InfoValue>Male</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Languages known:</InfoLabel>
                  <InfoValue>Hindi, Arab</InfoValue>
                </InfoItem>
              </InfoGrid>
            </Section>

            <Section>
              <SectionTitle>Contact Information</SectionTitle>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Phone number</InfoLabel>
                  <InfoValue>9825533622</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Email id</InfoLabel>
                  <InfoValue>example@email.com</InfoValue>
                </InfoItem>
              </InfoGrid>
            </Section>

            <Section>
              <SectionTitle>Availability</SectionTitle>
              <InfoGrid>
                <InfoItem>
                  <InfoLabel>Working days:</InfoLabel>
                  <InfoValue>Mon, Tues, Wed</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Working hours:</InfoLabel>
                  <InfoValue>4:00 PM- 10:00 PM</InfoValue>
                </InfoItem>
              </InfoGrid>
            </Section>

            <Section>
              <SectionTitle>Pricing per class</SectionTitle>
              <InfoItem>
                <InfoLabel>Amount Charged:</InfoLabel>
                <InfoValue>OMR 500</InfoValue>
              </InfoItem>
            </Section>

            <Section>
              <SectionTitle>Service Radius</SectionTitle>
              <InfoItem>
                <InfoLabel>Radius:</InfoLabel>
                <InfoValue>Km 10</InfoValue>
              </InfoItem>
            </Section>
          </ProfileCard>

          <EditButton onClick={() => navigate('/driving/profile/edit')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Edit
          </EditButton>
        </CardContainer>
      </Container>
    </DrivingLayout>
  );
};
