"use client"

import { ScreenCarousel } from "@/components/screen-carousel"
import { LoginScreen } from "@/screens/login-screen"
import { PhysicianDashboard } from "@/screens/physician-dashboard"
import { PatientQueue } from "@/screens/patient-queue"
import { TelemedicineCall } from "@/screens/telemedicine-call"
import { PrescriptionScreen } from "@/screens/prescription-screen"
import { PatientChartScreen } from "@/screens/patient-chart-screen"
import { FacilityManagementScreen } from "@/screens/facility-management-screen"
import { UserManagementScreen } from "@/screens/user-management-screen"
import { AppointmentsSchedulingScreen } from "@/screens/appointments-scheduling-screen"
import { AnalyticsReportingScreen } from "@/screens/analytics-reporting-screen"
import { BillingClaimsScreen } from "@/screens/billing-claims-screen"
import { SecureMessagingScreen } from "@/screens/secure-messaging-screen"
import { PatientEducationScreen } from "@/screens/patient-education-screen"
import { DeviceManagementScreen } from "@/screens/device-management-screen"
import { AuditLogsScreen } from "@/screens/audit-logs-screen"
import { ProviderOnboardingScreen } from "@/screens/provider-onboarding-screen"
import { PatientPortalScreen } from "@/screens/patient-portal-screen"
import { ClinicalGuidelinesScreen } from "@/screens/clinical-guidelines-screen"
import { IntegrationManagementScreen } from "@/screens/integration-management-screen"
import { VirtualWaitingRoomScreen } from "@/screens/virtual-waiting-room-screen"
import { RealtimeOperationalDashboardScreen } from "@/screens/realtime-operational-dashboard-screen"
import { PersonalizedCarePlansScreen } from "@/screens/personalized-care-plans-screen"
import { RemotePatientMonitoringScreen } from "@/screens/remote-patient-monitoring-screen"
import { SecureDataExchangeScreen } from "@/screens/secure-data-exchange-screen"
import { WorkflowBuilderScreen } from "@/screens/workflow-builder-screen"
import { DesignSystemShowcaseScreen } from "@/screens/design-system-showcase-screen"
import Link from "next/link"

