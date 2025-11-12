import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';

const Container = styled('div', {
  maxWidth: '1200px',
});

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#666',
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

const CalendarCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  marginBottom: '$5',
});

const CalendarHeader = styled('div', {
  backgroundColor: '$onboardingPrimary',
  padding: '$4',
  borderRadius: '$md $md 0 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const MonthNavigation = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const NavButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$text',
  display: 'flex',
  alignItems: 'center',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const MonthTitle = styled('div', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CalendarGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  border: '1px solid #E0E0E0',
  borderTop: 'none',
});

const DayHeader = styled('div', {
  padding: '$3',
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: '$semibold',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '#F5F5F5',
  borderRight: '1px solid #E0E0E0',
  borderBottom: '1px solid #E0E0E0',
  
  '&:last-child': {
    borderRight: 'none',
  },
});

const DayCell = styled('div', {
  minHeight: '120px',
  padding: '$2',
  borderRight: '1px solid #E0E0E0',
  borderBottom: '1px solid #E0E0E0',
  backgroundColor: '$white',
  
  '&:nth-child(7n)': {
    borderRight: 'none',
  },
  
  variants: {
    isOtherMonth: {
      true: {
        backgroundColor: '#FAFAFA',
      },
    },
  },
});

const DayNumber = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const ServiceEvent = styled('div', {
  padding: '$1 $2',
  borderRadius: '$sm',
  fontSize: '11px',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
  cursor: 'pointer',
  
  variants: {
    type: {
      carCleaning: {
        backgroundColor: 'rgba(100, 194, 200, 0.3)',
        color: '#00838F',
      },
      deepCleaning: {
        backgroundColor: 'rgba(76, 175, 80, 0.3)',
        color: '#2E7D32',
      },
    },
  },
  
  '&:hover': {
    opacity: 0.8,
  },
});

const EventDetailModal = styled('div', {
  position: 'fixed',
  bottom: '$6',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(100, 194, 200, 0.95)',
  borderRadius: '$lg',
  padding: '$5',
  boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.2)',
  minWidth: '400px',
  zIndex: 1000,
});

const EventDetailHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
});

const EventTitle = styled('div', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CloseButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$text',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const EventDetailItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$2',
  fontSize: '14px',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

interface ServiceEvent {
  id: string;
  type: 'carCleaning' | 'deepCleaning';
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
}

const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  
  const calendar = [];
  
  // Add previous month days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const prevMonthDay = new Date(year, month, -i);
    calendar.push({ date: prevMonthDay.getDate(), isOtherMonth: true, fullDate: prevMonthDay });
  }
  
  // Add current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push({ date: i, isOtherMonth: false, fullDate: new Date(year, month, i) });
  }
  
  // Add next month days to complete the grid
  const remainingCells = 35 - calendar.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendar.push({ date: i, isOtherMonth: true, fullDate: new Date(year, month + 1, i) });
  }
  
  return calendar;
};

export const EmployeeCalendar: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)); // December 2024
  const [selectedEvent, setSelectedEvent] = useState<ServiceEvent | null>(null);

  const events: ServiceEvent[] = [
    { id: '1', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-01', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '2', type: 'deepCleaning', title: 'Deep Cleaning', date: '2024-12-01', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '3', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-02', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '4', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-02', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '5', type: 'deepCleaning', title: 'Deep Cleaning', date: '2024-12-02', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '6', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-11', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '7', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-11', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '8', type: 'deepCleaning', title: 'Deep Cleaning', date: '2024-12-11', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '9', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-14', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '10', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-14', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '11', type: 'deepCleaning', title: 'Deep Cleaning', date: '2024-12-14', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '12', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-22', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '13', type: 'carCleaning', title: 'Car Cleaning', date: '2024-12-22', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
    { id: '14', type: 'deepCleaning', title: 'Deep Cleaning', date: '2024-12-22', time: '4:00-6:00 PM', duration: '2 Hrs', location: 'P.O.Box 19, Khimji\'s Bait Al Ahlam, Al Noor St, Ruwi, Muscat' },
  ];

  const calendarDays = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <PlumbingLayout title="Manage Employee">
      <Container>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => navigate('/plumbing/employees')}>
            Manage Employee
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbLink onClick={() => navigate(`/plumbing/employees/${id}`)}>
            View Details
          </BreadcrumbLink>
          <span>&gt;</span>
          <BreadcrumbCurrent>Service Calender</BreadcrumbCurrent>
        </Breadcrumb>

        <CalendarCard>
          <CalendarHeader>
            <MonthNavigation>
              <NavButton onClick={previousMonth}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavButton>
              <MonthTitle>
                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </MonthTitle>
              <NavButton onClick={nextMonth}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavButton>
            </MonthNavigation>
          </CalendarHeader>

          <CalendarGrid>
            {['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'].map(day => (
              <DayHeader key={day}>{day}</DayHeader>
            ))}
            
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDate(day.fullDate);
              return (
                <DayCell key={index} isOtherMonth={day.isOtherMonth}>
                  <DayNumber>{day.date}</DayNumber>
                  {dayEvents.map((event) => (
                    <ServiceEvent
                      key={event.id}
                      type={event.type}
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.title}
                    </ServiceEvent>
                  ))}
                </DayCell>
              );
            })}
          </CalendarGrid>
        </CalendarCard>

        {selectedEvent && (
          <EventDetailModal>
            <EventDetailHeader>
              <EventTitle>{selectedEvent.title}</EventTitle>
              <CloseButton onClick={() => setSelectedEvent(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </CloseButton>
            </EventDetailHeader>
            <div style={{ fontSize: '14px', color: '$text', fontFamily: 'Figtree, sans-serif', marginBottom: '$2' }}>
              {new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
            <EventDetailItem>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {selectedEvent.time}
            </EventDetailItem>
            <EventDetailItem>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              {selectedEvent.duration}
            </EventDetailItem>
            <EventDetailItem>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14C8 14 2 10 2 6C2 3 4 2 6 2C7 2 8 3 8 3C8 3 9 2 10 2C12 2 14 3 14 6C14 10 8 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              {selectedEvent.location}
            </EventDetailItem>
          </EventDetailModal>
        )}
      </Container>
    </PlumbingLayout>
  );
};

