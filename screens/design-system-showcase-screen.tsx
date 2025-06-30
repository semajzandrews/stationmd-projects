"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  User,
  Clock,
  Plus,
  Search,
  Edit,
  Building,
  MapPin,
  Users,
  Activity,
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  Stethoscope,
  Calendar,
  FileText,
  Video,
  Bell,
  Thermometer,
  Heart,
  Fingerprint,
  Monitor,
  Tablet,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ClipboardList,
  BarChart2,
  Settings,
  Shield,
  BriefcaseMedical,
  Handshake,
  Workflow,
  BookOpen,
  Cloudy,
  Database,
  Link,
  Zap,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DesignSystemShowcaseScreen() {
  const allColors = {
    Primary: "hsl(var(--primary))",
    "Primary Foreground": "hsl(var(--primary-foreground))",
    Secondary: "hsl(var(--secondary))",
    "Secondary Foreground": "hsl(var(--secondary-foreground))",
    Destructive: "hsl(var(--destructive))",
    "Destructive Foreground": "hsl(var(--destructive-foreground))",
    Muted: "hsl(var(--muted))",
    "Muted Foreground": "hsl(var(--muted-foreground))",
    Accent: "hsl(var(--accent))",
    "Accent Foreground": "hsl(var(--accent-foreground))",
    Background: "hsl(var(--background))",
    Foreground: "hsl(var(--foreground))",
    Card: "hsl(var(--card))",
    "Card Foreground": "hsl(var(--card-foreground))",
    Popover: "hsl(var(--popover))",
    "Popover Foreground": "hsl(var(--popover-foreground))",
    Border: "hsl(var(--border))",
    Input: "hsl(var(--input))",
    Ring: "hsl(var(--ring))",
    Success: "hsl(var(--success))",
    Warning: "hsl(var(--warning))",
    Info: "hsl(var(--info))",
    Error: "hsl(var(--error))",
    "Clinical Blue 50": "#f0f7ff",
    "Clinical Blue 100": "#e0eefe",
    "Clinical Blue 200": "#bae0fd",
    "Clinical Blue 300": "#7cc8fb",
    "Clinical Blue 400": "#36aaf5",
    "Clinical Blue 500": "#0d8dde",
    "Clinical Blue 600": "#0070bd",
    "Clinical Blue 700": "#015999",
    "Clinical Blue 800": "#064a7f",
    "Clinical Blue 900": "#0a3e6a",
    "Clinical Blue 950": "#07284a",
    "Clinical Green 50": "#f0fdf6",
    "Clinical Green 100": "#dcfce9",
    "Clinical Green 200": "#bbf7d6",
    "Clinical Green 300": "#86ebb6",
    "Clinical Green 400": "#4cd58a",
    "Clinical Green 500": "#24b866",
    "Clinical Green 600": "#16954f",
    "Clinical Green 700": "#157541",
    "Clinical Green 800": "#165c38",
    "Clinical Green 900": "#144c30",
    "Clinical Green 950": "#062a19",
    "Clinical Orange 50": "#fff8ed",
    "Clinical Orange 100": "#ffefd4",
    "Clinical Orange 200": "#ffdba8",
    "Clinical Orange 300": "#ffc070",
    "Clinical Orange 400": "#ff9a36",
    "Clinical Orange 500": "#ff7d10",
    "Clinical Orange 600": "#f05e06",
    "Clinical Orange 700": "#c74208",
    "Clinical Orange 800": "#9e330f",
    "Clinical Orange 900": "#802c10",
    "Clinical Orange 950": "#451306",
    "Clinical Gray 50": "#f7f8f9",
    "Clinical Gray 100": "#eef0f2",
    "Clinical Gray 200": "#d9dde3",
    "Clinical Gray 300": "#b9c2cb",
    "Clinical Gray 400": "#94a1af",
    "Clinical Gray 500": "#768595",
    "Clinical Gray 600": "#5f6c7b",
    "Clinical Gray 700": "#4d5765",
    "Clinical Gray 800": "#424a55",
    "Clinical Gray 900": "#393f48",
    "Clinical Gray 950": "#24282e",
  }

  const shadeClasses = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]

  const customClasses = [
    { name: "hipaa-notice", description: "Text for HIPAA compliance disclaimers." },
    { name: "clinical-card", description: "Base style for primary content cards." },
    { name: "status-badge", description: "Base style for status indicators." },
    { name: "status-badge-success", description: "Green status badge." },
    { name: "status-badge-warning", description: "Orange status badge." },
    { name: "status-badge-info", description: "Blue status badge." },
    { name: "status-badge-error", description: "Red status badge." },
    { name: "patient-card", description: "Specific styling for patient display cards." },
    { name: "patient-card-header", description: "Header section of patient cards." },
    { name: "patient-card-body", description: "Body section of patient cards." },
    { name: "patient-card-footer", description: "Footer section of patient cards." },
    { name: "vital-badge", description: "Base style for vital sign indicators." },
    { name: "vital-badge-normal", description: "Green vital sign indicator." },
    { name: "vital-badge-warning", description: "Orange vital sign indicator." },
    { name: "vital-badge-critical", description: "Red vital sign indicator." },
    { name: "telemedicine-container", description: "Grid layout for telemedicine call screen." },
    { name: "telemedicine-video", description: "Video area styling for telemedicine call screen." },
    { name: "telemedicine-sidebar", description: "Sidebar styling for telemedicine call screen." },
    { name: "telemedicine-controls", description: "Controls styling for telemedicine call screen." },
  ]

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 p-8">
      <h1 className="text-3xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300 mb-6">
        StationConnect 2.0 Design System
      </h1>
      <p className="text-clinical-gray-600 dark:text-clinical-gray-400 mb-8">
        A comprehensive overview of all UI components, styles, and utilities used across the platform.
      </p>

      {/* Typography */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Heading 1 - StationConnect 2.0 (Bold)</h1>
            <p className="text-xs text-muted-foreground">.text-4xl .font-bold .text-foreground</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-clinical-blue-700">
              Heading 2 - Design Showcase (Semibold, Clinical Blue)
            </h2>
            <p className="text-xs text-muted-foreground">.text-3xl .font-semibold .text-clinical-blue-700</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground">Heading 3 - Component Section (Semibold)</h3>
            <p className="text-xs text-muted-foreground">.text-2xl .font-semibold .text-foreground</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-foreground">Heading 4 - Sub-section Title (Semibold)</h4>
            <p className="text-xs text-muted-foreground">.text-xl .font-semibold .text-foreground</p>
          </div>
          <div>
            <p className="text-lg text-foreground">Large Paragraph Text</p>
            <p className="text-xs text-muted-foreground">.text-lg .text-foreground</p>
          </div>
          <div>
            <p className="text-base text-foreground">
              This is a paragraph of body text. It conveys general information and details within the application.
            </p>
            <p className="text-xs text-muted-foreground">.text-base .text-foreground</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              This is muted text, often used for secondary information or descriptions.
            </p>
            <p className="text-xs text-muted-foreground">.text-sm .text-muted-foreground</p>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">This is small, medium-weight text.</p>
            <p className="text-xs text-muted-foreground">.text-xs .font-medium .text-foreground</p>
          </div>
          <div>
            <span className="text-clinical-green-600 font-medium">Success Text Example</span>
            <p className="text-xs text-muted-foreground">.text-clinical-green-600 .font-medium</p>
          </div>
          <div>
            <span className="text-destructive font-medium">Error/Destructive Text Example</span>
            <p className="text-xs text-muted-foreground">.text-destructive .font-medium</p>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-end gap-4">
          <div>
            <Button>Default Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{"<Button>"}</p>
          </div>
          <div>
            <Button variant="secondary">Secondary Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button variant="secondary">'}</p>
          </div>
          <div>
            <Button variant="outline">Outline Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button variant="outline">'}</p>
          </div>
          <div>
            <Button variant="ghost">Ghost Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button variant="ghost">'}</p>
          </div>
          <div>
            <Button variant="link">Link Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button variant="link">'}</p>
          </div>
          <div>
            <Button variant="destructive">Destructive Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button variant="destructive">'}</p>
          </div>
          <div>
            <Button size="sm">Small Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button size="sm">'}</p>
          </div>
          <div>
            <Button size="lg">Large Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button size="lg">'}</p>
          </div>
          <div>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground mt-1">{'<Button size="icon">'}</p>
          </div>
          <div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Button with Icon
            </Button>
            <p className="text-xs text-muted-foreground mt-1">{"<Button> (with icon)"}</p>
          </div>
          <div>
            <Button disabled>Disabled Button</Button>
            <p className="text-xs text-muted-foreground mt-1">{"<Button disabled>"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Inputs & Forms */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Inputs & Forms</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="text-input">Text Input</Label>
            <Input id="text-input" placeholder="Enter text" />
            <p className="text-xs text-muted-foreground">{"<Input />"}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-input">Password Input</Label>
            <Input id="password-input" type="password" placeholder="Enter password" />
            <p className="text-xs text-muted-foreground">{'<Input type="password" />'}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="search-input">Search Input</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="search-input" placeholder="Search..." className="pl-10" />
            </div>
            <p className="text-xs text-muted-foreground">{"<Input> (with icon)"}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="select-input">Select Input</Label>
            <Select>
              <SelectTrigger id="select-input">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">{"<Select />"}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="checkbox-example" />
            <Label htmlFor="checkbox-example">Remember me</Label>
            <p className="text-xs text-muted-foreground">{"<Checkbox />"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Cards</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a standard card component, useful for grouping related content.
              </p>
              <Button className="mt-4">Action</Button>
            </CardContent>
          </Card>
          <div className="clinical-card p-4">
            <h3 className="font-semibold text-lg mb-2">Clinical Card Example</h3>
            <p className="text-sm text-muted-foreground">
              This card uses the custom `.clinical-card` utility class defined in `globals.css`.
            </p>
            <p className="text-xs text-muted-foreground mt-2">.clinical-card</p>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-end">
          <div>
            <Badge>Default Badge</Badge>
            <p className="text-xs text-muted-foreground mt-1">{"<Badge>"}</p>
          </div>
          <div>
            <Badge variant="secondary">Secondary</Badge>
            <p className="text-xs text-muted-foreground mt-1">{'<Badge variant="secondary">'}</p>
          </div>
          <div>
            <Badge variant="outline">Outline</Badge>
            <p className="text-xs text-muted-foreground mt-1">{'<Badge variant="outline">'}</p>
          </div>
          <div>
            <Badge variant="destructive">Destructive</Badge>
            <p className="text-xs text-muted-foreground mt-1">{'<Badge variant="destructive">'}</p>
          </div>
          <div>
            <span className="status-badge status-badge-success">Success Status</span>
            <p className="text-xs text-muted-foreground mt-1">.status-badge .status-badge-success</p>
          </div>
          <div>
            <span className="status-badge status-badge-warning">Warning Status</span>
            <p className="text-xs text-muted-foreground mt-1">.status-badge .status-badge-warning</p>
          </div>
          <div>
            <span className="status-badge status-badge-info">Info Status</span>
            <p className="text-xs text-muted-foreground mt-1">.status-badge .status-badge-info</p>
          </div>
          <div>
            <span className="status-badge status-badge-error">Error Status</span>
            <p className="text-xs text-muted-foreground mt-1">.status-badge .status-badge-error</p>
          </div>
          <div>
            <span className="vital-badge vital-badge-normal">
              <CheckCircle className="h-3 w-3" /> Normal Vitals
            </span>
            <p className="text-xs text-muted-foreground mt-1">.vital-badge .vital-badge-normal</p>
          </div>
          <div>
            <span className="vital-badge vital-badge-warning">
              <AlertTriangle className="h-3 w-3" /> Warning Vitals
            </span>
            <p className="text-xs text-muted-foreground mt-1">.vital-badge .vital-badge-warning</p>
          </div>
          <div>
            <span className="vital-badge vital-badge-critical">
              <XCircle className="h-3 w-3" /> Critical Vitals
            </span>
            <p className="text-xs text-muted-foreground mt-1">.vital-badge .vital-badge-critical</p>
          </div>
        </CardContent>
      </Card>

      {/* Other Components */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Other Components</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Progress Bar</h4>
            <Progress value={66} className="w-[60%]" />
            <p className="text-xs text-muted-foreground">{"<Progress />"}</p>

            <h4 className="font-semibold text-lg mt-6">Avatar</h4>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/placeholder-40x40.png" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">Physician</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{"<Avatar />, <AvatarImage />, <AvatarFallback />"}</p>

            <h4 className="font-semibold text-lg mt-6">Tabs</h4>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 border rounded-md mt-2">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password" className="p-4 border rounded-md mt-2">
                Change your password here.
              </TabsContent>
            </Tabs>
            <p className="text-xs text-muted-foreground">
              {"<Tabs />, <TabsList />, <TabsTrigger />, <TabsContent />"}
            </p>

            <h4 className="font-semibold text-lg mt-6">Separator</h4>
            <div className="space-y-1">
              <p className="text-sm">Content above separator.</p>
              <Separator />
              <p className="text-sm">Content below separator.</p>
            </div>
            <p className="text-xs text-muted-foreground">{"<Separator />"}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Dialog (Modal)</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </DialogContent>
            </Dialog>
            <p className="text-xs text-muted-foreground">{"<Dialog />, <DialogTrigger />, <DialogContent />"}</p>

            <h4 className="font-semibold text-lg mt-6">Popover</h4>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p className="text-sm">Place any content inside the popover.</p>
                <Input placeholder="Enter value..." className="mt-2" />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-muted-foreground">{"<Popover />, <PopoverTrigger />, <PopoverContent />"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Custom Utility Classes Showcase */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Custom Utility Classes (`app/globals.css`)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">.hipaa-notice</h4>
            <div className="hipaa-notice">
              This system contains protected health information (PHI). Unauthorized access is prohibited and may result
              in penalties under HIPAA.
            </div>
            <p className="text-xs text-muted-foreground mt-2">Example of `.hipaa-notice` class usage.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">.clinical-card</h4>
            <div className="clinical-card p-4">
              <p className="text-sm text-muted-foreground">
                This `div` demonstrates the `.clinical-card` class, providing standard clinical styling.
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Example of `.clinical-card` class usage.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Telemedicine Layout Classes</h4>
            <div className="border border-border rounded-md p-4">
              <p className="text-sm font-medium mb-2">Visualizing: .telemedicine-container (grid)</p>
              <div className="telemedicine-container h-[200px]">
                <div className="telemedicine-video flex items-center justify-center text-white">
                  Video Area (.telemedicine-video)
                </div>
                <div className="telemedicine-sidebar flex items-center justify-center">
                  Sidebar (.telemedicine-sidebar)
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Classes like `.telemedicine-container`, `.telemedicine-video`, `.telemedicine-sidebar` define specific
              grid/flex layouts and styling for the telemedicine call screen.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Iconography */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Icons (Lucide React)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 text-muted-foreground">
          {[
            { icon: Phone, name: "Phone" },
            { icon: Mail, name: "Mail" },
            { icon: User, name: "User" },
            { icon: Clock, name: "Clock" },
            { icon: Plus, name: "Plus" },
            { icon: Search, name: "Search" },
            { icon: Edit, name: "Edit" },
            { icon: Building, name: "Building" },
            { icon: MapPin, name: "MapPin" },
            { icon: Users, name: "Users" },
            { icon: Activity, name: "Activity" },
            { icon: CheckCircle, name: "CheckCircle" },
            { icon: XCircle, name: "XCircle" },
            { icon: Info, name: "Info" },
            { icon: AlertTriangle, name: "AlertTriangle" },
            { icon: Stethoscope, name: "Stethoscope" },
            { icon: Calendar, name: "Calendar" },
            { icon: FileText, name: "FileText" },
            { icon: Video, name: "Video" },
            { icon: Bell, name: "Bell" },
            { icon: Thermometer, name: "Thermometer" },
            { icon: Heart, name: "Heart" },
            { icon: Fingerprint, name: "Fingerprint" },
            { icon: Monitor, name: "Monitor" },
            { icon: Tablet, name: "Tablet" },
            { icon: Smartphone, name: "Smartphone" },
            { icon: ChevronLeft, name: "ChevronLeft" },
            { icon: ChevronRight, name: "ChevronRight" },
            { icon: MessageSquare, name: "MessageSquare" },
            { icon: ClipboardList, name: "ClipboardList" },
            { icon: BarChart2, name: "BarChart2" },
            { icon: Settings, name: "Settings" },
            { icon: Shield, name: "Shield" },
            { icon: BriefcaseMedical, name: "BriefcaseMedical" },
            { icon: Handshake, name: "Handshake" },
            { icon: Workflow, name: "Workflow" },
            { icon: BookOpen, name: "BookOpen" },
            { icon: Cloudy, name: "Cloudy" },
            { icon: Database, name: "Database" },
            { icon: Link, name: "Link" },
            { icon: Zap, name: "Zap" },
          ].map((iconInfo, index) => (
            <div key={index} className="flex flex-col items-center w-20">
              <iconInfo.icon className="h-6 w-6 mb-1" />
              <span className="text-xs text-center">{iconInfo.name}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Colors */}
      <Card className="mb-8 clinical-card">
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
          {Object.entries(allColors).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-md mb-2 border border-border" style={{ backgroundColor: value }} />
              <span className="text-xs text-center font-medium leading-tight">{name}</span>
              <span className="text-xs text-muted-foreground text-center">{value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <p className="text-sm text-clinical-gray-600 dark:text-clinical-gray-400">
        This design system showcase is built using Tailwind CSS utility classes and shadcn/ui components, ensuring
        consistency and reusability across StationConnect 2.0.
      </p>
    </div>
  )
}
