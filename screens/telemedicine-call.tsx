"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Activity,
  AlertTriangle,
  Camera,
  CameraOff,
  FileText,
  Heart,
  MessageSquare,
  Mic,
  MicOff,
  Monitor,
  PhoneOff,
  Pill,
  Settings,
  Share,
  Stethoscope,
  Thermometer,
  Video,
  VideoOff,
} from "lucide-react"

export function TelemedicineCall() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isCallActive, setIsCallActive] = useState(true)
  const [notes, setNotes] = useState("")
  const [chatMessage, setChatMessage] = useState("")

  const patient = {
    id: "1",
    name: "John Doe",
    age: 78,
    gender: "Male",
    facility: "Sunrise Manor",
    room: "Room 204",
    mrn: "MRN-123456",
    concern: "Chest pain and shortness of breath",
    vitals: {
      temperature: "101.2°F",
      bloodPressure: "150/90",
      heartRate: "95 bpm",
      oxygenSat: "94%",
      pain: "7/10",
      takenAt: "2:45 PM",
    },
    allergies: [
      { name: "Penicillin", reaction: "Rash", severity: "moderate" },
      { name: "Shellfish", reaction: "Anaphylaxis", severity: "severe" },
    ],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Daily", route: "PO" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily", route: "PO" },
      { name: "Atorvastatin", dosage: "20mg", frequency: "Daily", route: "PO" },
    ],
    conditions: [
      { name: "Hypertension", status: "active" },
      { name: "Type 2 Diabetes", status: "active" },
      { name: "Hyperlipidemia", status: "active" },
    ],
    alerts: ["Fall Risk", "DNR on file"],
    photo: "/placeholder.svg?height=200&width=200&text=JD",
  }

  const chatMessages = [
    {
      id: "1",
      sender: "Nurse Sarah",
      message: "Patient is experiencing chest pain, started about 30 minutes ago",
      time: "2:45 PM",
      type: "facility",
    },
    {
      id: "2",
      sender: "Dr. Johnson",
      message: "Thank you. I can see the patient now. How is the pain level?",
      time: "2:47 PM",
      type: "physician",
    },
    {
      id: "3",
      sender: "Nurse Sarah",
      message: "Patient rates it as 7/10, radiating to left arm",
      time: "2:48 PM",
      type: "facility",
    },
  ]

  const recentVisits = [
    {
      date: "March 15, 2024",
      provider: "Dr. Smith",
      diagnosis: "Hypertension follow-up",
      notes: "BP well controlled, continue current medications",
    },
    {
      date: "March 1, 2024",
      provider: "Dr. Johnson",
      diagnosis: "Diabetes management",
      notes: "A1C improved to 7.2%, patient compliant with medications",
    },
  ]

  const handleEndCall = () => {
    setIsCallActive(false)
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In real app, this would send the message
      setChatMessage("")
    }
  }

  return (
    <div className="h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 flex flex-col md:flex-row">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col bg-black">
        {/* Call Header */}
        <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-4 flex-shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={patient.photo || "/placeholder.svg"} alt={patient.name} />
                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg font-semibold">{patient.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {patient.facility} • {patient.room} • MRN: {patient.mrn}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {patient.alerts.map((alert, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  {alert}
                </Badge>
              ))}
              <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-sm">
                {isCallActive ? "Connected" : "Call Ended"} • 00:05:23
              </Badge>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Video Container */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Emergency Alert Button */}
          <div className="absolute top-4 left-4 z-20">
            <Button variant="destructive" size="sm" className="shadow-lg">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Emergency Alert
            </Button>
          </div>

          {/* Patient Video (Main) */}
          <div className="w-full h-full flex items-center justify-center">
            {isCallActive ? (
              <div className="w-full h-full bg-clinical-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Patient Video Feed</p>
                  <p className="text-sm opacity-75">Sunrise Manor - Room 204</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-white">
                <VideoOff className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Call Ended</p>
              </div>
            )}
          </div>

          {/* Doctor Video (Picture-in-Picture) */}
          <div className="absolute top-4 right-4 w-48 h-36 bg-clinical-gray-700 rounded-lg border-2 border-white shadow-lg z-10">
            <div className="w-full h-full flex items-center justify-center text-white">
              {isVideoOn ? (
                <div className="text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2 opacity-75" />
                  <p className="text-xs">Dr. Johnson</p>
                </div>
              ) : (
                <div className="text-center">
                  <CameraOff className="h-8 w-8 mx-auto mb-2 opacity-75" />
                  <p className="text-xs">Camera Off</p>
                </div>
              )}
            </div>
          </div>

          {/* Call Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center space-x-3 bg-black/80 backdrop-blur-sm p-3 rounded-full">
              <Button
                variant={isAudioOn ? "secondary" : "destructive"}
                size="icon"
                className="rounded-full"
                onClick={() => setIsAudioOn(!isAudioOn)}
              >
                {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
              </Button>
              <Button
                variant={isVideoOn ? "secondary" : "destructive"}
                size="icon"
                className="rounded-full"
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Camera className="h-4 w-4" /> : <CameraOff className="h-4 w-4" />}
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Monitor className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" className="rounded-full" onClick={handleEndCall}>
                <PhoneOff className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Information Sidebar */}
      <div className="w-full md:w-96 bg-white dark:bg-clinical-gray-900 border-l border-border flex flex-col flex-shrink-0">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-clinical-blue-700 dark:text-clinical-blue-300">Patient Information</h3>
        </div>

        <Tabs defaultValue="vitals" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-4 mx-4 mt-2 h-10">
            <TabsTrigger value="vitals" className="text-xs">Vitals</TabsTrigger>
            <TabsTrigger value="meds" className="text-xs">Meds</TabsTrigger>
            <TabsTrigger value="history" className="text-xs">History</TabsTrigger>
            <TabsTrigger value="chat" className="text-xs">Chat</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-hidden">
            <TabsContent value="vitals" className="h-full m-0 data-[state=active]:flex data-[state=active]:flex-col">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  {/* Current Vitals */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center">
                        <Activity className="mr-2 h-4 w-4" />
                        Current Vitals
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">Taken at {patient.vitals.takenAt}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="h-4 w-4 text-clinical-orange-500" />
                          <div>
                            <p className="text-sm font-medium">{patient.vitals.temperature}</p>
                            <p className="text-xs text-muted-foreground">Temperature</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="h-4 w-4 text-clinical-blue-500" />
                          <div>
                            <p className="text-sm font-medium">{patient.vitals.bloodPressure}</p>
                            <p className="text-xs text-muted-foreground">Blood Pressure</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          <div>
                            <p className="text-sm font-medium">{patient.vitals.heartRate}</p>
                            <p className="text-xs text-muted-foreground">Heart Rate</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="h-4 w-4 text-clinical-green-500" />
                          <div>
                            <p className="text-sm font-medium">{patient.vitals.oxygenSat}</p>
                            <p className="text-xs text-muted-foreground">O2 Saturation</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Pain Level</span>
                          <span className="text-sm font-medium text-clinical-orange-600">{patient.vitals.pain}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Allergies */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center">
                        <AlertTriangle className="mr-2 h-4 w-4 text-clinical-orange-500" />
                        Allergies
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {patient.allergies.map((allergy, index) => (
                        <div key={index} className="p-2 border rounded-md">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{allergy.name}</span>
                            <Badge
                              variant={allergy.severity === "severe" ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {allergy.severity}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{allergy.reaction}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Medical Conditions */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center">
                        <Stethoscope className="mr-2 h-4 w-4" />
                        Medical Conditions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {patient.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">{condition.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {condition.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="meds" className="h-full m-0 data-[state=active]:flex data-[state=active]:flex-col">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center">
                        <Pill className="mr-2 h-4 w-4" />
                        Current Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {patient.medications.map((med, index) => (
                        <div key={index} className="p-3 border rounded-md">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">{med.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {med.route}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {med.dosage} • {med.frequency}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Button className="w-full">
                    <Pill className="mr-2 h-4 w-4" />
                    Write Prescription
                  </Button>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="history" className="h-full m-0 data-[state=active]:flex data-[state=active]:flex-col">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Recent Visits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {recentVisits.map((visit, index) => (
                        <div key={index} className="p-3 border rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{visit.date}</span>
                            <span className="text-xs text-muted-foreground">{visit.provider}</span>
                          </div>
                          <p className="text-sm font-medium mb-1">{visit.diagnosis}</p>
                          <p className="text-xs text-muted-foreground">{visit.notes}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="chat" className="h-full m-0 data-[state=active]:flex data-[state=active]:flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg ${
                        message.type === "physician"
                          ? "bg-clinical-blue-100 dark:bg-clinical-blue-900 ml-4"
                          : "bg-clinical-gray-100 dark:bg-clinical-gray-800 mr-4"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-xs">{message.sender}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Type a message..."
                    className="flex-1 min-h-[60px]"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                  />
                  <Button onClick={handleSendMessage}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Notes Section */}
        <div className="p-4 border-t border-border mt-auto">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Call Notes</h4>
            <Textarea
              placeholder="Enter your notes here..."
              className="min-h-[80px]"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1">
                Save Notes
              </Button>
              <Button variant="outline" size="sm">
                Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
