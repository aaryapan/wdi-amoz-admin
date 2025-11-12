import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$6',
});

const BreadcrumbLink = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  color: '#64C2C8',
  cursor: 'pointer',
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

const ImagesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$4',
});

const ImageBox = styled('div', {
  width: '100%',
  height: '120px',
  borderRadius: '$md',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const InfoRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  marginBottom: '$3',
});

const InfoItem = styled('div', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '& strong': {
    fontWeight: '$semibold',
  },
});

const CourtAccordion = styled('div', {
  marginTop: '$4',
});

const CourtItem = styled('div', {
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  marginBottom: '$3',
  overflow: 'hidden',
});

const CourtHeader = styled('button', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4',
  backgroundColor: '#f9fafb',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});

const ChevronIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.3s ease',
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
  
  variants: {
    expanded: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

const CourtContent = styled('div', {
  padding: '$4',
  display: 'none',
  
  variants: {
    expanded: {
      true: {
        display: 'block',
      },
    },
  },
});

const CourtDetails = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '$4',
  marginBottom: '$4',
});

const CourtDetail = styled('div', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '& strong': {
    fontWeight: '$semibold',
  },
});

const CourtImagesLabel = styled('p', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const CourtImages = styled('div', {
  display: 'flex',
  gap: '$3',
});

const CourtImageBox = styled('div', {
  width: '150px',
  height: '100px',
  borderRadius: '$md',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
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

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const TurfView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedCourt, setExpandedCourt] = useState(0);

  const courts = [
    { name: 'Basketball 1', capacity: '55', size: '500 sq.m', type: 'Artificial', sport: 'Football', pricing: 'OMR 50/hr' },
    { name: 'Basketball 2', capacity: '55', size: '500 sq.m', type: 'Artificial', sport: 'Football', pricing: 'OMR 50/hr' },
    { name: 'Basketball 3', capacity: '55', size: '500 sq.m', type: 'Artificial', sport: 'Football', pricing: 'OMR 50/hr' },
  ];

  return (
    <TurfLayout title="Turf Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/turf/turfs')}>
            Manage Employee
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>View Details</BreadcrumbCurrent>
        </Breadcrumb>

        <ContentCard>
          <Section>
            <SectionTitle>Turf Images</SectionTitle>
            <ImagesGrid>
              <ImageBox>
                <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=300&h=200&fit=crop" alt="Turf 1" />
              </ImageBox>
              <ImageBox>
                <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&h=200&fit=crop" alt="Turf 2" />
              </ImageBox>
              <ImageBox>
                <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop" alt="Turf 3" />
              </ImageBox>
              <ImageBox>
                <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Turf 4" />
              </ImageBox>
            </ImagesGrid>
          </Section>

          <Section>
            <SectionTitle>Turf Information</SectionTitle>
            <InfoItem>
              <strong>Company Name:</strong> SparkleClean Solutions
            </InfoItem>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <InfoRow>
              <InfoItem>
                <strong>Phone number:</strong> 9825533622
              </InfoItem>
              <InfoItem>
                <strong>Email id:</strong> example@email.com
              </InfoItem>
            </InfoRow>
          </Section>

          <Section>
            <SectionTitle>Location</SectionTitle>
            <InfoItem>78 Oasis Road, Salalah, Oman.</InfoItem>
          </Section>

          <Section>
            <SectionTitle>Courts</SectionTitle>
            <CourtAccordion>
              {courts.map((court, index) => (
                <CourtItem key={index}>
                  <CourtHeader onClick={() => setExpandedCourt(expandedCourt === index ? -1 : index)}>
                    {court.name}
                    <ChevronIcon expanded={expandedCourt === index}>
                      <ChevronDownIcon />
                    </ChevronIcon>
                  </CourtHeader>
                  <CourtContent expanded={expandedCourt === index}>
                    <CourtDetails>
                      <CourtDetail>
                        <strong>Capacity:</strong> {court.capacity}
                      </CourtDetail>
                      <CourtDetail>
                        <strong>Size:</strong> {court.size}
                      </CourtDetail>
                      <CourtDetail>
                        <strong>Type:</strong> {court.type}
                      </CourtDetail>
                      <CourtDetail>
                        <strong>Sport:</strong> {court.sport}
                      </CourtDetail>
                      <CourtDetail>
                        <strong>Pricing:</strong> {court.pricing}
                      </CourtDetail>
                    </CourtDetails>
                    <CourtImagesLabel>Images:</CourtImagesLabel>
                    <CourtImages>
                      <CourtImageBox>
                        <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court 1" />
                      </CourtImageBox>
                      <CourtImageBox>
                        <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court 2" />
                      </CourtImageBox>
                    </CourtImages>
                  </CourtContent>
                </CourtItem>
              ))}
            </CourtAccordion>
          </Section>

          <EditButton onClick={() => navigate(`/turf/turfs/${id}/edit`)}>
            <EditIcon /> Edit
          </EditButton>
        </ContentCard>
      </Container>
    </TurfLayout>
  );
};

