export interface Prescription {
  id: string
  patientId: string
  providerId: string
  medication: {
    name: string
    strength: string
    form: string
    route: string
  }
  dosage: {
    amount: string
    frequency: string
    duration: string
    instructions: string
  }
  pharmacy: {
    id: string
    name: string
    address: string
    phone: string
    fax?: string
  }
  status: PrescriptionStatus
  isControlled: boolean
  controlledSubstanceSchedule?: "1" | "2" | "3" | "4" | "5"
  writtenAt: string
  sentAt?: string
  filledAt?: string
  expiresAt?: string
  notes?: string
  refills: number
  refillsRemaining: number
  lastRefillDate?: string
}

export type PrescriptionStatus = "draft" | "pending" | "sent" | "filled" | "partially-filled" | "cancelled" | "expired"

export interface MedicationSuggestion {
  id: string
  name: string
  commonDosages: string[]
  commonFrequencies: string[]
  commonDurations: string[]
  isControlled: boolean
  controlledSubstanceSchedule?: "1" | "2" | "3" | "4" | "5"
  commonInstructions: string[]
  forms: string[]
  strengths: string[]
  routes: string[]
  interactions: {
    medication: string
    severity: "mild" | "moderate" | "severe"
    description: string
  }[]
  sideEffects: string[]
  contraindications: string[]
}

export interface PrescriptionTemplate {
  id: string
  providerId: string
  name: string
  medication: {
    name: string
    strength: string
    form: string
    route: string
  }
  dosage: {
    amount: string
    frequency: string
    duration: string
    instructions: string
  }
  isControlled: boolean
  controlledSubstanceSchedule?: "1" | "2" | "3" | "4" | "5"
  refills: number
  notes?: string
  createdAt: string
  updatedAt: string
}
