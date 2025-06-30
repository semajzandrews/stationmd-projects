export function MissedAppointmentEmail() {
  return (
    <div style={{ backgroundColor: '#f5f7fa' }}>
      <div 
        style={{
          display: 'none',
          fontSize: '1px',
          color: '#ffffff',
          lineHeight: '1px',
          maxHeight: '0px',
          maxWidth: '0px',
          opacity: 0,
          overflow: 'hidden'
        }}
      >
        It looks like you missed your appointment. Let's get you rescheduled.
      </div>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f7fa' }}>
        {/* Header Section */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', padding: '20px 20px 10px 20px' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'inline-block', marginBottom: '10px' }}>
                  <img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" />
                </a>
                
                {/* Navigation - Desktop */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="desktop-only">
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '10px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px', textDecoration: 'none' }}>MY APPOINTMENTS</a>
                      </td>
                      <td style={{ padding: '10px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px', textDecoration: 'none' }}>PATIENT PORTAL</a>
                      </td>
                      <td style={{ padding: '10px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px', textDecoration: 'none' }}>GET CARE NOW</a>
                      </td>
                      <td style={{ padding: '10px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px', textDecoration: 'none' }}>SUPPORT</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Navigation - Mobile */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="mobile-only">
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '5px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px', textDecoration: 'none' }}>MY APPOINTMENTS</a>
                      </td>
                      <td style={{ padding: '5px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px', textDecoration: 'none' }}>PATIENT PORTAL</a>
                      </td>
                      <td style={{ padding: '5px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px', textDecoration: 'none' }}>GET CARE NOW</a>
                      </td>
                      <td style={{ padding: '5px' }}>
                        <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px', textDecoration: 'none' }}>SUPPORT</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            
            {/* Missed Appointment Message */}
            <tr>
              <td style={{ padding: '20px 20px 40px 20px', backgroundColor: '#f8f9fc', textAlign: 'center', fontFamily: 'Helvetica,Arial' }}>
                <h1 style={{ color: '#4A72A0', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>We Missed You!</h1>
                <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>We had an appointment scheduled for you, but it seems we missed each other. We understand that things come up. Your health is important to us, and we want to make sure you get the care you need.</p>
                <a href="#" style={{ display: 'inline-block', backgroundColor: '#4A72A0', color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Helvetica,Arial', padding: '15px 30px', borderRadius: '5px' }}>Reschedule Your Appointment</a>
              </td>
            </tr>

            {/* Hero Image */}
            <tr>
              <td>
                <img src="/email-templates/assets/images/stationmd-missed-appointment-1.jpg" alt="Reschedule your StationMD appointment" width="600" style={{ width: '100%', display: 'block' }} />
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Why Reschedule? Section */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', padding: '30px 20px' }}>
                <h2 style={{ color: '#4A72A0', fontFamily: 'Helvetica,Arial', fontSize: '22px', margin: '0 0 20px 0' }}>Your Health Matters</h2>
                <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td width="33%" style={{ textAlign: 'center', padding: '10px' }}>
                        <div style={{ fontSize: '32px', color: '#4A72A0' }}>👩‍⚕️</div>
                        <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '16px', margin: '10px 0' }}>Expert Care</h3>
                        <p style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.5' }}>Access our specialized doctors from the comfort of your home.</p>
                      </td>
                      <td width="33%" style={{ textAlign: 'center', padding: '10px' }}>
                        <div style={{ fontSize: '32px', color: '#4A72A0' }}>⏰</div>
                        <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '16px', margin: '10px 0' }}>Continuity</h3>
                        <p style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.5' }}>Regular check-ins are key to managing your health effectively.</p>
                      </td>
                      <td width="33%" style={{ textAlign: 'center', padding: '10px' }}>
                        <div style={{ fontSize: '32px', color: '#4A72A0' }}>❤️</div>
                        <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '16px', margin: '10px 0' }}>Peace of Mind</h3>
                        <p style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.5' }}>We are here to support you on your health journey.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', padding: '25px 15px' }}>
                <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#3b5998', fontSize: '32px', textDecoration: 'none' }} title="Facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#0077b5', fontSize: '32px', textDecoration: 'none' }} title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#1da1f2', fontSize: '32px', textDecoration: 'none' }} title="Twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#" style={{ display: 'inline-block', margin: '0 12px', color: '#ff0000', fontSize: '32px', textDecoration: 'none' }} title="YouTube">
                  <i className="fab fa-youtube-square"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center', padding: '15px 20px', fontFamily: 'Helvetica,Arial', fontSize: '12px', color: '#4a5568' }}>
                <p><strong>Need help rescheduling?</strong> Contact support at <a href="mailto:support@stationmd.com" style={{ color: '#4A72A0' }}>support@stationmd.com</a></p>
                <p>If you believe you received this email in error, please disregard it.</p>
                <p>©2025 StationMD. All Rights Reserved.<br />515 Valley Street #203, Maplewood, NJ 07040</p>
                <p style={{ fontSize: '10px', color: '#718096' }}>This is an automated email regarding your missed appointment with StationMD.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <style jsx>{`
        .mobile-only { display: none; }
        
        @media only screen and (max-width: 480px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .kl-column { display: block !important; width: 100% !important; }
          .content-padding { padding-left: 18px !important; padding-right: 18px !important; }
        }
      `}</style>
    </div>
  );
}