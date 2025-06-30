"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react"
import { LoadingScreen } from "@/components/loading-screen"

export default function ForgotPasswordPage() {
  const { resetPassword, isLoading } = useAuth()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await resetPassword(email)
    setSubmitted(true)
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
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              {submitted
                ? "Check your email for reset instructions"
                : "Enter your email to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="h-12 w-12 text-clinical-green-500 mx-auto mb-4" />
                <p className="text-clinical-gray-700 dark:text-clinical-gray-300 mb-4">
                  We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the
                  instructions to reset your password.
                </p>
                <p className="text-sm text-clinical-gray-500 dark:text-clinical-gray-400">
                  If you don't see the email, please check your spam folder.
                </p>
              </div>
            ) : (
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

                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href="/login"
              className="flex items-center text-sm text-clinical-blue-600 hover:text-clinical-blue-800 dark:text-clinical-blue-400 dark:hover:text-clinical-blue-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
