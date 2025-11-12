import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const FiltersBar = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $4',
  backgroundColor: '$white',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    borderColor: '#64C2C8',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const Select = styled('select', {
  padding: '$3 $4',
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

const StatusBadge = styled('span', {
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      completed: {
        backgroundColor: '#d1fae5',
        color: '#059669',
      },
      'in-progress': {
        backgroundColor: '#fed7aa',
        color: '#ea580c',
      },
    },
  },
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
  { srNo: '01', bookingId: '857552', vehicleName: 'Turbo Falcon', vehicleId: '254846561', duration: '8 Days', serviceStatus: 'Completed', paymentStatus: 'Staff Received', paymentType: 'Credit Card', totalAmount: '80' },
  { srNo: '02', bookingId: '857552', vehicleName: 'Turbo Falcon', vehicleId: '142575855', duration: '8 Days', serviceStatus: 'In Progress', paymentStatus: 'Staff Received', paymentType: 'Debit Card', totalAmount: '80' },
  { srNo: '03', bookingId: '857552', vehicleName: 'Turbo Falcon', vehicleId: '425869353', duration: '5 Hrs', serviceStatus: 'Completed', paymentStatus: 'Staff Received', paymentType: 'Cash On Delivery', totalAmount: '80' },
];

export const PaymentTracking: React.FC = () => {
  const [sortBy, setSortBy] = useState('date');

  return (
    <VehicleLayout title="Payment Management">
      <Container>
        <FiltersBar>
          <FilterButton>
            Sort by Date
            <CalendarIcon />
          </FilterButton>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="status">Assignment Status</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </Select>
          <Select>
            <option value="">Category</option>
            <option value="car">Car</option>
            <option value="yacht">Yacht</option>
            <option value="jet-ski">Jet Ski</option>
          </Select>
        </FiltersBar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Booking Id</TableHeader>
                <TableHeader>Vehicle Name</TableHeader>
                <TableHeader>Vehicle Id</TableHeader>
                <TableHeader>Duration</TableHeader>
                <TableHeader>Service Status</TableHeader>
                <TableHeader>Payment Status</TableHeader>
                <TableHeader>Payment Type</TableHeader>
                <TableHeader>Total Amount</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.srNo}</TableCell>
                  <TableCell>{payment.bookingId}</TableCell>
                  <TableCell>{payment.vehicleName}</TableCell>
                  <TableCell>{payment.vehicleId}</TableCell>
                  <TableCell>{payment.duration}</TableCell>
                  <TableCell>
                    <StatusBadge status={payment.serviceStatus === 'Completed' ? 'completed' : 'in-progress'}>
                      {payment.serviceStatus}
                    </StatusBadge>
                  </TableCell>
                  <TableCell>{payment.paymentStatus}</TableCell>
                  <TableCell>{payment.paymentType}</TableCell>
                  <TableCell>{payment.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </VehicleLayout>
  );
};
