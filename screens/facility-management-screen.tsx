"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Building, Edit, MapPin, Phone, Plus, Search, Users, Clock, Mail, User, Activity } from "lucide-react"

export function FacilityManagementScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const facilities = [
    {
      id: "f1",
      name: "Sunrise Manor",
      type: "skilled-nursing",
      address: { street: "123 Elderwood Dr", city: "Springfield", state: "IL", zipCode: "62704", country: "USA" },
      phone: "(555) 111-2222",
      email: "info@sunrisemanor.com",
      contactPerson: { name: "Jane Smith", role: "Administrator", phone: "(555) 111-2223" },
      status: "active",
      timezone: "America/Chicago",
      operatingHours: [{ start: "08:00", end: "17:00", days: [1, 2, 3, 4, 5] }],
      stats: {
        totalPatients: 120,
        activePatients: 85,
        callsToday: 5,
        callsThisWeek: 25,
        averageCallDuration: 10,
      },
    },
    {
      id: "f2",
      name: "Golden Years Assisted Living",
      type: "assisted-living",
      address: { street: "456 Golden Ln", city: "Springfield", state: "IL", zipCode: "62704", country: "USA" },
      phone: "(555) 333-4444",
      email: "contact@goldenyears.com",
      contactPerson: { name: "John Doe", role: "Director", phone: "(555) 333-4445" },
      status: "active",
      timezone: "America/Chicago",
      operatingHours: [{ start: "09:00", end: "18:00", days: [0, 1, 2, 3, 4, 5, 6] }],
      stats: {
        totalPatients: 80,
        activePatients: 60,
        callsToday: 3,
        callsThisWeek: 18,
        averageCallDuration: 12,
      },
    },
    {
      id: "f3",
      name: "City General Hospital",
      type: "hospital",
      address: { street: "789 Hospital Way", city: "Springfield", state: "IL", zipCode: "62704", country: "USA" },
      phone: "(555) 555-6666",
      email: "admin@cityhospital.com",
      contactPerson: { name: "Dr. Alex Lee", role: "Chief of Staff", phone: "(555) 555-6667" },
      status: "active",
      timezone: "America/Chicago",
      operatingHours: [{ start: "00:00", end: "23:59", days: [0, 1, 2, 3, 4, 5, 6] }],
      stats: {
        totalPatients: 500,
        activePatients: 350,
        callsToday: 15,
        callsThisWeek: 70,
        averageCallDuration: 8,
      },
    },
  ]

  const getFacilityTypeBadge = (type: string) => {
    switch (type) {
      case "skilled-nursing":
        return <Badge variant="default">Skilled Nursing</Badge>
      case "assisted-living":
        return <Badge variant="secondary">Assisted Living</Badge>
      case "hospital":
        return <Badge variant="outline">Hospital</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Facility Management
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage and monitor healthcare facilities connected to StationConnect
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Facility
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search facilities by name, address..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="skilled-nursing">Skilled Nursing</SelectItem>
              <SelectItem value="assisted-living">Assisted Living</SelectItem>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="group-home">Group Home</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="patients">Total Patients</SelectItem>
              <SelectItem value="callsToday">Calls Today</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  {facility.name}
                </CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                {getFacilityTypeBadge(facility.type)}
                <span className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {facility.address.city}, {facility.address.state}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Adjusted spacing for contact information */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm items-start">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{facility.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{facility.email}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {facility.contactPerson.name} ({facility.contactPerson.role})
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {facility.operatingHours[0].start}-{facility.operatingHours[0].end} (M-F)
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-3 mt-3 space-y-2">
                <h4 className="font-semibold text-base">Current Stats:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Total Patients: {facility.stats.totalPatients}</span>
                  </div>
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Active Patients: {facility.stats.activePatients}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Calls Today: {facility.stats.callsToday}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Avg Call Duration: {facility.stats.averageCallDuration} min</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                View Details & Patients
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
