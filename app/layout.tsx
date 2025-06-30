import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "StationConnect 2.0",
  description: "A secure telemedicine platform for healthcare professionals",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
          storageKey="stationconnect-theme"
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
