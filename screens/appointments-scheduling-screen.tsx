"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, Edit, Plus, Search, Video } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

export function AppointmentsSchedulingScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const appointments = [
    {
      id: "a1",
      patientName: "John Doe",
      facility: "Sunrise Manor",
      time: "10:00 AM - 10:30 AM",
      date: "2025-06-06",
      type: "follow-up",
      status: "scheduled",
      provider: "Dr. Sarah Johnson",
    },
    {
      id: "a2",
      patientName: "Jane Smith",
      facility: "Golden Years",
      time: "11:00 AM - 11:15 AM",
      date: "2025-06-06",
      type: "urgent",
      status: "in-progress",
      provider: "Dr. Sarah Johnson",
    },
    {
      id: "a3",
      patientName: "Robert Johnson",
      facility: "City General Hospital",
      time: "02:00 PM - 02:45 PM",
      date: "2025-06-06",
      type: "initial",
      status: "completed",
      provider: "Dr. Sarah Johnson",
    },
    {
      id: "a4",
      patientName: "Alice Brown",
      facility: "Pine Ridge",
      time: "09:00 AM - 09:30 AM",
      date: "2025-06-07",
      type: "routine",
      status: "scheduled",
      provider: "Dr. Sarah Johnson",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge variant="default">Scheduled</Badge>
      case "in-progress":
        return <Badge variant="secondary">In Progress</Badge>
      case "completed":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Completed
          </Badge>
        )
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredAppointments = appointments.filter((appt) => {
    const matchesDate = date ? appt.date === date.toISOString().split("T")[0] : true
    const matchesStatus = filterStatus === "all" || appt.status === filterStatus
    const matchesSearch =
      searchQuery === "" ||
      appt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.facility.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDate && matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Appointments & Scheduling
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage your telemedicine appointments and schedule new visits
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule New Appointment
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search appointments by patient, facility..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {date
                  ? new Date(date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
                  : "All"}{" "}
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredAppointments.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No appointments found for this selection.</p>
              ) : (
                filteredAppointments.map((appt) => (
                  <div key={appt.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-base">{appt.patientName}</h3>
                          {getStatusBadge(appt.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {appt.time} • {appt.facility}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Type: {appt.type.charAt(0).toUpperCase() + appt.type.slice(1)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        {appt.status === "scheduled" && (
                          <Button size="sm">
                            <Video className="mr-2 h-4 w-4" />
                            Start Call
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
