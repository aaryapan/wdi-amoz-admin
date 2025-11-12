import React from 'react';
import { styled } from '@/styles/theme';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const FilterRow = styled('div', {
  display: 'flex',
  gap: '$4',
});

const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '$white',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const Select = styled('select', {
  padding: '$2 $4',
  backgroundColor: '$white',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
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

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const payments = [
  {
    srNo: '01',
    bookingId: '857552',
    turfName: 'Adam T',
    courtName: 'Haircare',
    serviceStatus: 'Completed',
    paymentStatus: 'Staff Received',
    paymentType: 'Credit Card',
    totalAmount: '80',
    commission: '20',
    amount: 'Yes',
  },
  {
    srNo: '02',
    bookingId: '857552',
    turfName: 'Adam T',
    courtName: 'Haircare',
    serviceStatus: 'In Progress',
    paymentStatus: 'Staff Received',
    paymentType: 'Debit Card',
    totalAmount: '80',
    commission: '20',
    amount: 'Yes',
  },
  {
    srNo: '03',
    bookingId: '857552',
    turfName: 'Adam T',
    courtName: 'Haircare',
    serviceStatus: 'Completed',
    paymentStatus: 'Staff Received',
    paymentType: 'Cash On Delivery',
    totalAmount: '80',
    commission: '20',
    amount: 'Yes',
  },
];

export const PaymentTracking: React.FC = () => {
  return (
    <TurfLayout title="Payment Management">
      <Container>
        <FilterRow>
          <FilterButton>
            <CalendarIcon /> Sort By Date
          </FilterButton>
          <Select>
            <option>Assignment Status</option>
          </Select>
          <Select>
            <option>Category</option>
          </Select>
        </FilterRow>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Booking Id</TableHeader>
                <TableHeader>Turf_Name</TableHeader>
                <TableHeader>Court Name</TableHeader>
                <TableHeader>Service Status</TableHeader>
                <TableHeader>Payment Status</TableHeader>
                <TableHeader>Payment Type</TableHeader>
                <TableHeader>Total Amount</TableHeader>
                <TableHeader>Commission</TableHeader>
                <TableHeader>Amount</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.srNo}</TableCell>
                  <TableCell>{payment.bookingId}</TableCell>
                  <TableCell>{payment.turfName}</TableCell>
                  <TableCell>{payment.courtName}</TableCell>
                  <TableCell>{payment.serviceStatus}</TableCell>
                  <TableCell>{payment.paymentStatus}</TableCell>
                  <TableCell>{payment.paymentType}</TableCell>
                  <TableCell>{payment.totalAmount}</TableCell>
                  <TableCell>{payment.commission}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </TurfLayout>
  );
};

