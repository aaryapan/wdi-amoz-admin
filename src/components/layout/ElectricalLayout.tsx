import React from 'react';
import { styled } from '@/styles/theme';
import { ElectricalSidebar } from './ElectricalSidebar';
import { ElectricalHeader } from './ElectricalHeader';
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

interface ElectricalLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const ElectricalLayout: React.FC<ElectricalLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/electrical/profile');
  };

  return (
    <LayoutContainer>
      <ElectricalSidebar />
      <ElectricalHeader title={title} onProfileClick={handleProfileClick} />
      <MainContent>
        <ContentInner>{children}</ContentInner>
      </MainContent>
    </LayoutContainer>
  );
};

