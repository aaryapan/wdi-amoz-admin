import React, { useState } from 'react';
import { styled } from '@/styles/theme';

const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  zIndex: 1000,
});

const ChatContainer = styled('div', {
  width: '450px',
  height: 'calc(100vh - 68px)',
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
});

const ChatHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$4 $5',
  borderBottom: '1px solid #e5e7eb',
  backgroundColor: '$white',
});

const BackButton = styled('button', {
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#f3f4f6',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
  },
});

const UserAvatar = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#ffb3ba',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: '$bold',
  color: '$white',
  fontFamily: 'Figtree, sans-serif',
});

const UserInfo = styled('div', {
  flex: 1,
});

const UserName = styled('h3', {
  fontSize: '16px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const MessagesContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
  padding: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const MessageBubble = styled('div', {
  maxWidth: '70%',
  padding: '$3 $4',
  borderRadius: '12px',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  lineHeight: '1.5',
  
  variants: {
    sent: {
      true: {
        backgroundColor: '#64C2C8',
        color: '$white',
        marginLeft: 'auto',
        borderBottomRightRadius: '4px',
      },
      false: {
        backgroundColor: '#f3f4f6',
        color: '$text',
        marginRight: 'auto',
        borderBottomLeftRadius: '4px',
      },
    },
  },
});

const MessageTime = styled('span', {
  fontSize: '11px',
  color: '$textLight',
  marginTop: '$1',
  display: 'block',
  fontFamily: 'Figtree, sans-serif',
});

const MessageDate = styled('div', {
  textAlign: 'center',
  fontSize: '12px',
  color: '$textLight',
  margin: '$4 0',
  fontFamily: 'Figtree, sans-serif',
});

const InputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$4 $5',
  borderTop: '1px solid #e5e7eb',
  backgroundColor: '$white',
});

const Input = styled('input', {
  flex: 1,
  padding: '$3',
  border: '1px solid #e5e7eb',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&:focus': {
    outline: 'none',
    borderColor: '#64C2C8',
  },
  
  '&::placeholder': {
    color: '#9CA3AF',
  },
});

const SendButton = styled('button', {
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#64C2C8',
  border: 'none',
  borderRadius: '$md',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: '#50aeb4',
  },
  
  '& svg': {
    width: '20px',
    height: '20px',
    color: '$white',
  },
});

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

interface ChatModalProps {
  onClose: () => void;
  customerName?: string;
}

export const ChatModal: React.FC<ChatModalProps> = ({ onClose, customerName = 'Sam Tek' }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Dolor sit amet, consectetur adipiscing elit. Hendrerit vulputate viverra commodo tincidunt', sent: false, time: '11:40 AM' },
    { id: 2, text: 'Dolor sit amet, consectetur adipiscing elit. Hendrerit', sent: false, time: '11:42 AM' },
    { id: 3, text: 'Can you send the file of Marine UX case study and the link to wireframe ?', sent: false, time: '1:20 PM' },
    { id: 4, text: 'Yes. Here it is', sent: true, time: '1:40 PM' },
    { id: 5, text: 'Thank you 👍', sent: false, time: '1:50 PM' },
    { id: 6, text: 'You are welcome👍', sent: true, time: '1:50 PM' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sent: true,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      }]);
      setMessage('');
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ChatContainer onClick={(e) => e.stopPropagation()}>
        <ChatHeader>
          <BackButton onClick={onClose}>
            <ChevronLeftIcon />
          </BackButton>
          <UserAvatar>ST</UserAvatar>
          <UserInfo>
            <UserName>{customerName}</UserName>
          </UserInfo>
        </ChatHeader>

        <MessagesContainer>
          <MessageDate>Today</MessageDate>
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sent ? 'flex-end' : 'flex-start' }}>
              <MessageBubble sent={msg.sent}>
                {msg.text}
              </MessageBubble>
              <MessageTime>{msg.time}</MessageTime>
            </div>
          ))}
        </MessagesContainer>

        <InputContainer>
          <Input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <SendButton onClick={handleSend}>
            <SendIcon />
          </SendButton>
        </InputContainer>
      </ChatContainer>
    </Overlay>
  );
};

