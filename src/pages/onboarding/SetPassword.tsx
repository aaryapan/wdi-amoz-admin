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

const DisabledInput = styled('div', {
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 $6',
  backgroundColor: 'rgba(100, 194, 200, 0.25)',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
});

const CreateButton = styled(Button, {
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

export const SetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      setError('Password must match');
      return;
    }
    navigate('/onboarding/business-hours');
  };

  return (
    <Container>
      <LeftPanel>
        <LeftPanelImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/6c174c73-aa77-4e00-89dc-bc234ed5b2c2')`,
          }}
        />
        <LogoOverlay
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/89189d32-4172-4cf0-b043-6177fba885de')`,
          }}
        />
      </LeftPanel>

      <RightPanel>
        <FormContainer>
          <div>
            <Title>Set Password</Title>
            <Subtitle>Your Email has been Verified, Please set Password</Subtitle>
          </div>

          <DisabledInput>admin@email.com</DisabledInput>

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            helperText="Helper text"
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError('');
            }}
            error={!!error}
            helperText={error || ''}
          />

          <CreateButton onClick={handleCreateAccount}>Create Account</CreateButton>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

