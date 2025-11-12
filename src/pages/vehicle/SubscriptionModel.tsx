import React from 'react';
import { styled } from '@/styles/theme';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
});

const Title = styled('h1', {
  fontSize: '32px',
  fontWeight: '$bold',
  color: '$text',
  textAlign: 'center',
  marginBottom: '$8',
  fontFamily: 'Figtree, sans-serif',
});

const BenefitsSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$8',
  marginBottom: '$10',
});

const BenefitCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const IconWrapper = styled('div', {
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$4',
  
  '& svg': {
    width: '60px',
    height: '60px',
  },
});

const BenefitTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'uppercase',
});

const BenefitDescription = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  lineHeight: '1.6',
  fontFamily: 'Figtree, sans-serif',
});

const PlansGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$6',
});

const PlanCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
});

const PlanHeader = styled('div', {
  marginBottom: '$6',
});

const PlanType = styled('p', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

const PlanPrice = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  gap: '$2',
  marginBottom: '$4',
});

const Price = styled('span', {
  fontSize: '36px',
  fontWeight: '$bold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const PricePeriod = styled('span', {
  fontSize: '16px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const FeaturesList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginBottom: '$6',
  flex: 1,
});

const Feature = styled('li', {
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
  paddingLeft: '$6',
  position: 'relative',
  
  '&:before': {
    content: '•',
    position: 'absolute',
    left: '8px',
    color: '$text',
    fontWeight: '$bold',
  },
});

const BuyButton = styled('button', {
  width: '100%',
  padding: '$4',
  border: 'none',
  borderRadius: '$md',
  fontSize: '16px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '#64C2C8',
        color: '$white',
        
        '&:hover': {
          backgroundColor: '#50aeb4',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$text',
        border: '2px solid #e5e7eb',
        
        '&:hover': {
          borderColor: '#64C2C8',
          backgroundColor: '#E6F7F8',
        },
      },
    },
  },
});

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const PieChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const SubscriptionModel: React.FC = () => {
  return (
    <VehicleLayout title="Subscription Model">
      <Container>
        <Title>Why Get Premium Subscription?</Title>
        
        <BenefitsSection>
          <BenefitCard>
            <IconWrapper>
              <ChartIcon />
            </IconWrapper>
            <BenefitTitle>Better Reach</BenefitTitle>
            <BenefitDescription>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconWrapper>
              <PieChartIcon />
            </IconWrapper>
            <BenefitTitle>Wider Access</BenefitTitle>
            <BenefitDescription>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconWrapper>
              <UsersIcon />
            </IconWrapper>
            <BenefitTitle>More Leads</BenefitTitle>
            <BenefitDescription>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsSection>

        <PlansGrid>
          <PlanCard>
            <PlanHeader>
              <PlanType>Weekly Plan</PlanType>
              <PlanPrice>
                <Price>OMR 50</Price>
                <PricePeriod>/ Week</PricePeriod>
              </PlanPrice>
            </PlanHeader>
            
            <FeaturesList>
              <Feature>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</Feature>
              <Feature>Valid For 7 Days</Feature>
              <Feature>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</Feature>
            </FeaturesList>
            
            <BuyButton variant="secondary">Buy Now</BuyButton>
          </PlanCard>

          <PlanCard>
            <PlanHeader>
              <PlanType>Monthly Plan</PlanType>
              <PlanPrice>
                <Price>OMR 30</Price>
                <PricePeriod>/ Week</PricePeriod>
              </PlanPrice>
            </PlanHeader>
            
            <FeaturesList>
              <Feature>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</Feature>
              <Feature>Valid For 30 Days</Feature>
              <Feature>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</Feature>
            </FeaturesList>
            
            <BuyButton variant="primary">Buy Now</BuyButton>
          </PlanCard>
        </PlansGrid>
      </Container>
    </VehicleLayout>
  );
};
