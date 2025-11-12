import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SearchInput = styled('div', {
  position: 'relative',
  maxWidth: '400px',
  
  '& svg': {
    position: 'absolute',
    left: '$3',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    color: '$textLight',
  },
  
  '& input': {
    width: '400px',
    padding: '$3 $3 $3 $10',
    border: '1px solid #e5e7eb',
    borderRadius: '$md',
    fontSize: '14px',
    fontFamily: 'Figtree, sans-serif',
    
    '&:focus': {
      outline: 'none',
      borderColor: '#64C2C8',
    },
    
    '&::placeholder': {
      color: '#9CA3AF',
    },
  },
});

const AddNewButton = styled('button', {
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

const ConditionsText = styled('span', {
  maxWidth: '200px',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ToggleSwitch = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '48px',
  height: '24px',
  
  '& input': {
    opacity: 0,
    width: 0,
    height: 0,
  },
  
  '& input:checked + span': {
    backgroundColor: '#64C2C8',
  },
  
  '& input:checked + span:before': {
    transform: 'translateX(24px)',
  },
});

const ToggleSlider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '0.3s',
  borderRadius: '24px',
  
  '&:before': {
    position: 'absolute',
    content: '',
    height: '18px',
    width: '18px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    transition: '0.3s',
    borderRadius: '50%',
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

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const discounts = [
  { srNo: '01', name: 'BLACKFRIDAY', value: '80', endDate: '12-05-2025', conditions: 'Lorem Ipsum Dolor Sit Amet,...', active: true },
];

export const DiscountManagement: React.FC = () => {
  const navigate = useNavigate();
  const [discountList, setDiscountList] = useState(discounts);

  const handleToggle = (index: number) => {
    const updated = [...discountList];
    updated[index].active = !updated[index].active;
    setDiscountList(updated);
  };

  return (
    <VehicleLayout title="Discount Code">
      <Container>
        <Header>
          <SearchInput>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </SearchInput>
          <AddNewButton onClick={() => navigate('/vehicle/discounts/add')}>
            <PlusIcon /> Add New
          </AddNewButton>
        </Header>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Name Of Code</TableHeader>
                <TableHeader>Discount Value</TableHeader>
                <TableHeader>End Date</TableHeader>
                <TableHeader>Conditions</TableHeader>
                <TableHeader>Activate</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {discountList.map((discount, index) => (
                <TableRow key={index}>
                  <TableCell>{discount.srNo}</TableCell>
                  <TableCell>{discount.name}</TableCell>
                  <TableCell>{discount.value}</TableCell>
                  <TableCell>{discount.endDate}</TableCell>
                  <TableCell>
                    <ConditionsText title={discount.conditions}>
                      {discount.conditions}
                    </ConditionsText>
                  </TableCell>
                  <TableCell>
                    <ToggleSwitch>
                      <input
                        type="checkbox"
                        checked={discount.active}
                        onChange={() => handleToggle(index)}
                      />
                      <ToggleSlider />
                    </ToggleSwitch>
                  </TableCell>
                  <TableCell>
                    <ActionButton onClick={() => navigate('/vehicle/discounts/edit')}>
                      <ViewIcon />
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </VehicleLayout>
  );
};
