"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle, Check, Clock, MapPin, Pill, Plus, Send, Shield, Trash2, User } from "lucide-react"

export function PrescriptionScreen() {
  const [selectedMedication, setSelectedMedication] = useState("")
  const [dosage, setDosage] = useState("")
  const [frequency, setFrequency] = useState("")
  const [duration, setDuration] = useState("")
  const [instructions, setInstructions] = useState("")
  const [refills, setRefills] = useState("0")
  const [selectedPharmacy, setSelectedPharmacy] = useState("")

  const patient = {
    name: "John Doe",
    age: 78,
    mrn: "MRN-123456",
    facility: "Sunrise Manor",
    photo: "/placeholder.svg?height=40&width=40&text=JD",
    allergies: ["Penicillin", "Shellfish"],
    currentMeds: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    ],
  }

  const medicationSuggestions = [
    {
      name: "Amoxicillin",
      commonDosages: ["250mg", "500mg", "875mg"],
      isControlled: false,
      interactions: ["None with current medications"],
    },
    {
      name: "Hydrocodone/Acetaminophen",
      commonDosages: ["5/325mg", "7.5/325mg", "10/325mg"],
      isControlled: true,
      schedule: "2",
      interactions: ["Monitor with other CNS depressants"],
    },
    {
      name: "Azithromycin",
      commonDosages: ["250mg", "500mg"],
      isControlled: false,
      interactions: ["None with current medications"],
    },
  ]

  const pharmacies = [
    {
      id: "1",
      name: "CVS Pharmacy",
      address: "123 Main St, Springfield, IL",
      phone: "(555) 123-4567",
      isPreferred: true,
    },
    {
      id: "2",
      name: "Walgreens",
      address: "456 Oak Ave, Springfield, IL",
      phone: "(555) 987-6543",
      isPreferred: false,
    },
    {
      id: "3",
      name: "Rite Aid",
      address: "789 Pine St, Springfield, IL",
      phone: "(555) 456-7890",
      isPreferred: false,
    },
  ]

  const prescriptionTemplates = [
    {
      name: "UTI Treatment",
      medication: "Nitrofurantoin",
      dosage: "100mg",
      frequency: "Twice daily",
      duration: "7 days",
      instructions: "Take with food",
    },
    {
      name: "Hypertension",
      medication: "Amlodipine",
      dosage: "5mg",
      frequency: "Daily",
      duration: "30 days",
      instructions: "Take in the morning",
    },
  ]

  const [currentPrescriptions, setCurrentPrescriptions] = useState([
    {
      id: "1",
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      duration: "10 days",
      instructions: "Take with food",
      refills: "0",
      isControlled: false,
    },
  ])

  const addPrescription = () => {
    if (selectedMedication && dosage && frequency && duration) {
      const newPrescription = {
        id: Date.now().toString(),
        medication: selectedMedication,
        dosage,
        frequency,
        duration,
        instructions,
        refills,
        isControlled: medicationSuggestions.find((m) => m.name === selectedMedication)?.isControlled || false,
      }
      setCurrentPrescriptions([...currentPrescriptions, newPrescription])
      // Reset form
      setSelectedMedication("")
      setDosage("")
      setFrequency("")
      setDuration("")
      setInstructions("")
      setRefills("0")
    }
  }

  const removePrescription = (id: string) => {
    setCurrentPrescriptions(currentPrescriptions.filter((p) => p.id !== id))
  }

  const sendPrescriptions = () => {
    // In real app, this would send to pharmacy
    console.log("Sending prescriptions to pharmacy:", selectedPharmacy)
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={patient.photo || "/placeholder.svg"} alt={patient.name} />
              <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
                Write Prescription
              </h1>
              <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
                {patient.name} • Age {patient.age} • MRN: {patient.mrn} • {patient.facility}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              Templates
            </Button>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send to Pharmacy
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Prescription Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* New Prescription Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Pill className="mr-2 h-5 w-5" />
                New Prescription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medication">Medication</Label>
                  <Select value={selectedMedication} onValueChange={setSelectedMedication}>
                    <SelectTrigger>
                      <SelectValue placeholder="Search medication..." />
                    </SelectTrigger>
                    <SelectContent>
                      {medicationSuggestions.map((med) => (
                        <SelectItem key={med.name} value={med.name}>
                          <div className="flex items-center space-x-2">
                            <span>{med.name}</span>
                            {med.isControlled && (
                              <Badge variant="outline" className="text-xs">
                                <Shield className="mr-1 h-3 w-3" />
                                C-{med.schedule}
                              </Badge>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Select value={dosage} onValueChange={setDosage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dosage..." />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedMedication &&
                        medicationSuggestions
                          .find((m) => m.name === selectedMedication)
                          ?.commonDosages.map((dose) => (
                            <SelectItem key={dose} value={dose}>
                              {dose}
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Once daily">Once daily</SelectItem>
                      <SelectItem value="Twice daily">Twice daily</SelectItem>
                      <SelectItem value="Three times daily">Three times daily</SelectItem>
                      <SelectItem value="Four times daily">Four times daily</SelectItem>
                      <SelectItem value="Every 4 hours">Every 4 hours</SelectItem>
                      <SelectItem value="Every 6 hours">Every 6 hours</SelectItem>
                      <SelectItem value="As needed">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3 days">3 days</SelectItem>
                      <SelectItem value="5 days">5 days</SelectItem>
                      <SelectItem value="7 days">7 days</SelectItem>
                      <SelectItem value="10 days">10 days</SelectItem>
                      <SelectItem value="14 days">14 days</SelectItem>
                      <SelectItem value="30 days">30 days</SelectItem>
                      <SelectItem value="90 days">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="Special instructions for the patient..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="refills">Refills</Label>
                  <Select value={refills} onValueChange={setRefills}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0 refills</SelectItem>
                      <SelectItem value="1">1 refill</SelectItem>
                      <SelectItem value="2">2 refills</SelectItem>
                      <SelectItem value="3">3 refills</SelectItem>
                      <SelectItem value="5">5 refills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button onClick={addPrescription} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Prescription
                  </Button>
                </div>
              </div>

              {/* Drug Interactions Warning */}
              {selectedMedication && (
                <div className="p-3 bg-clinical-orange-50 dark:bg-clinical-orange-950 border border-clinical-orange-200 dark:border-clinical-orange-800 rounded-md">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-clinical-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm text-clinical-orange-800 dark:text-clinical-orange-200">
                        Drug Interaction Check
                      </h4>
                      <p className="text-sm text-clinical-orange-700 dark:text-clinical-orange-300">
                        {medicationSuggestions.find((m) => m.name === selectedMedication)?.interactions[0]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Current Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Current Prescriptions ({currentPrescriptions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {currentPrescriptions.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No prescriptions added yet</p>
              ) : (
                <div className="space-y-3">
                  {currentPrescriptions.map((prescription) => (
                    <div key={prescription.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium">{prescription.medication}</h4>
                            {prescription.isControlled && (
                              <Badge variant="outline" className="text-xs">
                                <Shield className="mr-1 h-3 w-3" />
                                Controlled
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                            <div>
                              <span className="font-medium">Dosage:</span> {prescription.dosage}
                            </div>
                            <div>
                              <span className="font-medium">Frequency:</span> {prescription.frequency}
                            </div>
                            <div>
                              <span className="font-medium">Duration:</span> {prescription.duration}
                            </div>
                            <div>
                              <span className="font-medium">Refills:</span> {prescription.refills}
                            </div>
                          </div>
                          {prescription.instructions && (
                            <p className="text-sm mt-2">
                              <span className="font-medium">Instructions:</span> {prescription.instructions}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removePrescription(prescription.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pharmacy Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Select Pharmacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pharmacies.map((pharmacy) => (
                  <div
                    key={pharmacy.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPharmacy === pharmacy.id
                        ? "border-clinical-blue-500 bg-clinical-blue-50 dark:bg-clinical-blue-950"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedPharmacy(pharmacy.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{pharmacy.name}</h4>
                          {pharmacy.isPreferred && (
                            <Badge variant="secondary" className="text-xs">
                              Preferred
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                        <p className="text-sm text-muted-foreground">{pharmacy.phone}</p>
                      </div>
                      {selectedPharmacy === pharmacy.id && <Check className="h-5 w-5 text-clinical-blue-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Patient Allergies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <AlertTriangle className="mr-2 h-4 w-4 text-clinical-orange-500" />
                Patient Allergies
              </CardTitle>
            </CardHeader>
            <CardContent>
              {patient.allergies.length === 0 ? (
                <p className="text-sm text-muted-foreground">No known allergies</p>
              ) : (
                <div className="space-y-2">
                  {patient.allergies.map((allergy, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-center">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      {allergy}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Current Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <Pill className="mr-2 h-4 w-4" />
                Current Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {patient.currentMeds.map((med, index) => (
                  <div key={index} className="p-2 border rounded-md">
                    <h5 className="font-medium text-sm">{med.name}</h5>
                    <p className="text-xs text-muted-foreground">
                      {med.dosage} • {med.frequency}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prescription Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4" />
                Quick Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {prescriptionTemplates.map((template, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-3"
                    onClick={() => {
                      setSelectedMedication(template.medication)
                      setDosage(template.dosage)
                      setFrequency(template.frequency)
                      setDuration(template.duration)
                      setInstructions(template.instructions)
                    }}
                  >
                    <div className="text-left">
                      <div className="font-medium text-sm">{template.name}</div>
                      <div className="text-xs text-muted-foreground">{template.medication}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Send Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Send Prescriptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full"
                onClick={sendPrescriptions}
                disabled={currentPrescriptions.length === 0 || !selectedPharmacy}
              >
                <Send className="mr-2 h-4 w-4" />
                Send to Pharmacy
              </Button>
              <Button variant="outline" className="w-full">
                <User className="mr-2 h-4 w-4" />
                Send to Patient
              </Button>
              <div className="text-xs text-muted-foreground text-center">
                Prescriptions will be electronically sent to the selected pharmacy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
