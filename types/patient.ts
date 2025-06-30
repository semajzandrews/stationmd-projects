export interface Patient {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: "male" | "female" | "other" | "unknown"
  photo?: string
  mrn?: string // Medical Record Number
  facilityId: string
  primaryConcern?: string
  status: PatientStatus
  urgency: PatientUrgency
  vitals?: Vitals
  allergies?: Allergy[]
  medications?: Medication[]
  conditions?: MedicalCondition[]
  notes?: PatientNote[]
  visits?: Visit[]
  createdAt: string
  updatedAt: string
  alerts?: PatientAlert[]
}

export type PatientStatus = "waiting" | "in-progress" | "completed" | "cancelled" | "no-show"

export type PatientUrgency = "low" | "medium" | "high" | "emergency"

export interface Vitals {
  temperature?: {
    value: number
    unit: "F" | "C"
    takenAt: string
  }
  bloodPressure?: {
    systolic: number
    diastolic: number
    takenAt: string
  }
  heartRate?: {
    value: number
    takenAt: string
  }
  respiratoryRate?: {
    value: number
    takenAt: string
  }
  oxygenSaturation?: {
    value: number
    takenAt: string
  }
  pain?: {
    value: number // 0-10
    takenAt: string
  }
  weight?: {
    value: number
    unit: "kg" | "lb"
    takenAt: string
  }
  height?: {
    value: number
    unit: "cm" | "in"
    takenAt: string
  }
  glucoseLevel?: {
    value: number
    takenAt: string
  }
}

export interface Allergy {
  id: string
  name: string
  reaction: string
  severity: "mild" | "moderate" | "severe"
  status: "active" | "inactive"
  reportedAt: string
}

export interface Medication {
  id: string
  name: string
  dosage: string
  frequency: string
  route: string
  startDate: string
  endDate?: string
  prescribedBy?: string
  status: "active" | "discontinued" | "completed"
  notes?: string
}

export interface MedicalCondition {
  id: string
  name: string
  status: "active" | "resolved" | "chronic"
  diagnosedAt: string
  notes?: string
}

export interface PatientNote {
  id: string
  content: string
  createdBy: string
  createdAt: string
  updatedAt?: string
  type: "general" | "assessment" | "plan" | "followup"
  isPrivate: boolean
}

export interface Visit {
  id: string
  patientId: string
  providerId: string
  facilityId: string
  startTime: string
  endTime?: string
  status: "scheduled" | "in-progress" | "completed" | "cancelled" | "no-show"
  type: "initial" | "follow-up" | "urgent" | "routine"
  chiefComplaint?: string
  diagnosis?: string[]
  notes?: string
  prescriptions?: string[]
  followUpRecommended?: boolean
  followUpTimeframe?: string
}

export interface PatientAlert {
  id: string
  type: "DNR" | "fall-risk" | "allergy" | "medication" | "custom"
  description: string
  severity: "info" | "warning" | "critical"
  active: boolean
  createdAt: string
  expiresAt?: string
}

export interface PatientQueue {
  patients: Patient[]
  totalWaiting: number
  averageWaitTime: number // in minutes
}
