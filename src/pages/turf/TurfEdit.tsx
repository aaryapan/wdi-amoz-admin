import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';
import { AddBeverageModal } from '@/components/modals/AddBeverageModal';

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

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  marginBottom: '$4',
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

const ImagesSection = styled('div', {});

const ImageUploadLabel = styled('p', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
});

const ImagesGrid = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
});

const ImageBox = styled('div', {
  width: '120px',
  height: '100px',
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
  width: '120px',
  height: '100px',
  borderRadius: '$md',
  border: '2px dashed #e5e7eb',
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

const HiddenInput = styled('input', {
  display: 'none',
});

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
});

const BeveragesSection = styled('div', {});

const BeverageList = styled('div', {
  display: 'flex',
  gap: '$3',
  marginBottom: '$3',
  flexWrap: 'wrap',
});

const BeverageItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: '#f9fafb',
  borderRadius: '$md',
  border: '1px solid #e5e7eb',
});

const BeverageImage = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '$sm',
  overflow: 'hidden',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const BeverageInfo = styled('div', {
  fontSize: '13px',
  fontFamily: 'Figtree, sans-serif',
  
  '& p': {
    margin: 0,
  },
  
  '& .name': {
    fontWeight: '$semibold',
    color: '$text',
  },
  
  '& .price': {
    color: '$textLight',
  },
});

const RemoveBeverageButton = styled('button', {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$textLight',
  
  '&:hover': {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
  },
  
  '& svg': {
    width: '14px',
    height: '14px',
  },
});

const AddButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
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
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const CourtsSection = styled('div', {});

const CourtAccordion = styled('div', {
  marginBottom: '$4',
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
  fontWeight: '$medium',
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

const CourtFormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$4',
  marginBottom: '$4',
});

const CourtFormRow2 = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  marginBottom: '$4',
});

const AddCourtButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#f9fafb',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const SaveButton = styled('button', {
  display: 'block',
  marginLeft: 'auto',
  marginTop: '$6',
  padding: '$3 $8',
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
});

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const TurfEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedCourt, setExpandedCourt] = useState(0);
  const [showBeverageModal, setShowBeverageModal] = useState(false);
  const [selectedBeverages, setSelectedBeverages] = useState<string[]>(['water-1ltr', 'water-2ltr']);

  const handleAddBeverages = (beverages: string[]) => {
    setSelectedBeverages(prev => [...new Set([...prev, ...beverages])]);
  };

  const handleRemoveBeverage = (id: string) => {
    setSelectedBeverages(prev => prev.filter(b => b !== id));
  };

  const handleSave = () => {
    navigate(`/turf/turfs/${id}`);
  };

  const beverageData: { [key: string]: { name: string; price: string } } = {
    'water-1ltr': { name: 'Water 1 ltr', price: 'OMR 4' },
    'water-05ltr': { name: 'Water 0.5 ltr', price: 'OMR 4' },
    'water-2ltr': { name: 'Water 2 ltr', price: 'OMR 4' },
  };

  return (
    <TurfLayout title="Turf Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/turf/turfs')}>
            Manage Turf
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbLink onClick={() => navigate(`/turf/turfs/${id}`)}>
            View Details
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>Edit Details</BreadcrumbCurrent>
        </Breadcrumb>

        <ContentCard>
          <Section>
            <SectionTitle>Turf Name</SectionTitle>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input type="text" placeholder="Sultan's Green Meadow" defaultValue="Sultan's Green Meadow" />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Turf Images</SectionTitle>
            <ImagesSection>
              <ImageUploadLabel>Add Images</ImageUploadLabel>
              <ImagesGrid>
                <ImageBox>
                  <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court" />
                </ImageBox>
                <ImageBox>
                  <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court" />
                </ImageBox>
                <AddImageBox>
                  <PlusIcon />
                  <HiddenInput type="file" accept="image/*" multiple />
                </AddImageBox>
              </ImagesGrid>
            </ImagesSection>
          </Section>

          <Section>
            <SectionTitle>Turf Location</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Street</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Suburb</Label>
                <Select>
                  <option value="">Select</option>
                </Select>
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>State</Label>
                <Select>
                  <option value="">Select</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label>Country</Label>
                <Select>
                  <option value="">Select</option>
                </Select>
              </FormGroup>
            </FormRow>
            <FormGroup>
              <Label>Google Location</Label>
              <Input type="text" />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Add Ons available</SectionTitle>
            <BeveragesSection>
              <Label>Select beverage</Label>
              <BeverageList>
                {selectedBeverages.map((bevId) => (
                  <BeverageItem key={bevId}>
                    <BeverageImage>
                      <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=80&h=80&fit=crop" alt="Beverage" />
                    </BeverageImage>
                    <BeverageInfo>
                      <p className="name">{beverageData[bevId]?.name}</p>
                      <p className="price">{beverageData[bevId]?.price}</p>
                    </BeverageInfo>
                    <RemoveBeverageButton onClick={() => handleRemoveBeverage(bevId)}>
                      <CloseIcon />
                    </RemoveBeverageButton>
                  </BeverageItem>
                ))}
              </BeverageList>
              <AddButton onClick={() => setShowBeverageModal(true)}>
                <PlusIcon /> Add
              </AddButton>
            </BeveragesSection>
          </Section>

          <Section>
            <SectionTitle>Courts</SectionTitle>
            <CourtsSection>
              <CourtAccordion>
                <CourtItem>
                  <CourtHeader onClick={() => setExpandedCourt(expandedCourt === 0 ? -1 : 0)}>
                    Add Court Name
                    <ChevronIcon expanded={expandedCourt === 0}>
                      <ChevronDownIcon />
                    </ChevronIcon>
                  </CourtHeader>
                  <CourtContent expanded={expandedCourt === 0}>
                    <CourtFormRow>
                      <FormGroup>
                        <Label>Capacity</Label>
                        <Select>
                          <option value="">Select</option>
                        </Select>
                      </FormGroup>
                      <FormGroup>
                        <Label>Size</Label>
                        <Input type="text" placeholder="Sq. M" />
                      </FormGroup>
                      <FormGroup>
                        <Label>Sport</Label>
                        <Select>
                          <option value="">Select</option>
                        </Select>
                      </FormGroup>
                    </CourtFormRow>
                    <CourtFormRow2>
                      <FormGroup>
                        <Label>Type</Label>
                        <Select>
                          <option value="artificial">Artificial</option>
                        </Select>
                      </FormGroup>
                      <FormGroup>
                        <Label>Price</Label>
                        <Input type="text" placeholder="OMR                    /Hr" />
                      </FormGroup>
                    </CourtFormRow2>
                    <FormGroup>
                      <Label>Add Images</Label>
                      <ImagesGrid>
                        <ImageBox>
                          <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court" />
                        </ImageBox>
                        <ImageBox>
                          <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=300&h=200&fit=crop" alt="Court" />
                        </ImageBox>
                        <AddImageBox>
                          <PlusIcon />
                          <HiddenInput type="file" accept="image/*" multiple />
                        </AddImageBox>
                      </ImagesGrid>
                    </FormGroup>
                  </CourtContent>
                </CourtItem>
              </CourtAccordion>
              <AddCourtButton>
                <PlusIcon /> Add Court
              </AddCourtButton>
            </CourtsSection>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ContentCard>
      </Container>

      {showBeverageModal && (
        <AddBeverageModal
          onClose={() => setShowBeverageModal(false)}
          onAdd={handleAddBeverages}
        />
      )}
    </TurfLayout>
  );
};

