"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  Bell,
  Calendar,
  Clock,
  FileText,
  Heart,
  Phone,
  Stethoscope,
  Thermometer,
  Users,
  Video,
} from "lucide-react"

export function PhysicianDashboard() {
  const todaysStats = {
    totalCalls: 12,
    completedCalls: 8,
    pendingCalls: 4,
    avgCallDuration: "8.5 min",
  }

  const patientQueue = [
    {
      id: "1",
      name: "John Doe",
      age: 78,
      facility: "Sunrise Manor",
      urgency: "high",
      concern: "Chest pain",
      waitTime: "5 min",
      vitals: { temp: "101.2°F", bp: "150/90", hr: "95" },
    },
    {
      id: "2",
      name: "Mary Johnson",
      age: 65,
      facility: "Golden Years",
      urgency: "medium",
      concern: "Medication review",
      waitTime: "12 min",
      vitals: { temp: "98.6°F", bp: "130/80", hr: "72" },
    },
    {
      id: "3",
      name: "Robert Smith",
      age: 82,
      facility: "Comfort Care",
      urgency: "low",
      concern: "Follow-up",
      waitTime: "18 min",
      vitals: { temp: "98.4°F", bp: "125/75", hr: "68" },
    },
  ]

  const recentCharts = [
    {
      patient: "Alice Brown",
      facility: "Meadowbrook",
      date: "Today, 2:30 PM",
      diagnosis: "UTI",
      status: "completed",
    },
    {
      patient: "David Wilson",
      facility: "Sunset Villa",
      date: "Today, 1:15 PM",
      diagnosis: "Hypertension follow-up",
      status: "completed",
    },
    {
      patient: "Emma Davis",
      facility: "Pine Ridge",
      date: "Today, 11:45 AM",
      diagnosis: "Diabetes management",
      status: "completed",
    },
  ]

  const notifications = [
    {
      id: "1",
      type: "urgent",
      message: "New high-priority patient in queue",
      time: "2 min ago",
    },
    {
      id: "2",
      type: "info",
      message: "Lab results available for John Doe",
      time: "15 min ago",
    },
    {
      id: "3",
      type: "reminder",
      message: "Prescription renewal due for Mary Johnson",
      time: "1 hour ago",
    },
  ]

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Good afternoon, Dr. Johnson
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              You have {todaysStats.pendingCalls} patients waiting
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <Video className="mr-2 h-4 w-4" />
              Join Next Call
            </Button>
            <Button variant="outline">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Calls</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todaysStats.totalCalls}</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todaysStats.completedCalls}</div>
              <Progress value={(todaysStats.completedCalls / todaysStats.totalCalls) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Queue</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todaysStats.pendingCalls}</div>
              <p className="text-xs text-muted-foreground">Avg wait: 12 min</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todaysStats.avgCallDuration}</div>
              <p className="text-xs text-muted-foreground">-1.2 min from avg</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Queue */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Patient Queue
                </CardTitle>
                <CardDescription>Patients waiting for consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {patientQueue.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder-40x40.png?height=40&width=40&text=${patient.name.charAt(0)}`}
                        />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{patient.name}</h4>
                          <Badge
                            variant={
                              patient.urgency === "high"
                                ? "destructive"
                                : patient.urgency === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {patient.urgency}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Age {patient.age} • {patient.facility}
                        </p>
                        <p className="text-sm font-medium">{patient.concern}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center">
                          <Thermometer className="mr-1 h-3 w-3" />
                          {patient.vitals.temp}
                        </span>
                        <span className="flex items-center">
                          <Activity className="mr-1 h-3 w-3" />
                          {patient.vitals.bp}
                        </span>
                        <span className="flex items-center">
                          <Heart className="mr-1 h-3 w-3" />
                          {patient.vitals.hr}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Waiting {patient.waitTime}</p>
                      <Button size="sm" className="mt-2">
                        Start Call
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Charts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Recent Charts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentCharts.map((chart, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h5 className="font-medium text-sm">{chart.patient}</h5>
                      <p className="text-xs text-muted-foreground">{chart.facility}</p>
                      <p className="text-xs text-muted-foreground">{chart.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">{chart.diagnosis}</p>
                      <Badge variant="outline" className="text-xs">
                        {chart.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 border rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === "urgent"
                            ? "bg-red-500"
                            : notification.type === "info"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Stethoscope className="mr-2 h-4 w-4" />
                  View All Patients
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
