"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, AlertTriangle, Calendar, FileText, Heart, Info, MapPin, Pill, Plus, Thermometer } from "lucide-react"

export function PatientChartScreen() {
  const patient = {
    id: "1",
    name: "John Doe",
    age: 78,
    gender: "Male",
    mrn: "MRN-123456",
    facility: "Sunrise Manor",
    room: "Room 204",
    dateOfBirth: "1946-07-15",
    phone: "(555) 123-4567",
    email: "john.doe@example.com",
    photo: "/placeholder.svg?height=80&width=80&text=JD",
    primaryConcern: "Chest pain and shortness of breath",
    status: "in-progress",
    urgency: "high",
    vitals: {
      temperature: { value: 101.2, unit: "F", takenAt: "2025-06-05T14:45:00Z" },
      bloodPressure: { systolic: 150, diastolic: 90, takenAt: "2025-06-05T14:45:00Z" },
      heartRate: { value: 95, takenAt: "2025-06-05T14:45:00Z" },
      oxygenSaturation: { value: 94, takenAt: "2025-06-05T14:45:00Z" },
      pain: { value: 7, takenAt: "2025-06-05T14:45:00Z" },
    },
    allergies: [
      {
        id: "a1",
        name: "Penicillin",
        reaction: "Rash",
        severity: "moderate",
        status: "active",
        reportedAt: "2020-01-01",
      },
      {
        id: "a2",
        name: "Shellfish",
        reaction: "Anaphylaxis",
        severity: "severe",
        status: "active",
        reportedAt: "2018-05-10",
      },
    ],
    medications: [
      {
        id: "m1",
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Daily",
        route: "PO",
        startDate: "2022-03-01",
        status: "active",
      },
      {
        id: "m2",
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        route: "PO",
        startDate: "2021-09-15",
        status: "active",
      },
      {
        id: "m3",
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Daily",
        route: "PO",
        startDate: "2023-01-01",
        status: "active",
      },
    ],
    conditions: [
      { id: "c1", name: "Hypertension", status: "active", diagnosedAt: "2022-03-01" },
      { id: "c2", name: "Type 2 Diabetes", status: "active", diagnosedAt: "2021-09-15" },
      { id: "c3", name: "Hyperlipidemia", status: "active", diagnosedAt: "2023-01-01" },
    ],
    notes: [
      {
        id: "n1",
        content: "Patient presented with acute chest pain, stable on arrival.",
        createdBy: "Dr. Johnson",
        createdAt: "2025-06-05T14:50:00Z",
        type: "assessment",
        isPrivate: false,
      },
      {
        id: "n2",
        content: "Discussed medication adherence. Patient reports compliance.",
        createdBy: "Nurse Sarah",
        createdAt: "2025-06-04T10:00:00Z",
        type: "general",
        isPrivate: false,
      },
    ],
    visits: [
      {
        id: "v1",
        patientId: "1",
        providerId: "p1",
        facilityId: "f1",
        startTime: "2025-06-05T14:40:00Z",
        endTime: "2025-06-05T15:00:00Z",
        status: "completed",
        type: "urgent",
        chiefComplaint: "Chest pain",
      },
      {
        id: "v2",
        patientId: "1",
        providerId: "p2",
        facilityId: "f1",
        startTime: "2025-06-01T10:00:00Z",
        endTime: "2025-06-01T10:30:00Z",
        status: "completed",
        type: "follow-up",
        chiefComplaint: "Medication review",
      },
    ],
    alerts: [
      {
        id: "al1",
        type: "fall-risk",
        description: "High fall risk due to recent dizziness",
        severity: "warning",
        active: true,
        createdAt: "2025-05-20",
      },
      {
        id: "al2",
        type: "DNR",
        description: "Do Not Resuscitate order on file",
        severity: "critical",
        active: true,
        createdAt: "2024-10-01",
      },
    ],
  }

  const getVitalStatus = (value: number, type: string) => {
    if (type === "temperature" && value > 100.4) return "warning"
    if (type === "bloodPressure" && value > 140) return "warning" // Systolic
    if (type === "heartRate" && (value > 90 || value < 60)) return "warning"
    if (type === "oxygenSaturation" && value < 95) return "warning"
    if (type === "pain" && value >= 7) return "critical"
    return "normal"
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={patient.photo || "/placeholder.svg"} alt={patient.name} />
              <AvatarFallback className="text-2xl">{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">{patient.name}</h1>
              <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
                MRN: {patient.mrn} • Age {patient.age} • {patient.gender}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  <MapPin className="mr-1 h-3 w-3" />
                  {patient.facility} - {patient.room}
                </Badge>
                <Badge variant="default" className="text-xs">
                  {patient.status}
                </Badge>
                <Badge variant={patient.urgency === "high" ? "destructive" : "secondary"} className="text-xs">
                  {patient.urgency} urgency
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add New Note
            </Button>
            <Button>
              <Pill className="mr-2 h-4 w-4" />
              Write Prescription
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Patient Overview */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Info className="mr-2 h-5 w-5" />
                Demographics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <span className="font-medium">DOB:</span> {patient.dateOfBirth}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {patient.phone}
              </p>
              <p>
                <span className="font-medium">Email:</span> {patient.email}
              </p>
              <p>
                <span className="font-medium">Primary Concern:</span> {patient.primaryConcern}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-clinical-orange-500" />
                Alerts & Allergies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {patient.alerts.map((alert) => (
                <Badge
                  key={alert.id}
                  variant={alert.severity === "critical" ? "destructive" : "warning"}
                  className="w-full justify-center text-wrap h-auto py-2"
                >
                  <AlertTriangle className="mr-1 h-4 w-4" />
                  {alert.description}
                </Badge>
              ))}
              {patient.allergies.map((allergy) => (
                <Badge
                  key={allergy.id}
                  variant={allergy.severity === "severe" ? "destructive" : "outline"}
                  className="w-full justify-center text-wrap h-auto py-2"
                >
                  <AlertTriangle className="mr-1 h-4 w-4" />
                  {allergy.name} ({allergy.reaction})
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Pill className="mr-2 h-5 w-5" />
                Current Medications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {patient.medications.map((med) => (
                <div key={med.id} className="p-3 border rounded-md">
                  <h4 className="font-medium text-sm">{med.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {med.dosage} • {med.frequency} • {med.route}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Tabs for Vitals, History, Notes */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="vitals" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vitals">Vitals</TabsTrigger>
              <TabsTrigger value="history">Visit History</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="vitals" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Thermometer className="mr-2 h-5 w-5" />
                        Temperature
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last taken: {new Date(patient.vitals.temperature.takenAt).toLocaleString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">
                        {patient.vitals.temperature.value}°{patient.vitals.temperature.unit}
                      </div>
                      <Badge
                        variant={
                          getVitalStatus(patient.vitals.temperature.value, "temperature") === "warning"
                            ? "warning"
                            : "success"
                        }
                        className="mt-2"
                      >
                        {getVitalStatus(patient.vitals.temperature.value, "temperature") === "warning"
                          ? "Elevated"
                          : "Normal"}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Activity className="mr-2 h-5 w-5" />
                        Blood Pressure
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last taken: {new Date(patient.vitals.bloodPressure.takenAt).toLocaleString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">
                        {patient.vitals.bloodPressure.systolic}/{patient.vitals.bloodPressure.diastolic} mmHg
                      </div>
                      <Badge
                        variant={
                          getVitalStatus(patient.vitals.bloodPressure.systolic, "bloodPressure") === "warning"
                            ? "warning"
                            : "success"
                        }
                        className="mt-2"
                      >
                        {getVitalStatus(patient.vitals.bloodPressure.systolic, "bloodPressure") === "warning"
                          ? "Elevated"
                          : "Normal"}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Heart className="mr-2 h-5 w-5" />
                        Heart Rate
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last taken: {new Date(patient.vitals.heartRate.takenAt).toLocaleString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{patient.vitals.heartRate.value} bpm</div>
                      <Badge
                        variant={
                          getVitalStatus(patient.vitals.heartRate.value, "heartRate") === "warning"
                            ? "warning"
                            : "success"
                        }
                        className="mt-2"
                      >
                        {getVitalStatus(patient.vitals.heartRate.value, "heartRate") === "warning"
                          ? "Irregular"
                          : "Normal"}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Activity className="mr-2 h-5 w-5" />
                        Oxygen Saturation
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last taken: {new Date(patient.vitals.oxygenSaturation.takenAt).toLocaleString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{patient.vitals.oxygenSaturation.value}%</div>
                      <Badge
                        variant={
                          getVitalStatus(patient.vitals.oxygenSaturation.value, "oxygenSaturation") === "warning"
                            ? "warning"
                            : "success"
                        }
                        className="mt-2"
                      >
                        {getVitalStatus(patient.vitals.oxygenSaturation.value, "oxygenSaturation") === "warning"
                          ? "Low"
                          : "Normal"}
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">Pain Level</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last taken: {new Date(patient.vitals.pain.takenAt).toLocaleString()}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">{patient.vitals.pain.value}/10</div>
                      <Badge
                        variant={
                          getVitalStatus(patient.vitals.pain.value, "pain") === "critical" ? "destructive" : "success"
                        }
                        className="mt-2"
                      >
                        {getVitalStatus(patient.vitals.pain.value, "pain") === "critical" ? "Severe" : "Mild/Moderate"}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="history" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-4 p-2">
                  {patient.visits.map((visit) => (
                    <Card key={visit.id}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          {new Date(visit.startTime).toLocaleDateString()} - {visit.chiefComplaint}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {new Date(visit.startTime).toLocaleTimeString()} -{" "}
                          {visit.endTime ? new Date(visit.endTime).toLocaleTimeString() : "Ongoing"}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Type:</span> {visit.type}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Status:</span> {visit.status}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Provider:</span> Dr. Johnson (Mock)
                        </p>
                        {visit.notes && (
                          <p className="text-sm">
                            <span className="font-medium">Notes:</span> {visit.notes}
                          </p>
                        )}
                        <Button variant="outline" size="sm">
                          View Full Visit Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="notes" className="flex-1 mt-4">
              <ScrollArea className="h-[calc(100vh-250px)]">
                <div className="space-y-4 p-2">
                  {patient.notes.map((note) => (
                    <Card key={note.id}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="mr-2 h-5 w-5" />
                          {note.type.charAt(0).toUpperCase() + note.type.slice(1)} Note
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          By {note.createdBy} on {new Date(note.createdAt).toLocaleString()}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{note.content}</p>
                        {note.isPrivate && (
                          <Badge variant="secondary" className="mt-2">
                            Private Note
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
