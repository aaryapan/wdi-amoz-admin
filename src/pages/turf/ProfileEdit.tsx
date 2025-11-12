import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';
import { SearchIcon, CloseIcon, PlusIcon } from '@/components/icons/Icons';

const Container = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
});

const ProfileCard = styled('div', {
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

const SearchContainer = styled('div', {
  position: 'relative',
  marginBottom: '$3',
});

const SearchIconWrapper = styled('span', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
  display: 'flex',
  alignItems: 'center',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $3 $3 $8',
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

const CityTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  marginBottom: '$4',
});

const CityTag = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: '#E6F7F8',
  borderRadius: '$pill',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const RemoveButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18px',
  height: '18px',
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  color: '$textLight',
  
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  
  '& svg': {
    width: '12px',
    height: '12px',
  },
});

const AddMoreButton = styled('button', {
  display: 'flex',
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

const SaveButton = styled('button', {
  display: 'block',
  marginLeft: 'auto',
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

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState(['Mumbai', 'Pune']);

  const handleRemoveCity = (city: string) => {
    setCities(cities.filter(c => c !== city));
  };

  const handleSave = () => {
    navigate('/turf/profile');
  };

  return (
    <TurfLayout title="My Profile">
      <Container>
        <ProfileCard>
          <Section>
            <SectionTitle>Company Name</SectionTitle>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input type="text" placeholder="Company Name" defaultValue="SparkleClean Solutions" />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Phone number</Label>
                <Input type="tel" placeholder="Mobile Number" defaultValue="9825533622" />
              </FormGroup>
              <FormGroup>
                <Label>Email id</Label>
                <Input type="email" placeholder="example@email.com" defaultValue="example@email.com" />
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Operating Location</SectionTitle>
            <FormGroup>
              <Label>Add City</Label>
              <SearchContainer>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <SearchInput type="text" placeholder="Search the city to add" />
              </SearchContainer>
              <CityTags>
                {cities.map((city) => (
                  <CityTag key={city}>
                    {city}
                    <RemoveButton onClick={() => handleRemoveCity(city)}>
                      <CloseIcon />
                    </RemoveButton>
                  </CityTag>
                ))}
              </CityTags>
              <AddMoreButton>
                <PlusIcon /> Add More
              </AddMoreButton>
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Number of Staff</SectionTitle>
            <FormGroup>
              <Label>Enter Number</Label>
              <Input type="number" placeholder="Eg. 50" defaultValue="80" />
            </FormGroup>
          </Section>

          <Section>
            <SectionTitle>Banking Details</SectionTitle>
            <FormGroup>
              <Label>Account Number</Label>
              <Input type="text" placeholder="Eg. 1565825331" defaultValue="15243865435" />
            </FormGroup>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ProfileCard>
      </Container>
    </TurfLayout>
  );
};

