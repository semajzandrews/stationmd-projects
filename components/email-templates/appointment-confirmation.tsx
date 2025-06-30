export function AppointmentConfirmationEmail() {
  return (
    <div style={{ 
      fontFamily: 'Helvetica,Arial,sans-serif',
      backgroundColor: '#f5f7fa',
      margin: '0',
      padding: '0'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f7fa' }}>
        {/* Hidden Preview Text */}
        <div style={{ 
          display: 'none', 
          fontSize: '1px', 
          color: '#ffffff', 
          lineHeight: '1px', 
          maxHeight: '0px', 
          maxWidth: '0px', 
          opacity: 0, 
          overflow: 'hidden' 
        }}>
          Your StationMD appointment is confirmed. We'll send reminders 1 day and 15 minutes before your visit.
        </div>

        {/* Header Section */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ padding: '20px 20px 10px 20px', textAlign: 'center' }}>
            {/* Logo */}
            <img 
              src="https://stationmd.com/wp-content/img/assets/logo.png" 
              alt="StationMD Logo" 
              width="250" 
              style={{ display: 'block', margin: '0 auto 10px auto' }} 
            />

            {/* Navigation */}
            <div style={{ textAlign: 'center' }}>
              <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>MY APPOINTMENTS</a>
              <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>PATIENT PORTAL</a>
              <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>GET CARE NOW</a>
              <a href="#" style={{ color: '#4A72A0', fontWeight: 700, fontSize: '12px', textDecoration: 'none', padding: '0 10px' }}>SUPPORT</a>
            </div>
          </div>

          {/* Confirmation Message */}
          <div style={{ padding: '20px 20px 40px 20px', backgroundColor: '#f8f9fc', textAlign: 'center' }}>
            <h1 style={{ color: '#4A72A0', fontSize: '28px', margin: '0 0 15px 0', fontWeight: 'bold' }}>
              Appointment Confirmed!
            </h1>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', margin: '0 0 25px 0' }}>
              Your telemedicine visit is all set. We're looking forward to providing you with exceptional care from the comfort of your home.
            </p>
            <a href="#" style={{ 
              display: 'inline-block', 
              backgroundColor: '#4A72A0', 
              color: '#ffffff', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              padding: '15px 30px', 
              borderRadius: '5px' 
            }}>
              Add to Calendar
            </a>
          </div>

          {/* Hero Image */}
          <div>
            <img 
              src="/email-templates/assets/images/stationmd-appointment-confirmation-1.jpg" 
              alt="Your StationMD appointment is confirmed" 
              width="600" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
        </div>

        {/* Appointment Details Section */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ padding: '30px 20px', textAlign: 'center' }}>
            <h2 style={{ color: '#4A72A0', fontSize: '22px', margin: '0 0 20px 0' }}>Appointment Details</h2>
            <div style={{ 
              backgroundColor: '#f8f9fc', 
              borderRadius: '8px', 
              padding: '25px', 
              margin: '0 0 25px 0', 
              textAlign: 'left' 
            }}>
              <p style={{ padding: '8px 0', color: '#666', fontSize: '14px', margin: '0' }}>
                Date & Time: <span style={{ color: '#333', fontSize: '16px', fontWeight: 600 }}>Friday, January 31, 2025 at 2:00 PM EST</span>
              </p>
              <p style={{ padding: '8px 0', color: '#666', fontSize: '14px', margin: '0' }}>
                Provider: <span style={{ color: '#333', fontSize: '16px' }}>Dr. Sarah Johnson, MD</span>
              </p>
              <p style={{ padding: '8px 0', color: '#666', fontSize: '14px', margin: '0' }}>
                Visit Type: <span style={{ color: '#333', fontSize: '16px' }}>General Consultation</span>
              </p>
              <p style={{ padding: '8px 0', color: '#666', fontSize: '14px', margin: '0' }}>
                Duration: <span style={{ color: '#333', fontSize: '16px' }}>30 minutes</span>
              </p>
              <p style={{ padding: '8px 0', color: '#666', fontSize: '14px', margin: '0' }}>
                Appointment ID: <span style={{ color: '#333', fontSize: '16px' }}>APT-2024-001</span>
              </p>
            </div>

            {/* Reminder Notice */}
            <div style={{ 
              backgroundColor: '#e8f4f8', 
              borderLeft: '4px solid #4A72A0', 
              padding: '20px', 
              margin: '0 0 25px 0', 
              textAlign: 'left' 
            }}>
              <h3 style={{ color: '#4A72A0', fontSize: '16px', margin: '0 0 10px', fontWeight: 600 }}>
                📅 Appointment Reminders
              </h3>
              <p style={{ color: '#4a5568', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                • You'll receive a reminder <strong>1 day before</strong> your appointment<br />
                • A final reminder will be sent <strong>15 minutes before</strong> your visit<br />
                • Each reminder will include your secure video link
              </p>
            </div>

            <a href="#" style={{ 
              display: 'inline-block', 
              backgroundColor: '#4A72A0', 
              color: '#ffffff', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              padding: '12px 25px', 
              borderRadius: '5px', 
              marginRight: '15px' 
            }}>
              View in Patient Portal
            </a>
            <a href="#" style={{ 
              display: 'inline-block', 
              color: '#4A72A0', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              textDecoration: 'underline' 
            }}>
              Need to reschedule?
            </a>
          </div>
        </div>

        {/* Preparation Tips Section */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ padding: '30px 20px', textAlign: 'center' }}>
            <h2 style={{ color: '#4A72A0', fontSize: '22px', margin: '0 0 20px 0' }}>Prepare for Your Visit</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ width: '33%', display: 'inline-block', padding: '10px', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '32px', color: '#4A72A0', marginRight: '10px' }}>💻</div>
                  <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '0' }}>Test Technology</h3>
                </div>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5', textAlign: 'center' }}>
                  Ensure your camera, microphone, and internet are working properly.
                </p>
              </div>
              <div style={{ width: '33%', display: 'inline-block', padding: '10px', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '32px', color: '#4A72A0', marginRight: '10px' }}>📋</div>
                  <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '0' }}>Prepare Info</h3>
                </div>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5', textAlign: 'center' }}>
                  Have your insurance card, medication list, and questions ready.
                </p>
              </div>
              <div style={{ width: '33%', display: 'inline-block', padding: '10px', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <div style={{ fontSize: '32px', color: '#4A72A0', marginRight: '10px' }}>🏠</div>
                  <h3 style={{ color: '#3A5A6B', fontWeight: 'bold', fontSize: '16px', margin: '0' }}>Quiet Space</h3>
                </div>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.5', textAlign: 'center' }}>
                  Choose a private, well-lit area for your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ padding: '25px 20px 20px 20px', textAlign: 'center' }}>
            <img 
              src="https://stationmd.com/wp-content/img/assets/logo.png" 
              alt="StationMD" 
              width="200" 
              style={{ display: 'block', margin: '0 auto' }} 
            />
          </div>
          <div style={{ padding: '15px', textAlign: 'center' }}>
            <a href="#" style={{ 
              display: 'inline-block', 
              margin: '0 12px', 
              textDecoration: 'none' 
            }} title="Facebook">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b5998">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" style={{ 
              display: 'inline-block', 
              margin: '0 12px', 
              textDecoration: 'none' 
            }} title="LinkedIn">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" style={{ 
              display: 'inline-block', 
              margin: '0 12px', 
              textDecoration: 'none' 
            }} title="Twitter">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#1da1f2">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" style={{ 
              display: 'inline-block', 
              margin: '0 12px', 
              textDecoration: 'none' 
            }} title="YouTube">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#ff0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div style={{ padding: '22px 20px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 10px 0' }}>
              <strong>Need help with your appointment?</strong> Contact support at{' '}
              <a href="mailto:support@stationmd.com" style={{ color: '#4A72A0' }}>support@stationmd.com</a>
            </p>
            <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 10px 0' }}>
              If you need to reschedule or have technical questions, we're here to help.
            </p>
            <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 10px 0' }}>
              ©2025 StationMD. All Rights Reserved.<br />
              515 Valley Street #203, Maplewood, NJ 07040
            </p>
            <p style={{ fontSize: '10px', color: '#718096', margin: '0' }}>
              This is an automated email regarding your confirmed appointment with StationMD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 