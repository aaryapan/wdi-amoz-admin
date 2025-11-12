import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate } from 'react-router-dom';

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
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
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $3 $3 $8',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const AddButton = styled('button', {
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  color: '$white',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#50AEB4',
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

const TableHeader = styled('thead', {
  backgroundColor: '#64C2C8',
});

const Th = styled('th', {
  padding: '$4',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
});

const TableBody = styled('tbody', {});

const Tr = styled('tr', {
  borderBottom: '1px solid #f0f0f0',
  
  '&:hover': {
    backgroundColor: '#f9fafb',
  },
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const Td = styled('td', {
  padding: '$4',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
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
    backgroundColor: '#10B981',
  },
  
  '& input:checked + span:before': {
    transform: 'translateX(24px)',
  },
});

const Slider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '.4s',
  borderRadius: '24px',
  
  '&:before': {
    position: 'absolute',
    content: '""',
    height: '18px',
    width: '18px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    transition: '.4s',
    borderRadius: '50%',
  },
});

const ActionsCell = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
});

const IconButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  padding: '$2',
  color: '$textLight',
  transition: 'color 0.2s ease',
  
  '&:hover': {
    color: '#64C2C8',
  },
});

export const ServiceManagement: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    { srNo: '01', spec: '11 Kg', price: '500', active: true },
  ];

  return (
    <GasLayout title="Service Management">
      <Header>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        
        <AddButton onClick={() => navigate('/gas/services/add')}>
          <span>➕</span> Add New
        </AddButton>
      </Header>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <Th>Sr No.</Th>
              <Th>Cylinder Spec</Th>
              <Th>Price</Th>
              <Th>Activate</Th>
              <Th>Actions</Th>
            </tr>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <Tr key={service.srNo}>
                <Td>{service.srNo}</Td>
                <Td>{service.spec}</Td>
                <Td>{service.price}</Td>
                <Td>
                  <ToggleSwitch>
                    <input type="checkbox" defaultChecked={service.active} />
                    <Slider />
                  </ToggleSwitch>
                </Td>
                <Td>
                  <ActionsCell>
                    <IconButton onClick={() => navigate(`/gas/services/${service.spec}`)} title="View">
                      👁️
                    </IconButton>
                    <IconButton onClick={() => navigate(`/gas/services/${service.spec}/edit`)} title="Edit">
                      ✏️
                    </IconButton>
                  </ActionsCell>
                </Td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GasLayout>
  );
};

