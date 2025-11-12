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

const LoginLink = styled('a', {
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

const SendOTPButton = styled(Button, {
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

export const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    // Handle send OTP logic
    navigate('/onboarding/verify-otp');
  };

  return (
    <Container>
      <LeftPanel>
        <LeftPanelImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/c0eb5a6b-9256-4a87-91f4-5dd1d1340081')`,
          }}
        />
        <LogoOverlay
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/4f3a91c8-44dd-45b1-ad50-49a21303c22d')`,
          }}
        />
      </LeftPanel>

      <RightPanel>
        <FormContainer>
          <div>
            <Title>Welcome to Company App</Title>
            <Subtitle>Please Sign Up to continue</Subtitle>
          </div>

          <Input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startIcon={<MailIcon />}
          />

          <SendOTPButton onClick={handleSendOTP}>Send OTP</SendOTPButton>

          <LoginLink onClick={() => navigate('/onboarding/login')}>
            Already have an account? Login
          </LoginLink>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

