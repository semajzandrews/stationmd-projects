export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: NotificationType
  priority: NotificationPriority
  read: boolean
  createdAt: string
  expiresAt?: string
  actions?: NotificationAction[]
  metadata?: Record<string, any>
}

export type NotificationType = "patient" | "prescription" | "lab-result" | "system" | "task" | "message"

export type NotificationPriority = "low" | "medium" | "high" | "urgent"

export interface NotificationAction {
  label: string
  url: string
  type: "primary" | "secondary" | "destructive"
}

export interface NotificationPreferences {
  email: {
    enabled: boolean
    types: NotificationType[]
  }
  sms: {
    enabled: boolean
    types: NotificationType[]
  }
  inApp: {
    enabled: boolean
    types: NotificationType[]
  }
  doNotDisturb?: {
    enabled: boolean
    start: string
    end: string
    days: number[]
    exceptUrgent: boolean
  }
}
