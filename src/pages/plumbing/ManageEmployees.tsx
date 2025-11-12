import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  maxWidth: '1400px',
});

const TopBar = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$5',
});

const SearchContainer = styled('div', {
  position: 'relative',
  flex: '0 0 400px',
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

const AddButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aee2',
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
  },
});

const EmployeeInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const EmployeeAvatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const EmployeeName = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CategoryList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const CategoryItem = styled('div', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
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

const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
});

const ActionButton = styled('button', {
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

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  categories: string[];
  rating: number;
  avatar: string;
}

export const ManageEmployees: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const employees: Employee[] = [
    {
      id: '02',
      name: 'John Adam',
      email: 'admin@gmail.co.in',
      phone: '7585968574',
      categories: ['Car Cleaning', 'Deep Cleaning'],
      rating: 4.3,
      avatar: 'https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21',
    },
    {
      id: '02',
      name: 'John Adam',
      email: 'admin@gmail.co.in',
      phone: '7585968574',
      categories: ['Deep Cleaning'],
      rating: 4.3,
      avatar: 'https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21',
    },
  ];

  return (
    <PlumbingLayout title="Manage Employee">
      <Container>
        <TopBar>
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
          <AddButton onClick={() => navigate('/plumbing/employees/add')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add New
          </AddButton>
        </TopBar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableHeaderRow>
                <TableHeaderCell>Sr No.</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>E-Mail</TableHeaderCell>
                <TableHeaderCell>Phone</TableHeaderCell>
                <TableHeaderCell>Category</TableHeaderCell>
                <TableHeaderCell>Rating</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableHeaderRow>
            </TableHead>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>
                    <EmployeeInfo>
                      <EmployeeAvatar src={employee.avatar} alt={employee.name} />
                      <EmployeeName>{employee.name}</EmployeeName>
                    </EmployeeInfo>
                  </TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>
                    <CategoryList>
                      {employee.categories.map((category, idx) => (
                        <CategoryItem key={idx}>{category}</CategoryItem>
                      ))}
                    </CategoryList>
                  </TableCell>
                  <TableCell>
                    <RatingContainer>
                      <RatingText>{employee.rating}</RatingText>
                      <StarIcon viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"/>
                      </StarIcon>
                    </RatingContainer>
                  </TableCell>
                  <TableCell>
                    <ActionsContainer>
                      <ActionButton onClick={() => navigate(`/plumbing/employees/${employee.id}/calendar`)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <rect x="3" y="4" width="14" height="13" rx="2" stroke="#666" strokeWidth="1.5"/>
                          <path d="M3 8H17M7 4V2M13 4V2" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </ActionButton>
                      <ActionButton onClick={() => navigate(`/plumbing/employees/${employee.id}/logs`)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 6H16M4 10H16M4 14H16" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </ActionButton>
                      <ActionButton onClick={() => navigate(`/plumbing/employees/${employee.id}/edit`)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M14 2L16 4L8 12H6V10L14 2Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 4L14 6" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </ActionButton>
                      <ActionButton onClick={() => navigate(`/plumbing/employees/${employee.id}`)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="2" stroke="#666" strokeWidth="1.5"/>
                          <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="#666" strokeWidth="1.5"/>
                        </svg>
                      </ActionButton>
                    </ActionsContainer>
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
