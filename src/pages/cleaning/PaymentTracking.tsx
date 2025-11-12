import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { CleaningLayout } from '@/components/layout/CleaningLayout';

const Container = styled('div', {
  maxWidth: '1600px',
});

const FiltersBar = styled('div', {
  display: 'flex',
  gap: '$3',
  marginBottom: '$5',
});

const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '$white',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const FilterSelect = styled('select', {
  padding: '$2 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
});

const TableContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  overflowX: 'auto',
});

const Table = styled('table', {
  width: '100%',
  minWidth: '1400px',
  borderCollapse: 'collapse',
});

const TableHead = styled('thead', {
  backgroundColor: '$onboardingPrimary',
});

const TableHeaderRow = styled('tr', {});

const TableHeaderCell = styled('th', {
  padding: '$3 $3',
  textAlign: 'left',
  fontSize: '13px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  whiteSpace: 'nowrap',
  
  '&:first-child': {
    paddingLeft: '$5',
  },
  
  '&:last-child': {
    paddingRight: '$5',
  },
});

const TableBody = styled('tbody', {});

const TableRow = styled('tr', {
  borderBottom: '1px solid #E0E0E0',
  
  '&:hover': {
    backgroundColor: '#F9F9F9',
  },
});

const TableCell = styled('td', {
  padding: '$3 $3',
  fontSize: '13px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  whiteSpace: 'nowrap',
  
  '&:first-child': {
    paddingLeft: '$5',
  },
  
  '&:last-child': {
    paddingRight: '$5',
  },
});

const StatusBadge = styled('div', {
  display: 'inline-block',
  padding: '$1 $3',
  borderRadius: '$sm',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  
  variants: {
    status: {
      completed: {
        backgroundColor: '#E8F5E9',
        color: '#2E7D32',
      },
      inProgress: {
        backgroundColor: '#FFF3E0',
        color: '#F57C00',
      },
    },
  },
});

interface Payment {
  srNo: string;
  bookingId: string;
  serviceStaffName: string;
  serviceCategory: string;
  serviceStatus: 'completed' | 'inProgress';
  paymentStatus: 'completed' | 'staffReceived' | 'companyReceived';
  paymentType: string;
  totalAmount: number;
  commission: number;
  amount: string;
}

export const PaymentTracking: React.FC = () => {
  const [assignmentStatus, setAssignmentStatus] = useState('all');
  const [category, setCategory] = useState('all');

  const payments: Payment[] = [
    {
      srNo: '01',
      bookingId: '857552',
      serviceStaffName: 'Adam T',
      serviceCategory: 'Full House',
      serviceStatus: 'completed',
      paymentStatus: 'completed',
      paymentType: 'Credit Card',
      totalAmount: 80,
      commission: 20,
      amount: 'Yes',
    },
    {
      srNo: '02',
      bookingId: '857552',
      serviceStaffName: 'Adam T',
      serviceCategory: 'Full House',
      serviceStatus: 'inProgress',
      paymentStatus: 'completed',
      paymentType: 'Debit Card',
      totalAmount: 80,
      commission: 20,
      amount: 'Yes',
    },
    {
      srNo: '03',
      bookingId: '857552',
      serviceStaffName: 'Adam T',
      serviceCategory: 'Full House',
      serviceStatus: 'completed',
      paymentStatus: 'staffReceived',
      paymentType: 'Cash On Delivery',
      totalAmount: 80,
      commission: 20,
      amount: 'Yes',
    },
    {
      srNo: '04',
      bookingId: '857552',
      serviceStaffName: 'Adam T',
      serviceCategory: 'Full House',
      serviceStatus: 'completed',
      paymentStatus: 'companyReceived',
      paymentType: 'Cash On Delivery',
      totalAmount: 80,
      commission: 20,
      amount: 'Yes',
    },
  ];

  const getPaymentStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'staffReceived':
        return 'Staff Received';
      case 'companyReceived':
        return 'Company Received';
      default:
        return status;
    }
  };

  return (
    <CleaningLayout title="Payment Management">
      <Container>
        <FiltersBar>
          <FilterButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 6H13M6 3V2M10 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Sort By Date
          </FilterButton>
          <FilterSelect value={assignmentStatus} onChange={(e) => setAssignmentStatus(e.target.value)}>
            <option value="all">Assignment Status</option>
            <option value="assigned">Assigned</option>
            <option value="unassigned">Unassigned</option>
          </FilterSelect>
          <FilterSelect value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">Category</option>
            <option value="fullhouse">Full House</option>
            <option value="carwash">Car Wash</option>
          </FilterSelect>
        </FiltersBar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableHeaderRow>
                <TableHeaderCell>Sr No.</TableHeaderCell>
                <TableHeaderCell>Booking Id</TableHeaderCell>
                <TableHeaderCell>Service Staff Name</TableHeaderCell>
                <TableHeaderCell>Service Category</TableHeaderCell>
                <TableHeaderCell>Service Status</TableHeaderCell>
                <TableHeaderCell>Payment Status</TableHeaderCell>
                <TableHeaderCell>Payment Type</TableHeaderCell>
                <TableHeaderCell>Total Amount</TableHeaderCell>
                <TableHeaderCell>Commission</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableHeaderRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.srNo}>
                  <TableCell>{payment.srNo}</TableCell>
                  <TableCell>{payment.bookingId}</TableCell>
                  <TableCell>{payment.serviceStaffName}</TableCell>
                  <TableCell>{payment.serviceCategory}</TableCell>
                  <TableCell>
                    <StatusBadge status={payment.serviceStatus}>
                      {payment.serviceStatus === 'completed' ? 'Completed' : 'In Progress'}
                    </StatusBadge>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status="completed">
                      {getPaymentStatusLabel(payment.paymentStatus)}
                    </StatusBadge>
                  </TableCell>
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
    </CleaningLayout>
  );
};
