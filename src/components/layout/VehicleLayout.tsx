import React from 'react';
import { styled } from '@/styles/theme';
import { VehicleSidebar } from './VehicleSidebar';
import { VehicleHeader } from './VehicleHeader';

const LayoutContainer = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f9fafb',
});

const MainContent = styled('main', {
  marginLeft: '312px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const ContentArea = styled('div', {
  flex: 1,
  padding: '$8',
});

interface VehicleLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const VehicleLayout: React.FC<VehicleLayoutProps> = ({ children, title }) => {
  return (
    <LayoutContainer>
      <VehicleSidebar />
      <MainContent>
        <VehicleHeader title={title} />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

