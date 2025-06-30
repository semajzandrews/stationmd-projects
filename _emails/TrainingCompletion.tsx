import { Html, Head, Body, Container, Section, Text, Button, Img } from '@react-email/components';

export function TrainingCompletion() {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Helvetica,Arial,sans-serif', backgroundColor: '#f5f7fa', margin: '0', padding: '0' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          {/* Header Section */}
          <Section style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
            <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" style={{ display: 'block', margin: '0 auto 10px auto' }} />
          </Section>

          <Section style={{ padding: '20px 20px 40px 20px', backgroundColor: '#f0fff4', textAlign: 'center' }}>
            <Text style={{ color: '#22543d', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>Training Complete!</Text>
            <Text style={{ color: '#22543d', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>Congratulations! You have successfully completed your training module.</Text>
            <Button href="#" style={{ display: 'inline-block', backgroundColor: '#38a169', color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', padding: '15px 30px', borderRadius: '5px' }}>Download Certificate</Button>
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
