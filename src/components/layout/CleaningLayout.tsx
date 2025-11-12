import React from 'react';
import { styled } from '@/styles/theme';
import { CleaningSidebar } from './CleaningSidebar';
import { CleaningHeader } from './CleaningHeader';
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

interface CleaningLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const CleaningLayout: React.FC<CleaningLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/cleaning/profile');
  };

  return (
    <LayoutContainer>
      <CleaningSidebar />
      <CleaningHeader title={title} onProfileClick={handleProfileClick} />
      <MainContent>
        <ContentInner>{children}</ContentInner>
      </MainContent>
    </LayoutContainer>
  );
};

