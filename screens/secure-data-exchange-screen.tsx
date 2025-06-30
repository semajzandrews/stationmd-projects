"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Share2, Upload, Download, FileText, CheckCircle2, XCircle, Clock, RefreshCw } from "lucide-react"

export function SecureDataExchangeScreen() {
  const [selectedPatient, setSelectedPatient] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [message, setMessage] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [exchangeHistory, setExchangeHistory] = useState([
    {
      id: "ex1",
      patient: "Alice Johnson",
      recipient: "Dr. Emily White (Cardiologist)",
      date: "2025-06-03 14:00",
      status: "completed",
      files: ["Alice_Chart_Summary.pdf", "Alice_ECG_Report.pdf"],
    },
    {
      id: "ex2",
      patient: "Bob Williams",
      recipient: "Springfield Pharmacy",
      date: "2025-06-01 10:15",
      status: "pending",
      files: ["Bob_Prescription_Refill.xml"],
    },
    {
      id: "ex3",
      patient: "Charlie Davis",
      recipient: "Dr. David Lee (Orthopedics)",
      date: "2025-05-28 16:45",
      status: "failed",
      files: ["Charlie_MRI_Scan.dcm"],
    },
  ])

  const patients = ["Alice Johnson", "Bob Williams", "Charlie Davis", "Diana Prince"]
  const commonRecipients = [
    "Dr. Emily White (Cardiologist)",
    "Springfield Pharmacy",
    "Dr. David Lee (Orthopedics)",
    "City General Hospital (Admissions)",
  ]

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files))
    }
  }

  const handleSendExchange = () => {
    if (selectedPatient && recipientEmail && selectedFiles.length > 0) {
      const newExchange = {
        id: `ex-${Date.now()}`,
        patient: selectedPatient,
        recipient: recipientEmail,
        date: new Date().toLocaleString(),
        status: "pending", // Simulate pending status
        files: selectedFiles.map((file) => file.name),
      }
      setExchangeHistory([newExchange, ...exchangeHistory])
      // Reset form
      setSelectedPatient("")
      setRecipientEmail("")
      setMessage("")
      setSelectedFiles([])
      alert("Data exchange initiated!")
    } else {
      alert("Please fill all required fields and select files.")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="warning" className="status-badge-warning">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="destructive" className="status-badge-error">
            <XCircle className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 p-6">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6 -m-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Secure Data Exchange Portal
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Securely share patient data with external healthcare entities
            </p>
          </div>
          <Button onClick={handleSendExchange}>
            <Share2 className="mr-2 h-4 w-4" />
            Initiate New Exchange
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Data Exchange */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              New Data Exchange
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {/* Placeholder for Label component */}
              <div htmlFor="patient-select">Select Patient</div>
              <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                <SelectTrigger id="patient-select">
                  <SelectValue placeholder="Select a patient" />
                </SelectTrigger>
                <SelectContent>
                  {patients.map((patient) => (
                    <SelectItem key={patient} value={patient}>
                      {patient}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              {/* Placeholder for Label component */}
              <div htmlFor="recipient-email">Recipient Email / Organization</div>
              <Select value={recipientEmail} onValueChange={setRecipientEmail}>
                <SelectTrigger id="recipient-email">
                  <SelectValue placeholder="Select a common recipient or enter email" />
                </SelectTrigger>
                <SelectContent>
                  {commonRecipients.map((recipient) => (
                    <SelectItem key={recipient} value={recipient}>
                      {recipient}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Or enter recipient email (e.g., specialist@hospital.com)"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="space-y-2">
              {/* Placeholder for Label component */}
              <div htmlFor="message">Message (Optional)</div>
              <Textarea
                id="message"
                placeholder="Add a secure message for the recipient"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              {/* Placeholder for Label component */}
              <div htmlFor="files">Select Files for Exchange</div>
              <Input id="files" type="file" multiple onChange={handleFileChange} />
              {selectedFiles.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  Selected: {selectedFiles.map((file) => file.name).join(", ")}
                </div>
              )}
            </div>

            <Button onClick={handleSendExchange} className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Send Secure Data
            </Button>
          </CardContent>
        </Card>

        {/* Exchange History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Exchange History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exchangeHistory.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No past exchanges.</div>
              ) : (
                exchangeHistory.map((exchange) => (
                  <Card key={exchange.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{exchange.patient}</h3>
                        {getStatusBadge(exchange.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        To: {exchange.recipient} • On: {exchange.date}
                      </p>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Files:</span> {exchange.files.join(", ")}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        {exchange.status === "completed" && (
                          <Button variant="secondary" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download Receipt
                          </Button>
                        )}
                        {exchange.status === "failed" && (
                          <Button variant="destructive" size="sm">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Retry
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
