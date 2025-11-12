import React, { useEffect } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$onboardingBg',
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

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 75px)',
  padding: '$16',
});

const SuccessImage = styled('div', {
  width: '228px',
  height: '219px',
  marginBottom: '$8',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const Title = styled('h1', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '32px',
  fontWeight: '$semibold',
  lineHeight: '40px',
  color: '$text',
  textAlign: 'center',
  marginBottom: '$6',
});

const Message = styled('p', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '20px',
  fontWeight: '$normal',
  lineHeight: '24px',
  color: '$text',
  textAlign: 'center',
  maxWidth: '655px',
});

export const RegistrationComplete: React.FC = () => {
  const navigate = useNavigate();

  // Auto-redirect to service dashboard after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Get selected service from localStorage
      const selectedServicesStr = localStorage.getItem('selected_services');
      
      if (selectedServicesStr) {
        try {
          const selectedServices = JSON.parse(selectedServicesStr);
          if (Array.isArray(selectedServices)) {
            if (selectedServices.includes('cleaning')) {
              navigate('/cleaning/dashboard');
              return;
            }
            if (selectedServices.includes('plumbing')) {
              navigate('/plumbing/dashboard');
              return;
            }
            if (selectedServices.includes('electrical')) {
              navigate('/electrical/dashboard');
              return;
            }
            if (selectedServices.includes('driving')) {
              navigate('/driving/dashboard');
              return;
            }
            if (selectedServices.includes('gas')) {
              navigate('/gas/dashboard');
              return;
            }
                if (selectedServices.includes('turf')) {
                  navigate('/turf/dashboard');
                  return;
                }
                if (selectedServices.includes('vehicle')) {
                  navigate('/vehicle/dashboard');
                  return;
                }
              }
            } catch (error) {
              console.error('Error parsing selected services:', error);
            }
          }
          
          // Default to cleaning
          navigate('/cleaning/dashboard');
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Header>
        <Logo
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/63287918-aabb-47a2-8b6a-9ab16a9e79b0')`,
          }}
        />
      </Header>

      <Content>
        <SuccessImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/ea92268c-fecf-4ba7-bbaf-49a54b285d5a')`,
          }}
        />
        <Title>Registration is done</Title>
        <Title>Waiting for the Approval</Title>
        <Message>
          Your registration has been successfully completed, and now we await the admin's approval.
        </Message>
      </Content>
    </Container>
  );
};

