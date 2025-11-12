import React from 'react';
import { styled } from '@/styles/theme';

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100%',
});

const Label = styled('label', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$textSecondary',
  lineHeight: 1.5,
});

const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  backgroundColor: '$inputBg',
  border: '1.5px solid rgba(224, 102, 102, 0.1)',
  borderRadius: '$md',
  padding: '$2 $3',
  height: '48px',
  transition: 'border-color 0.2s ease',
  
  '&:focus-within': {
    borderColor: '$onboardingPrimary',
  },
  
  variants: {
    hasError: {
      true: {
        borderColor: '$errorBorder',
      },
    },
  },
});

const StyledInput = styled('input', {
  flex: 1,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '15px',
  color: '$text',
  fontFamily: '$body',
  
  '&::placeholder': {
    color: '$textPlaceholder',
  },
  
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

const HelperText = styled('span', {
  fontSize: '$xs',
  lineHeight: 1.5,
  
  variants: {
    error: {
      true: {
        color: '$textError',
      },
      false: {
        color: '$textTertiary',
      },
    },
  },
});

const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error = false,
  startIcon,
  endIcon,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputWrapper hasError={error}>
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        <StyledInput id={inputId} {...props} />
        {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
      </InputWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </InputContainer>
  );
};

