import React from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';

const Container = styled('div', {
  maxWidth: '1080px',
  margin: '0 auto',
});

const BenefitsSection = styled('div', {
  marginBottom: '$12',
});

const SectionTitle = styled('h2', {
  fontSize: '32px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  textAlign: 'center',
  marginBottom: '$10',
  textTransform: 'capitalize',
});

const BenefitsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$10',
  marginBottom: '$12',
});

const BenefitCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const BenefitIcon = styled('div', {
  width: '60px',
  height: '60px',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});

const BenefitTitle = styled('h3', {
  fontSize: '14px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  textTransform: 'uppercase',
  lineHeight: '32px',
});

const BenefitDescription = styled('p', {
  fontSize: '12px',
  fontWeight: '$normal',
  fontFamily: 'Figtree, sans-serif',
  color: 'rgba(0, 0, 0, 0.6)',
  lineHeight: '19px',
  textTransform: 'capitalize',
});

const PlansGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',
});

const PlanCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '20px',
  padding: '$8 $6',
  minHeight: '381px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const PlanBadge = styled('div', {
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  padding: '4px 8px',
  borderRadius: '$md',
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginBottom: '$4',
  
  '& span': {
    fontSize: '14px',
    fontWeight: '$semibold',
    fontFamily: 'Figtree, sans-serif',
    color: '$text',
    textTransform: 'uppercase',
    lineHeight: '32px',
  },
});

const PlanPrice = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$2',
  marginBottom: '$6',
  textTransform: 'capitalize',
  
  '& .amount': {
    fontSize: '36px',
    fontWeight: '$semibold',
    fontFamily: 'Figtree, sans-serif',
    color: '$text',
    lineHeight: '32px',
  },
  
  '& .period': {
    fontSize: '14px',
    fontWeight: '$normal',
    fontFamily: 'Figtree, sans-serif',
    color: 'rgba(0, 0, 0, 0.6)',
    lineHeight: '1.3',
  },
});

const FeaturesList = styled('ul', {
  listStyle: 'disc',
  paddingLeft: '$6',
  marginBottom: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const FeatureItem = styled('li', {
  fontSize: '14px',
  fontWeight: '$normal',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  lineHeight: '20px',
  textTransform: 'capitalize',
  
  '& ::marker': {
    fontSize: '14px',
  },
});

const BuyButton = styled('button', {
  width: '100%',
  height: '43px',
  borderRadius: '$md',
  fontSize: '18px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  cursor: 'pointer',
  transition: 'all 0.2s',
  marginTop: '$6',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$onboardingPrimary',
        border: '1px solid $onboardingPrimary',
        
        '&:hover': {
          backgroundColor: '#3d9cb3',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $onboardingPrimary',
        
        '&:hover': {
          backgroundColor: 'rgba(100, 194, 200, 0.1)',
        },
      },
    },
  },
});

export const SubscriptionModel: React.FC = () => {
  return (
    <DrivingLayout title="Subscription Model">
      <Container>
        <BenefitsSection>
          <SectionTitle>Why get premium subscription?</SectionTitle>
          
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>
                <img
                  src="https://www.figma.com/api/mcp/asset/2995e5e2-cd29-4e9e-83b1-83aeecdcfe3a"
                  alt="Better Reach"
                />
              </BenefitIcon>
              <BenefitTitle>BETTER REACH</BenefitTitle>
              <BenefitDescription>
                Looking for a spotless home without the hassle? Our cleaning services have got you covered! We offer weekly cleanings to keep your space fresh and tidy, using eco-friendly products that are safe for your family and pets.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <img
                  src="https://www.figma.com/api/mcp/asset/f9737f65-5f5d-460b-8749-672c1dd27f37"
                  alt="Wider Access"
                />
              </BenefitIcon>
              <BenefitTitle>Wider Access</BenefitTitle>
              <BenefitDescription>
                Looking for a spotless home without the hassle? Our cleaning services have got you covered! We offer weekly cleanings to keep your space fresh and tidy, using eco-friendly products that are safe for your family and pets.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <img
                  src="https://www.figma.com/api/mcp/asset/3fc52885-5004-45d4-8cee-b9fa18e9e1b6"
                  alt="More Leads"
                />
              </BenefitIcon>
              <BenefitTitle>MORE LEADS</BenefitTitle>
              <BenefitDescription>
                Looking for a spotless home without the hassle? Our cleaning services have got you covered! We offer weekly cleanings to keep your space fresh and tidy, using eco-friendly products that are safe for your family and pets.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>

        <PlansGrid>
          <PlanCard>
            <PlanBadge>
              <span>WEEKLY PLAN</span>
            </PlanBadge>
            
            <PlanPrice>
              <span className="amount">OMR 50</span>
              <span className="period">/ week</span>
            </PlanPrice>
            
            <FeaturesList>
              <FeatureItem>
                Weekly payment of OMR, subject to the terms and conditions outlined in the agreement.
              </FeatureItem>
              <FeatureItem>
                valid for 7 days
              </FeatureItem>
              <FeatureItem>
                Weekly payment of OMR, subject to the terms and conditions outlined in the agreement.
              </FeatureItem>
            </FeaturesList>
            
            <BuyButton variant="secondary">
              Buy Now
            </BuyButton>
          </PlanCard>
          
          <PlanCard>
            <PlanBadge>
              <span>MONTHLY PLAN</span>
            </PlanBadge>
            
            <PlanPrice>
              <span className="amount">OMR 30</span>
              <span className="period">/ week</span>
            </PlanPrice>
            
            <FeaturesList>
              <FeatureItem>
                Weekly payment of OMR, subject to the terms and conditions outlined in the agreement.
              </FeatureItem>
              <FeatureItem>
                valid for 30 days
              </FeatureItem>
              <FeatureItem>
                Weekly payment of OMR, subject to the terms and conditions outlined in the agreement.
              </FeatureItem>
            </FeaturesList>
            
            <BuyButton variant="primary">
              Buy Now
            </BuyButton>
          </PlanCard>
        </PlansGrid>
      </Container>
    </DrivingLayout>
  );
};
