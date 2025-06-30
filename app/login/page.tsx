"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Fingerprint, Lock, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LoadingScreen } from "@/components/loading-screen"

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading, error } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberDevice, setRememberDevice] = useState(false)
  const [role, setRole] = useState("physician")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login({ email, password, rememberDevice })
  }

  const handleRoleSelect = (role: string) => {
    setRole(role)

    // Pre-fill email based on role for demo purposes
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

    setPassword("password123")
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-clinical-blue-50 dark:bg-clinical-blue-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/stationconnect-logo.png"
              alt="StationConnect Logo"
              width={240}
              height={80}
              className="h-20 w-auto"
            />
          </div>
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

              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-clinical-blue-600 hover:text-clinical-blue-800 dark:text-clinical-blue-400 dark:hover:text-clinical-blue-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
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

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full">
                  <Fingerprint className="mr-2 h-4 w-4" />
                  Biometric Authentication
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
