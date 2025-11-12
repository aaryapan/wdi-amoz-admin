import React from 'react';
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

const InfoRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$8',
  marginBottom: '$3',
});

const InfoItem = styled('div', {
  fontSize: '15px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '& strong': {
    fontWeight: '$semibold',
  },
});

const CompanyName = styled('p', {
  fontSize: '16px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
});

const CitiesGrid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: '$3',
});

const CityBadge = styled('span', {
  padding: '$2 $4',
  backgroundColor: '#E5F3F4',
  borderRadius: '$sm',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StaffCount = styled('p', {
  fontSize: '16px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
});

const CategoryName = styled('p', {
  fontSize: '16px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
});

const SubCategoriesGrid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: '$3',
});

const SubCategoryBadge = styled('span', {
  padding: '$2 $4',
  backgroundColor: '#E5F3F4',
  borderRadius: '$sm',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const AccountNumber = styled('p', {
  fontSize: '16px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
});

const EditButton = styled('button', {
  position: 'absolute',
  bottom: '$6',
  right: '$6',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <VehicleLayout title="My Profile">
      <Container>
        <ContentCard>
          <Section>
            <SectionTitle>Company Name</SectionTitle>
            <CompanyName>SparkleClean Solutions</CompanyName>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <InfoRow>
              <InfoItem>
                <strong>Phone number</strong>
                <br />
                9825533622
              </InfoItem>
            </InfoRow>
          </Section>

          <Section>
            <SectionTitle>Operating Location</SectionTitle>
            <p style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Figtree, sans-serif' }}>
              Following Cities
            </p>
            <CitiesGrid>
              <CityBadge>Mumbai</CityBadge>
              <CityBadge>Pune</CityBadge>
            </CitiesGrid>
          </Section>

          <Section>
            <SectionTitle>Number of Staff</SectionTitle>
            <StaffCount>80</StaffCount>
          </Section>

          <Section>
            <SectionTitle>Service category</SectionTitle>
            <p style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Figtree, sans-serif', marginBottom: '8px' }}>
              Category
            </p>
            <CategoryName>Haircare</CategoryName>
            
            <p style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Figtree, sans-serif', marginTop: '16px', marginBottom: '8px' }}>
              Sub Category
            </p>
            <SubCategoriesGrid>
              <SubCategoryBadge>Haircut</SubCategoryBadge>
              <SubCategoryBadge>Hair Spa</SubCategoryBadge>
              <SubCategoryBadge>Hair styles</SubCategoryBadge>
            </SubCategoriesGrid>
          </Section>

          <Section>
            <SectionTitle>Banking Details</SectionTitle>
            <p style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Figtree, sans-serif', marginBottom: '8px' }}>
              Account Number
            </p>
            <AccountNumber>15243865435</AccountNumber>
          </Section>

          <EditButton onClick={() => navigate('/vehicle/profile/edit')}>
            <EditIcon />
            Edit
          </EditButton>
        </ContentCard>
      </Container>
    </VehicleLayout>
  );
};
