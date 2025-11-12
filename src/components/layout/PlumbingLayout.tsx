import React from 'react';
import { styled } from '@/styles/theme';
import { PlumbingSidebar } from './PlumbingSidebar';
import { PlumbingHeader } from './PlumbingHeader';
import { useNavigate } from 'react-router-dom';

const LayoutContainer = styled('div', {
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '$onboardingBg',
  position: 'relative',
});

const MainContent = styled('main', {
  marginLeft: '312px',
  paddingTop: '68px',
  minHeight: '100vh',
});

const ContentInner = styled('div', {
  padding: '$12 $16',
});

interface PlumbingLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const PlumbingLayout: React.FC<PlumbingLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/plumbing/profile');
  };

  return (
    <LayoutContainer>
      <PlumbingSidebar />
      <PlumbingHeader title={title} onProfileClick={handleProfileClick} />
      <MainContent>
        <ContentInner>{children}</ContentInner>
      </MainContent>
    </LayoutContainer>
  );
};
