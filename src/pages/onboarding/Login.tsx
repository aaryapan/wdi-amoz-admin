import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$onboardingBg',
  display: 'flex',
});

const LeftPanel = styled('div', {
  width: '630px',
  height: '100%',
  backgroundColor: '#d9d9d9',
  position: 'relative',
  overflow: 'hidden',
});

const LeftPanelImage = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1380px',
  height: '1069px',
  opacity: 0.75,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
});

const LogoOverlay = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '376px',
  height: '266px',
  zIndex: 1,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const RightPanel = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 $16',
});

const FormContainer = styled('div', {
  width: '570px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
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

const ForgotPasswordLink = styled('a', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '14px',
  fontWeight: '$normal',
  lineHeight: '24px',
  color: '$text',
  textDecoration: 'underline',
  cursor: 'pointer',
  alignSelf: 'flex-end',
  marginTop: '-$4',
  
  '&:hover': {
    color: '$onboardingPrimary',
  },
});

const SignUpLink = styled('a', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '20px',
  fontWeight: '$normal',
  lineHeight: '24px',
  color: '$text',
  textDecoration: 'underline',
  cursor: 'pointer',
  textAlign: 'center',
  
  '&:hover': {
    color: '$onboardingPrimary',
  },
});

const LoginButton = styled(Button, {
  backgroundColor: '$onboardingPrimary',
  color: '$text',
  width: '100%',
  height: '48px',
  fontSize: '20px',
  fontWeight: '$medium',
  
  '&:hover:not(:disabled)': {
    backgroundColor: '#50aee2',
  },
});

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    // Check selected service from localStorage to determine redirect
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
        
        // Default to cleaning dashboard
        navigate('/cleaning/dashboard');
  };

  return (
    <Container>
      <LeftPanel>
        <LeftPanelImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/d73b4ce3-4f96-40ec-bddc-01f72918a91d')`,
          }}
        />
        <LogoOverlay
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/f9bb655b-c22b-45bd-beca-047d8b0d3911')`,
          }}
        />
      </LeftPanel>

      <RightPanel>
        <FormContainer>
          <div>
            <Title>Welcome to Company Admin</Title>
            <Subtitle>Please Login to continue</Subtitle>
          </div>

          <Input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startIcon={<MailIcon />}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startIcon={<LockIcon />}
          />

          <ForgotPasswordLink onClick={() => navigate('/onboarding/forgot-password')}>
            Forgot Password
          </ForgotPasswordLink>

          <LoginButton onClick={handleLogin}>Login</LoginButton>

          <SignUpLink onClick={() => navigate('/onboarding/registration')}>
            Don't have an account? Sign up
          </SignUpLink>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