const screens = [
  {
    id: "design-system-showcase",
    title: "Design System Showcase",
    description: "A comprehensive overview of UI components and styles.",
    component: DesignSystemShowcaseScreen,
    category: "Design System",
  },
  {
    id: "workflow-builder",
    title: "Customizable Telehealth Workflow Builder",
    description: "Design and automate patient journeys and clinical processes with ease.",
    component: WorkflowBuilderScreen,
    category: "Administration",
  },
  {
    id: "telemedicine-call",
    title: "Telemedicine Call Interface",
    description: "Video call interface with patient data sidebar and real-time chat",
    component: TelemedicineCall,
    category: "Telemedicine",
  },
  {
    id: "realtime-operational-dashboard",
    title: "Real-time Operational Dashboard",
    description: "Live overview of platform performance, patient flow, and resource utilization",
    component: RealtimeOperationalDashboardScreen,
    category: "Operations",
  },
  {
    id: "remote-patient-monitoring",
    title: "Remote Patient Monitoring (RPM) Dashboard",
    description: "Visualize and manage data from integrated remote health devices",
    component: RemotePatientMonitoringScreen,
    category: "Device Management",
  },
  {
    id: "personalized-care-plans",
    title: "Personalized Patient Care Plans",
    description: "Create, assign, and track individualized care plans for patients",
    component: PersonalizedCarePlansScreen,
    category: "Patient Engagement",
  },
  {
    id: "patient-portal",
    title: "Patient Portal (Patient View)",
    description: "The patient-facing interface for appointments, records, and communication",
    component: PatientPortalScreen,
    category: "Patient Engagement",
  },
  {
    id: "physician-dashboard",
    title: "Physician Dashboard",
    description: "Comprehensive overview for physicians with patient queue, stats, and quick actions",
    component: PhysicianDashboard,
    category: "Dashboard",
  },
  {
    id: "patient-queue",
    title: "Patient Queue & Triage",
    description: "Real-time patient queue with filtering, sorting, and vital signs overview",
    component: PatientQueue,
    category: "Patient Management",
  },
  {
    id: "secure-messaging",
    title: "Secure Messaging",
    description: "HIPAA-compliant internal chat for healthcare professionals",
    component: SecureMessagingScreen,
    category: "Communication",
  },
  {
    id: "prescription",
    title: "DxScript Integration",
    description: "Prescription writing with drug interaction checks and pharmacy integration",
    component: PrescriptionScreen,
    category: "Prescriptions",
  },
  {
    id: "patient-chart",
    title: "Patient Chart & Profile",
    description: "Detailed view of patient medical history, vitals, medications, and notes",
    component: PatientChartScreen,
    category: "Patient Management",
  },
  {
    id: "appointments-scheduling",
    title: "Appointments & Scheduling",
    description: "Calendar-based system for managing telemedicine appointments",
    component: AppointmentsSchedulingScreen,
    category: "Workflow",
  },
  {
    id: "patient-education",
    title: "Patient Education Library",
    description: "Resource hub for patients with trusted health information and videos",
    component: PatientEducationScreen,
    category: "Patient Engagement",
  },
  {
    id: "device-management",
    title: "Connected Devices Management",
    description: "Monitor and manage integrated telehealth devices for remote care",
    component: DeviceManagementScreen,
    category: "Device Management",
  },
  {
    id: "virtual-waiting-room",
    title: "Virtual Waiting Room Management",
    description: "Customize the patient's experience in the virtual waiting room",
    component: VirtualWaitingRoomScreen,
    category: "Telemedicine",
  },
  {
    id: "billing-claims",
    title: "Billing & Claims",
    description: "Manage patient billing, insurance claims, and payment processing",
    component: BillingClaimsScreen,
    category: "Financial",
  },
  {
    id: "audit-logs",
    title: "Audit Logs & Activity Feed",
    description: "Comprehensive logs of all user activities and system events for compliance",
    component: AuditLogsScreen,
    category: "Security & Compliance",
  },
  {
    id: "secure-data-exchange",
    title: "Secure Data Exchange Portal",
    description: "HIPAA-compliant portal for seamless and secure sharing of patient data",
    component: SecureDataExchangeScreen,
    category: "Security & Compliance",
  },
  {
    id: "clinical-guidelines",
    title: "Clinical Guidelines & Protocols",
    description: "Searchable database of internal clinical best practices and emergency procedures",
    component: ClinicalGuidelinesScreen,
    category: "Clinical Support",
  },
  {
    id: "provider-onboarding",
    title: "Provider Onboarding & Credentialing",
    description: "Workflow for managing new healthcare provider applications and credentials",
    component: ProviderOnboardingScreen,
    category: "Administration",
  },
  {
    id: "integration-management",
    title: "Integration Management",
    description: "Configure and monitor connections with external EHRs, labs, and billing systems",
    component: IntegrationManagementScreen,
    category: "Administration",
  },
  {
    id: "user-management",
    title: "User Management",
    description: "Admin panel for managing platform users, roles, and permissions",
    component: UserManagementScreen,
    category: "Administration",
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Admin interface for managing healthcare facilities and their details",
    component: FacilityManagementScreen,
    category: "Administration",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "In-depth insights into platform performance, call volume, and patient trends",
    component: AnalyticsReportingScreen,
    category: "Reporting",
  },
  {
    id: "login",
    title: "Login & Authentication",
    description: "Secure role-based login with biometric support and HIPAA compliance",
    component: LoginScreen,
    category: "Authentication",
  },
]

export default function StationConnect() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Back to Projects Button */}
      <Link href="/" className="fixed top-5 right-5 z-[1000] bg-gradient-to-br from-[#4A72A0] to-[#5a82b0] text-white py-3 px-5 rounded-[25px] flex items-center gap-2 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#3a5f8a] hover:to-[#4a72a0] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md no-underline">
        <svg className="back-icon w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to Projects</span>
      </Link>

      <ScreenCarousel screens={screens} />
    </main>
  )
}