export interface Facility {
  id: string
  name: string
  type: FacilityType
  address: Address
  phone: string
  email?: string
  contactPerson?: {
    name: string
    role: string
    phone: string
    email?: string
  }
  preferredPharmacies?: Pharmacy[]
  status: "active" | "inactive"
  timezone: string
  operatingHours?: {
    start: string
    end: string
    days: number[]
  }[]
  notes?: string
  createdAt: string
  updatedAt: string
}

export type FacilityType = "group-home" | "skilled-nursing" | "assisted-living" | "hospital" | "clinic" | "other"

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Pharmacy {
  id: string
  name: string
  address: Address
  phone: string
  fax?: string
  email?: string
  hours?: {
    start: string
    end: string
    days: number[]
  }[]
  isPreferred: boolean
  notes?: string
}

export interface FacilityStats {
  id: string
  facilityId: string
  totalPatients: number
  activePatients: number
  callsToday: number
  callsThisWeek: number
  callsThisMonth: number
  averageCallDuration: number // in minutes
  mostCommonReasons: {
    reason: string
    count: number
  }[]
  lastUpdated: string
}
