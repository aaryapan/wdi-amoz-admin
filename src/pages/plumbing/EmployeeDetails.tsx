import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  maxWidth: '1000px',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#666',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const BreadcrumbCurrent = styled('span', {
  color: '$text',
  fontWeight: '$medium',
});

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const ProfileHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '$6',
  paddingBottom: '$6',
  borderBottom: '1px solid #E0E0E0',
});

const ProfileInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const AvatarContainer = styled('div', {
  position: 'relative',
});

const Avatar = styled('img', {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const OnlineBadge = styled('div', {
  position: 'absolute',
  bottom: '5px',
  right: '5px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '$onboardingPrimary',
  border: '2px solid $white',
});

const ProfileDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const EmployeeName = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  margin: 0,
});

const RatingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const RatingText = styled('span', {
  fontSize: '18px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StarIcon = styled('svg', {
  width: '20px',
  height: '20px',
  color: '#FFC107',
});

const ActionButtons = styled('div', {
  display: 'flex',
  gap: '$3',
});

const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  backgroundColor: '$white',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const Section = styled('div', {
  marginBottom: '$5',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const InfoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
});

const InfoItem = styled('div', {
  display: 'flex',
  gap: '$3',
});

const InfoLabel = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const InfoValue = styled('div', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const ExperienceText = styled('div', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const CategoryChips = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
});

const CategoryChip = styled('div', {
  padding: '$2 $4',
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  borderRadius: '52px',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const DocumentsGrid = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
});

const DocumentChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#F5F5F5',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
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
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$5',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

export const EmployeeDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <PlumbingLayout title="Manage Employee">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/plumbing/employees')}>
            Manage Employee
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>View Details</BreadcrumbCurrent>
        </Breadcrumb>

        <Card>
          <ProfileHeader>
            <ProfileInfo>
              <AvatarContainer>
                <Avatar src="https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21" alt="John Adam" />
                <OnlineBadge />
              </AvatarContainer>
              <ProfileDetails>
                <EmployeeName>John Adam</EmployeeName>
                <RatingContainer>
                  <RatingText>4.3</RatingText>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} viewBox="0 0 20 20" fill={i < 4 ? 'currentColor' : 'none'} stroke="currentColor">
                      <path d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z"/>
                    </StarIcon>
                  ))}
                </RatingContainer>
              </ProfileDetails>
            </ProfileInfo>

            <ActionButtons>
              <ActionButton onClick={() => navigate(`/plumbing/employees/${id}/logs`)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 6H16M4 10H16M4 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Service Logs
              </ActionButton>
              <ActionButton onClick={() => navigate(`/plumbing/employees/${id}/calendar`)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 8H17M7 4V2M13 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Service Calender
              </ActionButton>
            </ActionButtons>
          </ProfileHeader>

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
            <SectionTitle>Experience</SectionTitle>
            <ExperienceText>Number of years: 4 Y</ExperienceText>
          </Section>

          <Section>
            <SectionTitle>Service category</SectionTitle>
            <CategoryChips>
              <CategoryChip>Car Cleaning</CategoryChip>
              <CategoryChip>Deep Cleaning</CategoryChip>
            </CategoryChips>
          </Section>

          <Section>
            <SectionTitle>Documents</SectionTitle>
            <DocumentsGrid>
              <DocumentChip>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2H4C3.5 2 3 2.5 3 3V13C3 13.5 3.5 14 4 14H12C12.5 14 13 13.5 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Document.jpg
              </DocumentChip>
              <DocumentChip>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2H4C3.5 2 3 2.5 3 3V13C3 13.5 3.5 14 4 14H12C12.5 14 13 13.5 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Document106.pdf
              </DocumentChip>
              <DocumentChip>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2H4C3.5 2 3 2.5 3 3V13C3 13.5 3.5 14 4 14H12C12.5 14 13 13.5 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Document42.jpg
              </DocumentChip>
            </DocumentsGrid>
          </Section>

          <EditButton onClick={() => navigate(`/plumbing/employees/${id}/edit`)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14 2L16 4L8 12H6V10L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Edit
          </EditButton>
        </Card>
      </Container>
    </PlumbingLayout>
  );
};

