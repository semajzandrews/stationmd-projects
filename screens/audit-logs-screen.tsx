"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, Download, Search, User, Clock } from "lucide-react"

export function AuditLogsScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterUser, setFilterUser] = useState("all")
  const [filterAction, setFilterAction] = useState("all")
  const [filterDate, setFilterDate] = useState("all")

  const auditLogs = [
    {
      id: "log1",
      timestamp: "2025-06-05T14:55:00Z",
      user: "Dr. Sarah Johnson",
      userId: "p1",
      action: "Started Telemedicine Call",
      details: "Patient: John Doe (MRN-123456), Facility: Sunrise Manor",
      ipAddress: "192.168.1.100",
      status: "success",
    },
    {
      id: "log2",
      timestamp: "2025-06-05T14:30:00Z",
      user: "Michael Chen",
      userId: "n1",
      action: "Updated Patient Status",
      details: "Patient: Jane Smith (MRN-789012), Status: In-Progress -> Completed",
      ipAddress: "192.168.1.101",
      status: "success",
    },
    {
      id: "log3",
      timestamp: "2025-06-05T10:15:00Z",
      user: "Alex Rodriguez",
      userId: "a1",
      action: "Accessed User Management",
      details: "Viewed user list",
      ipAddress: "192.168.1.102",
      status: "success",
    },
    {
      id: "log4",
      timestamp: "2025-06-04T16:00:00Z",
      user: "Dr. Emily White",
      userId: "p2",
      action: "Login Attempt",
      details: "Failed login attempt (incorrect password)",
      ipAddress: "203.0.113.45",
      status: "failed",
    },
    {
      id: "log5",
      timestamp: "2025-06-04T09:00:00Z",
      user: "Michael Chen",
      userId: "n1",
      action: "Created New Prescription",
      details: "Patient: Robert Johnson (MRN-345678), Medication: Amoxicillin",
      ipAddress: "192.168.1.101",
      status: "success",
    },
  ]

  const filteredLogs = auditLogs.filter((log) => {
    const matchesUser = filterUser === "all" || log.userId === filterUser
    const matchesAction = filterAction === "all" || log.action.includes(filterAction)
    const matchesSearch =
      searchQuery === "" ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase())
    // Simple date filter for demo
    const logDate = new Date(log.timestamp).toISOString().split("T")[0]
    const today = new Date().toISOString().split("T")[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]

    const matchesDate =
      filterDate === "all" ||
      (filterDate === "today" && logDate === today) ||
      (filterDate === "yesterday" && logDate === yesterday)

    return matchesUser && matchesAction && matchesSearch && matchesDate
  })

  const usersForFilter = Array.from(new Set(auditLogs.map((log) => ({ id: log.userId, name: log.user }))))
  const actionsForFilter = Array.from(new Set(auditLogs.map((log) => log.action)))

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">Audit Logs</h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Review all user activities and system events for compliance and security
            </p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search logs by user, action, details..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterUser} onValueChange={setFilterUser}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by User" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {usersForFilter.map((user) => (
                <SelectItem key={user.id} value={user.id}>
                  {user.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterAction} onValueChange={setFilterAction}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              {actionsForFilter.map((action) => (
                <SelectItem key={action} value={action}>
                  {action}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterDate} onValueChange={setFilterDate}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-4">
                {filteredLogs.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No audit logs found matching your criteria.
                  </div>
                ) : (
                  filteredLogs.map((log) => (
                    <div key={log.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-sm">{log.user}</span>
                          <span className="text-xs text-muted-foreground">({log.ipAddress})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {new Date(log.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold mb-1">{log.action}</p>
                      <p className="text-sm text-muted-foreground">{log.details}</p>
                      <div className="mt-2">
                        {log.status === "success" ? (
                          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
                            Success
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="status-badge-error">
                            Failed
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
