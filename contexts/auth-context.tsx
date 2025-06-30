"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { User, UserRole, LoginCredentials, AuthState } from "@/types/auth"

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  resetPassword: (email: string) => Promise<void>
  updateUser: (user: Partial<User>) => void
  checkSession: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data for demonstration
const mockUsers: Record<UserRole, User> = {
  physician: {
    id: "p1",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@stationmd.com",
    role: "physician",
    avatar: "/caring-doctor.png",
    specialties: ["Internal Medicine", "Geriatrics"],
    licenseNumber: "MD12345",
    npiNumber: "1234567890",
    phone: "555-123-4567",
    availabilityHours: {
      start: "08:00",
      end: "18:00",
      days: [1, 2, 3, 4, 5],
    },
    preferences: {
      notifications: {
        email: true,
        sms: true,
        inApp: true,
      },
      darkMode: false,
      language: "en",
    },
    facilities: ["f1", "f2", "f3"],
    lastActive: new Date().toISOString(),
  },
  navigator: {
    id: "n1",
    name: "Michael Chen",
    email: "michael.chen@stationmd.com",
    role: "navigator",
    avatar: "/healthcare-worker.png",
    phone: "555-987-6543",
    preferences: {
      notifications: {
        email: true,
        sms: true,
        inApp: true,
      },
      darkMode: true,
      language: "en",
    },
    facilities: ["f1", "f4", "f5"],
    lastActive: new Date().toISOString(),
  },
  admin: {
    id: "a1",
    name: "Alex Rodriguez",
    email: "alex.rodriguez@stationmd.com",
    role: "admin",
    avatar: "/system-administrator.png",
    phone: "555-456-7890",
    preferences: {
      notifications: {
        email: true,
        sms: false,
        inApp: true,
      },
      darkMode: false,
      language: "en",
    },
    lastActive: new Date().toISOString(),
  },
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  })

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        })
      } catch (error) {
        localStorage.removeItem("user")
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: "Invalid session",
        })
      }
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
    }
  }, [])

  // Mock login function
  const login = async (credentials: LoginCredentials) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, we'll use the email to determine the role
    let role: UserRole = "physician"
    if (credentials.email.includes("navigator")) {
      role = "navigator"
    } else if (credentials.email.includes("admin")) {
      role = "admin"
    }

    const user = mockUsers[role]

    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })
      router.push("/dashboard")
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: "Invalid credentials",
      })
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    })
    router.push("/login")
  }

  const resetPassword = async (email: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }))

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setAuthState((prev) => ({ ...prev, isLoading: false }))
    return Promise.resolve()
  }

  const updateUser = (userData: Partial<User>) => {
    if (!authState.user) return

    const updatedUser = { ...authState.user, ...userData }
    localStorage.setItem("user", JSON.stringify(updatedUser))

    setAuthState((prev) => ({
      ...prev,
      user: updatedUser,
    }))
  }

  const checkSession = () => {
    // In a real app, this would verify the token with the server
    return authState.isAuthenticated
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        resetPassword,
        updateUser,
        checkSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
