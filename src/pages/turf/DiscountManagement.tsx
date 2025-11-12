import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SearchContainer = styled('div', {
  position: 'relative',
  width: '300px',
});

const SearchIcon = styled('span', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$textLight',
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$2 $3 $2 $8',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const AddButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
});

const TableContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const Table = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
});

const TableHead = styled('thead', {
  backgroundColor: '#64C2C8',
});

const TableRow = styled('tr', {
  borderBottom: '1px solid #e5e7eb',
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const TableHeader = styled('th', {
  padding: '$4',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$white',
  fontFamily: 'Figtree, sans-serif',
});

const TableBody = styled('tbody', {});

const TableCell = styled('td', {
  padding: '$4',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Toggle = styled('button', {
  width: '48px',
  height: '24px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.3s ease',
  
  variants: {
    active: {
      true: {
        backgroundColor: '#10B981',
      },
      false: {
        backgroundColor: '#D1D5DB',
      },
    },
  },
  
  '&::after': {
    content: '',
    position: 'absolute',
    top: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '$white',
    transition: 'all 0.3s ease',
  },
});

const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  color: '$textLight',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
});

const SearchIconSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const discounts = [
  { srNo: '01', name: 'BLACKFRIDAY', value: '80', duration: '12 Days', conditions: 'Lorem Ipsum Dolor Sit Amet,...', active: true },
];

export const DiscountManagement: React.FC = () => {
  const navigate = useNavigate();

  return (
    <TurfLayout title="Discount Code">
      <Container>
        <TopRow>
          <SearchContainer>
            <SearchIcon>
              <SearchIconSVG />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search" />
          </SearchContainer>
          <AddButton onClick={() => navigate('/turf/discounts/add')}>
            <PlusIcon /> Add New
          </AddButton>
        </TopRow>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Name Of Code</TableHeader>
                <TableHeader>Discount Value</TableHeader>
                <TableHeader>Duration</TableHeader>
                <TableHeader>Conditions</TableHeader>
                <TableHeader>Activate</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {discounts.map((discount, index) => (
                <TableRow key={index}>
                  <TableCell>{discount.srNo}</TableCell>
                  <TableCell>{discount.name}</TableCell>
                  <TableCell>{discount.value}</TableCell>
                  <TableCell>{discount.duration}</TableCell>
                  <TableCell>{discount.conditions}</TableCell>
                  <TableCell>
                    <Toggle
                      active={discount.active}
                      style={{
                        '&::after': {
                          left: discount.active ? '26px' : '2px',
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <ActionButton onClick={() => navigate('/turf/discounts/edit')}>
                      <EyeIcon />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </TurfLayout>
  );
};

