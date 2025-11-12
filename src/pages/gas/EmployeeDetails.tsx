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

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  position: 'relative',
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
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const OnlineBadge = styled('div', {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  width: '16px',
  height: '16px',
  backgroundColor: '#10B981',
  border: '3px solid $white',
  borderRadius: '50%',
});

const EmployeeInfo = styled('div', {
  flex: 1,
});

const EmployeeName = styled('h2', {
  fontSize: '28px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const Rating = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '20px',
});

const ActionButtons = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
});

const ActionButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  color: '$text',
  
  '&:hover': {
    borderColor: '#64C2C8',
    color: '#64C2C8',
  },
});

const AddButton = styled('button', {
  padding: '$3 $5',
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
  gap: '$5',
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

const Documents = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
});

const DocumentChip = styled('div', {
  padding: '$3 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

export const EmployeeDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <GasLayout title="Manage Employee">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/employees')}>
          Manage Employee
        </BreadcrumbLink>
        <span>›</span>
        <span>View Details</span>
      </Breadcrumb>

      <ProfileCard>
        <EmployeeHeader>
          <AvatarContainer>
            <Avatar src="https://i.pravatar.cc/300?img=15" alt="John Adam" />
            <OnlineBadge />
          </AvatarContainer>
          
          <EmployeeInfo>
            <EmployeeName>John Adam</EmployeeName>
            <Rating>
              <span>4.3</span>
              <span>⭐⭐⭐⭐☆</span>
            </Rating>
          </EmployeeInfo>

          <ActionButtons>
            <ActionButton onClick={() => navigate(`/gas/employees/${id}/logs`)}>
              📋 Service Logs
            </ActionButton>
            <ActionButton onClick={() => navigate(`/gas/employees/${id}/calendar`)}>
              📅 Service Calendar
            </ActionButton>
          </ActionButtons>
        </EmployeeHeader>

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
          <InfoItem>
            <InfoLabel>Number of years:</InfoLabel>
            <InfoValue>4 Y</InfoValue>
          </InfoItem>
        </Section>

        <Section>
          <SectionTitle>Documents</SectionTitle>
          <Documents>
            <DocumentChip>
              📄 Document.jpg
            </DocumentChip>
            <DocumentChip>
              📄 Document106.pdf
            </DocumentChip>
            <DocumentChip>
              📄 Document42.jpg
            </DocumentChip>
          </Documents>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '$6' }}>
          <AddButton onClick={() => navigate(`/gas/employees/${id}/edit`)}>
            ✏️ Add New
          </AddButton>
        </div>
      </ProfileCard>
    </GasLayout>
  );
};

