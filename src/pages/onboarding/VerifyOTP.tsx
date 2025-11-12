import React, { useState, useRef } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
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

const OTPContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  justifyContent: 'center',
  margin: '$8 0',
});

const OTPInput = styled('input', {
  width: '68px',
  height: '68px',
  fontSize: '28px',
  fontWeight: '$medium',
  textAlign: 'center',
  border: '1.172px solid $onboardingPrimary',
  borderRadius: '12px',
  outline: 'none',
  backgroundColor: '$white',
  color: '$text',
  
  '&:focus': {
    borderColor: '#50aee2',
    borderWidth: '2px',
  },
  
  '&::placeholder': {
    color: '$textPlaceholder',
  },
});

const VerifyButton = styled(Button, {
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

export const VerifyOTP: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    navigate('/onboarding/set-password');
  };

  return (
    <Container>
      <LeftPanel>
        <LeftPanelImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/85b07f56-46e0-42c8-bfb6-ec40603370ac')`,
          }}
        />
        <LogoOverlay
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/374979bc-b947-4a25-9748-63e12c8726ee')`,
          }}
        />
      </LeftPanel>

      <RightPanel>
        <FormContainer>
          <div>
            <Title>Enter OTP</Title>
            <Subtitle>Please Enter OTP and Verify</Subtitle>
          </div>

          <OTPContainer>
            {otp.map((digit, index) => (
              <OTPInput
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                autoFocus={index === 0}
              />
            ))}
          </OTPContainer>

          <VerifyButton onClick={handleVerify}>Verify</VerifyButton>
        </FormContainer>
      </RightPanel>
    </Container>
  );
};

