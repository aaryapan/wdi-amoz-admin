import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  maxWidth: '1000px',
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

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$5',
});

const CategoryLabel = styled('div', {
  fontSize: '16px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
});

const CategoryValue = styled('div', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ToggleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const ToggleLabel = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
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

const ServiceTitle = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const Description = styled('p', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: 1.6,
  marginBottom: '$4',
});

const Price = styled('div', {
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$6',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const TableContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  overflow: 'hidden',
  border: '1px solid #E0E0E0',
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
  padding: '$3 $4',
  textAlign: 'left',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const TableBody = styled('tbody', {});

const TableRow = styled('tr', {
  borderBottom: '1px solid #E0E0E0',
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const TableCell = styled('td', {
  padding: '$3 $4',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const StaffInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const StaffAvatar = styled('img', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const StaffName = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

export const ServiceView: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId, serviceId } = useParams();

  const staff = [
    { srNo: '01', name: 'John Adam', avatar: 'https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21' },
    { srNo: '02', name: 'John R Adam', avatar: 'https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21' },
  ];

  return (
    <PlumbingLayout title="Service Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/plumbing/services')}>
            Service Management
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>View Service</BreadcrumbCurrent>
        </Breadcrumb>

        <Card>
          <Header>
            <div>
              <CategoryLabel>Category:</CategoryLabel>
              <CategoryValue>Full House</CategoryValue>
            </div>
            <ToggleContainer>
              <ToggleLabel>Activate</ToggleLabel>
              <ToggleSwitch>
                <ToggleInput type="checkbox" defaultChecked={true} />
                <ToggleSlider />
              </ToggleSwitch>
            </ToggleContainer>
          </Header>

          <ServiceTitle>1 BHK Furnished Bungalow</ServiceTitle>

          <Description>
            Description about the service ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada neque nec viverra tincidunt. Quisque cursus nulla id metus cursus condimentum. Aenean id porttitor augue.
          </Description>

          <Price>Price: 300 OMR</Price>

          <SectionTitle>Staff for the above service</SectionTitle>

          <TableContainer>
            <Table>
              <TableHead>
                <TableHeaderRow>
                  <TableHeaderCell>Sr No.</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                </TableHeaderRow>
              </TableHead>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.srNo}>
                    <TableCell>{member.srNo}</TableCell>
                    <TableCell>
                      <StaffInfo>
                        <StaffAvatar src={member.avatar} alt={member.name} />
                        <StaffName>{member.name}</StaffName>
                      </StaffInfo>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </PlumbingLayout>
  );
};

