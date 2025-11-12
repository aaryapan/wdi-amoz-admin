import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from '@/styles/theme';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: 'fadeIn 150ms ease-in',
  
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$background',
  borderRadius: '$md',
  boxShadow: '$lg',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '$6',
  animation: 'contentShow 150ms ease-out',
  
  '&:focus': {
    outline: 'none',
  },
  
  '@keyframes contentShow': {
    from: {
      opacity: 0,
      transform: 'translate(-50%, -48%) scale(0.96)',
    },
    to: {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
});

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$semibold',
  color: '$text',
  fontSize: '$xl',
  marginBottom: '$4',
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: 0,
  color: '$textSecondary',
  fontSize: '$base',
  lineHeight: '$base',
  marginBottom: '$5',
});

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
}) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent>
          {title && <StyledTitle>{title}</StyledTitle>}
          {description && <StyledDescription>{description}</StyledDescription>}
          {children}
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

