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

const FilterRow = styled('div', {
  display: 'flex',
  gap: '$4',
});

const SearchContainer = styled('div', {
  position: 'relative',
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
  padding: '$2 $3 $2 $8',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  minWidth: '200px',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const Select = styled('select', {
  padding: '$2 $4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
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

const ActionsCell = styled('div', {
  display: 'flex',
  gap: '$2',
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

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const turfs = [
  { srNo: '01', name: "Sultan's Green Meadow", location: 'Muscat', courts: '5', available: true },
];

export const ManageTurfs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <TurfLayout title="Turf Management">
      <Container>
        <TopRow>
          <FilterRow>
            <SearchContainer>
              <SearchIcon>
                <SearchIconSVG />
              </SearchIcon>
              <SearchInput type="text" placeholder="Search" />
            </SearchContainer>
            <Select>
              <option>Location</option>
            </Select>
            <Select>
              <option>Type</option>
            </Select>
            <Select>
              <option>Availability</option>
            </Select>
          </FilterRow>
          <AddButton onClick={() => navigate('/turf/turfs/add')}>
            <PlusIcon /> Add New
          </AddButton>
        </TopRow>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Turf Name</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader>Courts</TableHeader>
                <TableHeader>Available</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {turfs.map((turf, index) => (
                <TableRow key={index}>
                  <TableCell>{turf.srNo}</TableCell>
                  <TableCell>{turf.name}</TableCell>
                  <TableCell>{turf.location}</TableCell>
                  <TableCell>{turf.courts}</TableCell>
                  <TableCell>
                    <Toggle
                      active={turf.available}
                    />
                  </TableCell>
                  <TableCell>
                    <ActionsCell>
                      <ActionButton onClick={() => navigate('/turf/turfs/1')}>
                        <EyeIcon />
                      </ActionButton>
                      <ActionButton onClick={() => navigate('/turf/turfs/1/edit')}>
                        <EditIcon />
                      </ActionButton>
                      <ActionButton>
                        <TrashIcon />
                      </ActionButton>
                    </ActionsCell>
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

