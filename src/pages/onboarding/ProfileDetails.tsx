import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { FileUpload } from '@/components/ui/FileUpload';
import { Button } from '@/components/ui/Button';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '$onboardingBg',
  paddingBottom: '$20',
});

const Header = styled('div', {
  backgroundColor: '$white',
  height: '75px',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 100px',
  borderBottom: '1px solid $border',
});

const Logo = styled('div', {
  width: '168px',
  height: '55px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
});

const BackButton = styled('button', {
  position: 'absolute',
  left: '52px',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const Content = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  padding: '28px 100px 100px',
});

const Title = styled('h1', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '32px',
  fontWeight: '$semibold',
  lineHeight: '40px',
  color: '$text',
  marginBottom: '$3',
});

const Subtitle = styled('p', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '20px',
  fontWeight: '$normal',
  lineHeight: '24px',
  color: '$text',
  marginBottom: '$8',
});

const SectionTitle = styled('h2', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '22px',
  fontWeight: '$semibold',
  lineHeight: '40px',
  color: '$text',
  marginTop: '$8',
  marginBottom: '$4',
});

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$6 $4',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
});

const Row = styled('div', {
  display: 'flex',
  gap: '$6',
});

const CityChip = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '$onboardingLight',
  borderRadius: '36px',
  fontSize: '$base',
  fontWeight: '$medium',
  color: '$text',
});

const AddMoreButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '36px',
  fontSize: '$base',
  fontWeight: '$medium',
  color: '$text',
  border: 'none',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const SaveButton = styled(Button, {
  backgroundColor: '$onboardingPrimary',
  color: '$text',
  padding: '$3 $5',
  fontSize: '20px',
  fontWeight: '$medium',
  marginTop: '$10',
  float: 'right',
  
  '&:hover:not(:disabled)': {
    backgroundColor: '#50aee2',
  },
});

export const ProfileDetails: React.FC = () => {
  const navigate = useNavigate();
  const [bankDoc, setBankDoc] = useState<File | null>(null);

  const handleSubmit = () => {
    navigate('/onboarding/complete');
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </BackButton>
        <Logo
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/4e8ad799-206c-4fd1-a02f-8cf07a350a75')`,
          }}
        />
      </Header>

      <Content>
        <Title>Profile and Business Details Setup:</Title>
        <Subtitle>Please add the following details</Subtitle>

        <SectionTitle>Company Name</SectionTitle>
        <Card>
          <Input label="Enter Name" placeholder="Company Name" />
        </Card>

        <SectionTitle>Contact Information</SectionTitle>
        <Card>
          <Row>
            <Input label="Phone number" placeholder="Mobile Number" />
            <Input label="Email id" placeholder="example@email.com" />
          </Row>
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
          <div style={{ marginTop: '24px', display: 'flex', gap: '11px', flexWrap: 'wrap' }}>
            <CityChip>
              Mumbai
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </CityChip>
            <CityChip>
              Pune
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </CityChip>
            <AddMoreButton>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              Add More
            </AddMoreButton>
          </div>
        </Card>

        <SectionTitle>Number of Staff</SectionTitle>
        <Card>
          <Input label="Enter Number" placeholder="Eg. 50" />
        </Card>

        <SectionTitle>Service category</SectionTitle>
        <Card>
          <Input label="Select Category" placeholder="Eg. Car Cleaning" />
        </Card>

        <SectionTitle>Banking Details</SectionTitle>
        <Card>
          <Input label="Bank Name" placeholder="Select Bank" style={{ marginBottom: '24px' }} />
          <Input label="Account Number" placeholder="Eg. 1565825331" style={{ marginBottom: '24px' }} />
          <FileUpload
            label="Proof of Bank Account document*"
            value={bankDoc}
            onChange={setBankDoc}
          />
          <p style={{
            fontSize: '14px',
            color: '#636363',
            marginTop: '8px',
            lineHeight: '24px',
          }}>
            Upload Bank confirmation letter/ Clear image of a Cancelled Cheque/ Bank Letterhead
          </p>
        </Card>

        <SaveButton onClick={handleSubmit}>Save and Continue</SaveButton>
      </Content>
    </Container>
  );
};

