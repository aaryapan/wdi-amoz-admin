import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
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
  marginBottom: '$5',
  fontFamily: 'Figtree, sans-serif',
});

const ImagesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '$4',
  marginBottom: '$6',
});

const VehicleImage = styled('img', {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '$md',
});

const InfoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$6',
});

const InfoRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$3',
  fontSize: '15px',
  fontFamily: 'Figtree, sans-serif',
  
  '& .label': {
    color: '$textLight',
  },
  
  '& .value': {
    color: '$text',
    fontWeight: '$medium',
  },
});

const DocumentLink = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
  
  '& button': {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#EF4444',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '$2',
    
    '& svg': {
      width: '14px',
      height: '14px',
    },
  },
});

const PackagesSection = styled('div', {
  marginTop: '$4',
});

const PackageType = styled('h4', {
  fontSize: '15px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const PackageGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '$3',
  marginBottom: '$4',
});

const PackageItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const PackageDuration = styled('span', {
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const PackagePrice = styled('span', {
  fontSize: '15px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const LocationsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
});

const LocationCard = styled('div', {
  padding: '$4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: '1.6',
});

const AddOnsSection = styled('div', {
  marginTop: '$4',
});

const AddOnsButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#d1f4f7',
  },
  
  '& svg': {
    width: '14px',
    height: '14px',
  },
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

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const VehicleView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <VehicleLayout title="Vehicle Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/vehicle/vehicles')}>
            Vehicle Management
          </BreadcrumbLink>
          <span>›</span>
          <BreadcrumbCurrent>View Details</BreadcrumbCurrent>
        </Breadcrumb>

        <ContentCard>
          <Section>
            <SectionTitle>Vehicle Images/ Videos</SectionTitle>
            <ImagesGrid>
              <VehicleImage src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" alt="Vehicle" />
              <VehicleImage src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" alt="Vehicle" />
            </ImagesGrid>
          </Section>

          <Section>
            <SectionTitle>Vehicle Details</SectionTitle>
            <InfoGrid>
              <div>
                <InfoRow>
                  <span className="label">Category:</span>
                  <span className="value">Yacht</span>
                </InfoRow>
                <InfoRow>
                  <span className="label">Title:</span>
                  <span className="value">Brand Name</span>
                </InfoRow>
                <InfoRow>
                  <span className="label">Passenger Capacity:</span>
                  <span className="value">5</span>
                </InfoRow>
              </div>
              <div>
                <InfoRow>
                  <span className="label">Year:</span>
                  <span className="value">2022</span>
                </InfoRow>
                <InfoRow>
                  <span className="label">Vehicle ID:</span>
                  <span className="value">15786</span>
                </InfoRow>
              </div>
            </InfoGrid>
          </Section>

          <Section>
            <SectionTitle>Vehicle registration card (Mulkia)</SectionTitle>
            <DocumentLink>
              <FileIcon />
              Document.jpg
              <button>
                <TrashIcon />
              </button>
            </DocumentLink>
          </Section>

          <Section>
            <SectionTitle>Rental Packages</SectionTitle>
            <PackagesSection>
              <PackageType>Hourly:</PackageType>
              <PackageGrid>
                <PackageItem>
                  <PackageDuration>&lt; 6 Hr</PackageDuration>
                  <PackagePrice>OMR 20/ Hr</PackagePrice>
                </PackageItem>
                <PackageItem>
                  <PackageDuration>6-12 Hr</PackageDuration>
                  <PackagePrice>OMR 20/ Hr</PackagePrice>
                </PackageItem>
                <PackageItem>
                  <PackageDuration>12-24 Hr</PackageDuration>
                  <PackagePrice>OMR 20/ Hr</PackagePrice>
                </PackageItem>
              </PackageGrid>

              <PackageType>Overnight:</PackageType>
              <PackageGrid>
                <PackageItem>
                  <PackageDuration>1-4 Days</PackageDuration>
                  <PackagePrice>OMR 20/ Day</PackagePrice>
                </PackageItem>
              </PackageGrid>
            </PackagesSection>
          </Section>

          <Section>
            <SectionTitle>Pickup Location</SectionTitle>
            <LocationsGrid>
              <LocationCard>
                456 Al-Madina Avenue, located in the vibrant city of Muscat, Oman, is a bustling thoroughfare known for its rich culture and stunning architecture.
              </LocationCard>
              <LocationCard>
                456 Al-Madina Avenue, located in the vibrant city of Muscat, Oman, is a bustling thoroughfare known for its rich culture and stunning architecture.
              </LocationCard>
            </LocationsGrid>
          </Section>

          <Section>
            <SectionTitle>Add Ons available</SectionTitle>
            <AddOnsSection>
              <AddOnsButton onClick={() => navigate('/vehicle/vehicles/add-ons')}>
                Add Extras to Your Booking
                <ChevronRightIcon />
              </AddOnsButton>
            </AddOnsSection>
          </Section>

          <EditButton onClick={() => navigate(`/vehicle/vehicles/${id}/edit`)}>
            <EditIcon />
            Edit
          </EditButton>
        </ContentCard>
      </Container>
    </VehicleLayout>
  );
};

