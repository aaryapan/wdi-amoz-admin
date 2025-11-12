import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { TurfLayout } from '@/components/layout/TurfLayout';

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

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const CourtSelector = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const CourtLabel = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CourtSelect = styled('select', {
  padding: '$2 $4',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#E6F7F8',
  minWidth: '200px',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
});

const CalendarHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4',
  backgroundColor: '$white',
  borderRadius: '$lg',
});

const CalendarTitle = styled('h2', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CalendarNav = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const NavButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  color: '$text',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const TodayButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  cursor: 'pointer',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
});

const CalendarGrid = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  overflow: 'hidden',
});

const DaysHeader = styled('div', {
  display: 'grid',
  gridTemplateColumns: '60px repeat(7, 1fr)',
  borderBottom: '2px solid #e5e7eb',
});

const DayHeaderCell = styled('div', {
  padding: '$3',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#f9fafb',
  
  '&:first-child': {
    borderRight: '2px solid #e5e7eb',
  },
});

const TimeSlots = styled('div', {
  display: 'grid',
  gridTemplateColumns: '60px repeat(7, 1fr)',
});

const TimeCell = styled('div', {
  padding: '$3',
  textAlign: 'right',
  fontSize: '13px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
  borderRight: '2px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  backgroundColor: '#f9fafb',
});

const EventCell = styled('div', {
  padding: '$2',
  borderRight: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  minHeight: '80px',
  position: 'relative',
});

const Event = styled('div', {
  padding: '$2',
  backgroundColor: '#DBEAFE',
  borderRadius: '$md',
  fontSize: '12px',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#BFDBFE',
  },
});

const EventId = styled('div', {
  fontWeight: '$semibold',
  color: '#1E40AF',
  marginBottom: '$1',
});

const EventCustomer = styled('div', {
  color: '#3B82F6',
  fontSize: '11px',
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

const timeSlots = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

export const BookingsCalendar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCourt, setSelectedCourt] = useState('turf-name');

  const events = [
    { day: 0, timeIndex: 0, id: '#541087', customer: 'Sam Tek' },
    { day: 1, timeIndex: 1, id: '#541087', customer: 'Sam Tek' },
  ];

  return (
    <TurfLayout title="Customer Bookings">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/turf/bookings')}>
            Customer Bookings
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>Bookings Calendar</BreadcrumbCurrent>
        </Breadcrumb>

        <TopRow>
          <CourtSelector>
            <CourtLabel>Court Name</CourtLabel>
            <CourtSelect value={selectedCourt} onChange={(e) => setSelectedCourt(e.target.value)}>
              <option value="turf-name">Turf Name</option>
              <option value="court-1">Court 1</option>
              <option value="court-2">Court 2</option>
            </CourtSelect>
          </CourtSelector>

          <CalendarNav>
            <NavButton>
              <ChevronLeftIcon />
            </NavButton>
            <TodayButton>Today</TodayButton>
            <NavButton>
              <ChevronRightIcon />
            </NavButton>
          </CalendarNav>
        </TopRow>

        <CalendarGrid>
          <CalendarHeader>
            <CalendarTitle>February 2021</CalendarTitle>
            <div style={{ fontSize: '14px', color: '#9CA3AF', fontFamily: 'Figtree, sans-serif' }}>EST GMT-5</div>
          </CalendarHeader>

          <DaysHeader>
            <DayHeaderCell />
            <DayHeaderCell>
              SUN<br />21
            </DayHeaderCell>
            <DayHeaderCell>
              MON<br />22
            </DayHeaderCell>
            <DayHeaderCell>
              TUE<br />23
            </DayHeaderCell>
            <DayHeaderCell>
              WED<br />24
            </DayHeaderCell>
            <DayHeaderCell>
              THU<br />25
            </DayHeaderCell>
            <DayHeaderCell>
              FRI<br />26
            </DayHeaderCell>
            <DayHeaderCell>
              SAT<br />27
            </DayHeaderCell>
          </DaysHeader>

          <TimeSlots>
            {timeSlots.map((time, timeIndex) => (
              <React.Fragment key={timeIndex}>
                <TimeCell>{time}</TimeCell>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => {
                  const dayEvents = events.filter(e => e.day === day && e.timeIndex === timeIndex);
                  return (
                    <EventCell key={day}>
                      {dayEvents.map((event, idx) => (
                        <Event key={idx}>
                          <EventId>{event.id}</EventId>
                          <EventCustomer>{event.customer}</EventCustomer>
                        </Event>
                      ))}
                    </EventCell>
                  );
                })}
              </React.Fragment>
            ))}
          </TimeSlots>
        </CalendarGrid>
      </Container>
    </TurfLayout>
  );
};

