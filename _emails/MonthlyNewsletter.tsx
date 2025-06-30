import { Html, Head, Body, Container, Section, Text, Img } from '@react-email/components';

export function MonthlyNewsletter() {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Helvetica,Arial,sans-serif', backgroundColor: '#f5f7fa', margin: '0', padding: '0' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
          {/* Header Section */}
          <Section style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
            <Img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" style={{ display: 'block', margin: '0 auto 10px auto' }} />
          </Section>

          <Section style={{ padding: '20px 20px 40px 20px', backgroundColor: '#f8f9fc', textAlign: 'center' }}>
            <Text style={{ color: '#4A72A0', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>Monthly Health Newsletter</Text>
            <Text style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>Stay informed with the latest health tips and updates from StationMD.</Text>
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
