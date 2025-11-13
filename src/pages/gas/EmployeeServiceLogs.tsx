import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  color: '$textLight',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    color: '#64C2C8',
    textDecoration: 'underline',
  },
});

const SearchContainer = styled('div', {
  position: 'relative',
  width: '300px',
  marginBottom: '$6',
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

const Rating = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const FeedbackButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  padding: '$1',
  
  '&:hover': {
    opacity: 0.7,
  },
});

export const EmployeeServiceLogs: React.FC = () => {
  const navigate = useNavigate();

  const logs = [
    { srNo: '01', bookingId: '847552', customerName: 'K Adam', date: '07/10/2024', time: '9:00 AM', rating: 4.3 },
  ];

  return (
    <GasLayout title="Manage Employee">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/employees')}>
          Manage Employee
        </BreadcrumbLink>
        <span>›</span>
        <span>Service Logs</span>
      </Breadcrumb>

      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput type="text" placeholder="Search" />
      </SearchContainer>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <Th>Sr No.</Th>
              <Th>Booking Id</Th>
              <Th>Customer Name</Th>
              <Th>Service Date</Th>
              <Th>Service Time</Th>
              <Th>Rating</Th>
              <Th>Feedback</Th>
            </tr>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <Tr key={log.srNo}>
                <Td>{log.srNo}</Td>
                <Td>{log.bookingId}</Td>
                <Td>{log.customerName}</Td>
                <Td>{log.date}</Td>
                <Td>{log.time}</Td>
                <Td>
                  <Rating>
                    <span>{log.rating}</span>
                    <span>⭐</span>
                  </Rating>
                </Td>
                <Td>
                  <FeedbackButton>💬</FeedbackButton>
                </Td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GasLayout>
  );
};

