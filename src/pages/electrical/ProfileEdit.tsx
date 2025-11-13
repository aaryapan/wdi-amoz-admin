import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { ElectricalLayout } from '@/components/layout/ElectricalLayout';
import { Input } from '@/components/ui/Input';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '1080px',
});

const SectionTitle = styled('h2', {
  fontSize: '22px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$2',
});

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6 $4',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
});

const FormRow = styled('div', {
  display: 'flex',
  gap: '$6',
});

const CitiesContainer = styled('div', {
  display: 'flex',
  gap: '11px',
  marginTop: '$6',
  flexWrap: 'wrap',
});

const CityChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $6',
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  borderRadius: '36px',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  width: '210px',
});

const RemoveButton = styled('button', {
  width: '16px',
  height: '16px',
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  marginLeft: 'auto',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const AddMoreButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '36px',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  width: '210px',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const SaveButton = styled('button', {
  alignSelf: 'flex-end',
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  boxShadow: '8px 8px 11px 0px rgba(0,0,0,0.09), 2px 2px 6px 0px rgba(0,0,0,0.1)',
  width: '252px',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState(['Mumbai', 'Pune']);
  const [companyName, setCompanyName] = useState('SparkleClean Solutions');
  const [phone, setPhone] = useState('9825533622');
  const [email, setEmail] = useState('example@email.com');
  const [staff, setStaff] = useState('80');
  const [category, setCategory] = useState('Haircare');
  const [accountNumber, setAccountNumber] = useState('15243865435');

  const removeCity = (city: string) => {
    setCities(cities.filter(c => c !== city));
  };

  const handleSave = () => {
    // Save logic here
    navigate('/electrical/profile');
  };

  return (
    <ElectricalLayout title="My Profile">
      <Container>
        <SectionTitle>Company Name</SectionTitle>
        <Card>
          <Input
            label="Enter Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
          />
        </Card>

        <SectionTitle>Contact Information</SectionTitle>
        <Card>
          <FormRow>
            <Input
              label="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
            />
            <Input
              label="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </FormRow>
        </Card>

        <SectionTitle>Operating Location</SectionTitle>
        <Card>
          <Input
            label="Add City"
            placeholder="Search the city to add"
            startIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            }
          />
          <CitiesContainer>
            {cities.map((city) => (
              <CityChip key={city}>
                {city}
                <RemoveButton onClick={() => removeCity(city)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </RemoveButton>
              </CityChip>
            ))}
            <AddMoreButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              Add More
            </AddMoreButton>
          </CitiesContainer>
        </Card>

        <SectionTitle>Number of Staff</SectionTitle>
        <Card>
          <Input
            label="Enter Number"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            placeholder="Eg. 50"
          />
        </Card>

        <SectionTitle>Service category</SectionTitle>
        <Card>
          <Input
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Eg. Car Cleaning"
          />
        </Card>

        <SectionTitle>Banking Details</SectionTitle>
        <Card>
          <Input
            label="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Eg. 1565825331"
          />
        </Card>

        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Container>
    </ElectricalLayout>
  );
};

