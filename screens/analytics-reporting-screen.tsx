"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, PieChart, TrendingUp, Users, Clock, Phone, DollarSign, Download } from "lucide-react"

export function AnalyticsReportingScreen() {
  const [timeframe, setTimeframe] = useState("last-30-days")
  const [reportType, setReportType] = useState("overview")

  const mockData = {
    overview: {
      totalCalls: 1250,
      avgCallDuration: "10.5 min",
      patientsServed: 890,
      newPatients: 120,
      completedCallsRate: "92%",
      topConcern: "Respiratory Issues",
    },
    callVolume: {
      daily: [
        { date: "Jun 1", calls: 30 },
        { date: "Jun 2", calls: 35 },
        { date: "Jun 3", calls: 40 },
        { date: "Jun 4", calls: 38 },
        { date: "Jun 5", calls: 45 },
      ],
      monthly: [
        { month: "Jan", calls: 800 },
        { month: "Feb", calls: 950 },
        { month: "Mar", calls: 1100 },
        { month: "Apr", calls: 1050 },
        { month: "May", calls: 1200 },
      ],
    },
    patientDemographics: {
      ageGroups: [
        { group: "0-18", count: 50 },
        { group: "19-40", count: 150 },
        { group: "41-65", count: 300 },
        { group: "65+", count: 390 },
      ],
      gender: [
        { type: "Male", count: 400 },
        { type: "Female", count: 490 },
      ],
    },
    providerPerformance: {
      topProviders: [
        { name: "Dr. Sarah Johnson", calls: 250, avgDuration: "9 min" },
        { name: "Dr. Emily White", calls: 220, avgDuration: "11 min" },
        { name: "Dr. David Green", calls: 180, avgDuration: "10 min" },
      ],
      avgRating: "4.8/5",
    },
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Analytics & Reporting
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Gain insights into platform performance and patient care trends
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Report Type Selector */}
        <div className="mt-6 flex items-center space-x-4">
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="call-volume">Call Volume</SelectItem>
              <SelectItem value="patient-demographics">Patient Demographics</SelectItem>
              <SelectItem value="provider-performance">Provider Performance</SelectItem>
              <SelectItem value="financial">Financial (Placeholder)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reportType === "overview" && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockData.overview.totalCalls}</div>
                <p className="text-xs text-muted-foreground">+{mockData.overview.newPatients} new patients</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Call Duration</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockData.overview.avgCallDuration}</div>
                <p className="text-xs text-muted-foreground">Target: 10 min</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockData.overview.completedCallsRate}</div>
                <p className="text-xs text-muted-foreground">Above target</p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Call Volume Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <LineChart className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Line Chart</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {reportType === "call-volume" && (
          <>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Daily Call Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <BarChart className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Bar Chart (Daily)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Monthly Call Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <LineChart className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Line Chart (Monthly)</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {reportType === "patient-demographics" && (
          <>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Patients by Age Group</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <BarChart className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Bar Chart (Age)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Patients by Gender</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <PieChart className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Pie Chart (Gender)</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {reportType === "provider-performance" && (
          <>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Performing Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                  <Users className="h-32 w-32 text-muted-foreground" />
                  <span className="text-muted-foreground">Placeholder for Provider List/Chart</span>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {reportType === "financial" && (
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted rounded-md">
                <DollarSign className="h-32 w-32 text-muted-foreground" />
                <span className="text-muted-foreground">Placeholder for Financial Data</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
