import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { DrivingLayout } from '@/components/layout/DrivingLayout';
import { useNavigate } from 'react-router-dom';

const Container = styled('div', {
  maxWidth: '700px',
  margin: '0 auto',
});

const ProfileCard = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$10',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const ProfileHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '$8',
  paddingBottom: '$8',
  borderBottom: '1px solid #E0E0E0',
});

const ProfileImageWrapper = styled('div', {
  position: 'relative',
  width: '100px',
  height: '100px',
  marginBottom: '$4',
});

const ProfileImage = styled('img', {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
});

const CameraButton = styled('button', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '$onboardingPrimary',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '& svg': {
    width: '16px',
    height: '16px',
    fill: '$white',
  },
});

const ProfileName = styled('h2', {
  fontSize: '24px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const Section = styled('div', {
  marginBottom: '$6',
});

const SectionTitle = styled('h3', {
  fontSize: '16px',
  fontWeight: '$semibold',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
  marginBottom: '$4',
});

const FormGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',
});

const FormField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Label = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  color: '#666',
});

const Input = styled('input', {
  padding: '$3 $4',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  backgroundColor: '$white',
  color: '$text',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
  
  '&::placeholder': {
    color: 'rgba(0, 0, 0, 0.4)',
  },
});

const Select = styled('select', {
  padding: '$3 $4',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  backgroundColor: '$white',
  color: '$text',
  cursor: 'pointer',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
});

const LanguageSection = styled('div', {
  marginBottom: '$4',
});

const LanguageTags = styled('div', {
  display: 'flex',
  gap: '$3',
  marginTop: '$2',
  flexWrap: 'wrap',
});

const LanguageTag = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: '$white',
  border: '1px solid #E0E0E0',
  borderRadius: '$md',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  color: '$text',
});

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '16px',
  height: '16px',
  
  '& svg': {
    width: '12px',
    height: '12px',
    color: '#666',
  },
});

const AddButton = styled('button', {
  padding: '$2 $4',
  fontSize: '14px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  backgroundColor: '$onboardingPrimary',
  border: 'none',
  color: '$text',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  
  '&:hover': {
    backgroundColor: '#3d9cb3',
  },
});

const DaySelector = styled('div', {
  display: 'flex',
  gap: '$2',
  flexWrap: 'wrap',
  marginTop: '$2',
});

const DayButton = styled('button', {
  padding: '$2 $3',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  backgroundColor: '$white',
  color: '$text',
  cursor: 'pointer',
  transition: 'all 0.2s',
  
  '&:hover': {
    borderColor: '$onboardingPrimary',
  },
  
  variants: {
    selected: {
      true: {
        backgroundColor: '$onboardingPrimary',
        borderColor: '$onboardingPrimary',
        color: '$text',
      },
    },
  },
});

const TimeGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4',
  marginTop: '$2',
});

const CarImagesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$3',
  marginTop: '$2',
});

const CarImageBox = styled('div', {
  position: 'relative',
  aspectRatio: '1',
  borderRadius: '$md',
  overflow: 'hidden',
  border: '2px dashed #E0E0E0',
  cursor: 'pointer',
  
  '&:hover': {
    borderColor: '$onboardingPrimary',
  },
  
  variants: {
    hasImage: {
      true: {
        border: 'none',
      },
    },
  },
});

const CarImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const UploadPlaceholder = styled('div', {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  
  '& svg': {
    width: '24px',
    height: '24px',
    color: '#999',
  },
  
  '& span': {
    fontSize: '12px',
    color: '#999',
  },
});

const SaveButton = styled('button', {
  width: '100%',
  padding: '$3',
  fontSize: '16px',
  fontWeight: '$medium',
  fontFamily: 'Figtree, sans-serif',
  borderRadius: '$md',
  backgroundColor: '$onboardingPrimary',
  border: 'none',
  color: '$text',
  cursor: 'pointer',
  marginTop: '$6',
  
  '&:hover': {
    backgroundColor: '#3d9cb3',
  },
});

