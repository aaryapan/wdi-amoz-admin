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

const CategorySection = styled('div', {
  backgroundColor: 'rgba(100, 194, 200, 0.1)',
  borderRadius: '$lg',
  marginBottom: '$5',
  overflow: 'hidden',
});

const CategoryHeader = styled('div', {
  padding: '$4 $5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: 'rgba(100, 194, 200, 0.15)',
  },
});

const CategoryTitle = styled('div', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ExpandIcon = styled('svg', {
  width: '20px',
  height: '20px',
  color: '$text',
  transition: 'transform 0.2s ease',
  
  variants: {
    expanded: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

const CategoryContent = styled('div', {
  backgroundColor: '$white',
  
  variants: {
    expanded: {
      false: {
        display: 'none',
      },
    },
  },
});

const TableContainer = styled('div', {
  overflowX: 'auto',
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

const ToggleSwitch = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '48px',
  height: '24px',
});

const ToggleInput = styled('input', {
  opacity: 0,
  width: 0,
  height: 0,
  
  '&:checked + span': {
    backgroundColor: '$onboardingPrimary',
  },
  
  '&:checked + span:before': {
    transform: 'translateX(24px)',
  },
});

const ToggleSlider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '0.4s',
  borderRadius: '24px',
  
  '&:before': {
    position: 'absolute',
    content: '""',
    height: '18px',
    width: '18px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    transition: '0.4s',
    borderRadius: '50%',
  },
});

const ViewButton = styled('button', {
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

const EditButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  alignSelf: 'flex-end',
  marginTop: '$3',
  marginRight: '$5',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

interface Service {
  srNo: string;
  serviceDetails: string;
  price: number;
  isActive: boolean;
}

interface Category {
  id: string;
  name: string;
  services: Service[];
}

export const ServiceManagement: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['fullhouse', 'carwash']);

  const categories: Category[] = [
    {
      id: 'fullhouse',
      name: 'Full House',
      services: [
        { srNo: '01', serviceDetails: '1 BHK Furnished Bungalow', price: 500, isActive: true },
      ],
    },
    {
      id: 'carwash',
      name: 'Car Wash',
      services: [
        { srNo: '01', serviceDetails: '20-30 Sqft Carpet Cleaning', price: 500, isActive: false },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <PlumbingLayout title="Service Management">
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
          <AddButton onClick={() => navigate('/plumbing/services/add')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add New
          </AddButton>
        </TopBar>

        {categories.map((category) => (
          <CategorySection key={category.id}>
            <CategoryHeader onClick={() => toggleCategory(category.id)}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <ExpandIcon
                expanded={expandedCategories.includes(category.id)}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </ExpandIcon>
            </CategoryHeader>

            <CategoryContent expanded={expandedCategories.includes(category.id)}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableHeaderRow>
                      <TableHeaderCell>Sr No.</TableHeaderCell>
                      <TableHeaderCell>Service Details</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Activate</TableHeaderCell>
                      <TableHeaderCell>Actions</TableHeaderCell>
                    </TableHeaderRow>
                  </TableHead>
                  <TableBody>
                    {category.services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell>{service.srNo}</TableCell>
                        <TableCell>{service.serviceDetails}</TableCell>
                        <TableCell>{service.price}</TableCell>
                        <TableCell>
                          <ToggleSwitch>
                            <ToggleInput type="checkbox" defaultChecked={service.isActive} />
                            <ToggleSlider />
                          </ToggleSwitch>
                        </TableCell>
                        <TableCell>
                          <ViewButton onClick={() => navigate(`/plumbing/services/${category.id}/${service.srNo}`)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="2" stroke="#666" strokeWidth="1.5"/>
                              <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="#666" strokeWidth="1.5"/>
                            </svg>
                          </ViewButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <EditButton onClick={() => navigate(`/plumbing/services/${category.id}/edit`)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11 2L13 4L6 11H4V9L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 4L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Edit
              </EditButton>
            </CategoryContent>
          </CategorySection>
        ))}
      </Container>
    </PlumbingLayout>
  );
};
