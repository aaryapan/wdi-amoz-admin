import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';

const FilterSection = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$6',
  alignItems: 'center',
});

const FilterButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: '$white',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    borderColor: '#64C2C8',
  },
});

const FilterSelect = styled('select', {
  padding: '$2 $4',
  border: '1px solid #e5e5e5',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  
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
  overflowX: 'auto',
});

const Table = styled('table', {
  width: '100%',
  minWidth: '1400px',
  borderCollapse: 'collapse',
});

const TableHeader = styled('thead', {
  backgroundColor: '#64C2C8',
});

const Th = styled('th', {
  padding: '$4',
  textAlign: 'left',
  fontSize: '13px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  whiteSpace: 'nowrap',
  
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
  fontSize: '13px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  whiteSpace: 'nowrap',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
});

const StatusBadge = styled('span', {
  padding: '$1 $3',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    type: {
      completed: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
      inProgress: {
        backgroundColor: '#FEF3C7',
        color: '#D97706',
      },
      received: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
      paid: {
        backgroundColor: '#D1FAE5',
        color: '#059669',
      },
    },
  },
});

const ActionButton = styled('button', {
  padding: '$2',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  color: '#64C2C8',
  
  '&:hover': {
    opacity: 0.7,
  },
});

export const PaymentManagement: React.FC = () => {
  const payments = [
    {
      srNo: '01',
      bookingId: '857552',
      staff: 'Adam T',
      type: '11 Kg',
      serviceStatus: 'completed',
      paymentStatus: 'received',
      paymentType: 'Credit Card',
      totalAmount: '80',
      commission: '20',
      amountReceived: 'Yes',
    },
    {
      srNo: '02',
      bookingId: '857552',
      staff: 'Adam T',
      type: '11 Kg',
      serviceStatus: 'inProgress',
      paymentStatus: 'received',
      paymentType: 'Debit Card',
      totalAmount: '80',
      commission: 'Paid',
      amountReceived: 'Yes',
    },
    {
      srNo: '03',
      bookingId: '857552',
      staff: 'Adam T',
      type: '22 Kg',
      serviceStatus: 'completed',
      paymentStatus: 'received',
      paymentType: 'Cash On Delivery',
      totalAmount: '80',
      commission: '20',
      amountReceived: 'Yes',
    },
  ];

  return (
    <GasLayout title="Payment Management">
      <FilterSection>
        <FilterButton>
          Sort By Date <span>📅</span>
        </FilterButton>
        <FilterSelect>
          <option>Assignment Status</option>
        </FilterSelect>
        <FilterSelect>
          <option>Category</option>
        </FilterSelect>
      </FilterSection>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <Th>Sr No.</Th>
              <Th>Booking Id</Th>
              <Th>Service Staff Name</Th>
              <Th>Type</Th>
              <Th>Service Status</Th>
              <Th>Payment Status</Th>
              <Th>Payment Type</Th>
              <Th>Total Amount</Th>
              <Th>Commission</Th>
              <Th>Amount Received</Th>
              <Th>Actions</Th>
            </tr>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <Tr key={payment.srNo}>
                <Td>{payment.srNo}</Td>
                <Td>{payment.bookingId}</Td>
                <Td>{payment.staff}</Td>
                <Td>{payment.type}</Td>
                <Td>
                  <StatusBadge type={payment.serviceStatus as any}>
                    {payment.serviceStatus === 'completed' ? 'Completed' : 'In Progress'}
                  </StatusBadge>
                </Td>
                <Td>
                  <StatusBadge type="received">
                    Staff Received
                  </StatusBadge>
                </Td>
                <Td>{payment.paymentType}</Td>
                <Td>{payment.totalAmount}</Td>
                <Td>{payment.commission}</Td>
                <Td>{payment.amountReceived}</Td>
                <Td>
                  <ActionButton>🔵</ActionButton>
                </Td>
              </Tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GasLayout>
  );
};

