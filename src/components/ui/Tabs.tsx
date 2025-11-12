import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '@/styles/theme';

const StyledRoot = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $border`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: '$body',
  backgroundColor: 'transparent',
  padding: '$2 $4',
  height: '$10',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$base',
  lineHeight: 1,
  color: '$textSecondary',
  userSelect: 'none',
  cursor: 'pointer',
  position: 'relative',
  
  '&:hover': {
    color: '$text',
  },
  
  '&[data-state="active"]': {
    color: '$text',
    fontWeight: '$medium',
    
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: '$primary',
    },
  },
  
  '&:focus-visible': {
    outline: '2px solid $primary',
    outlineOffset: '-2px',
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: '$5 0',
  backgroundColor: '$background',
  outline: 'none',
});

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  defaultValue: string;
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, items }) => {
  return (
    <StyledRoot defaultValue={defaultValue}>
      <StyledList aria-label="Tabs">
        {items.map((item) => (
          <StyledTrigger key={item.value} value={item.value}>
            {item.label}
          </StyledTrigger>
        ))}
      </StyledList>
      {items.map((item) => (
        <StyledContent key={item.value} value={item.value}>
          {item.content}
        </StyledContent>
      ))}
    </StyledRoot>
  );
};

