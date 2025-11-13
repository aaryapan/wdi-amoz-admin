import React, { useState } from 'react';
import { styled } from '@/styles/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { PlumbingLayout } from '@/components/layout/PlumbingLayout';
import { FileUpload } from '@/components/ui/FileUpload';

const Container = styled('div', {
  maxWidth: '900px',
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

const Card = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
});

const ProfileSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  paddingBottom: '$6',
  marginBottom: '$6',
  borderBottom: '1px solid #E0E0E0',
});

const AvatarContainer = styled('div', {
  position: 'relative',
});

const Avatar = styled('img', {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const OnlineBadge = styled('div', {
  position: 'absolute',
  bottom: '5px',
  right: '5px',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '$onboardingPrimary',
  border: '2px solid $white',
});

const NameInputContainer = styled('div', {
  flex: 1,
});

const Section = styled('div', {
  marginBottom: '$6',
});

const SectionTitle = styled('h3', {
  fontSize: '18px',
  fontWeight: '$semibold',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$4',
});

const FormRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
  marginBottom: '$4',
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Label = styled('label', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const Input = styled('input', {
  padding: '$3 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  
  '&::placeholder': {
    color: '#999',
  },
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
});

const CategorySection = styled('div', {
  marginBottom: '$4',
});

const CategorySelectContainer = styled('div', {
  marginBottom: '$3',
});

const Select = styled('select', {
  width: '100%',
  padding: '$3 $4',
  borderRadius: '$md',
  border: '1px solid #E0E0E0',
  fontSize: '14px',
  fontFamily: 'Figtree, sans-serif',
  backgroundColor: '$white',
  cursor: 'pointer',
  
  '&:focus': {
    outline: 'none',
    borderColor: '$onboardingPrimary',
  },
});

const SelectedCategories = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  marginBottom: '$3',
});

const CategoryChip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  backgroundColor: 'rgba(100, 194, 200, 0.2)',
  borderRadius: '52px',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
});

const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  color: '$text',
  
  '&:hover': {
    color: '#C62828',
  },
});

const AddMoreButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

const ExperienceInputContainer = styled('div', {
  marginBottom: '$4',
});

const DocumentUploadSection = styled('div', {
  marginBottom: '$5',
});

const DocumentLabel = styled('div', {
  fontSize: '14px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginBottom: '$2',
});

const DateInputContainer = styled('div', {
  marginBottom: '$4',
});

const SaveButton = styled('button', {
  alignSelf: 'flex-end',
  padding: '$3 $8',
  backgroundColor: '$onboardingPrimary',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '$medium',
  color: '$text',
  fontFamily: 'Figtree, sans-serif',
  marginTop: '$5',
  width: '100%',
  
  '&:hover': {
    backgroundColor: '#50aee2',
  },
});

export const EmployeeEdit: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [name, setName] = useState('Adam Johni');
  const [phone, setPhone] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [email, setEmail] = useState('example@email.com');
  const [selectedCategories, setSelectedCategories] = useState(['Car Cleaning', 'Bike Cleaning']);
  const [experience, setExperience] = useState('4');
  const [expiryDate, setExpiryDate] = useState('');

  const handleRemoveCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(c => c !== category));
  };

  const handleSave = () => {
    // Save logic here
    navigate(`/plumbing/employees/${id}`);
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
          <BreadcrumbCurrent>Edit Details</BreadcrumbCurrent>
        </Breadcrumb>

        <Card>
          <ProfileSection>
            <AvatarContainer>
              <Avatar src="https://www.figma.com/api/mcp/asset/b8706651-9209-4495-b9f9-de86319eac21" alt="Employee" />
              <OnlineBadge />
            </AvatarContainer>
            <NameInputContainer>
              <Label>Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
            </NameInputContainer>
          </ProfileSection>

          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label>Phone number</Label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile Number"
                />
              </FormGroup>
              <FormGroup>
                <Label>Employee id</Label>
                <Input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="Emp id"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email id</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </FormGroup>
            </FormRow>
          </Section>

          <Section>
            <SectionTitle>Service category</SectionTitle>
            <CategorySection>
              <CategorySelectContainer>
                <Label>Select Category</Label>
                <Select>
                  <option>Eg. Car Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>House Cleaning</option>
                  <option>Bike Cleaning</option>
                </Select>
              </CategorySelectContainer>

              <SelectedCategories>
                {selectedCategories.map((category) => (
                  <CategoryChip key={category}>
                    {category}
                    <RemoveButton onClick={() => handleRemoveCategory(category)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </RemoveButton>
                  </CategoryChip>
                ))}
              </SelectedCategories>

              <AddMoreButton>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Add More
              </AddMoreButton>
            </CategorySection>
          </Section>

          <Section>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceInputContainer>
              <Label>Number of years</Label>
              <Input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="4"
                style={{ width: '100%' }}
              />
            </ExperienceInputContainer>
          </Section>

          <Section>
            <SectionTitle>Documents</SectionTitle>
            
            <DocumentUploadSection>
              <DocumentLabel>Upload Passport</DocumentLabel>
              <FileUpload
                onFileSelect={() => {/* file handler */}}
                accept="image/*,.pdf"
              />
            </DocumentUploadSection>

            <DocumentUploadSection>
              <DocumentLabel>Past certification (optional)...</DocumentLabel>
              <FileUpload
                onFileSelect={() => {/* file handler */}}
                accept="image/*,.pdf"
              />
            </DocumentUploadSection>

            <DocumentUploadSection>
              <DocumentLabel>Upload Residential ID</DocumentLabel>
              <FileUpload
                onFileSelect={() => {/* file handler */}}
                accept="image/*,.pdf"
              />
            </DocumentUploadSection>

            <DateInputContainer>
              <Label>Residential ID Expiry Date</Label>
              <Input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </DateInputContainer>
          </Section>

          <SaveButton onClick={handleSave}>Save</SaveButton>
        </Card>
      </Container>
    </PlumbingLayout>
  );
};

