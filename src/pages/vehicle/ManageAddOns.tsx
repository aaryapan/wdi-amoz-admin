import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';
import { AddProductModal } from '@/components/modals/AddProductModal';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const BreadcrumbLink = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  color: '#64C2C8',
  cursor: 'pointer',
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

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const PageTitle = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const AddMoreButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '18px',
    height: '18px',
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

const ImageCell = styled('div', {
  width: '60px',
  height: '60px',
  backgroundColor: '#E5E7EB',
  borderRadius: '$md',
});

const ActionButtons = styled('div', {
  display: 'flex',
  gap: '$2',
});

const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '18px',
    height: '18px',
  },
  
  variants: {
    variant: {
      edit: {
        color: '$text',
      },
      delete: {
        color: '#EF4444',
      },
    },
  },
});

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export const ManageAddOns: React.FC = () => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [addOns, setAddOns] = useState<Array<{ srNo: string; image: string | null; name: string; price: string; quantity: string }>>([
    { srNo: '01', image: null, name: 'K Adam', price: 'OMR 100', quantity: '10' },
  ]);

  const handleAddProduct = (product: { name: string; price: string; quantity: string; image: string | null }) => {
    const newAddOn = {
      srNo: String(addOns.length + 1).padStart(2, '0'),
      image: product.image,
      name: product.name,
      price: `OMR ${product.price}`,
      quantity: product.quantity,
    };
    setAddOns([...addOns, newAddOn]);
  };

  return (
    <VehicleLayout title="Vehicle Management">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/vehicle/vehicles')}>
            Vehicle Management
          </BreadcrumbLink>
          <span>›</span>
          <BreadcrumbCurrent>Manage Add-Ons</BreadcrumbCurrent>
        </Breadcrumb>

        <Header>
          <PageTitle>Add Ons</PageTitle>
          <AddMoreButton onClick={() => setShowAddModal(true)}>
            <PlusIcon /> Add more
          </AddMoreButton>
        </Header>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Sr No.</TableHeader>
                <TableHeader>Image</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {addOns.map((addOn, index) => (
                <TableRow key={index}>
                  <TableCell>{addOn.srNo}</TableCell>
                  <TableCell>
                    <ImageCell />
                  </TableCell>
                  <TableCell>{addOn.name}</TableCell>
                  <TableCell>{addOn.price}</TableCell>
                  <TableCell>{addOn.quantity}</TableCell>
                  <TableCell>
                    <ActionButtons>
                      <ActionButton variant="edit">
                        <EditIcon />
                      </ActionButton>
                      <ActionButton variant="delete">
                        <TrashIcon />
                      </ActionButton>
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {showAddModal && (
          <AddProductModal
            onClose={() => setShowAddModal(false)}
            onSave={handleAddProduct}
          />
        )}
      </Container>
    </VehicleLayout>
  );
};

