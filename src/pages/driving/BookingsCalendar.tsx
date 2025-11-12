import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  maxWidth: '100%',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  
  '& a': {
    color: '#666',
    textDecoration: 'none',
    cursor: 'pointer',
    
    '&:hover': {
      color: '$onboardingPrimary',
    },
  },
  
  '& span': {
    color: '$onboardingPrimary',
    fontWeight: '$medium',
  },
});

const CalendarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
});

const MonthDisplay = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const MonthNav = styled('div', {
  display: 'flex',
  gap: '$3',
});

const NavButton = styled('button', {
  width: '32px',
  height: '32px',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  backgroundColor: '$white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  
  '& svg': {
    width: '16px',
    height: '16px',
  },
});

const WeekNav = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$4',
});

const TodayButton = styled('button', {
  padding: '$2 $3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  backgroundColor: '$white',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const CalendarContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const CalendarGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '80px repeat(7, 1fr)',
  borderTop: '1px solid #E0E0E0',
});

const DayHeader = styled('div', {
  padding: '$3',
  textAlign: 'center',
  borderBottom: '1px solid #E0E0E0',
  borderRight: '1px solid #E0E0E0',
  
  '&:last-child': {
    borderRight: 'none',
  },
});

const DayName = styled('div', {
  fontSize: '12px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
  textTransform: 'uppercase',
  marginBottom: '$1',
});

const DayNumber = styled('div', {
  fontSize: '20px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const TimeSlot = styled('div', {
  borderBottom: '1px solid #E0E0E0',
  borderRight: '1px solid #E0E0E0',
  minHeight: '60px',
  position: 'relative',
  
  '&:nth-child(8n+1)': {
    borderRight: '1px solid #E0E0E0',
  },
  
  variants: {
    isTimeLabel: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontFamily: 'Figtree, sans-serif',
        color: '#666',
        backgroundColor: '#FAFAFA',
      },
    },
  },
});

const BookingBlock = styled('div', {
  position: 'absolute',
  left: '4px',
  right: '4px',
  borderRadius: '$sm',
  padding: '$2',
  fontSize: '11px',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  overflow: 'hidden',
  
  '&:hover': {
    opacity: 0.9,
  },
  
  variants: {
    type: {
      booked: {
        backgroundColor: 'rgba(100, 194, 200, 0.3)',
        border: '1px solid $onboardingPrimary',
        color: '#286d71',
      },
      timeBlocking: {
        backgroundColor: 'rgba(237, 181, 37, 0.2)',
        border: '1px solid #EDB525',
        color: '#b8901d',
      },
    },
  },
});

const BookingId = styled('div', {
  fontWeight: '$semibold',
  marginBottom: '$1',
});

const BookingCustomer = styled('div', {
  fontSize: '10px',
  opacity: 0.8,
});

interface Booking {
  id: string;
  customer: string;
  day: number;
  startHour: number;
  duration: number;
  type: 'booked' | 'timeBlocking';
}

export const BookingsCalendar: React.FC = () => {
  const navigate = useNavigate();
  const [currentMonth] = useState('February 2021');
  
  const days = [
    { name: 'SUN', number: 21 },
    { name: 'MON', number: 22 },
    { name: 'TUE', number: 23 },
    { name: 'WED', number: 24 },
    { name: 'THU', number: 25 },
    { name: 'FRI', number: 26 },
    { name: 'SAT', number: 27 },
  ];

  const timeSlots = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'
  ];

  const bookings: Booking[] = [
    {
      id: '#541987',
      customer: 'Sam Tek',
      day: 0,
      startHour: 0,
      duration: 1,
      type: 'booked',
    },
    {
      id: '7:30 am',
      customer: 'Title of time blocking',
      day: 0,
      startHour: 0.5,
      duration: 0.5,
      type: 'timeBlocking',
    },
    {
      id: '8 am',
      customer: '#541987 | Sam Tek',
      day: 1,
      startHour: 1,
      duration: 1.5,
      type: 'booked',
    },
  ];

  const getBookingStyle = (booking: Booking) => {
    const topOffset = (booking.startHour * 60) + 'px';
    const height = (booking.duration * 60) - 8 + 'px';
    return { top: topOffset, height };
  };

  return (
    <DrivingLayout title="Customer Bookings">
      <Container>
        <Breadcrumb>
          <a onClick={() => navigate('/driving/bookings')}>Customer Bookings</a>
          <span> &gt; </span>
          <span>Bookings Calendar</span>
        </Breadcrumb>

        <CalendarHeader>
          <MonthDisplay>{currentMonth}</MonthDisplay>
          <MonthNav>
            <NavButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </NavButton>
            <NavButton>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </NavButton>
          </MonthNav>
        </CalendarHeader>

        <WeekNav>
          <NavButton>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </NavButton>
          <TodayButton>Today</TodayButton>
          <NavButton>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </NavButton>
        </WeekNav>

        <CalendarContainer>
          <CalendarGrid>
            {/* Header Row */}
            <DayHeader style={{ gridColumn: '1' }} />
            {days.map((day, index) => (
              <DayHeader key={index}>
                <DayName>{day.name}</DayName>
                <DayNumber>{day.number}</DayNumber>
              </DayHeader>
            ))}

            {/* Time Slots */}
            {timeSlots.map((time, timeIndex) => (
              <React.Fragment key={timeIndex}>
                <TimeSlot isTimeLabel>{time}</TimeSlot>
                {days.map((day, dayIndex) => (
                  <TimeSlot key={`${timeIndex}-${dayIndex}`}>
                    {bookings
                      .filter(b => b.day === dayIndex && Math.floor(b.startHour) === timeIndex)
                      .map((booking, bIndex) => (
                        <BookingBlock
                          key={bIndex}
                          type={booking.type}
                          style={getBookingStyle(booking)}
                        >
                          <BookingId>{booking.id}</BookingId>
                          <BookingCustomer>{booking.customer}</BookingCustomer>
                        </BookingBlock>
                      ))}
                  </TimeSlot>
                ))}
              </React.Fragment>
            ))}
          </CalendarGrid>
        </CalendarContainer>
      </Container>
    </DrivingLayout>
  );
};

