import React from 'react';
import { styled } from '@/styles/theme';
import { TurfSidebar } from './TurfSidebar';
import { TurfHeader } from './TurfHeader';

const LayoutContainer = styled('div', {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
});

const MainContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const ContentArea = styled('div', {
  flex: 1,
  overflow: 'auto',
  backgroundColor: '#f9fafb',
  padding: '$8',
});

interface TurfLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const TurfLayout: React.FC<TurfLayoutProps> = ({ title, children }) => {
  return (
    <LayoutContainer>
      <TurfSidebar />
      <MainContent>
        <TurfHeader title={title} />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

