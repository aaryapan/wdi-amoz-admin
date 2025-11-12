import React from 'react';
import { styled, keyframes } from '@/styles/theme';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const SpinnerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$8',
});

const Spinner = styled('div', {
  border: '4px solid $gray200',
  borderTop: '4px solid $primary',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
  
  variants: {
    size: {
      sm: {
        width: '$5',
        height: '$5',
      },
      md: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
  return (
    <SpinnerContainer>
      <Spinner size={size} />
    </SpinnerContainer>
  );
};

