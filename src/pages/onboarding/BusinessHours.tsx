import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from '@/components/ui/FileUpload';
import { Button } from '@/components/ui/Button';

const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '$onboardingBg',
  paddingBottom: '$20',
});

const Header = styled('div', {
  backgroundColor: '$white',
  height: '75px',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 100px',
  borderBottom: '1px solid $border',
});

const Logo = styled('div', {
  width: '168px',
  height: '55px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
});

const Content = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  padding: '52px 100px 100px',
});

const Title = styled('h1', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '32px',
  fontWeight: '$semibold',
  lineHeight: '40px',
  color: '$text',
  marginBottom: '$3',
});

const Subtitle = styled('p', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '20px',
  fontWeight: '$normal',
  lineHeight: '24px',
  color: '$text',
  marginBottom: '$8',
});

const SectionTitle = styled('h2', {
  fontFamily: 'Figtree, sans-serif',
  fontSize: '22px',
  fontWeight: '$semibold',
  lineHeight: '40px',
  color: '$text',
  marginTop: '$8',
  marginBottom: '$4',
});

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  padding: '$6 $4',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
});

const DaysContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  marginTop: '$3',
});

const DayChip = styled('button', {
  padding: '$2 $3',
  borderRadius: '$md',
  fontSize: '15px',
  fontWeight: '$normal',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: 'none',
  
  variants: {
    selected: {
      true: {
        backgroundColor: '$onboardingPrimary',
        color: '$white',
      },
      false: {
        backgroundColor: '#f0f0f0',
        color: '#3d3d3d',
        border: '1px solid $onboardingPrimary',
      },
    },
  },
});

const TimeRow = styled('div', {
  display: 'flex',
  gap: '$4',
  marginTop: '$4',
});

const TimeField = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});

const TimeLabel = styled('label', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$text',
});

const TimeInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: '$inputBg',
  border: '1.5px solid rgba(224, 102, 102, 0.1)',
  borderRadius: '$md',
  height: '36px',
  fontSize: '15px',
  color: '$textPlaceholder',
});

const DateInputGroup = styled('div', {
  display: 'flex',
  gap: '$3',
});

const DateInput = styled('input', {
  flex: 1,
  padding: '$2 $3',
  backgroundColor: '$inputBg',
  border: '1.5px solid rgba(224, 102, 102, 0.1)',
  borderRadius: '$md',
  fontSize: '15px',
  color: '$textPlaceholder',
  outline: 'none',
  
  '&:focus': {
    borderColor: '$onboardingPrimary',
  },
});

const SaveButton = styled(Button, {
  backgroundColor: '$onboardingPrimary',
  color: '$text',
  padding: '$3 $5',
  fontSize: '20px',
  fontWeight: '$medium',
  marginTop: '$10',
  float: 'right',
  
  '&:hover:not(:disabled)': {
    backgroundColor: '#50aee2',
  },
});

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const BusinessHours: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState(['Monday', 'Tuesday']);
  const [commerceDoc, setCommerceDoc] = useState<File | null>(null);
  const [occiDoc, setOcciDoc] = useState<File | null>(null);

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleContinue = () => {
    navigate('/onboarding/profile-details');
  };

  return (
    <Container>
      <Header>
        <Logo
          style={{
            backgroundImage: `url('https://www.figma.com/api/mcp/asset/86b50537-3a76-496c-b045-0d95ac9aca2f')`,
          }}
        />
      </Header>

      <Content>
        <Title>Basic company details</Title>
        <Subtitle>Please add the following details</Subtitle>

        <SectionTitle>Business hours</SectionTitle>
        <Card>
          <TimeLabel>Select Working Days*</TimeLabel>
          <DaysContainer>
            {days.map(day => (
              <DayChip
                key={day}
                selected={selectedDays.includes(day)}
                onClick={() => toggleDay(day)}
              >
                {day}
              </DayChip>
            ))}
          </DaysContainer>

          <TimeLabel style={{ marginTop: '24px' }}>Select Working Hours*</TimeLabel>
          <TimeRow>
            <TimeField>
              <TimeLabel>Start Time</TimeLabel>
              <TimeInput>08:00 AM</TimeInput>
            </TimeField>
            <TimeField>
              <TimeLabel>End Time</TimeLabel>
              <TimeInput>05:00 PM</TimeInput>
            </TimeField>
          </TimeRow>
        </Card>

        <SectionTitle>Upload documents</SectionTitle>
        <Card>
          <FileUpload
            label="Chamber of commerce certificate*"
            value={commerceDoc}
            onChange={setCommerceDoc}
          />
          
          <TimeLabel style={{ marginTop: '16px' }}>Expiry Date</TimeLabel>
          <DateInputGroup>
            <DateInput placeholder="DD" maxLength={2} />
            <DateInput placeholder="MM" maxLength={2} />
            <DateInput placeholder="YYYY" maxLength={4} />
          </DateInputGroup>

          <div style={{ marginTop: '24px' }}>
            <FileUpload
              label="OCCI certificate*"
              value={occiDoc}
              onChange={setOcciDoc}
            />
          </div>
          
          <TimeLabel style={{ marginTop: '16px' }}>Expiry Date</TimeLabel>
          <DateInputGroup>
            <DateInput placeholder="DD" maxLength={2} />
            <DateInput placeholder="MM" maxLength={2} />
            <DateInput placeholder="YYYY" maxLength={4} />
          </DateInputGroup>
        </Card>

        <SaveButton onClick={handleContinue}>Save and Continue</SaveButton>
      </Content>
    </Container>
  );
};

