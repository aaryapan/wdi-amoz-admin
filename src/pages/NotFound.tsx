import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@/styles/theme';
import { Button } from '@/components/ui/Button';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '$8',
  textAlign: 'center',
});

const Title = styled('h1', {
  fontSize: '$4xl',
  fontWeight: '$bold',
  color: '$text',
  marginBottom: '$4',
});

const Message = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  marginBottom: '$8',
});

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <Message>Page not found</Message>
      <Button onClick={() => navigate('/bookings')}>
        Go to Bookings
      </Button>
    </Container>
  );
};

