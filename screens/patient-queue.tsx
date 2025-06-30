"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  AlertTriangle,
  Calendar,
  Clock,
  Filter,
  Heart,
  MapPin,
  Phone,
  Search,
  Stethoscope,
  Thermometer,
  User,
  Video,
} from "lucide-react"

export function PatientQueue() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("urgency")
  const [filterBy, setFilterBy] = useState("all")

  const patients = [
    {
      id: "1",
      name: "John Doe",
      age: 78,
      gender: "Male",
      facility: "Sunrise Manor",
      room: "Room 204",
      urgency: "high",
      concern: "Chest pain and shortness of breath",
      waitTime: "5 min",
      requestedBy: "Nurse Sarah",
      requestTime: "2:45 PM",
      vitals: {
        temperature: "101.2°F",
        bloodPressure: "150/90",
        heartRate: "95 bpm",
        oxygenSat: "94%",
        pain: "7/10",
      },
      alerts: ["Fall Risk", "Allergy: Penicillin"],
      lastVisit: "2 days ago",
      photo: "/placeholder.svg?height=40&width=40&text=JD",
    },
    {
      id: "2",
      name: "Mary Johnson",
      age: 65,
      gender: "Female",
      facility: "Golden Years Assisted Living",
      room: "Apt 12B",
      urgency: "medium",
      concern: "Medication review and blood pressure check",
      waitTime: "12 min",
      requestedBy: "Dr. Williams",
      requestTime: "2:38 PM",
      vitals: {
        temperature: "98.6°F",
        bloodPressure: "130/80",
        heartRate: "72 bpm",
        oxygenSat: "98%",
        pain: "2/10",
      },
      alerts: ["Diabetes"],
      lastVisit: "1 week ago",
      photo: "/placeholder.svg?height=40&width=40&text=MJ",
    },
    {
      id: "3",
      name: "Robert Smith",
      age: 82,
      gender: "Male",
      facility: "Comfort Care Center",
      room: "Room 156",
      urgency: "low",
      concern: "Routine follow-up for hypertension",
      waitTime: "18 min",
      requestedBy: "Nurse Jennifer",
      requestTime: "2:32 PM",
      vitals: {
        temperature: "98.4°F",
        bloodPressure: "125/75",
        heartRate: "68 bpm",
        oxygenSat: "99%",
        pain: "1/10",
      },
      alerts: [],
      lastVisit: "3 days ago",
      photo: "/placeholder.svg?height=40&width=40&text=RS",
    },
    {
      id: "4",
      name: "Emma Davis",
      age: 71,
      gender: "Female",
      facility: "Pine Ridge Senior Living",
      room: "Room 89",
      urgency: "high",
      concern: "Sudden confusion and disorientation",
      waitTime: "2 min",
      requestedBy: "Nurse Michael",
      requestTime: "2:48 PM",
      vitals: {
        temperature: "99.8°F",
        bloodPressure: "140/85",
        heartRate: "88 bpm",
        oxygenSat: "96%",
        pain: "3/10",
      },
      alerts: ["Dementia", "DNR"],
      lastVisit: "5 days ago",
      photo: "/placeholder.svg?height=40&width=40&text=ED",
    },
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getVitalStatus = (vital: string, value: string) => {
    // Simple logic for demo - in real app this would be more sophisticated
    if (vital === "temperature" && Number.parseFloat(value) > 100.4) return "warning"
    if (vital === "bloodPressure") {
      const [systolic] = value.split("/").map(Number)
      if (systolic > 140) return "warning"
    }
    if (vital === "heartRate") {
      const rate = Number.parseInt(value)
      if (rate > 90 || rate < 60) return "warning"
    }
    if (vital === "oxygenSat" && Number.parseInt(value) < 95) return "warning"
    return "normal"
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">Patient Queue</h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              {patients.length} patients waiting • Average wait time: 12 minutes
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button>
              <Video className="mr-2 h-4 w-4" />
              Start Next Call
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patients, facilities..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgency">Urgency</SelectItem>
              <SelectItem value="waitTime">Wait Time</SelectItem>
              <SelectItem value="facility">Facility</SelectItem>
              <SelectItem value="name">Patient Name</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Patients</SelectItem>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="queue">Queue View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          </TabsList>

          <TabsContent value="queue" className="space-y-4">
            {patients.map((patient) => (
              <Card key={patient.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={patient.photo || "/placeholder.svg"} alt={patient.name} />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{patient.name}</h3>
                          <Badge variant={getUrgencyColor(patient.urgency)}>{patient.urgency} priority</Badge>
                          {patient.alerts.map((alert, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <AlertTriangle className="mr-1 h-3 w-3" />
                              {alert}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            Age {patient.age}, {patient.gender}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {patient.facility}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            Waiting {patient.waitTime}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            Last visit: {patient.lastVisit}
                          </div>
                        </div>

                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-1">Chief Complaint:</h4>
                          <p className="text-sm">{patient.concern}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <Thermometer className="h-3 w-3" />
                            <span
                              className={
                                getVitalStatus("temperature", patient.vitals.temperature) === "warning"
                                  ? "text-clinical-orange-600"
                                  : ""
                              }
                            >
                              {patient.vitals.temperature}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Activity className="h-3 w-3" />
                            <span
                              className={
                                getVitalStatus("bloodPressure", patient.vitals.bloodPressure) === "warning"
                                  ? "text-clinical-orange-600"
                                  : ""
                              }
                            >
                              {patient.vitals.bloodPressure}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span
                              className={
                                getVitalStatus("heartRate", patient.vitals.heartRate) === "warning"
                                  ? "text-clinical-orange-600"
                                  : ""
                              }
                            >
                              {patient.vitals.heartRate}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Activity className="h-3 w-3" />
                            <span
                              className={
                                getVitalStatus("oxygenSat", patient.vitals.oxygenSat) === "warning"
                                  ? "text-clinical-orange-600"
                                  : ""
                              }
                            >
                              O2: {patient.vitals.oxygenSat}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>Pain: {patient.vitals.pain}</span>
                          </div>
                        </div>

                        <div className="mt-3 text-xs text-muted-foreground">
                          Requested by {patient.requestedBy} at {patient.requestTime} • {patient.room}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button size="sm">
                        <Video className="mr-2 h-4 w-4" />
                        Start Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Stethoscope className="mr-2 h-4 w-4" />
                        View Chart
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Facility
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patients.map((patient) => (
                <Card key={patient.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={patient.photo || "/placeholder.svg"} alt={patient.name} />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{patient.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Age {patient.age} • {patient.facility}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Badge variant={getUrgencyColor(patient.urgency)} className="w-fit">
                      {patient.urgency} priority
                    </Badge>
                    <p className="text-sm">{patient.concern}</p>
                    <div className="text-xs text-muted-foreground">
                      <p>Waiting: {patient.waitTime}</p>
                      <p>Requested by: {patient.requestedBy}</p>
                    </div>
                    <Button size="sm" className="w-full">
                      <Video className="mr-2 h-4 w-4" />
                      Start Call
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="space-y-4">
              {patients.map((patient, index) => (
                <div key={patient.id} className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        patient.urgency === "high"
                          ? "bg-red-500"
                          : patient.urgency === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    />
                    {index < patients.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-muted-foreground">{patient.concern}</p>
                          <p className="text-xs text-muted-foreground">
                            {patient.requestTime} • Waiting {patient.waitTime}
                          </p>
                        </div>
                        <Button size="sm">Start Call</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
