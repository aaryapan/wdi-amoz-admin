import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { GasLayout } from '@/components/layout/GasLayout';
import { useNavigate, useParams } from 'react-router-dom';

const Breadcrumb = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$6',
  fontSize: '14px',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const BreadcrumbLink = styled('button', {
  background: 'none',
  border: 'none',
  color: '$textLight',
  cursor: 'pointer',
  padding: 0,
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    color: '#64C2C8',
    textDecoration: 'underline',
  },
});

const CalendarCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '16px',
  padding: '$6',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
});

const CalendarHeader = styled('div', {
  backgroundColor: '#64C2C8',
  borderRadius: '12px',
  padding: '$4 $5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$5',
});

const MonthNav = styled('button', {
  background: 'none',
  border: 'none',
  color: '$text',
  fontSize: '20px',
  cursor: 'pointer',
  padding: '$2',
  
  '&:hover': {
    opacity: 0.7,
  },
});

const MonthTitle = styled('h3', {
  fontSize: '20px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const CalendarGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '1px',
  backgroundColor: '#e5e5e5',
  border: '1px solid #e5e5e5',
});

const DayHeader = styled('div', {
  padding: '$3',
  backgroundColor: '$white',
  textAlign: 'center',
  fontSize: '13px',
  fontWeight: '$semibold',
  color: '$textLight',
  fontFamily: 'Figtree, sans-serif',
});

const DayCell = styled('div', {
  minHeight: '100px',
  padding: '$2',
  backgroundColor: '$white',
  position: 'relative',
  
  variants: {
    otherMonth: {
      true: {
        backgroundColor: '#f9fafb',
        color: '$textLight',
      },
    },
  },
});

const DayNumber = styled('div', {
  fontSize: '13px',
  fontWeight: '$medium',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
});

const EventPill = styled('div', {
  padding: '$1 $2',
  borderRadius: '4px',
  fontSize: '11px',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$1',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  
  '&:hover': {
    opacity: 0.8,
  },
  
  variants: {
    color: {
      blue: {
        backgroundColor: '#DBEAFE',
        color: '#1E40AF',
      },
      lightBlue: {
        backgroundColor: '#E0F2FE',
        color: '#0369A1',
      },
    },
  },
});

const Modal = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
});

const ModalContent = styled('div', {
  backgroundColor: '#E6F7F8',
  borderRadius: '12px',
  padding: '$6',
  maxWidth: '400px',
  width: '100%',
  position: 'relative',
});

const CloseButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '$text',
  
  '&:hover': {
    color: '#DC2626',
  },
});

const EventTitle = styled('h4', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$4',
  fontFamily: 'Figtree, sans-serif',
});

const EventDetail = styled('p', {
  fontSize: '14px',
  color: '$text',
  marginBottom: '$2',
  fontFamily: 'Figtree, sans-serif',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

export const EmployeeCalendar: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
  
  const calendar = [
    { day: 29, otherMonth: true },
    { day: 30, otherMonth: true },
    { day: 1, events: [{ id: 1, label: '11 kg', color: 'blue' }, { id: 2, label: '22 kg', color: 'lightBlue' }] },
    { day: 2, events: [{ id: 3, label: '11 kg', color: 'blue' }, { id: 4, label: '22 kg', color: 'lightBlue' }] },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11, events: [{ id: 5, label: '11 kg', color: 'blue' }, { id: 6, label: '22 kg', color: 'lightBlue' }, { id: 7, label: '22 kg', color: 'lightBlue' }] },
    { day: 12 },
    { day: 13 },
    { day: 14, events: [{ id: 8, label: '11 kg', color: 'blue' }, { id: 9, label: '22 kg', color: 'lightBlue' }] },
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22, events: [{ id: 10, label: '11 kg', color: 'blue' }, { id: 11, label: '22 kg', color: 'lightBlue' }] },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
  ];

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <GasLayout title="Manage Employee">
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/gas/employees')}>
          Manage Employee
        </BreadcrumbLink>
        <span>›</span>
        <BreadcrumbLink onClick={() => navigate(`/gas/employees/${id}`)}>
          View Details
        </BreadcrumbLink>
        <span>›</span>
        <span>Service Calendar</span>
      </Breadcrumb>

      <CalendarCard>
        <CalendarHeader>
          <MonthNav>‹</MonthNav>
          <MonthTitle>December 2024</MonthTitle>
          <MonthNav>›</MonthNav>
        </CalendarHeader>

        <CalendarGrid>
          {days.map((day) => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
          
          {calendar.map((cell, index) => (
            <DayCell key={index} otherMonth={cell.otherMonth}>
              <DayNumber>{cell.day}</DayNumber>
              {cell.events?.map((event) => (
                <EventPill
                  key={event.id}
                  color={event.color}
                  onClick={() => handleEventClick(event)}
                >
                  {event.label}
                </EventPill>
              ))}
            </DayCell>
          ))}
        </CalendarGrid>
      </CalendarCard>

      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            <EventTitle>22 kg</EventTitle>
            <EventDetail>Tuesday, 14 December</EventDetail>
            <EventDetail>
              <span>🕐</span> 4:00-6:00 PM <span>⏱️</span> 2 Hrs
            </EventDetail>
            <EventDetail>
              <span>📍</span> P.O.Box 19, Khimji's Bait Al Ahlam, Al Noor St,Ruwi,Muscat
            </EventDetail>
          </ModalContent>
        </Modal>
      )}
    </GasLayout>
  );
};

