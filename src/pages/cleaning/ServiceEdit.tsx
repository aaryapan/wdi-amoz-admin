import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { CleaningLayout } from '@/components/layout/CleaningLayout';

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

const Section = styled('div', {
  marginBottom: '$6',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const FormGroup = styled('div', {
  marginBottom: '$4',
});

const Label = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
  display: 'block',
});

const Select = styled('select', {
  width: '100%',
  padding: '$3 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
});

const SelectedServices = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  marginBottom: '$3',
});

const ServiceChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  borderRadius: '52px',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  color: '$text',
  
  '&:hover': {
    color: '#C62828',
  },
});

const AddMoreButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const SaveButton = styled('button', {
  padding: '$3 $8',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  width: '180px',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

export const ServiceEdit: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  
  const [selectedCategory, setSelectedCategory] = useState('Full House');
  const [selectedServices, setSelectedServices] = useState(['1 BHK Furnished Bungalow']);

  const handleRemoveService = (service: string) => {
    setSelectedServices(selectedServices.filter(s => s !== service));
  };

  const handleSave = () => {
    // Save logic here
    navigate('/cleaning/services');
  };

  return (
    <CleaningLayout title="Service Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/cleaning/services')}>
            Service Management
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>Edit Service</BreadcrumbCurrent>
        </Breadcrumb>

        <Card>
          <Section>
            <SectionTitle>Service category</SectionTitle>
            <FormGroup>
              <Label>Select Category</Label>
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option>Full House</option>
                <option>Car Wash</option>
                <option>Deep Cleaning</option>
              </Select>
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Service Details</SectionTitle>
            <FormGroup>
              <Label>Select Services</Label>
              <Select>
                <option>1 BHK Furnished Bungalow</option>
                <option>2 BHK Furnished Bungalow</option>
                <option>3 BHK Furnished Bungalow</option>
              </Select>
            </FormGroup>

            <SelectedServices>
              {selectedServices.map((service) => (
                <ServiceChip key={service}>
                  {service}
                  <RemoveButton onClick={() => handleRemoveService(service)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </RemoveButton>
                </ServiceChip>
              ))}
            </SelectedServices>

            <AddMoreButton>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Add More
            </AddMoreButton>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </Card>
      </Container>
    </CleaningLayout>
  );
};