export const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [languages, setLanguages] = useState(['Arab', 'Hindi']);
  const [selectedDays, setSelectedDays] = useState(['Monday', 'Tuesday', 'Wednesday']);
  const [carImages] = useState([
    'https://www.figma.com/api/mcp/asset/18f22b0a-65ec-4470-806a-83f7541e2479',
    'https://www.figma.com/api/mcp/asset/1918418c-ce82-473f-8155-ca60d68fe1e3',
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const removeLanguage = (lang: string) => {
    setLanguages(languages.filter(l => l !== lang));
  };

  const handleSave = () => {
    navigate('/driving/profile');
  };

  return (
    <DrivingLayout title="My Profile">
      <Container>
        <ProfileCard>
          <ProfileHeader>
            <ProfileImageWrapper>
              <ProfileImage
                src="https://www.figma.com/api/mcp/asset/e0b6f493-202b-4e80-be19-4a7b314717e2"
                alt="Profile"
              />
              <CameraButton>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
              </CameraButton>
            </ProfileImageWrapper>
            <ProfileName>John Adam</ProfileName>
          </ProfileHeader>

          <Section>
            <FormField>
              <Label>Gender</Label>
              <Input type="text" defaultValue="Male" placeholder="Male" />
            </FormField>
          </Section>

          <Section>
            <LanguageSection>
              <Label>Languages Known</Label>
              <Select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="arab">Arab</option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
              </Select>
              <LanguageTags>
                {languages.map((lang) => (
                  <LanguageTag key={lang}>
                    {lang}
                    <RemoveButton onClick={() => removeLanguage(lang)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </RemoveButton>
                  </LanguageTag>
                ))}
              </LanguageTags>
              <AddButton style={{ marginTop: '$3' }}>
                + Add More
              </AddButton>
            </LanguageSection>
          </Section>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <FormGrid>
              <FormField>
                <Label>Phone number</Label>
                <Input type="tel" placeholder="Mobile Number" defaultValue="9825533622" />
              </FormField>
              <FormField>
                <Label>Email id</Label>
                <Input type="email" placeholder="example@gmail.com" defaultValue="example@gmail.com" />
              </FormField>
            </FormGrid>
          </Section>

          <Section>
            <SectionTitle>Availability</SectionTitle>
            <FormField>
              <Label>Select Working Days*</Label>
              <DaySelector>
                {days.map((day) => (
                  <DayButton
                    key={day}
                    selected={selectedDays.includes(day)}
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </DayButton>
                ))}
              </DaySelector>
            </FormField>
            
            <FormField style={{ marginTop: '$4' }}>
              <Label>Select Working Hours*</Label>
              <TimeGrid>
                <Select defaultValue="04:00 AM">
                  <option value="04:00 AM">04:00 AM</option>
                  <option value="05:00 AM">05:00 AM</option>
                </Select>
                <Select defaultValue="05:00 PM">
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </Select>
              </TimeGrid>
            </FormField>
          </Section>

          <Section>
            <SectionTitle>Pricing per class</SectionTitle>
            <FormField>
              <Label>Add Price</Label>
              <Input type="text" placeholder="OMR Enter amount" defaultValue="OMR 500" />
            </FormField>
          </Section>

          <Section>
            <SectionTitle>Service radius</SectionTitle>
            <FormField>
              <Label>Select Radius</Label>
              <Input type="text" placeholder="Km Eg: 5" defaultValue="Km 10" />
            </FormField>
          </Section>

          <Section>
            <SectionTitle>Car details</SectionTitle>
            <FormField>
              <Label>Car Images</Label>
              <CarImagesGrid>
                {carImages.map((img, index) => (
                  <CarImageBox key={index} hasImage>
                    <CarImage src={img} alt={`Car ${index + 1}`} />
                  </CarImageBox>
                ))}
                {Array.from({ length: 4 - carImages.length }).map((_, index) => (
                  <CarImageBox key={`empty-${index}`}>
                    <UploadPlaceholder>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </UploadPlaceholder>
                  </CarImageBox>
                ))}
              </CarImagesGrid>
            </FormField>

            <FormGrid style={{ marginTop: '$4' }}>
              <FormField>
                <Label>Brand</Label>
                <Select defaultValue="Toyota">
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                </Select>
              </FormField>
              <FormField>
                <Label>Variant</Label>
                <Select defaultValue="Corolla">
                  <option value="Corolla">Corolla</option>
                  <option value="Camry">Camry</option>
                </Select>
              </FormField>
            </FormGrid>

            <FormGrid style={{ marginTop: '$4' }}>
              <FormField>
                <Label>Fuel Type</Label>
                <Select defaultValue="Petrol">
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </Select>
              </FormField>
              <FormField>
                <Label>Transmission Type</Label>
                <Select defaultValue="Manual">
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </Select>
              </FormField>
            </FormGrid>

            <FormGrid style={{ marginTop: '$4' }}>
              <FormField>
                <Label>Car Year</Label>
                <Input type="text" placeholder="2022" defaultValue="2022" />
              </FormField>
              <FormField>
                <Label>Car mileage</Label>
                <Input type="text" placeholder="Manual" defaultValue="Manual" />
              </FormField>
            </FormGrid>
          </Section>

          <SaveButton onClick={handleSave}>
            Save
          </SaveButton>
        </ProfileCard>
      </Container>
    </DrivingLayout>
  );
};
