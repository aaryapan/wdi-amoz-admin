import React, { useEffect } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$onboardingBg',
  display: 'flex',
  alignItems: 'center',
  padding: '0 86px',
});

const LeftContent = styled('div', {
  flex: '0 0 575px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const Logo = styled('div', {
  width: '248px',
  height: '81px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const TaglineText = styled('p', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '24px',
  fontWeight: '$normal',
  lineHeight: '40px',
  color: '$text',
  maxWidth: '475px',
});

const ProgressBarContainer = styled('div', {
  position: 'relative',
  width: '475px',
  height: '8px',
  backgroundColor: 'rgba(217, 217, 217, 0.3)',
  borderRadius: '6px',
  overflow: 'hidden',
});

const ProgressBarFill = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: '8px',
  backgroundColor: '#50aee2',
  borderRadius: '6px',
});

const RightCard = styled('div', {
  position: 'absolute',
  right: '220px',
  top: '100px',
  width: '610px',
  height: '813px',
  backgroundColor: '$white',
  borderRadius: '40px',
  overflow: 'hidden',
  boxShadow: '$md',
  backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
});

const CardTitle = styled('p', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '37px',
  fontWeight: '$semibold',
  lineHeight: '48px',
  color: '$onboardingAccent',
  padding: '70px 64px 0',
  maxWidth: '444px',
});

const CardImage = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '623px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  // Auto-advance to next screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/select-service');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <LeftContent>
        <Logo
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/9527a43f-1a5c-432b-bbcc-2a7c9ee8cead')`,
          }}
        />
        <TaglineText>
          Your trusted partner for exceptional service every time!
        </TaglineText>
        <ProgressBarContainer>
          <ProgressBarFill />
        </ProgressBarContainer>
      </LeftContent>

      <RightCard>
        <CardTitle>
          Home services are a click away. Sign in to see what we offer!
        </CardTitle>
        <CardImage
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/1aebe247-22e4-4ed8-a39d-90627ec2637f')`,
          }}
        />
      </RightCard>

    </Container>
  );
};

