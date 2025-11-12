import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  maxWidth: '900px',
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
});

const Section = styled('div', {
  marginBottom: '$8',
  
  '&:last-of-type': {
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

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  marginBottom: '$4',
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Label = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Input = styled('input', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
    backgroundColor: '$white',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const Select = styled('select', {
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
    backgroundColor: '$white',
  },
});

const FileUploadArea = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  border: '2px dashed #e5e7eb',
  borderRadius: '$md',
  cursor: 'pointer',
  backgroundColor: '#f9fafb',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#E6F7F8',
  },
  
  '& svg': {
    width: '40px',
    height: '40px',
    color: '$textLight',
    marginBottom: '$2',
  },
});

const FileUploadText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const HiddenInput = styled('input', {
  display: 'none',
});

const ImagesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
  marginBottom: '$4',
});

const ImagePreview = styled('div', {
  width: '100%',
  height: '120px',
  backgroundColor: '#E5E7EB',
  borderRadius: '$md',
  overflow: 'hidden',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const AddImageBox = styled('label', {
  width: '100%',
  height: '120px',
  border: '2px dashed #e5e7eb',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '#f9fafb',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#E6F7F8',
  },
  
  '& svg': {
    width: '32px',
    height: '32px',
    color: '$textLight',
  },
});

const PackageSection = styled('div', {
  marginBottom: '$6',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '$4',
  marginBottom: '$4',
});

const PackageInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const AddOnsSection = styled('div', {
  marginTop: '$4',
});

const AddOnsButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

const AddOnsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: '$4',
});

const AddOnItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '$md',
});

const AddOnImage = styled('div', {
  width: '40px',
  height: '40px',
  backgroundColor: '#E5E7EB',
  borderRadius: '$sm',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const AddOnInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const AddOnName = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const AddOnPrice = styled('span', {
  fontSize: '12px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const LocationsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
});

const LocationCheckbox = styled('label', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  padding: '$4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#E6F7F8',
  },
  
  '& input': {
    marginTop: '2px',
  },
  
  '& input:checked ~ div': {
    borderColor: '#64C2C8',
  },
});

const LocationText = styled('div', {
  fontSize: '14px',
  color: '$text',
  lineHeight: '1.6',
  fontFamily: 'Figtree, sans-serif',
});

