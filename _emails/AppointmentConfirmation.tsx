import { Html, Head, Body, Container, Section, Text, Button, Img } from '@react-email/components';

export function AppointmentConfirmation() {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Helvetica,Arial,sans-serif', backgroundColor: '#f5f7fa', margin: '0', padding: '0' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f7fa' }}>
          {/* Hidden Preview Text */}
          <div style={{ display: 'none', fontSize: '1px', color: '#ffffff', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
            Your StationMD appointment is confirmed. We'll send reminders 1 day and 30 minutes before your visit.
          </div>

          {/* Header Section */}
          <Section style={{ backgroundColor: '#ffffff' }}>
            <Section style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
              {/* Logo */}
              <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" style={{ display: 'block', margin: '0 auto 10px auto' }} />

              {/* Navigation */}
              <Section className="desktop-only">
                <Text style={{ textAlign: 'center' }}>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>MY APPOINTMENTS</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>PATIENT PORTAL</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>GET CARE NOW</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>SUPPORT</a>
                </Text>
              </Section>

              {/* Mobile Navigation */}
              <Section className="mobile-only">
                <Text style={{ textAlign: 'center' }}>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '9px', textDecoration: 'none', padding: '0 5px' }}>MY APPOINTMENTS</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '9px', textDecoration: 'none', padding: '0 5px' }}>PATIENT PORTAL</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '9px', textDecoration: 'none', padding: '0 5px' }}>GET CARE NOW</a>
                  <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '9px', textDecoration: 'none', padding: '0 5px' }}>SUPPORT</a>
                </Text>
              </Section>
            </Section>

            {/* Confirmation Message */}
            <Section style={{ padding: '20px 20px 40px 20px', backgroundColor: '#f8f9fc', textAlign: 'center' }}>
              <Text style={{ color: '#4A72A0', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>Appointment Confirmed!</Text>
              <Text style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>Your telemedicine visit is all set. We're looking forward to providing you with exceptional care from the comfort of your home.</Text>
              <Button href="#" style={{ display: 'inline-block', backgroundColor: '#4A72A0', color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', padding: '15px 30px', borderRadius: '5px' }}>Add to Calendar</Button>
            </Section>

            {/* Hero Image */}
            <Section>
              <Img src="/portfolio/assets/images/stationmd-appointment-confirmation-1.jpg" alt="Your StationMD appointment is confirmed" width="600" style={{ width: '100%', display: 'block' }} />
            </Section>
          </Section>

          {/* Appointment Details Section */}
          <Section style={{ backgroundColor: '#ffffff' }}>
            <Section style={{ padding: '30px 20px', textAlign: 'center' }}>
              <Text style={{ color: '#4A72A0', fontSize: '22px', margin: '0 0 20px 0' }}>Appointment Details</Text>
              <div style={{ backgroundColor: '#f8f9fc', borderRadius: '8px', padding: '25px', margin: '0 0 25px 0', textAlign: 'left' }}>
                <Text style={{ padding: '8px 0', color: '#666', fontSize: '14px', width: '120px', verticalAlign: 'top' }}>Date & Time: <span style={{ color: '#333', fontSize: '16px', fontWeight: 600 }}>Friday, January 31, 2025 at 2:00 PM EST</span></Text>
                <Text style={{ padding: '8px 0', color: '#666', fontSize: '14px', verticalAlign: 'top' }}>Provider: <span style={{ color: '#333', fontSize: '16px' }}>Dr. Sarah Johnson, MD</span></Text>
                <Text style={{ padding: '8px 0', color: '#666', fontSize: '14px', verticalAlign: 'top' }}>Visit Type: <span style={{ color: '#333', fontSize: '16px' }}>General Consultation</span></Text>
                <Text style={{ padding: '8px 0', color: '#666', fontSize: '14px', verticalAlign: 'top' }}>Duration: <span style={{ color: '#333', fontSize: '16px' }}>30 minutes</span></Text>
                <Text style={{ padding: '8px 0', color: '#666', fontSize: '14px', verticalAlign: 'top' }}>Appointment ID: <span style={{ color: '#333', fontSize: '16px' }}>APT-2024-001</span></Text>
              </div>

              {/* Reminder Notice */}
              <div style={{ backgroundColor: '#e8f4f8', borderLeft: '4px solid #4A72A0', padding: '20px', margin: '0 0 25px 0', textAlign: 'left' }}>
                <Text style={{ color: '#4A72A0', fontSize: '16px', margin: '0 0 10px', fontWeight: 600 }}>📅 Appointment Reminders</Text>
                <Text style={{ color: '#4a5568', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                  • You'll receive a reminder <strong>1 day before</strong> your appointment<br />
                  • A final reminder will be sent <strong>30 minutes before</strong> your visit<br />
                  • Each reminder will include your secure video link
                </Text>
              </div>

              <Button href="#" style={{ display: 'inline-block', backgroundColor: '#4A72A0', color: '#ffffff', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', padding: '12px 25px', borderRadius: '5px', marginRight: '15px' }}>View in Patient Portal</Button>
              <a href="#" style={{ display: 'inline-block', color: '#4A72A0', fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline' }}>Need to reschedule?</a>
            </Section>
          </Section>

          {/* Preparation Tips Section */}
          <Section style={{ backgroundColor: '#ffffff' }}>
            <Section style={{ padding: '30px 20px', textAlign: 'center' }}>
              <Text style={{ color: '#4A72A0', fontSize: '22px', margin: '0 0 20px 0' }}>Prepare for Your Visit</Text>
              <Section>
                <Section style={{ width: '33%', display: 'inline-block', padding: '10px' }}>
                  <Text style={{ fontSize: '32px', color: '#4A72A0' }}>💻</Text>
                  <Text style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '10px 0' }}>Test Technology</Text>
                  <Text style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5' }}>Ensure your camera, microphone, and internet are working properly.</Text>
                </Section>
                <Section style={{ width: '33%', display: 'inline-block', padding: '10px' }}>
                  <Text style={{ fontSize: '32px', color: '#4A72A0' }}>📋</Text>
                  <Text style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '10px 0' }}>Prepare Info</Text>
                  <Text style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5' }}>Have your insurance card, medication list, and questions ready.</Text>
                </Section>
                <Section style={{ width: '33%', display: 'inline-block', padding: '10px' }}>
                  <Text style={{ fontSize: '32px', color: '#4A72A0' }}>🏠</Text>
                  <Text style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '10px 0' }}>Quiet Space</Text>
                  <Text style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5' }}>Choose a private, well-lit area for your consultation.</Text>
                </Section>
              </Section>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: '#ffffff' }}>
            <Section style={{ padding: '25px 20px 20px 20px', textAlign: 'center' }}>
              <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD" width="200" style={{ display: 'block', margin: '0 auto' }} />
            </Section>
            <Section style={{ padding: '15px', textAlign: 'center' }}>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#3b5998', fontSize: '32px', textDecoration: 'none' }} title="Facebook">Facebook</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#0077b5', fontSize: '32px', textDecoration: 'none' }} title="LinkedIn">LinkedIn</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#1da1f2', fontSize: '32px', textDecoration: 'none' }} title="Twitter">Twitter</a>
              <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#ff0000', fontSize: '32px', textDecoration: 'none' }} title="YouTube">YouTube</a>
            </Section>
            <Section style={{ padding: '22px 20px', textAlign: 'center' }}>
              <Text style={{ fontSize: '12px', color: '#4a5568' }}>
                <strong>Need help with your appointment?</strong> Contact support at <a href="mailto:support@stationmd.com" style={{ color: '#4A72A0' }}>support@stationmd.com</a>
              </Text>
              <Text style={{ fontSize: '12px', color: '#4a5568' }}>If you need to reschedule or have technical questions, we're here to help.</Text>
              <Text style={{ fontSize: '12px', color: '#4a5568' }}>©2025 StationMD. All Rights Reserved.<br />515 Valley Street #203, Maplewood, NJ 07040</Text>
              <Text style={{ fontSize: '10px', color: '#718096' }}>This is an automated email regarding your confirmed appointment with StationMD.</Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
