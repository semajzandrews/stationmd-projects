export function EmployeeChecklistEmail() {
  return (
    <>
      <div style={{ display: 'none', fontSize: '1px', color: '#ffffff', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
        Complete your StationMD onboarding checklist - Your first week essentials
      </div>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f7fa' }}>
        {/* Header */}
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#ffffff' }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: '20px 20px 10px 20px' }}>
                <img src="https://stationmd.com/wp-content/img/assets/logo.png" alt="StationMD Logo" width="250" />
                
                {/* Navigation */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="desktop-only" style={{ marginTop: '15px' }}>
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>EMPLOYEE PORTAL</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>TRAINING RESOURCES</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>HR SUPPORT</a></td>
                      <td style={{ padding: '10px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '12px' }}>CHECKLIST TRACKER</a></td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Mobile Navigation */}
                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="mobile-only" style={{ marginTop: '15px' }}>
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>PORTAL</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>TRAINING</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>HR SUPPORT</a></td>
                      <td style={{ padding: '5px' }}><a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontFamily: 'Helvetica,Arial', fontSize: '9px' }}>CHECKLIST</a></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            
            {/* Hero Section */}
            <tr>
              <td style={{ padding: '0' }}>
                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Healthcare Team Collaboration" width="600" style={{ width: '100%', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(74,114,160,0.9)', padding: '30px', textAlign: 'center' }}>
                    <h1 style={{ color: '#ffffff', fontSize: '24px', margin: '0', fontFamily: 'Helvetica,Arial' }}>Your First Week Checklist</h1>
                    <p style={{ color: '#ffffff', fontSize: '16px', margin: '10px 0 0 0', fontFamily: 'Helvetica,Arial' }}>Essential steps to get you started at StationMD</p>
                  </div>
                </div>
              </td>
            </tr>
            
            {/* Checklist Items */}
            <tr>
              <td style={{ padding: '30px 20px', backgroundColor: '#ffffff' }}>
                <h2 style={{ color: '#4A72A0', fontFamily: 'Helvetica,Arial', fontSize: '20px', margin: '0 0 20px 0', textAlign: 'center' }}>Complete These Items</h2>
                
                {/* Day 1 */}
                <div style={{ backgroundColor: '#f8f9fc', padding: '20px', marginBottom: '15px', borderLeft: '4px solid #4A72A0' }}>
                  <h3 style={{ color: '#4A72A0', fontSize: '16px', margin: '0 0 10px 0', fontFamily: 'Helvetica,Arial' }}>📅 Day 1 - Getting Started</h3>
                  <ul style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Complete HR paperwork and I-9 verification</li>
                    <li>Receive your StationMD equipment and credentials</li>
                    <li>Set up your employee portal account</li>
                    <li>Meet your direct supervisor and team</li>
                  </ul>
                </div>
                
                {/* Week 1 */}
                <div style={{ backgroundColor: '#f8f9fc', padding: '20px', marginBottom: '15px', borderLeft: '4px solid #4A72A0' }}>
                  <h3 style={{ color: '#4A72A0', fontSize: '16px', margin: '0 0 10px 0', fontFamily: 'Helvetica,Arial' }}>📚 Week 1 - Training & Compliance</h3>
                  <ul style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Complete HIPAA compliance training</li>
                    <li>Finish I/DD care specialization modules</li>
                    <li>Shadow experienced team members</li>
                    <li>Review emergency protocols</li>
                  </ul>
                </div>
                
                {/* Month 1 */}
                <div style={{ backgroundColor: '#f8f9fc', padding: '20px', marginBottom: '15px', borderLeft: '4px solid #4A72A0' }}>
                  <h3 style={{ color: '#4A72A0', fontSize: '16px', margin: '0 0 10px 0', fontFamily: 'Helvetica,Arial' }}>🎯 Month 1 - Integration</h3>
                  <ul style={{ color: '#4a5568', fontFamily: 'Helvetica,Arial', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Complete first supervised patient interactions</li>
                    <li>Attend team meetings and case reviews</li>
                    <li>Schedule 30-day check-in with HR</li>
                    <li>Join StationMD community initiatives</li>
                  </ul>
                </div>
              </td>
            </tr>
            
            {/* CTA Buttons */}
            <tr>
              <td style={{ padding: '20px', backgroundColor: '#4A72A0' }}>
                <table width="100%" border={0} cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td width="50%" style={{ padding: '10px' }}>
                        <a href="#" style={{ display: 'block', backgroundColor: '#ffffff', color: '#4A72A0', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '14px', textAlign: 'center', padding: '15px', borderRadius: '5px' }}>ACCESS TRAINING PORTAL</a>
                      </td>
                      <td width="50%" style={{ padding: '10px' }}>
                        <a href="#" style={{ display: 'block', backgroundColor: '#ffffff', color: '#4A72A0', fontWeight: 700, textDecoration: 'none', fontFamily: 'Helvetica,Arial', fontSize: '14px', textAlign: 'center', padding: '15px', borderRadius: '5px' }}>CONTACT HR SUPPORT</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            
            {/* Footer */}
            <tr>
              <td align="center" style={{ padding: '30px 20px', fontFamily: 'Helvetica,Arial', fontSize: '12px', color: '#4a5568', backgroundColor: '#ffffff' }}>
                <p><strong>Questions?</strong> Contact HR at <a href="mailto:hr@stationmd.com" style={{ color: '#4A72A0' }}>hr@stationmd.com</a></p>
                <p>©2025 StationMD. All Rights Reserved.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media only screen and (max-width: 480px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .content-padding { padding-left: 18px !important; padding-right: 18px !important; }
        }
        .mobile-only { display: none; }
        a { color: #4A72A0; font-weight: bold; text-decoration: none; }
        table, td { border-collapse: collapse; }
        img { border: 0; line-height: 100%; outline: none; text-decoration: none; }
      `}</style>
    </>
  )
} 