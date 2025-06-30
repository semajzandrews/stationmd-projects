"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Plug,
  Search,
  Settings,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Database,
  FileStack,
  Mail,
  DollarSign,
  Calendar,
} from "lucide-react"

export function IntegrationManagementScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const integrations = [
    {
      id: "int1",
      name: "Epic EHR Integration",
      type: "ehr",
      status: "active",
      lastSync: "2025-06-05T14:00:00Z",
      description: "Connects with Epic for patient demographics and medical history.",
      configStatus: "configured",
    },
    {
      id: "int2",
      name: "Quest Diagnostics Lab Results",
      type: "lab",
      status: "inactive",
      lastSync: "N/A",
      description: "Receives lab results directly from Quest Diagnostics.",
      configStatus: "pending-setup",
    },
    {
      id: "int3",
      name: "Stripe Payment Gateway",
      type: "billing",
      status: "active",
      lastSync: "2025-06-05T15:00:00Z",
      description: "Handles secure payment processing for patient bills.",
      configStatus: "configured",
    },
    {
      id: "int4",
      name: "Twilio SMS Notifications",
      type: "communication",
      status: "active",
      lastSync: "2025-06-05T15:30:00Z",
      description: "Sends appointment reminders and alerts via SMS.",
      configStatus: "configured",
    },
    {
      id: "int5",
      name: "Google Calendar Sync",
      type: "scheduling",
      status: "error",
      lastSync: "2025-06-05T10:00:00Z",
      description: "Synchronizes provider schedules with Google Calendar.",
      configStatus: "configured",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Active
          </Badge>
        )
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      case "error":
        return (
          <Badge variant="destructive" className="status-badge-error">
            Error
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getConfigStatusBadge = (status: string) => {
    switch (status) {
      case "configured":
        return (
          <Badge variant="success" className="status-badge-success">
            Configured
          </Badge>
        )
      case "pending-setup":
        return (
          <Badge variant="warning" className="status-badge-warning">
            Pending Setup
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getIntegrationIcon = (type: string) => {
    switch (type) {
      case "ehr":
        return <Database className="h-5 w-5" />
      case "lab":
        return <FileStack className="h-5 w-5" />
      case "billing":
        return <DollarSign className="h-5 w-5" />
      case "communication":
        return <Mail className="h-5 w-5" />
      case "scheduling":
        return <Calendar className="h-5 w-5" />
      default:
        return <Plug className="h-5 w-5" />
    }
  }

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesStatus = filterStatus === "all" || integration.status === filterStatus
    const matchesType = filterType === "all" || integration.type === filterType
    const matchesSearch =
      searchQuery === "" ||
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Integration Management
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage connections with external healthcare systems and services
            </p>
          </div>
          <Button>
            <Plug className="mr-2 h-4 w-4" />
            Add New Integration
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search integrations by name, description..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="ehr">EHR</SelectItem>
              <SelectItem value="lab">Lab Services</SelectItem>
              <SelectItem value="billing">Billing</SelectItem>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="scheduling">Scheduling</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.length === 0 ? (
          <div className="lg:col-span-3 text-center py-12 text-muted-foreground">
            No integrations found matching your criteria.
          </div>
        ) : (
          filteredIntegrations.map((integration) => (
            <Card key={integration.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    {getIntegrationIcon(integration.type)}
                    <span className="ml-2">{integration.name}</span>
                  </CardTitle>
                  {getStatusBadge(integration.status)}
                </div>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Type:</span>{" "}
                    {integration.type.charAt(0).toUpperCase() + integration.type.slice(1)}
                  </div>
                  <div>
                    <span className="font-medium">Last Sync:</span>{" "}
                    {integration.lastSync === "N/A" ? "N/A" : new Date(integration.lastSync).toLocaleString()}
                  </div>
                  <div>
                    <span className="font-medium">Configuration:</span> {getConfigStatusBadge(integration.configStatus)}
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <Settings className="mr-2 h-4 w-4" />
                    Configure
                  </Button>
                  {integration.status === "active" && (
                    <Button variant="secondary" className="flex-1">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Sync Now
                    </Button>
                  )}
                  {integration.status === "inactive" && (
                    <Button className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Activate
                    </Button>
                  )}
                  {integration.status === "error" && (
                    <Button variant="destructive" className="flex-1">
                      <XCircle className="mr-2 h-4 w-4" />
                      Resolve Error
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
