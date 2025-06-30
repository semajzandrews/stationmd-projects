"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FileText, Search, UserPlus, XCircle } from "lucide-react"

export function ProviderOnboardingScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterRole, setFilterRole] = useState("all")

  const onboardingApplications = [
    {
      id: "app1",
      name: "Dr. Olivia Davis",
      role: "physician",
      status: "pending-review",
      submissionDate: "2025-05-28",
      lastUpdate: "2025-06-03",
      documents: ["License", "NPI", "CV"],
    },
    {
      id: "app2",
      name: "Samuel Green",
      role: "navigator",
      status: "approved",
      submissionDate: "2025-05-20",
      lastUpdate: "2025-05-25",
      documents: ["Background Check", "References"],
    },
    {
      id: "app3",
      name: "Dr. Benjamin Hall",
      role: "physician",
      status: "rejected",
      submissionDate: "2025-05-15",
      lastUpdate: "2025-05-22",
      documents: ["License", "CV"],
    },
    {
      id: "app4",
      name: "Laura White",
      role: "navigator",
      status: "in-progress",
      submissionDate: "2025-06-01",
      lastUpdate: "2025-06-04",
      documents: ["Application Form"],
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending-review":
        return (
          <Badge variant="warning" className="status-badge-warning">
            Pending Review
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="success" className="status-badge-success">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive" className="status-badge-error">
            Rejected
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="info" className="status-badge-info">
            In Progress
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filteredApplications = onboardingApplications.filter((app) => {
    const matchesStatus = filterStatus === "all" || app.status === filterStatus
    const matchesRole = filterRole === "all" || app.role === filterRole
    const matchesSearch =
      searchQuery === "" ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesRole && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Provider Onboarding & Credentialing
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage the onboarding and credentialing process for new healthcare providers
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Application
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications by name, ID..."
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
              <SelectItem value="pending-review">Pending Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="physician">Physician</SelectItem>
              <SelectItem value="navigator">Navigator</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredApplications.length === 0 ? (
          <div className="lg:col-span-2 text-center py-12 text-muted-foreground">
            No applications found matching your criteria.
          </div>
        ) : (
          filteredApplications.map((app) => (
            <Card key={app.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <UserPlus className="mr-2 h-5 w-5" />
                    {app.name}
                  </CardTitle>
                  {getStatusBadge(app.status)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {app.role.charAt(0).toUpperCase() + app.role.slice(1)} Application • Submitted: {app.submissionDate}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Last Update:</span> {app.lastUpdate}
                  </div>
                  <div>
                    <span className="font-medium">Required Documents:</span> {app.documents.join(", ")}
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Application
                  </Button>
                  {app.status === "pending-review" && (
                    <Button className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                  )}
                  {app.status === "pending-review" && (
                    <Button variant="destructive" className="flex-1">
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
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
