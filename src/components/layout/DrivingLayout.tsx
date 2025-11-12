import React from 'react';
import { styled } from '@/styles/theme';
import { DrivingSidebar } from './DrivingSidebar';
import { DrivingHeader } from './DrivingHeader';
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

interface DrivingLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const DrivingLayout: React.FC<DrivingLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/driving/profile');
  };

  return (
    <LayoutContainer>
      <DrivingSidebar />
      <DrivingHeader title={title} onProfileClick={handleProfileClick} />
      <MainContent>
        <ContentInner>{children}</ContentInner>
      </MainContent>
    </LayoutContainer>
  );
};

