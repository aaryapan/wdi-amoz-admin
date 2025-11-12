import React from 'react';
import { styled } from '@/styles/theme';
import { GasSidebar } from './GasSidebar';
import { GasHeader } from './GasHeader';

const LayoutContainer = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
});

const MainContent = styled('main', {
  marginLeft: '220px',
  marginTop: '80px',
  padding: '$8',
  width: 'calc(100% - 220px)',
  minHeight: 'calc(100vh - 80px)',
});

interface GasLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const GasLayout: React.FC<GasLayoutProps> = ({ children, title }) => {
  return (
    <LayoutContainer>
      <GasSidebar />
      <GasHeader title={title} />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};
