export type UserRole = "physician" | "navigator" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  specialties?: string[]
  licenseNumber?: string
  npiNumber?: string
  phone?: string
  availabilityHours?: {
    start: string
    end: string
    days: number[]
  }
  signature?: string
  preferences?: {
    notifications: {
      email: boolean
      sms: boolean
      inApp: boolean
    }
    darkMode: boolean
    language: string
  }
  facilities?: string[]
  lastActive?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
  rememberDevice?: boolean
}

export interface ResetPasswordRequest {
  email: string
}

export interface ResetPasswordConfirm {
  token: string
  newPassword: string
  confirmPassword: string
}

export interface SessionTimeout {
  warningAt: number // in seconds
  logoutAt: number // in seconds
}
