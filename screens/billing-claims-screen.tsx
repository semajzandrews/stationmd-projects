"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DollarSign, FileText, Plus, Search, CheckCircle2, XCircle, User, Building } from "lucide-react"

export function BillingClaimsScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const claims = [
    {
      id: "c1",
      patientName: "John Doe",
      claimId: "CLM-20250605-001",
      amount: 150.0,
      status: "pending",
      type: "telemedicine-visit",
      submissionDate: "2025-06-05",
      facility: "Sunrise Manor",
    },
    {
      id: "c2",
      patientName: "Jane Smith",
      claimId: "CLM-20250604-002",
      amount: 200.0,
      status: "approved",
      type: "prescription-refill",
      submissionDate: "2025-06-04",
      facility: "Golden Years",
    },
    {
      id: "c3",
      patientName: "Robert Johnson",
      claimId: "CLM-20250603-003",
      amount: 75.0,
      status: "denied",
      type: "consultation",
      submissionDate: "2025-06-03",
      facility: "City General Hospital",
    },
    {
      id: "c4",
      patientName: "Alice Brown",
      claimId: "CLM-20250602-004",
      amount: 120.0,
      status: "paid",
      type: "telemedicine-visit",
      submissionDate: "2025-06-02",
      facility: "Pine Ridge",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="warning" className="status-badge-warning">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="success" className="status-badge-success">
            Approved
          </Badge>
        )
      case "denied":
        return (
          <Badge variant="destructive" className="status-badge-error">
            Denied
          </Badge>
        )
      case "paid":
        return (
          <Badge variant="info" className="status-badge-info">
            Paid
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filteredClaims = claims.filter((claim) => {
    const matchesStatus = filterStatus === "all" || claim.status === filterStatus
    const matchesType = filterType === "all" || claim.type === filterType
    const matchesSearch =
      searchQuery === "" ||
      claim.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.claimId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.facility.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">Billing & Claims</h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage patient billing, insurance claims, and payment processing
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Submit New Claim
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search claims by patient, ID, facility..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="denied">Denied</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="telemedicine-visit">Telemedicine Visit</SelectItem>
              <SelectItem value="prescription-refill">Prescription Refill</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClaims.length === 0 ? (
          <div className="lg:col-span-2 text-center py-12 text-muted-foreground">
            No claims found matching your criteria.
          </div>
        ) : (
          filteredClaims.map((claim) => (
            <Card key={claim.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Claim: {claim.claimId}
                  </CardTitle>
                  {getStatusBadge(claim.status)}
                </div>
                <p className="text-sm text-muted-foreground">
                  <User className="inline-block mr-1 h-3 w-3" />
                  {claim.patientName} • <Building className="inline-block mr-1 h-3 w-3" />
                  {claim.facility}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Amount:</span> ${claim.amount.toFixed(2)}
                  </div>
                  <div>
                    <span className="font-medium">Type:</span> {claim.type.replace(/-/g, " ")}
                  </div>
                  <div>
                    <span className="font-medium">Submission Date:</span> {claim.submissionDate}
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  {claim.status === "pending" && (
                    <Button className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                  )}
                  {claim.status === "pending" && (
                    <Button variant="destructive" className="flex-1">
                      <XCircle className="mr-2 h-4 w-4" />
                      Deny
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
