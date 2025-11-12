import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';

const Container = styled('div', {
  maxWidth: '100%',
});

const FilterBar = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$6',
});

const FilterButton = styled('button', {
  backgroundColor: '$white',
  border: '1px solid #EAECF0',
  borderRadius: '$md',
  padding: '10px 12px',
  minWidth: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  
  '&:hover': {
    borderColor: '$onboardingPrimary',
  },
  
  '& span': {
    fontSize: '14px',
    fontWeight: '$medium',
    fontFamily: 'Figtree, sans-serif',
    color: 'rgba(0, 0, 0, 0.6)',
    textTransform: 'capitalize',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const TableContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const Table = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
});

const TableHead = styled('thead', {
  backgroundColor: '$onboardingPrimary',
});

const TableRow = styled('tr', {
  borderBottom: '1px solid #E0E0E0',
  
  '&:last-child': {
    borderBottom: 'none',
  },
  
  '&:hover': {
    backgroundColor: '#FAFAFA',
  },
});

const TableHeader = styled('th', {
  padding: '$4 $3',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  whiteSpace: 'nowrap',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
});

const TableCell = styled('td', {
  padding: '$4 $3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  whiteSpace: 'nowrap',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
});

const ToggleSwitch = styled('button', {
  width: '48px',
  height: '24px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  transition: 'background-color 0.2s',
  
  '&::after': {
    content: '',
    position: 'absolute',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '$white',
    top: '3px',
    transition: 'left 0.2s',
  },
  
  variants: {
    active: {
      true: {
        backgroundColor: '#4CAF50',
        '&::after': {
          left: '27px',
        },
      },
      false: {
        backgroundColor: '#E0E0E0',
        '&::after': {
          left: '3px',
        },
      },
    },
  },
});

const BookingsButton = styled('button', {
  padding: '$2 $3',
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  backgroundColor: 'transparent',
  border: '1px solid $onboardingPrimary',
  color: '$onboardingPrimary',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: 'rgba(100, 194, 200, 0.1)',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

interface Payment {
  srNo: number;
  bookingId: string;
  serviceStatus: string;
  paymentStatus: string;
  paymentType: string;
  totalAmount: number;
  commission: number | string;
  amountReceived: boolean;
}

export const PaymentTracking: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      srNo: 1,
      bookingId: '857952',
      serviceStatus: 'Completed',
      paymentStatus: 'Staff Received',
      paymentType: 'Credit Card',
      totalAmount: 80,
      commission: 20,
      amountReceived: true,
    },
    {
      srNo: 2,
      bookingId: '857952',
      serviceStatus: 'Completed',
      paymentStatus: 'Staff Received',
      paymentType: 'Credit Card',
      totalAmount: 80,
      commission: 'Paid',
      amountReceived: true,
    },
    {
      srNo: 3,
      bookingId: '857952',
      serviceStatus: 'Completed',
      paymentStatus: 'Staff Received',
      paymentType: 'Credit Card',
      totalAmount: 80,
      commission: 20,
      amountReceived: true,
    },
  ]);

  const toggleAmountReceived = (srNo: number) => {
    setPayments(payments.map(p =>
      p.srNo === srNo ? { ...p, amountReceived: !p.amountReceived } : p
    ));
  };

  return (
    <DrivingLayout title="Payment Management">
      <Container>
        <FilterBar>
          <FilterButton>
            <span>Sort By Date</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </FilterButton>
          <FilterButton>
            <span>Assignment Status</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </FilterButton>
          <FilterButton>
            <span>Category</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </FilterButton>
        </FilterBar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Booking Id</TableHeader>
                <TableHeader>Service Status</TableHeader>
                <TableHeader>Payment Status</TableHeader>
                <TableHeader>Payment Type</TableHeader>
                <TableHeader>Total Amount</TableHeader>
                <TableHeader>Commission</TableHeader>
                <TableHeader>Amount Received</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {payments.map((payment) => (
                <TableRow key={payment.srNo}>
                  <TableCell>{String(payment.srNo).padStart(2, '0')}</TableCell>
                  <TableCell>{payment.bookingId}</TableCell>
                  <TableCell>{payment.serviceStatus}</TableCell>
                  <TableCell>{payment.paymentStatus}</TableCell>
                  <TableCell>{payment.paymentType}</TableCell>
                  <TableCell>{payment.totalAmount}</TableCell>
                  <TableCell>{payment.commission}</TableCell>
                  <TableCell>
                    <ToggleSwitch
                      active={payment.amountReceived}
                      onClick={() => toggleAmountReceived(payment.srNo)}
                    />
                  </TableCell>
                  <TableCell>
                    <BookingsButton>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Bookings
                    </BookingsButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </DrivingLayout>
  );
};
