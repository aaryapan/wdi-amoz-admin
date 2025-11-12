import React from 'react';
import { styled } from '@/styles/theme';
import { TurfLayout } from '@/components/layout/TurfLayout';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const Header = styled('div', {
  textAlign: 'center',
});

const Title = styled('h1', {
  fontSize: '32px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$6',
  fontFamily: 'Figtree, sans-serif',
});

const BenefitsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$8',
  marginBottom: '$8',
});

const BenefitCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
});

const IconContainer = styled('div', {
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    width: '60px',
    height: '60px',
  },
});

const BenefitTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const BenefitText = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  textAlign: 'center',
  lineHeight: 1.6,
  fontFamily: 'Figtree, sans-serif',
});

const PlansGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$8',
  maxWidth: '1000px',
  margin: '0 auto',
});

const PlanCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$8',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const PlanHeader = styled('div', {
  textAlign: 'center',
  marginBottom: '$6',
});

const PlanType = styled('h4', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

const PlanPrice = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  gap: '$2',
  marginBottom: '$2',
});

const Price = styled('span', {
  fontSize: '48px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const PriceUnit = styled('span', {
  fontSize: '18px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const PlanFeatures = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 $6 0',
});

const Feature = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
  fontSize: '14px',
  color: '$text',
  marginBottom: '$3',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: 1.6,
});

const Bullet = styled('span', {
  fontSize: '18px',
  fontWeight: '$bold',
  color: '$text',
});

const BuyButton = styled('button', {
  width: '100%',
  padding: '$4',
  backgroundColor: 'transparent',
  border: '2px solid #e5e7eb',
  borderRadius: '$lg',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '#64C2C8',
    backgroundColor: '#E6F7F8',
    color: '#64C2C8',
  },
  
  variants: {
    primary: {
      true: {
        backgroundColor: '#64C2C8',
        borderColor: '#64C2C8',
        color: '$white',
        
        '&:hover': {
          backgroundColor: '#50aeb4',
          borderColor: '#50aeb4',
          color: '$white',
        },
      },
    },
  },
});

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
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
    <TurfLayout title="Subscription Model">
      <Container>
        <Header>
          <Title>Why Get Premium Subscription?</Title>
        </Header>

        <BenefitsGrid>
          <BenefitCard>
            <IconContainer>
              <ChartIcon />
            </IconContainer>
            <BenefitTitle>BETTER REACH</BenefitTitle>
            <BenefitText>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <IconContainer>
              <PieChartIcon />
            </IconContainer>
            <BenefitTitle>WIDER ACCESS</BenefitTitle>
            <BenefitText>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitText>
          </BenefitCard>
          <BenefitCard>
            <IconContainer>
              <UsersIcon />
            </IconContainer>
            <BenefitTitle>MORE LEADS</BenefitTitle>
            <BenefitText>
              Looking For A Spotless Home Without The Hassle? Our Cleaning Services Have Got You Covered! We Offer Weekly Cleanings To Keep Your Space Fresh And Tidy, Using Eco-Friendly Products That Are Safe For Your Family And Pets.
            </BenefitText>
          </BenefitCard>
        </BenefitsGrid>

        <PlansGrid>
          <PlanCard>
            <PlanHeader>
              <PlanType>Weekly Plan</PlanType>
              <PlanPrice>
                <Price>OMR 50</Price>
                <PriceUnit>/ Week</PriceUnit>
              </PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              <Feature>
                <Bullet>•</Bullet>
                <span>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</span>
              </Feature>
              <Feature>
                <Bullet>•</Bullet>
                <span>Valid For 7 Days</span>
              </Feature>
              <Feature>
                <Bullet>•</Bullet>
                <span>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</span>
              </Feature>
            </PlanFeatures>
            <BuyButton>Buy Now</BuyButton>
          </PlanCard>

          <PlanCard>
            <PlanHeader>
              <PlanType>Monthly Plan</PlanType>
              <PlanPrice>
                <Price>OMR 30</Price>
                <PriceUnit>/ Week</PriceUnit>
              </PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              <Feature>
                <Bullet>•</Bullet>
                <span>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</span>
              </Feature>
              <Feature>
                <Bullet>•</Bullet>
                <span>Valid For 30 Days</span>
              </Feature>
              <Feature>
                <Bullet>•</Bullet>
                <span>Weekly Payment Of OMR, Subject To The Terms And Conditions Outlined In The Agreement.</span>
              </Feature>
            </PlanFeatures>
            <BuyButton primary>Buy Now</BuyButton>
          </PlanCard>
        </PlansGrid>
      </Container>
    </TurfLayout>
  );
};

