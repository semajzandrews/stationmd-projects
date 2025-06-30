"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Bluetooth,
  Heart,
  Plus,
  Search,
  Settings,
  Thermometer,
  BatteryCharging,
  Signal,
  Activity,
  User,
  Building,
} from "lucide-react"

export function DeviceManagementScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const devices = [
    {
      id: "d1",
      name: "Smart Blood Pressure Monitor",
      type: "blood-pressure",
      serialNumber: "BP-12345",
      status: "connected",
      lastReading: "120/80 mmHg (2 min ago)",
      battery: "85%",
      assignedTo: "John Doe",
      facility: "Sunrise Manor",
    },
    {
      id: "d2",
      name: "Digital Thermometer",
      type: "thermometer",
      serialNumber: "TEMP-67890",
      status: "disconnected",
      lastReading: "N/A",
      battery: "20%",
      assignedTo: "Mary Smith",
      facility: "Golden Years",
    },
    {
      id: "d3",
      name: "Pulse Oximeter",
      type: "oximeter",
      serialNumber: "OXI-11223",
      status: "connected",
      lastReading: "98% SpO2 (10 min ago)",
      battery: "60%",
      assignedTo: "Robert Johnson",
      facility: "City General Hospital",
    },
    {
      id: "d4",
      name: "Smart Stethoscope",
      type: "stethoscope",
      serialNumber: "STETH-44556",
      status: "connected",
      lastReading: "Normal heart sounds (1 hour ago)",
      battery: "95%",
      assignedTo: "Alice Brown",
      facility: "Pine Ridge",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Connected
          </Badge>
        )
      case "disconnected":
        return (
          <Badge variant="destructive" className="status-badge-error">
            Disconnected
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "blood-pressure":
        return <Activity className="h-5 w-5" />
      case "thermometer":
        return <Thermometer className="h-5 w-5" />
      case "oximeter":
        return <Heart className="h-5 w-5" />
      case "stethoscope":
        return <Bluetooth className="h-5 w-5" />
      default:
        return <Settings className="h-5 w-5" />
    }
  }

  const filteredDevices = devices.filter((device) => {
    const matchesStatus = filterStatus === "all" || device.status === filterStatus
    const matchesType = filterType === "all" || device.type === filterType
    const matchesSearch =
      searchQuery === "" ||
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.facility.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Connected Devices Management
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Monitor and manage telehealth devices for remote patient care
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Register New Device
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search devices by name, serial, patient..."
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
              <SelectItem value="connected">Connected</SelectItem>
              <SelectItem value="disconnected">Disconnected</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="blood-pressure">Blood Pressure Monitor</SelectItem>
              <SelectItem value="thermometer">Thermometer</SelectItem>
              <SelectItem value="oximeter">Pulse Oximeter</SelectItem>
              <SelectItem value="stethoscope">Stethoscope</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevices.length === 0 ? (
          <div className="lg:col-span-3 text-center py-12 text-muted-foreground">
            No devices found matching your criteria.
          </div>
        ) : (
          filteredDevices.map((device) => (
            <Card key={device.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    {getDeviceIcon(device.type)}
                    <span className="ml-2">{device.name}</span>
                  </CardTitle>
                  {getStatusBadge(device.status)}
                </div>
                <p className="text-sm text-muted-foreground">Serial: {device.serialNumber}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Assigned To: {device.assignedTo}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Facility: {device.facility}</span>
                  </div>
                  <div className="flex items-center">
                    <Signal className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Last Reading: {device.lastReading}</span>
                  </div>
                  <div className="flex items-center">
                    <BatteryCharging className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Battery: {device.battery}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Device
                  </Button>
                  {device.status === "disconnected" && (
                    <Button className="flex-1">
                      <Bluetooth className="mr-2 h-4 w-4" />
                      Reconnect
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
