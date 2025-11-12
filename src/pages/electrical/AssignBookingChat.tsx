import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import { ElectricalLayout } from '@/components/layout/ElectricalLayout';

const Container = styled('div', {
  maxWidth: '900px',
  margin: '0 auto',
});

const SearchContainer = styled('div', {
  position: 'relative',
  marginBottom: '$6',
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '$3 $4 $3 $10',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  
  '&::placeholder': {
    color: '#999',
  },
});

const SearchIcon = styled('svg', {
  position: 'absolute',
  left: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '20px',
  color: '#666',
});

const ChatContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  minHeight: 'calc(100vh - 250px)',
  display: 'flex',
  flexDirection: 'column',
});

const ChatHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  paddingBottom: '$4',
  borderBottom: '1px solid #E0E0E0',
  marginBottom: '$4',
});

const BackButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$onboardingPrimary',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    textDecoration: 'underline',
  },
});

const EmployeeAvatar = styled('img', {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const EmployeeInfo = styled('div', {
  flex: 1,
});

const EmployeeName = styled('div', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const EmployeeStatus = styled('div', {
  fontSize: '14px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
});

const CallButtons = styled('div', {
  display: 'flex',
  gap: '$3',
});

const CallButton = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '$white',
  border: '1px solid #E0E0E0',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const MessagesContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
  padding: '$4 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const SystemMessage = styled('div', {
  textAlign: 'center',
  fontSize: '12px',
  color: '#999',
  fontFamily: 'Figtree, sans-serif',
  padding: '$2 0',
});

const MessageBubble = styled('div', {
  maxWidth: '70%',
  padding: '$3 $4',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  position: 'relative',
  
  variants: {
    sender: {
      user: {
        alignSelf: 'flex-end',
        backgroundColor: '#E8F9FA',
        color: '$text',
      },
      employee: {
        alignSelf: 'flex-start',
        backgroundColor: '#F0E6FF',
        color: '$text',
      },
    },
  },
});

const MessageTime = styled('div', {
  fontSize: '11px',
  color: '#999',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$1',
  textAlign: 'right',
});

const MessageStatus = styled('span', {
  marginLeft: '$1',
  color: '#2E7D32',
});

const StepsContainer = styled('div', {
  backgroundColor: '#F5F5F5',
  borderRadius: '$md',
  padding: '$4',
  marginTop: '$3',
  maxWidth: '70%',
  alignSelf: 'flex-end',
});

const StepTitle = styled('div', {
  fontSize: '14px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$3',
});

const StepSection = styled('div', {
  marginBottom: '$3',
});

const StepSectionTitle = styled('div', {
  fontSize: '13px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const StepList = styled('ol', {
  paddingLeft: '$5',
  margin: 0,
});

const StepItem = styled('li', {
  fontSize: '12px',
  color: '#666',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: 1.6,
  marginBottom: '$2',
});

const MessageInput = styled('div', {
  display: 'flex',
  gap: '$3',
  paddingTop: '$4',
  borderTop: '1px solid #E0E0E0',
  marginTop: '$4',
});

const InputWrapper = styled('div', {
  flex: 1,
  position: 'relative',
});

const Input = styled('input', {
  width: '100%',
  padding: '$3 $10 $3 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&::placeholder': {
    color: '#999',
  },
});

const AttachButton = styled('button', {
  position: 'absolute',
  right: '$3',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const SendButton = styled('button', {
  padding: '$3 $6',
  borderRadius: '$md',
  border: 'none',
  backgroundColor: '$onboardingPrimary',
  color: '$text',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

export const AssignBookingChat: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'employee' as const,
      text: 'I am not being able to connect this with my mobile bluetooth',
      time: '10:03',
    },
    {
      id: 2,
      sender: 'employee' as const,
      text: 'Samsung S24 FE',
      time: '10:07',
    },
    {
      id: 3,
      sender: 'user' as const,
      text: 'Good morning, Sir. Just wanted to confirm your mobile handset model. Could you share the brand and model of your handset, please?',
      time: '10:06',
      read: true,
    },
  ];

  return (
    <ElectricalLayout title="Assigning Booking">
      <Container>
        <SearchContainer>
          <SearchIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
            <path d="M14 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>

        <ChatContainer>
          <ChatHeader>
            <BackButton onClick={() => navigate('/electrical/assign-booking')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </BackButton>
            <EmployeeAvatar src="https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21" alt="Jess E" />
            <EmployeeInfo>
              <EmployeeName>Jess E</EmployeeName>
              <EmployeeStatus>Online</EmployeeStatus>
            </EmployeeInfo>
            <CallButtons>
              <CallButton>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3 14.5C17.5 13.7 16.5 13.3 15.4 13.3C14.3 13.3 13.4 13.7 12.6 14.4L11.5 15.5C11.3 15.4 11.1 15.3 10.9 15.2C9.7 14.6 8.4 13.8 7.2 12.7C6.6 12.1 6.2 11.6 5.9 11.1C6.3 10.8 6.6 10.5 6.9 10.2C7 10.1 7.1 10 7.2 9.9C8.9 8.2 8.9 5.8 7.2 4.1L6.4 3.3C6.3 3.2 6.2 3.1 6.1 3C5.9 2.8 5.7 2.6 5.5 2.4C4.7 1.6 3.7 1.2 2.6 1.2C1.5 1.2 0.6 1.6 -0.2 2.4L-1.1 3.3C-1.9 4.1 -2.3 5.1 -2.3 6.3C-2.3 7.9 -1.8 9.4 -0.7 11C0.9 13.4 3.1 15.5 5.7 17.1C7.4 18.1 9.5 18.8 11.9 19C12.1 19 12.3 19 12.4 19C13.9 19 15.2 18.5 16.2 17.5L17.1 16.6C17.9 15.8 18.3 14.9 18.3 13.8C18.3 12.7 17.9 11.8 17.1 11L18.3 14.5Z" fill="#50AEE2"/>
                </svg>
              </CallButton>
              <CallButton>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10Z" stroke="#50AEE2" strokeWidth="2"/>
                  <path d="M10 6V10L13 13" stroke="#50AEE2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </CallButton>
            </CallButtons>
          </ChatHeader>

          <MessagesContainer>
            <SystemMessage>Agent John Doe joined this chat</SystemMessage>

            {messages.map((msg) => (
              <MessageBubble key={msg.id} sender={msg.sender}>
                {msg.text}
                <MessageTime>
                  {msg.time}
                  {msg.read && <MessageStatus>✓✓</MessageStatus>}
                </MessageTime>
              </MessageBubble>
            ))}

            <StepsContainer>
              <StepTitle>Step 1: Prepare Your Bluetooth Headset</StepTitle>
              <StepList>
                <StepItem>Turn it on: Press the power button on your headset until it indicates it's powered on.</StepItem>
                <StepItem>Enter pairing mode: Hold the power or pairing button for a few seconds until an LED light starts flashing, typically blue or red.</StepItem>
              </StepList>

              <StepSection>
                <StepSectionTitle>Step 2: Open Your Phone's Bluetooth Settings</StepSectionTitle>
                <StepList>
                  <StepItem>Access settings: Open the Settings app on your phone, or swipe down from the top of the screen to access the Quick Settings panel and tap the settings icon.</StepItem>
                  <StepItem>Navigate to Bluetooth: Tap on "Connections" or directly on "Bluetooth" (the name may vary slightly by phone model).</StepItem>
                  <StepItem>Turn on Bluetooth: Make sure the Bluetooth switch is turned on.</StepItem>
                </StepList>
              </StepSection>

              <StepSection>
                <StepSectionTitle>Step 3: Pair the Headset</StepSectionTitle>
                <StepList>
                  <StepItem>Scan for devices: The phone will start scanning for nearby Bluetooth devices.</StepItem>
                  <StepItem>Select your headset: Find and tap the name of your headset in the list of available devices.</StepItem>
                  <StepItem>Confirm pairing: If prompted, confirm the pairing request by tapping "Pair" or "OK".</StepItem>
                  <StepItem>Verify connection: Your headset should now appear under paired or connected devices, and you may hear a confirmation sound.</StepItem>
                </StepList>
              </StepSection>
              <MessageTime>10:07 ✓</MessageTime>
            </StepsContainer>
          </MessagesContainer>

          <MessageInput>
            <InputWrapper>
              <Input
                type="text"
                placeholder="Hope this cleared your concern. Is there anything else that I could help you with?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <AttachButton>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 10V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V10M14 6L10 2M10 2L6 6M10 2V12" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </AttachButton>
            </InputWrapper>
            <SendButton onClick={() => setMessage('')}>Send</SendButton>
          </MessageInput>
        </ChatContainer>
      </Container>
    </ElectricalLayout>
  );
};

