export function WelcomeEmail() {
  return (
    <>
      <div style={{ display: 'none', fontSize: '1px', color: '#ffffff', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
        Welcome to StationMD! Complete your onboarding and access your employee resources.
      </div>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f7fa' }}>
        {/* Header Section */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: '20px 20px 10px 20px' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'inline-block', marginBottom: '10px' }}>
                  <img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" />
                </a>
                
                {/* Navigation */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="desktop-only">
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>EMPLOYEE PORTAL</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>TRAINING RESOURCES</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>BENEFITS</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>COMPANY CULTURE</a></td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Mobile Navigation */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="mobile-only">
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>PORTAL</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>TRAINING</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>BENEFITS</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>CULTURE</a></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            
            {/* Welcome Message */}
            <tr>
              <td style={{ padding: '20px', backgroundColor: '#f8f9fc', textAlign: 'center', fontFamily: 'Helvetica,Arial' }}>
                <h1 style={{ color: '#4A72A0', fontSize: '24px', margin: '0 0 10px 0' }}>Welcome to the StationMD Team!</h1>
                <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.5', margin: '0' }}>You're now part of a mission-driven team dedicated to providing exceptional healthcare to individuals with intellectual and developmental disabilities.</p>
              </td>
            </tr>
            
            {/* Hero Images with Text Overlays */}
            <tr>
              <td style={{ position: 'relative' }}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <img src="/email-templates/assets/images/stationmd-telemedicine-welcome-email-1.jpg" alt="StationMD Telemedicine Services" width="600" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.7)', padding: '20px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Helvetica,Arial' }}>24/7 Specialized Telehealth Care</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ position: 'relative' }}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <img src="/email-templates/assets/images/stationmd-telemedicine-welcome-email-3.jpg" alt="Our Mission in Action - Telehealth Care" width="600" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.7)', padding: '20px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Helvetica,Arial' }}>Serving I/DD Communities</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ position: 'relative' }}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <img src="/email-templates/assets/images/stationmd-telemedicine-welcome-email-2.jpg" alt="Access Employee Portal" width="600" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.7)', padding: '20px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Helvetica,Arial' }}>Access Your Employee Portal</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ position: 'relative' }}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <img src="/email-templates/assets/images/stationmd-telemedicine-welcome-email-4.jpg" alt="Complete Your Onboarding Checklist" width="600" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.7)', padding: '20px', textAlign: 'center' }}>
                    <a href="#" style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Helvetica,Arial' }}>Complete Your Onboarding</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Employee Resources Grid */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td width="50%" style={{ padding: '9px 18px', backgroundColor: '#4A72A0' }}>
                <a href="#" style={{ display: 'block', color: '#FFF', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '16px', textAlign: 'center', border: '2px solid #FFFFFF', padding: '15px 0' }}>EMPLOYEE HANDBOOK</a>
              </td>
              <td width="50%" style={{ padding: '9px 18px', backgroundColor: '#4A72A0' }}>
                <a href="#" style={{ display: 'block', color: '#FFF', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '16px', textAlign: 'center', border: '2px solid #FFFFFF', padding: '15px 0' }}>BENEFITS PORTAL</a>
              </td>
            </tr>
            <tr>
              <td width="50%" style={{ padding: '9px 18px', backgroundColor: '#4A72A0' }}>
                <a href="#" style={{ display: 'block', color: '#FFF', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '16px', textAlign: 'center', border: '2px solid #FFFFFF', padding: '15px 0' }}>TRAINING MODULES</a>
              </td>
              <td width="50%" style={{ padding: '9px 18px', backgroundColor: '#4A72A0' }}>
                <a href="#" style={{ display: 'block', color: '#FFF', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '16px', textAlign: 'center', border: '2px solid #FFFFFF', padding: '15px 0' }}>IT SETUP GUIDE</a>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Our Impact Section */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#f8f9fc' }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: '30px 20px' }}>
                <h2 style={{ color: '#4A72A0', fontFamily: 'Helvetica,Arial', fontSize: '20px', margin: '0 0 15px 0' }}>Our Impact</h2>
                <div style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
                  <div style={{ color: '#4A72A0', fontSize: '36px', fontWeight: 'bold', fontFamily: 'Helvetica,Arial' }}>90%</div>
                  <div style={{ color: '#4a5568', fontSize: '14px', fontFamily: 'Helvetica,Arial' }}>of calls resolved without hospital visits</div>
                </div>
                <div style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
                  <div style={{ color: '#4A72A0', fontSize: '36px', fontWeight: 'bold', fontFamily: 'Helvetica,Arial' }}>100K+</div>
                  <div style={{ color: '#4a5568', fontSize: '14px', fontFamily: 'Helvetica,Arial' }}>telehealth visits completed</div>
                </div>
                <div style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
                  <div style={{ color: '#4A72A0', fontSize: '36px', fontWeight: 'bold', fontFamily: 'Helvetica,Arial' }}>24/7</div>
                  <div style={{ color: '#4a5568', fontSize: '14px', fontFamily: 'Helvetica,Arial' }}>specialized care available</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Company Values */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: '30px 20px' }}>
                <h2 style={{ color: '#4A72A0', fontFamily: 'Helvetica,Arial', fontSize: '20px', margin: '0 0 20px 0' }}>Our Core Values</h2>
                <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td width="25%" align="center" style={{ padding: '10px' }}>
                        <div style={{ backgroundColor: '#f8f9fc', color: '#ffffff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '24px' }}>💛</div>
                        <div style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '14px' }}>COMPASSION</div>
                      </td>
                      <td width="25%" align="center" style={{ padding: '10px' }}>
                        <div style={{ backgroundColor: '#f8f9fc', color: '#ffffff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '24px' }}>⭐</div>
                        <div style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '14px' }}>EXCELLENCE</div>
                      </td>
                      <td width="25%" align="center" style={{ padding: '10px' }}>
                        <div style={{ backgroundColor: '#f8f9fc', color: '#ffffff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '24px' }}>💡</div>
                        <div style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '14px' }}>INNOVATION</div>
                      </td>
                      <td width="25%" align="center" style={{ padding: '10px' }}>
                        <div style={{ backgroundColor: '#f8f9fc', color: '#ffffff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '24px' }}>🤝</div>
                        <div style={{ color: '#3A5A6B', fontWeight: 'bold', fontFamily: 'Helvetica,Arial', fontSize: '14px' }}>ADVOCACY</div>
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
              <td align="center" style={{ padding: '25px 9px 20px 9px' }}>
                <a href="#"><img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD" width="200" /></a>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ padding: '15px' }}>
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
              <td align="center" style={{ padding: '22px 20px', fontFamily: 'Helvetica,Arial', fontSize: '12px', color: '#4a5568' }}>
                <p><strong>Need help getting started?</strong> Contact HR at <a href="mailto:hr@stationmd.com" style={{ color: '#4A72A0' }}>hr@stationmd.com</a></p>
                <p><strong>IT Support:</strong> <a href="mailto:it@stationmd.com" style={{ color: '#4A72A0' }}>it@stationmd.com</a> | <strong>Employee Portal:</strong> <a href="#" style={{ color: '#4A72A0' }}>portal.stationmd.com</a></p>
                <p><strong>HIPAA Compliance:</strong> <a href="#" style={{ color: '#4A72A0' }}>View Privacy Guidelines</a> | <strong>Employee Handbook:</strong> <a href="#" style={{ color: '#4A72A0' }}>Download PDF</a></p>
                <p>If you have questions about your benefits or onboarding, <a href="#" style={{ color: '#4A72A0' }}>click here to contact HR</a>.</p>
                <p>©2025 StationMD. All Rights Reserved.<br />515 Valley Street #203, Maplewood, NJ 07040</p>
                <p style={{ fontSize: '10px', color: '#718096' }}>This is an automated email regarding your employee onboarding with StationMD.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media only screen and (max-width: 480px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .kl-column { display: block !important; width: 100% !important; }
          .content-padding { padding-left: 18px !important; padding-right: 18px !important; }
        }
        .mobile-only { display: none; }
        a { color: #4A72A0; font-weight: bold; text-decoration: none; }
        table, td { border-collapse: collapse; }
        img { border: 0; line-height: 100%; outline: none; text-decoration: none; }
      `}</style>
    </>
  );
} 