"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Heart,
  Thermometer,
  Weight,
  Droplet,
  Activity,
  AlertTriangle,
  Settings,
  User,
  LineChart,
  XCircle,
} from "lucide-react"
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function RemotePatientMonitoringScreen() {
  const patients = [
    {
      id: "p1",
      name: "John Doe",
      status: "stable",
      lastReading: "2025-06-05 10:30 AM",
      vitals: {
        bloodPressure: "120/80 mmHg",
        heartRate: "72 bpm",
        temperature: "98.6°F",
        bloodGlucose: "100 mg/dL",
        weight: "180 lbs",
      },
      alerts: [],
      deviceStatus: "connected",
      data: {
        bloodPressure: [
          { date: "2025-06-01", systolic: 125, diastolic: 82 },
          { date: "2025-06-02", systolic: 120, diastolic: 80 },
          { date: "2025-06-03", systolic: 128, diastolic: 85 },
          { date: "2025-06-04", systolic: 130, diastolic: 88 },
          { date: "2025-06-05", systolic: 122, diastolic: 80 },
        ],
        heartRate: [
          { date: "2025-06-01", value: 75 },
          { date: "2025-06-02", value: 70 },
          { date: "2025-06-03", value: 78 },
          { date: "2025-06-04", value: 80 },
          { date: "2025-06-05", value: 72 },
        ],
      },
    },
    {
      id: "p2",
      name: "Jane Smith",
      status: "alert",
      lastReading: "2025-06-05 11:00 AM",
      vitals: {
        bloodPressure: "145/95 mmHg",
        heartRate: "98 bpm",
        temperature: "99.1°F",
        bloodGlucose: "180 mg/dL",
        weight: "155 lbs",
      },
      alerts: ["High Blood Glucose", "Elevated Blood Pressure"],
      deviceStatus: "connected",
      data: {
        bloodPressure: [
          { date: "2025-06-01", systolic: 138, diastolic: 90 },
          { date: "2025-06-02", systolic: 140, diastolic: 92 },
          { date: "2025-06-03", systolic: 142, diastolic: 93 },
          { date: "2025-06-04", systolic: 148, diastolic: 96 },
          { date: "2025-06-05", systolic: 145, diastolic: 95 },
        ],
        heartRate: [
          { date: "2025-06-01", value: 85 },
          { date: "2025-06-02", value: 90 },
          { date: "2025-06-03", value: 92 },
          { date: "2025-06-04", value: 95 },
          { date: "2025-06-05", value: 98 },
        ],
      },
    },
    {
      id: "p3",
      name: "Robert Brown",
      status: "disconnected",
      lastReading: "2025-06-03 08:00 AM",
      vitals: {
        bloodPressure: "N/A",
        heartRate: "N/A",
        temperature: "N/A",
        bloodGlucose: "N/A",
        weight: "N/A",
      },
      alerts: ["Device Disconnected"],
      deviceStatus: "disconnected",
      data: { bloodPressure: [], heartRate: [] },
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "stable":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Stable
          </Badge>
        )
      case "alert":
        return (
          <Badge variant="destructive" className="status-badge-error">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Alert
          </Badge>
        )
      case "disconnected":
        return (
          <Badge variant="secondary">
            <XCircle className="mr-1 h-3 w-3" />
            Disconnected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getDeviceStatusBadge = (status: string) => {
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
            <XCircle className="mr-1 h-3 w-3" />
            Disconnected
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
              Remote Patient Monitoring (RPM) Dashboard
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Monitor vital signs and health data from connected devices
            </p>
          </div>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Manage Devices
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Monitored Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-250px)] pr-4">
              <div className="space-y-4">
                {patients.map((patient) => (
                  <Card key={patient.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{patient.name}</h3>
                        {getStatusBadge(patient.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">Last Reading: {patient.lastReading}</p>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center text-sm">
                          <Heart className="mr-2 h-4 w-4 text-red-500" />
                          BP: {patient.vitals.bloodPressure}
                        </div>
                        <div className="flex items-center text-sm">
                          <Activity className="mr-2 h-4 w-4 text-blue-500" />
                          HR: {patient.vitals.heartRate}
                        </div>
                        <div className="flex items-center text-sm">
                          <Thermometer className="mr-2 h-4 w-4 text-orange-500" />
                          Temp: {patient.vitals.temperature}
                        </div>
                        <div className="flex items-center text-sm">
                          <Droplet className="mr-2 h-4 w-4 text-purple-500" />
                          Glucose: {patient.vitals.bloodGlucose}
                        </div>
                        <div className="flex items-center text-sm">
                          <Weight className="mr-2 h-4 w-4 text-green-500" />
                          Weight: {patient.vitals.weight}
                        </div>
                      </div>
                      {patient.alerts.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {patient.alerts.map((alert, index) => (
                            <Badge key={index} variant="destructive" className="w-full justify-center">
                              <AlertTriangle className="mr-1 h-3 w-3" />
                              {alert}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span>Device Status:</span> {getDeviceStatusBadge(patient.deviceStatus)}
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Full Chart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Data Visualization & Trends */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="mr-2 h-5 w-5" />
                Blood Pressure Trends (Last 5 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  systolic: {
                    label: "Systolic",
                    color: "hsl(var(--chart-1))",
                  },
                  diastolic: {
                    label: "Diastolic",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={patients[0].data.bloodPressure}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="systolic" stroke="var(--color-systolic)" name="Systolic" />
                    <Line type="monotone" dataKey="diastolic" stroke="var(--color-diastolic)" name="Diastolic" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                Heart Rate Trends (Last 5 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Heart Rate",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={patients[0].data.heartRate}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="value" stroke="var(--color-value)" name="Heart Rate" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {patients.filter((p) => p.alerts.length > 0).length === 0 ? (
                <p className="text-muted-foreground">No recent alerts.</p>
              ) : (
                patients
                  .filter((p) => p.alerts.length > 0)
                  .map((p) => (
                    <div key={p.id} className="p-3 border rounded-lg bg-red-50 dark:bg-red-950">
                      <p className="font-semibold text-red-700 dark:text-red-300">{p.name}</p>
                      <ul className="list-disc pl-5 text-sm text-red-600 dark:text-red-400">
                        {p.alerts.map((alert, index) => (
                          <li key={index}>{alert}</li>
                        ))}
                      </ul>
                      <Button variant="destructive" size="sm" className="mt-2">
                        Resolve
                      </Button>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
