import React from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate, useParams } from 'react-router-dom';

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

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const Title = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const ServiceCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  marginBottom: '$6',
});

const InfoRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
});

const InfoLabel = styled('p', {
  fontSize: '16px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const InfoValue = styled('p', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const EditButton = styled('button', {
  padding: '$3 $6',
  backgroundColor: 'transparent',
  border: '1px solid #64C2C8',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '#64C2C8',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#64C2C8',
    color: '$white',
  },
});

const Section = styled('div', {
  marginTop: '$8',
});

const SectionTitle = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$5',
  fontFamily: 'Figtree, sans-serif',
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

const StaffInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const Avatar = styled('img', {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const ServiceView: React.FC = () => {
  const navigate = useNavigate();
  const { spec } = useParams();

  const staff = [
    { srNo: '01', name: 'John Adam', avatar: 'https://i.pravatar.cc/150?img=15' },
  ];

  return (
    <GasLayout title="Service Management">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/services')}>
          Service Management
        </BreadcrumbLink>
        <span>›</span>
        <span>View Service</span>
      </Breadcrumb>

      <Header>
        <Title>11 Kg</Title>
        <EditButton onClick={() => navigate(`/gas/services/${spec}/edit`)}>
          <span>✏️</span> Edit
        </EditButton>
      </Header>

      <ServiceCard>
        <InfoRow>
          <InfoLabel>Cylinder Specifications</InfoLabel>
          <InfoValue>11 Kg</InfoValue>
        </InfoRow>
        <InfoRow style={{ borderBottom: 'none' }}>
          <InfoLabel>Price:</InfoLabel>
          <InfoValue>300 OMR</InfoValue>
        </InfoRow>
      </ServiceCard>

      <Section>
        <SectionTitle>Staff for the above service</SectionTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <Th>Sr No.</Th>
                <Th>Name</Th>
              </tr>
            </TableHeader>
            <TableBody>
              {staff.map((member) => (
                <Tr key={member.srNo}>
                  <Td>{member.srNo}</Td>
                  <Td>
                    <StaffInfo>
                      <Avatar src={member.avatar} alt={member.name} />
                      <span>{member.name}</span>
                    </StaffInfo>
                  </Td>
                </Tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </GasLayout>
  );
};

