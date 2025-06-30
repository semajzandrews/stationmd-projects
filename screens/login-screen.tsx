"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, Mail } from "lucide-react"

export function LoginScreen() {
  const [email, setEmail] = useState("sarah.johnson@stationmd.com")
  const [password, setPassword] = useState("password123")
  const [rememberDevice, setRememberDevice] = useState(false)
  const [role, setRole] = useState("physician")

  const handleRoleSelect = (role: string) => {
    setRole(role)
    switch (role) {
      case "physician":
        setEmail("sarah.johnson@stationmd.com")
        break
      case "navigator":
        setEmail("michael.chen@stationmd.com")
        break
      case "admin":
        setEmail("alex.rodriguez@stationmd.com")
        break
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-clinical-blue-50 dark:bg-clinical-blue-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-clinical-blue-800 dark:text-clinical-blue-100">StationConnect 2.0</h1>
          <p className="text-clinical-gray-600 dark:text-clinical-gray-300">Secure telemedicine platform</p>
        </div>

        <Card className="border-clinical-blue-200 dark:border-clinical-blue-800">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Access your StationConnect account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="physician" onValueChange={handleRoleSelect}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="physician">Physician</TabsTrigger>
                <TabsTrigger value="navigator">Navigator</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@stationmd.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button className="text-sm text-clinical-blue-600 hover:text-clinical-blue-800 dark:text-clinical-blue-400 dark:hover:text-clinical-blue-300">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberDevice}
                    onCheckedChange={(checked) => setRememberDevice(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember this device
                  </Label>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="hipaa-notice text-center w-full">
              This system contains protected health information (PHI). Unauthorized access is prohibited and may result
              in penalties under HIPAA.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
