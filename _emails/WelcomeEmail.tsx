import { Html, Head, Body, Container, Section, Text, Button, Img } from '@react-email/components';

export function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Helvetica,Arial,sans-serif', backgroundColor: '#f5f7fa', margin: '0', padding: '0' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          {/* Header Section */}
          <Section style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
            <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" style={{ display: 'block', margin: '0 auto 10px auto' }} />
          </Section>

          <Section style={{ padding: '20px 20px 40px 20px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
            <Text style={{ color: '#2d5a27', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>Welcome to StationMD!</Text>
            <Text style={{ color: '#2d5a27', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>Thank you for joining StationMD. We're excited to provide you with quality healthcare from the comfort of your home.</Text>
            <Button href="#" style={{ display: 'inline-block', backgroundColor: '#28a745', color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', padding: '15px 30px', borderRadius: '5px' }}>Get Started</Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: '25px 20px 20px 20px', textAlign: 'center' }}>
            <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD" width="200" style={{ display: 'block', margin: '0 auto' }} />
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
