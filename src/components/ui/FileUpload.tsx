import React, { useRef } from 'react';
import { styled } from '@/styles/theme';

const UploadContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
});

const Label = styled('label', {
  fontSize: '$base',
  fontWeight: '$medium',
  color: '$textSecondary',
});

const UploadBox = styled('div', {
  border: '1.5px dashed rgba(73, 95, 110, 0.5)',
  borderRadius: '$md',
  padding: '$12 $3',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  '&:hover': {
    borderColor: '$onboardingPrimary',
    backgroundColor: 'rgba(100, 194, 200, 0.05)',
  },
});

const AttachmentIcon = styled('svg', {
  width: '24px',
  height: '24px',
  color: '$textSecondary',
});

const UploadText = styled('p', {
  fontSize: '15px',
  fontWeight: '$normal',
  color: 'rgba(18, 33, 44, 0.8)',
  textAlign: 'center',
});

const UploadedFile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$3 $4 $3 $4',
  backgroundColor: '$onboardingLight',
  borderRadius: '36px',
  width: 'fit-content',
});

const DocIcon = styled('svg', {
  width: '20px',
  height: '20px',
  flexShrink: 0,
});

const FileName = styled('span', {
  fontSize: '$base',
  fontWeight: '$medium',
  color: '$text',
});

const RemoveButton = styled('button', {
  width: '16px',
  height: '16px',
  padding: 0,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '&:hover': {
    opacity: 0.7,
  },
});

interface FileUploadProps {
  label?: string;
  value?: File | null;
  onChange?: (file: File | null) => void;
  onFileSelect?: (file: File | null) => void;
  accept?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ 
  label, 
  value, 
  onChange, 
  onFileSelect,
  accept = ".pdf,.jpg,.jpeg,.png" 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
    onFileSelect?.(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
    onFileSelect?.(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <UploadContainer>
      {label && <Label>{label}</Label>}
      {value ? (
        <UploadedFile>
          <DocIcon viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </DocIcon>
          <FileName>{value.name}</FileName>
          <RemoveButton onClick={handleRemove}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </RemoveButton>
        </UploadedFile>
      ) : (
        <UploadBox onClick={handleClick}>
          <AttachmentIcon viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </AttachmentIcon>
          <UploadText>Add an attachment</UploadText>
        </UploadBox>
      )}
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept={accept}
      />
    </UploadContainer>
  );
};

