"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Activity, Users, Video, Clock, CheckCircle2, Hourglass, BarChart, ArrowUp, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function RealtimeOperationalDashboardScreen() {
  const [dashboardData, setDashboardData] = useState({
    activeCalls: 0,
    patientsInQueue: 0,
    avgWaitTime: "00:00",
    providersOnline: 0,
    callCompletionRate: 0,
    queueBreakdown: {
      triage: 0,
      waiting: 0,
      inCall: 0,
    },
    dailyCallVolume: 0,
    dailyCallVolumeChange: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardData((prevData) => {
        const newActiveCalls = Math.floor(Math.random() * 10) + 5 // 5-14
        const newPatientsInQueue = Math.floor(Math.random() * 15) + 3 // 3-17
        const newProvidersOnline = Math.floor(Math.random() * 20) + 10 // 10-29
        const newCallCompletionRate = Math.min(100, Math.floor(Math.random() * 10) + 85) // 85-95%
        const newAvgWaitTimeSeconds = Math.floor(Math.random() * 120) + 30 // 30-150 seconds
        const minutes = Math.floor(newAvgWaitTimeSeconds / 60)
        const seconds = newAvgWaitTimeSeconds % 60
        const newAvgWaitTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

        const newTriage = Math.floor(Math.random() * newPatientsInQueue * 0.3)
        const newWaiting = Math.floor(Math.random() * (newPatientsInQueue - newTriage) * 0.7)
        const newInCall = newPatientsInQueue - newTriage - newWaiting

        const newDailyCallVolume = prevData.dailyCallVolume + Math.floor(Math.random() * 5) - 2 // +/- 2 calls
        const newDailyCallVolumeChange = newDailyCallVolume - prevData.dailyCallVolume

        return {
          activeCalls: newActiveCalls,
          patientsInQueue: newPatientsInQueue,
          avgWaitTime: newAvgWaitTime,
          providersOnline: newProvidersOnline,
          callCompletionRate: newCallCompletionRate,
          queueBreakdown: {
            triage: newTriage,
            waiting: newWaiting,
            inCall: newInCall,
          },
          dailyCallVolume: Math.max(0, newDailyCallVolume), // Ensure it doesn't go negative
          dailyCallVolumeChange: newDailyCallVolumeChange,
        }
      })
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 p-6">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6 -m-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Real-time Operational Dashboard
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Live overview of platform performance and patient flow
            </p>
          </div>
          <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Telemedicine Calls</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              {dashboardData.activeCalls}
            </div>
            <p className="text-xs text-muted-foreground">Currently in session</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patients in Queue</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              {dashboardData.patientsInQueue}
            </div>
            <p className="text-xs text-muted-foreground">Waiting for provider</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Wait Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              {dashboardData.avgWaitTime}
            </div>
            <p className="text-xs text-muted-foreground">Current average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Providers Online</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              {dashboardData.providersOnline}
            </div>
            <p className="text-xs text-muted-foreground">Available for consults</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Call Completion Rate */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Call Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Progress value={dashboardData.callCompletionRate} className="h-3 flex-1" />
              <span className="text-lg font-bold">{dashboardData.callCompletionRate}%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Percentage of calls successfully completed in the last hour.
            </p>
          </CardContent>
        </Card>

        {/* Daily Call Volume */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2 h-5 w-5" />
              Daily Call Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              {dashboardData.dailyCallVolume}
            </div>
            <div
              className={`flex items-center text-sm ${
                dashboardData.dailyCallVolumeChange >= 0 ? "text-clinical-green-600" : "text-red-600"
              }`}
            >
              {dashboardData.dailyCallVolumeChange >= 0 ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              {Math.abs(dashboardData.dailyCallVolumeChange)} calls from previous hour
            </div>
            <p className="text-xs text-muted-foreground mt-2">Total calls handled today.</p>
          </CardContent>
        </Card>

        {/* Patient Queue Breakdown */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Hourglass className="mr-2 h-5 w-5" />
              Patient Queue Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="bg-clinical-blue-100 dark:bg-clinical-blue-900 p-2 rounded-full">
                  <Users className="h-5 w-5 text-clinical-blue-700 dark:text-clinical-blue-300" />
                </div>
                <div>
                  <div className="text-xl font-bold">{dashboardData.queueBreakdown.triage}</div>
                  <div className="text-sm text-muted-foreground">In Triage</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
                  <Hourglass className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
                </div>
                <div>
                  <div className="text-xl font-bold">{dashboardData.queueBreakdown.waiting}</div>
                  <div className="text-sm text-muted-foreground">Waiting for Provider</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="bg-clinical-green-100 dark:bg-clinical-green-900 p-2 rounded-full">
                  <Video className="h-5 w-5 text-clinical-green-700 dark:text-clinical-green-300" />
                </div>
                <div>
                  <div className="text-xl font-bold">{dashboardData.queueBreakdown.inCall}</div>
                  <div className="text-sm text-muted-foreground">In Active Call</div>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="text-sm text-muted-foreground">
              This dashboard provides a real-time snapshot of key operational metrics.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
