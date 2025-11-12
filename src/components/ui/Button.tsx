import React from 'react';
import { styled } from '@/styles/theme';
import { Variant } from '@/types/common.types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$base',
  fontWeight: '$medium',
  fontFamily: '$body',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  
  '&:focus-visible': {
    outline: '2px solid $primary',
    outlineOffset: '2px',
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover:not(:disabled)': {
          backgroundColor: '$primaryHover',
        },
      },
      secondary: {
        backgroundColor: '$gray200',
        color: '$text',
        '&:hover:not(:disabled)': {
          backgroundColor: '$gray300',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid $border',
        color: '$text',
        '&:hover:not(:disabled)': {
          backgroundColor: '$gray100',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$text',
        '&:hover:not(:disabled)': {
          backgroundColor: '$gray100',
        },
      },
      danger: {
        backgroundColor: '$declined',
        color: '$white',
        '&:hover:not(:disabled)': {
          backgroundColor: '$declinedText',
        },
      },
    },
    size: {
      sm: {
        height: '$8',
        px: '$3',
        fontSize: '$sm',
      },
      md: {
        height: '$9',
        px: '$4',
        fontSize: '$base',
      },
      lg: {
        height: '$10',
        px: '$5',
        fontSize: '$lg',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};

