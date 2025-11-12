import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$onboardingBg',
  overflow: 'auto',
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

const TitleSection = styled('div', {
  textAlign: 'center',
  margin: '52px auto 28px',
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
});

const ServiceGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '28px',
  maxWidth: '1240px',
  margin: '0 auto',
  padding: '0 100px',
});

const ServiceCard = styled('div', {
  position: 'relative',
  height: '264px',
  backgroundColor: '#f3ece2',
  borderRadius: '24px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '2px 2px 6px 0px rgba(0,0,0,0.1), 8px 8px 11px 0px rgba(0,0,0,0.09)',
  border: '3px solid transparent',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '4px 4px 12px 0px rgba(0,0,0,0.15)',
  },
  
  variants: {
    selected: {
      true: {
        border: '3px solid $onboardingPrimary',
        boxShadow: '0px 0px 0px 2px rgba(100, 194, 200, 0.3), 2px 2px 6px 0px rgba(0,0,0,0.1)',
      },
    },
  },
});

const ServiceImage = styled('div', {
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
});

const ServiceName = styled('p', {
  position: 'absolute',
  bottom: '59px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontFamily: 'Figtree, sans-serif',
  fontSize: '20px',
  fontWeight: '$medium',
  color: '$white',
  textAlign: 'center',
  width: '164px',
  zIndex: 1,
});

const CheckboxOverlay = styled('div', {
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: '$white',
  border: '2px solid $onboardingPrimary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  transition: 'all 0.2s ease',
  
  variants: {
    checked: {
      true: {
        backgroundColor: '$onboardingPrimary',
      },
      false: {
        backgroundColor: '$white',
      },
    },
  },
});

const CheckIcon = styled('svg', {
  width: '20px',
  height: '20px',
  color: '$white',
});

const DeleteButton = styled('button', {
  position: 'absolute',
  right: '100px',
  top: '126px',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3',
  backgroundColor: '$white',
  border: '1px solid rgba(255, 54, 54, 0.42)',
  borderRadius: '$md',
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: '$medium',
  color: '#ff3636',
  
  '&:hover': {
    backgroundColor: '#fff5f5',
  },
});

const ContinueButton = styled('button', {
  position: 'fixed',
  bottom: '40px',
  right: '100px',
  padding: '$3 $6',
  backgroundColor: '$onboardingPrimary',
  border: 'none',
  borderRadius: '$md',
  fontSize: '20px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  boxShadow: '$lg',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const services = [
  { id: 'cleaning', name: 'Cleaning', image: 'https://www.figma.com/api/mcp/asset/cf6793cc-66ee-4a0c-99cd-af76939b5702' },
  { id: 'sports', name: 'Sports & Fitness', image: 'https://www.figma.com/api/mcp/asset/6f706254-0717-4413-b267-1520980553f8' },
  { id: 'plumbing', name: 'Plumbing', image: 'https://www.figma.com/api/mcp/asset/e5f10699-358c-4f5c-9913-d01a90749b0a' },
  { id: 'electrician', name: 'Electrician', image: 'https://www.figma.com/api/mcp/asset/733b6407-b14d-48f7-98ea-04539d4241de' },
  { id: 'vehicle', name: 'Rent a Vehicle', image: 'https://www.figma.com/api/mcp/asset/c7f0e37a-6fbd-4aba-a4da-adbc38f22681' },
  { id: 'gas', name: 'Gas Cylinder booking', image: 'https://www.figma.com/api/mcp/asset/fb0a7ced-b23a-43e2-9d0f-c45080ec24d0' },
  { id: 'driving', name: 'Personal Driving Instructor', image: 'https://www.figma.com/api/mcp/asset/bed3aeca-c71f-4daf-a765-7505c5c5ebdf' },
  { id: 'turf', name: 'Turf Bookings', image: 'https://www.figma.com/api/mcp/asset/6f706254-0717-4413-b267-1520980553f8' },
];

export const SelectService: React.FC = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleContinue = () => {
    // Save selected services to localStorage so Login/Registration can use it
    if (selectedServices.length > 0) {
      localStorage.setItem('selected_services', JSON.stringify(selectedServices));
    }
    navigate('/onboarding/login');
  };

  return (
    <Container>
      <Header>
        <Logo
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/ef12c3fd-9404-4d14-a196-5b7136e34a31')`,
          }}
        />
      </Header>

      <DeleteButton>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
        Delete Service
      </DeleteButton>

      <TitleSection>
        <Title>Select a Service</Title>
        <Subtitle>Select the service your company provides</Subtitle>
      </TitleSection>

      <ServiceGrid>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            selected={selectedServices.includes(service.id)}
            onClick={() => handleServiceClick(service.id)}
          >
            <CheckboxOverlay checked={selectedServices.includes(service.id)}>
              {selectedServices.includes(service.id) && (
                <CheckIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </CheckIcon>
              )}
            </CheckboxOverlay>
            <ServiceImage
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </ServiceGrid>

      <ContinueButton onClick={handleContinue}>
        Continue
      </ContinueButton>
    </Container>
  );
};

