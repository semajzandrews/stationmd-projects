"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, MessageSquare, Pill, Stethoscope, Video, Bell, Download } from "lucide-react"

export function PatientPortalScreen() {
  const patient = {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=80&width=80&text=JD",
    upcomingAppointment: {
      date: "June 10, 2025",
      time: "10:00 AM",
      provider: "Dr. Sarah Johnson",
      type: "Follow-up",
    },
    recentMessages: [
      {
        id: "msg1",
        sender: "Dr. Sarah Johnson",
        subject: "Your recent lab results",
        date: "June 4, 2025",
        unread: true,
      },
      {
        id: "msg2",
        sender: "Billing Department",
        subject: "Statement for May services",
        date: "May 30, 2025",
        unread: false,
      },
    ],
    recentVisits: [
      {
        id: "vis1",
        date: "May 25, 2025",
        provider: "Dr. Sarah Johnson",
        reason: "Annual Check-up",
        summary: "Overall health good, advised on diet changes.",
      },
      {
        id: "vis2",
        date: "April 10, 2025",
        provider: "Dr. Emily White",
        reason: "Flu Symptoms",
        summary: "Prescribed antiviral medication, symptoms improving.",
      },
    ],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    ],
    allergies: ["Penicillin", "Shellfish"],
  }

  const notifications = [
    {
      id: "n1",
      title: "New Message from Dr. Johnson",
      time: "5 min ago",
      type: "message",
    },
    {
      id: "n2",
      title: "Upcoming Appointment Reminder",
      time: "1 hour ago",
      type: "appointment",
    },
  ]

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
              <AvatarFallback className="text-2xl">{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
                Welcome, {patient.name}
              </h1>
              <p className="text-clinical-gray-600 dark:text-clinical-gray-400">Your personal health portal</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Notifications ({notifications.filter((n) => n.type !== "appointment").length})
            </Button>
            <Button>
              <Video className="mr-2 h-4 w-4" />
              Join My Appointment
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointment */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {patient.upcomingAppointment ? (
              <div className="p-4 border rounded-lg bg-clinical-blue-50 dark:bg-clinical-blue-950">
                <p className="text-lg font-semibold text-clinical-blue-700 dark:text-clinical-blue-200">
                  {patient.upcomingAppointment.date} at {patient.upcomingAppointment.time}
                </p>
                <p className="text-sm text-muted-foreground">
                  With {patient.upcomingAppointment.provider} for {patient.upcomingAppointment.type}
                </p>
                <Button className="mt-4">
                  <Video className="mr-2 h-4 w-4" />
                  Join Video Call
                </Button>
              </div>
            ) : (
              <p className="text-muted-foreground">No upcoming appointments.</p>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions / Notifications */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.length === 0 ? (
                <p className="text-sm text-muted-foreground">No new notifications.</p>
              ) : (
                notifications.map((notif) => (
                  <div key={notif.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{notif.title}</p>
                      <span className="text-xs text-muted-foreground">{notif.time}</span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule New Appointment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send a Message
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download My Records
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Tabs for Messages, Visits, Medications */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="messages" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="visits">Visit History</TabsTrigger>
              <TabsTrigger value="medications">My Medications</TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-450px)]">
                <div className="space-y-4 p-2">
                  {patient.recentMessages.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No messages found.</p>
                  ) : (
                    patient.recentMessages.map((message) => (
                      <Card key={message.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium text-sm">{message.sender}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{message.date}</span>
                          </div>
                          <h4 className="font-semibold text-base mb-1">{message.subject}</h4>
                          {message.unread && (
                            <Badge className="bg-clinical-blue-500 text-white dark:bg-clinical-blue-400">New</Badge>
                          )}
                          <Button variant="outline" size="sm" className="mt-3">
                            Read Message
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="visits" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-450px)]">
                <div className="space-y-4 p-2">
                  {patient.recentVisits.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No past visits found.</p>
                  ) : (
                    patient.recentVisits.map((visit) => (
                      <Card key={visit.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Stethoscope className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium text-sm">{visit.provider}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{visit.date}</span>
                          </div>
                          <h4 className="font-semibold text-base mb-1">{visit.reason}</h4>
                          <p className="text-sm text-muted-foreground">{visit.summary}</p>
                          <Button variant="outline" size="sm" className="mt-3">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="medications" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-450px)]">
                <div className="space-y-4 p-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Pill className="mr-2 h-5 w-5" />
                        Current Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {patient.medications.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No current medications listed.</p>
                      ) : (
                        patient.medications.map((med, index) => (
                          <div key={index} className="p-3 border rounded-md">
                            <h4 className="font-medium text-sm">{med.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {med.dosage} • {med.frequency}
                            </p>
                          </div>
                        ))
                      )}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Bell className="mr-2 h-5 w-5" />
                        Known Allergies
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {patient.allergies.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No known allergies listed.</p>
                      ) : (
                        patient.allergies.map((allergy, index) => (
                          <Badge key={index} variant="outline" className="w-full justify-center">
                            {allergy}
                          </Badge>
                        ))
                      )}
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
