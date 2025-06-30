import { Html, Head, Body, Container, Section, Text, Button, Img } from '@react-email/components';

export function MissedAppointment() {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Helvetica,Arial,sans-serif', backgroundColor: '#f5f7fa', margin: '0', padding: '0' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          {/* Hidden Preview Text */}
          <div style={{ display: 'none', fontSize: '1px', color: '#ffffff', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
            We missed you at your appointment today. Let's reschedule to get you the care you need.
          </div>

          {/* Header Section */}
          <Section style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
            <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" style={{ display: 'block', margin: '0 auto 10px auto' }} />
          </Section>

          {/* Missed Appointment Message */}
          <Section style={{ padding: '20px 20px 40px 20px', backgroundColor: '#fff3cd', textAlign: 'center' }}>
            <Text style={{ color: '#856404', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>We Missed You Today</Text>
            <Text style={{ color: '#856404', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>Your scheduled appointment was today, but we didn't see you. We understand that things come up, and we're here to help reschedule.</Text>
            <Button href="#" style={{ display: 'inline-block', backgroundColor: '#d4851c', color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', padding: '15px 30px', borderRadius: '5px' }}>Reschedule Now</Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: '25px 20px 20px 20px', textAlign: 'center' }}>
            {/* Social Media Links */}
            <div style={{ marginBottom: '20px' }}>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#3b5998', fontSize: '32px', textDecoration: 'none' }} title="Facebook">📘</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#0077b5', fontSize: '32px', textDecoration: 'none' }} title="LinkedIn">💼</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#1da1f2', fontSize: '32px', textDecoration: 'none' }} title="Twitter">🐦</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#ff0000', fontSize: '32px', textDecoration: 'none' }} title="YouTube">📺</a>
            </div>
            <Text style={{ fontSize: '12px', color: '#4a5568' }}>
              <strong>Need help?</strong> Contact support at <a href="mailto:support@stationmd.com" style={{ color: '#4A72A0' }}>support@stationmd.com</a>
            </Text>
            <Text style={{ fontSize: '12px', color: '#4a5568' }}>©2025 StationMD. All Rights Reserved.<br />515 Valley Street #203, Maplewood, NJ 07040</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
