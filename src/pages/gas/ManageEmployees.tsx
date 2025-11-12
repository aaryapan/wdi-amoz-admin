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

const EmployeeInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const Avatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const Rating = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
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

export const ManageEmployees: React.FC = () => {
  const navigate = useNavigate();

  const employees = [
    { id: '01', name: 'John Adam', email: 'admin@mail.co.in', phone: '7585968574', rating: 4.3 },
  ];

  return (
    <GasLayout title="Manage Employee">
      <Header>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        
        <AddButton>
          <span>➕</span> Add New
        </AddButton>
      </Header>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <Th>Sr No.</Th>
              <Th>Name</Th>
              <Th>E-Mail</Th>
              <Th>Phone</Th>
              <Th>Rating</Th>
              <Th>Actions</Th>
            </tr>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <Tr key={employee.id}>
                <Td>{employee.id}</Td>
                <Td>
                  <EmployeeInfo>
                    <Avatar src={`https://i.pravatar.cc/150?img=${employee.id}`} alt={employee.name} />
                    <span>{employee.name}</span>
                  </EmployeeInfo>
                </Td>
                <Td>{employee.email}</Td>
                <Td>{employee.phone}</Td>
                <Td>
                  <Rating>
                    <span>{employee.rating}</span>
                    <span>⭐</span>
                  </Rating>
                </Td>
                <Td>
                  <ActionsCell>
                    <IconButton onClick={() => navigate(`/gas/employees/${employee.id}/calendar`)} title="Calendar">
                      📅
                    </IconButton>
                    <IconButton onClick={() => navigate(`/gas/employees/${employee.id}/logs`)} title="Service Logs">
                      📋
                    </IconButton>
                    <IconButton onClick={() => navigate(`/gas/employees/${employee.id}/edit`)} title="Edit">
                      ✏️
                    </IconButton>
                    <IconButton onClick={() => navigate(`/gas/employees/${employee.id}`)} title="View">
                      👁️
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
