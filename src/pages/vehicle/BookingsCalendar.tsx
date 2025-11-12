import React from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { VehicleLayout } from '@/components/layout/VehicleLayout';

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

const VehicleInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const VehicleName = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const VehicleId = styled('p', {
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const CalendarCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const CalendarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const MonthDisplay = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const NavigationButtons = styled('div', {
  display: 'flex',
  gap: '$3',
});

const NavButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const CalendarControls = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
});

const TodayButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});

const CalendarGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 0,
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  overflow: 'hidden',
});

const DayHeader = styled('div', {
  padding: '$3',
  backgroundColor: '#f9fafb',
  borderRight: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '$semibold',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  
  '&:last-child': {
    borderRight: 'none',
  },
});

const TimeSlot = styled('div', {
  display: 'grid',
  gridTemplateColumns: '80px repeat(7, 1fr)',
  borderBottom: '1px solid #e5e7eb',
  minHeight: '60px',
  
  '&:last-child': {
    borderBottom: 'none',
  },
});

const TimeLabel = styled('div', {
  padding: '$2',
  fontSize: '12px',
  color: '$textLight',
  textAlign: 'right',
  borderRight: '1px solid #e5e7eb',
  fontFamily: 'Figtree, sans-serif',
});

const DayCell = styled('div', {
  padding: '$2',
  borderRight: '1px solid #e5e7eb',
  position: 'relative',
  minHeight: '60px',
  
  '&:last-child': {
    borderRight: 'none',
  },
  
  variants: {
    isToday: {
      true: {
        backgroundColor: '#E6F7F8',
      },
    },
  },
});

const BookingEvent = styled('div', {
  padding: '$2',
  backgroundColor: '#64C2C8',
  borderRadius: '$sm',
  fontSize: '11px',
  color: '$white',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
});

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const BookingsCalendar: React.FC = () => {
  const navigate = useNavigate();

  const timeSlots = [
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
  ];

  const dayHeaders = ['SUN\n21', 'MON\n22', 'TUE\n23', 'WED\n24', 'THU\n25', 'FRI\n26', 'SAT\n27'];

  return (
    <VehicleLayout title="Customer Bookings">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/vehicle/bookings')}>
            Customer Bookings
          </BreadcrumbLink>
          <span>›</span>
          <BreadcrumbCurrent>Bookings Calendar</BreadcrumbCurrent>
        </Breadcrumb>

        <VehicleInfo>
          <VehicleName>Volvo Turbo 580</VehicleName>
          <VehicleId>X27899123</VehicleId>
        </VehicleInfo>

        <CalendarCard>
          <CalendarHeader>
            <MonthDisplay>February 2021</MonthDisplay>
            <NavigationButtons>
              <NavButton onClick={() => {}}>
                <ChevronLeftIcon />
              </NavButton>
              <NavButton onClick={() => {}}>
                <ChevronRightIcon />
              </NavButton>
            </NavigationButtons>
          </CalendarHeader>

          <CalendarControls>
            <TodayButton onClick={() => {}}>Today</TodayButton>
            <div style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'Figtree, sans-serif' }}>
              EST (GMT-5)
            </div>
          </CalendarControls>

          <CalendarGrid>
            {dayHeaders.map((day, index) => (
              <DayHeader key={index}>
                {day.split('\n')[0]}
                <br />
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937' }}>
                  {day.split('\n')[1]}
                </span>
              </DayHeader>
            ))}
          </CalendarGrid>

          {timeSlots.map((time, timeIndex) => (
            <TimeSlot key={timeIndex}>
              <TimeLabel>{time}</TimeLabel>
              {dayHeaders.map((_, dayIndex) => (
                <DayCell key={dayIndex} isToday={dayIndex === 0 && timeIndex === 0}>
                  {dayIndex === 0 && timeIndex === 0 && (
                    <BookingEvent>#5419487 | Sam Tek<br />7:30 am<br />Title of time blocking</BookingEvent>
                  )}
                  {dayIndex === 1 && timeIndex === 1 && (
                    <BookingEvent>#5419487 | Sam Tek<br />8 am</BookingEvent>
                  )}
                </DayCell>
              ))}
            </TimeSlot>
          ))}
        </CalendarCard>
      </Container>
    </VehicleLayout>
  );
};

