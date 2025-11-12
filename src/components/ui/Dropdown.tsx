import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '@/styles/theme';

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: '200px',
  backgroundColor: '$background',
  borderRadius: '$md',
  padding: '$2',
  boxShadow: '$lg',
  border: '1px solid $border',
  animation: 'slideDownAndFade 150ms ease-out',
  
  '@keyframes slideDownAndFade': {
    from: {
      opacity: 0,
      transform: 'translateY(-4px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  fontSize: '$base',
  lineHeight: 1,
  color: '$text',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  height: '$9',
  padding: '0 $3',
  position: 'relative',
  paddingLeft: '$6',
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  
  '&[data-disabled]': {
    color: '$textTertiary',
    pointerEvents: 'none',
  },
  
  '&[data-highlighted]': {
    backgroundColor: '$gray100',
  },
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: '1px',
  backgroundColor: '$border',
  margin: '$2 0',
});

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      
      <DropdownMenuPrimitive.Portal>
        <StyledContent sideOffset={5}>
          {children}
        </StyledContent>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export const DropdownItem = StyledItem;
export const DropdownSeparator = StyledSeparator;

