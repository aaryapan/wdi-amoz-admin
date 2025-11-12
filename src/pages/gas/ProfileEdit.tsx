import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, CloseIcon, PlusIcon } from '@/components/icons/Icons';

const ProfileContainer = styled('div', {
  maxWidth: '1000px',
});

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
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
  marginBottom: '$5',
  fontFamily: 'Figtree, sans-serif',
});

const FormGroup = styled('div', {
  marginBottom: '$5',
});

const Label = styled('label', {
  display: 'block',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const Input = styled('input', {
  width: '100%',
  padding: '$3',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const InputGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$5',
});

const CitySearchContainer = styled('div', {
  marginBottom: '$3',
});

const SearchInput = styled('div', {
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

const SearchField = styled('input', {
  width: '100%',
  padding: '$3 $3 $3 $8',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const CitiesDisplay = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  alignItems: 'center',
});

const CityChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '#E6F7F8',
  borderRadius: '20px',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
});

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$text',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  
  '&:hover': {
    color: '#DC2626',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const AddMoreButton = styled('button', {
  padding: '$2 $5',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
  
  '& svg': {
    width: '14px',
    height: '14px',
  },
});

const SaveButton = styled('button', {
  marginTop: '$6',
  padding: '$3 $8',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  float: 'right',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
  },
});

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState(['Mumbai', 'Pune']);

  const handleRemoveCity = (city: string) => {
    setCities(cities.filter(c => c !== city));
  };

  const handleSave = () => {
    // Save logic here
    navigate('/gas/profile');
  };

  return (
    <GasLayout title="My Profile">
      <ProfileContainer>
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
            <InputGrid>
              <FormGroup>
                <Label>Phone number</Label>
                <Input type="tel" placeholder="Mobile Number" defaultValue="9825533622" />
              </FormGroup>
              <FormGroup>
                <Label>Email id</Label>
                <Input type="email" placeholder="example@email.com" defaultValue="example@email.com" />
              </FormGroup>
            </InputGrid>
          </Section>

          <Section>
            <SectionTitle>Operating Location</SectionTitle>
            <FormGroup>
              <Label>Add City</Label>
              <CitySearchContainer>
                <SearchInput>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <SearchField type="text" placeholder="Search the city to add" />
                </SearchInput>
                
                <CitiesDisplay>
                  {cities.map((city) => (
                    <CityChip key={city}>
                      {city}
                      <RemoveButton onClick={() => handleRemoveCity(city)}>
                        <CloseIcon size={14} />
                      </RemoveButton>
                    </CityChip>
                  ))}
                  <AddMoreButton>
                    <PlusIcon /> Add More
                  </AddMoreButton>
                </CitiesDisplay>
              </CitySearchContainer>
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
          <div style={{ clear: 'both' }} />
        </ProfileCard>
      </ProfileContainer>
    </GasLayout>
  );
};
