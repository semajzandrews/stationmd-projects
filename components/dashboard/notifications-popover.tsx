"use client"

import { useState } from "react"
import { Bell, Clock, MessageSquare, Pill, User, X } from "lucide-react"
import type { Notification, NotificationType } from "@/types/notification"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: "n1",
    userId: "p1",
    title: "New patient in queue",
    message: "John Doe has been added to your patient queue",
    type: "patient",
    priority: "medium",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    actions: [
      {
        label: "View Patient",
        url: "/dashboard/queue",
        type: "primary",
      },
    ],
  },
  {
    id: "n2",
    userId: "p1",
    title: "Prescription filled",
    message: "Prescription for Jane Smith has been filled",
    type: "prescription",
    priority: "low",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
  },
  {
    id: "n3",
    userId: "p1",
    title: "Lab results available",
    message: "New lab results for Robert Johnson are available",
    type: "lab-result",
    priority: "high",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: "n4",
    userId: "p1",
    title: "System maintenance",
    message: "System will be down for maintenance tonight from 2-4 AM EST",
    type: "system",
    priority: "low",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
  },
  {
    id: "n5",
    userId: "p1",
    title: "New message",
    message: "You have a new message from Dr. Williams",
    type: "message",
    priority: "medium",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
  },
]

export function NotificationsPopover() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)
  const [activeTab, setActiveTab] = useState("all")

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return notification.type === activeTab
  })

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "patient":
        return <User className="h-4 w-4 text-clinical-blue-500" />
      case "prescription":
        return <Pill className="h-4 w-4 text-clinical-green-500" />
      case "message":
        return <MessageSquare className="h-4 w-4 text-clinical-blue-500" />
      case "lab-result":
        return <Clock className="h-4 w-4 text-clinical-orange-500" />
      default:
        return <Bell className="h-4 w-4 text-muted-foreground" />
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center rounded-full text-xs"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-none shadow-none">
          <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
            <CardTitle className="text-lg">Notifications</CardTitle>
            {unreadCount > 0 && (
              <Button variant="link" size="sm" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
          </CardHeader>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                <TabsTrigger value="patient">Patients</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <ScrollArea className="h-[300px]">
                  <div className="p-4">
                    {filteredNotifications.length === 0 ? (
                      <p className="text-center text-sm text-muted-foreground py-4">No notifications.</p>
                    ) : (
                      filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            "flex items-start gap-3 py-3 px-2 rounded-md",
                            !notification.read && "bg-accent/50",
                          )}
                        >
                          <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <span className="text-xs text-muted-foreground">
                                {formatTime(notification.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            {notification.actions && notification.actions.length > 0 && (
                              <div className="mt-2 flex gap-2">
                                {notification.actions.map((action, index) => (
                                  <Button
                                    key={index}
                                    variant={action.type === "primary" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => {
                                      // Handle action click, e.g., navigate or perform an action
                                      console.log(`Action: ${action.label} clicked for notification ${notification.id}`)
                                      markAsRead(notification.id) // Mark as read when action is taken
                                      if (action.url) {
                                        // Example: navigate to URL
                                        window.location.href = action.url
                                      }
                                    }}
                                  >
                                    {action.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-auto p-0 text-xs mt-2"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as read
                              </Button>
                            )}
                          </div>
                          {notification.read && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 hover:opacity-100 transition-opacity"
                              onClick={() => setNotifications(notifications.filter((n) => n.id !== notification.id))}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="unread" className="mt-0">
                <ScrollArea className="h-[300px]">
                  <div className="p-4">
                    {filteredNotifications.length === 0 ? (
                      <p className="text-center text-sm text-muted-foreground py-4">No unread notifications.</p>
                    ) : (
                      filteredNotifications.map((notification) => (
                        <div key={notification.id} className="flex items-start gap-3 py-3 px-2 rounded-md bg-accent/50">
                          <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <span className="text-xs text-muted-foreground">
                                {formatTime(notification.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            {notification.actions && notification.actions.length > 0 && (
                              <div className="mt-2 flex gap-2">
                                {notification.actions.map((action, index) => (
                                  <Button
                                    key={index}
                                    variant={action.type === "primary" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => {
                                      console.log(`Action: ${action.label} clicked for notification ${notification.id}`)
                                      markAsRead(notification.id)
                                      if (action.url) {
                                        window.location.href = action.url
                                      }
                                    }}
                                  >
                                    {action.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0 text-xs mt-2"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="patient" className="mt-0">
                <ScrollArea className="h-[300px]">
                  <div className="p-4">
                    {filteredNotifications.length === 0 ? (
                      <p className="text-center text-sm text-muted-foreground py-4">No patient notifications.</p>
                    ) : (
                      filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            "flex items-start gap-3 py-3 px-2 rounded-md",
                            !notification.read && "bg-accent/50",
                          )}
                        >
                          <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <span className="text-xs text-muted-foreground">
                                {formatTime(notification.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            {notification.actions && notification.actions.length > 0 && (
                              <div className="mt-2 flex gap-2">
                                {notification.actions.map((action, index) => (
                                  <Button
                                    key={index}
                                    variant={action.type === "primary" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => {
                                      console.log(`Action: ${action.label} clicked for notification ${notification.id}`)
                                      markAsRead(notification.id)
                                      if (action.url) {
                                        window.location.href = action.url
                                      }
                                    }}
                                  >
                                    {action.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-auto p-0 text-xs mt-2"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as read
                              </Button>
                            )}
                          </div>
                          {notification.read && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 hover:opacity-100 transition-opacity"
                              onClick={() => setNotifications(notifications.filter((n) => n.id !== notification.id))}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
