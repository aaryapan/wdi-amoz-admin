import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  maxWidth: '1400px',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#666',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const BreadcrumbCurrent = styled('span', {
  color: '$text',
  fontWeight: '$medium',
});

const SearchContainer = styled('div', {
  position: 'relative',
  marginBottom: '$5',
  maxWidth: '400px',
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $4 $3 $10',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&::placeholder': {
    color: '#999',
  },
});

const SearchIcon = styled('svg', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '20px',
  color: '#666',
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

const TableHeaderRow = styled('tr', {});

const TableHeaderCell = styled('th', {
  padding: '$4 $4',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
  
  '&:last-child': {
    paddingRight: '$6',
    textAlign: 'center',
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
  padding: '$4 $4',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:first-child': {
    paddingLeft: '$6',
  },
  
  '&:last-child': {
    paddingRight: '$6',
    textAlign: 'center',
  },
});

const RatingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const RatingText = styled('span', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StarIcon = styled('svg', {
  width: '16px',
  height: '16px',
  color: '#FFC107',
});

const FeedbackButton = styled('button', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
});

interface ServiceLog {
  srNo: string;
  bookingId: string;
  customerName: string;
  category: string;
  serviceDate: string;
  serviceTime: string;
  rating: number;
}

export const EmployeeServiceLogs: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const serviceLogs: ServiceLog[] = [
    {
      srNo: '01',
      bookingId: '847552',
      customerName: 'K Adam',
      category: 'Car Cleaning',
      serviceDate: '07/10/2024',
      serviceTime: '9:00 AM',
      rating: 4.3,
    },
    {
      srNo: '02',
      bookingId: '847553',
      customerName: 'Sarah Johnson',
      category: 'Deep Cleaning',
      serviceDate: '08/10/2024',
      serviceTime: '2:00 PM',
      rating: 4.8,
    },
    {
      srNo: '03',
      bookingId: '847554',
      customerName: 'Mike Chen',
      category: 'Car Cleaning',
      serviceDate: '09/10/2024',
      serviceTime: '10:30 AM',
      rating: 4.5,
    },
  ];

  return (
    <PlumbingLayout title="Manage Employee">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/plumbing/employees')}>
            Manage Employee
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>Service Logs</BreadcrumbCurrent>
        </Breadcrumb>

        <SearchContainer>
          <SearchIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
            <path d="M14 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <TableContainer>
          <Table>
            <TableHead>
              <TableHeaderRow>
                <TableHeaderCell>Sr No.</TableHeaderCell>
                <TableHeaderCell>Booking Id</TableHeaderCell>
                <TableHeaderCell>Customer Name</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>Service Date</TableHeaderCell>
                <TableHeaderCell>Service Time</TableHeaderCell>
                <TableHeaderCell>Rating</TableHeaderCell>
                <TableHeaderCell>Feedback</TableHeaderCell>
              </TableHeaderRow>
            </TableHead>
            <TableBody>
              {serviceLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.srNo}</TableCell>
                  <TableCell>{log.bookingId}</TableCell>
                  <TableCell>{log.customerName}</TableCell>
                  <TableCell>{log.category}</TableCell>
                  <TableCell>{log.serviceDate}</TableCell>
                  <TableCell>{log.serviceTime}</TableCell>
                  <TableCell>
                    <RatingContainer>
                      <RatingText>{log.rating}</RatingText>
                      <StarIcon viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"/>
                      </StarIcon>
                    </RatingContainer>
                  </TableCell>
                  <TableCell>
                    <FeedbackButton>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </FeedbackButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </PlumbingLayout>
  );
};

