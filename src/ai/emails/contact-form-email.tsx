
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Message from B&V Designs Contact Form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message Received</Heading>
        <Text style={paragraph}>You have received a new message through the contact form on your website.</Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>From:</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>Email Address:</Text>
          <Text style={value}>{email}</Text>
          <Text style={label}>Subject:</Text>
          <Text style={value}>{subject}</Text>
          <Text style={label}>Message:</Text>
          <Text style={{...paragraph, whiteSpace: 'pre-wrap'}}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This email was sent from the B&V Designs website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  padding: '0 40px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#484848',
  padding: '0 40px',
};

const label = {
  ...paragraph,
  color: '#888888',
  fontWeight: '500',
  marginBottom: '0',
  paddingBottom: '0',
};

const value = {
  ...paragraph,
  paddingTop: '0',
  marginTop: '4px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
  width: '100%',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
};