const SaveButton = styled('button', {
  width: '100%',
  padding: '$4',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$8',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const VehicleAdd: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const handleSave = () => {
    navigate('/vehicle/vehicles');
  };

  return (
    <VehicleLayout title="Vehicle Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/vehicle/vehicles')}>
            Vehicle Management
          </BreadcrumbLink>
          <span>›</span>
          <BreadcrumbLink onClick={() => navigate(`/vehicle/vehicles/${id}/view`)}>
            View Details
          </BreadcrumbLink>
          <span>›</span>
          <BreadcrumbCurrent>{isEdit ? 'Edit Details' : 'Add Vehicle'}</BreadcrumbCurrent>
        </Breadcrumb>

        <ContentCard>
          <Section>
            <SectionTitle>Vehicle Details</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Category</Label>
                <Select>
                  <option>Car</option>
                  <option>Yacht</option>
                  <option>Jet Ski</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Brand</Label>
                <Input type="text" placeholder="Brand Name" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Variant</Label>
                <Input type="text" placeholder="Ceed" />
              </FormGroup>
              <FormGroup>
                <Label>Year</Label>
                <Input type="text" placeholder="Brand Name" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Transmission Type</Label>
                <Select>
                  <option>Manual</option>
                  <option>Automatic</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Fuel Type</Label>
                <Select>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Car Type</Label>
                <Select>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Hatchback</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Seating Capacity</Label>
                <Input type="number" placeholder="5" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Vehicle ID</Label>
                <Input type="text" placeholder="12786" />
              </FormGroup>
              <FormGroup>
                <Label>Car Number Plate</Label>
                <Input type="text" placeholder="5" />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label>Driven range (km)</Label>
                <Input type="text" placeholder="10/86" />
              </FormGroup>
              <FormGroup>
                <Label>How many of these Jet skis you have in Stock?</Label>
                <Input type="number" placeholder="10786" />
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Add Vehicle Registration Card (Mulkia)</SectionTitle>
            <FileUploadArea>
              <UploadIcon />
              <FileUploadText>Upload Mulkia*</FileUploadText>
              <HiddenInput type="file" accept=".pdf,.jpg,.jpeg,.png" />
            </FileUploadArea>
          </Section>

          <Section>
            <SectionTitle>Upload Images/ Videos</SectionTitle>
            <Label>Add Images</Label>
            <ImagesGrid>
              <ImagePreview>
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" alt="Vehicle" />
              </ImagePreview>
              <ImagePreview>
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" alt="Vehicle" />
              </ImagePreview>
              <AddImageBox>
                <PlusIcon />
                <HiddenInput type="file" accept="image/*" multiple />
              </AddImageBox>
            </ImagesGrid>
          </Section>

          <Section>
            <SectionTitle>Define Rental Packages</SectionTitle>
            
            <PackageSection>
              <PackageType>Hourly Prices (&lt;24 hr)</PackageType>
              <PackageGrid>
                <PackageInput>
                  <Label>30hrs</Label>
                  <Input type="text" placeholder="<6hrs" />
                </PackageInput>
                <PackageInput>
                  <Label>Enter price / hour for</Label>
                  <Input type="text" placeholder="30 min" />
                </PackageInput>
                <PackageInput>
                  <Label>1 hour</Label>
                  <Input type="text" placeholder="Enter price / hour for" />
                </PackageInput>
                <PackageInput>
                  <Label>Enter price / hour for</Label>
                  <Input type="text" placeholder="1hr 30 min" />
                </PackageInput>
                <PackageInput>
                  <Label>2 - 24 hr</Label>
                  <Input type="text" placeholder="Enter price / hour for" />
                </PackageInput>
              </PackageGrid>
            </PackageSection>

            <PackageSection>
              <PackageType>Overnight Prices (&gt;24 hr)</PackageType>
              <PackageGrid>
                <PackageInput>
                  <Label>20hr</Label>
                  <Input type="text" placeholder="Enter price / day for" />
                </PackageInput>
                <PackageInput>
                  <Label>&gt; 1 day</Label>
                  <Input type="text" placeholder="Enter price / day for" />
                </PackageInput>
              </PackageGrid>
            </PackageSection>
          </Section>

          <Section>
            <SectionTitle>Add Ons available</SectionTitle>
            <Label>Add Extras to Your Booking</Label>
            <AddOnsSection>
              <AddOnsButton>
                + Add
              </AddOnsButton>
              <AddOnsList>
                <AddOnItem>
                  <AddOnImage>
                    <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100" alt="Life Jackets" />
                  </AddOnImage>
                  <AddOnInfo>
                    <AddOnName>Life Jackets</AddOnName>
                    <AddOnPrice>OMR 4</AddOnPrice>
                  </AddOnInfo>
                </AddOnItem>
                <AddOnItem>
                  <AddOnImage>
                    <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=100" alt="Wetsuit" />
                  </AddOnImage>
                  <AddOnInfo>
                    <AddOnName>Wetsuit</AddOnName>
                    <AddOnPrice>OMR 4</AddOnPrice>
                  </AddOnInfo>
                </AddOnItem>
              </AddOnsList>
            </AddOnsSection>
          </Section>

          <Section>
            <SectionTitle>Pickup Location</SectionTitle>
            <LocationsGrid>
              <LocationCheckbox>
                <input type="checkbox" defaultChecked />
                <LocationText>
                  456 Al-Madina Avenue, located in the vibrant city of Muscat, Oman, is a bustling thoroughfare known for its rich culture and stunning architecture.
                </LocationText>
              </LocationCheckbox>
              <LocationCheckbox>
                <input type="checkbox" />
                <LocationText>
                  456 Al-Madina Avenue, located in the vibrant city of Muscat, Oman, is a bustling thoroughfare known for its rich culture and stunning architecture.
                </LocationText>
              </LocationCheckbox>
              <LocationCheckbox>
                <input type="checkbox" />
                <LocationText>
                  456 Al-Madina Avenue, located in the vibrant city of Muscat, Oman, is a bustling thoroughfare known for its rich culture and stunning architecture.
                </LocationText>
              </LocationCheckbox>
            </LocationsGrid>
          </Section>

          <SaveButton onClick={handleSave}>
            Save and Continue
          </SaveButton>
        </ContentCard>
      </Container>
    </VehicleLayout>
  );
};
