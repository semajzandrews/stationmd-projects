"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Activity,
  Calendar,
  ChevronLeft,
  ClipboardList,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  QrCode,
  Settings,
  Users,
  Video,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const [collapsed, setCollapsed] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["physician", "navigator", "admin"],
    },
    {
      title: "Patient Queue",
      href: "/dashboard/queue",
      icon: Users,
      roles: ["physician", "navigator"],
    },
    {
      title: "Telemedicine",
      href: "/dashboard/telemedicine",
      icon: Video,
      roles: ["physician", "navigator"],
    },
    {
      title: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
      roles: ["physician", "navigator", "admin"],
    },
    {
      title: "Prescriptions",
      href: "/dashboard/prescriptions",
      icon: ClipboardList,
      roles: ["physician"],
    },
    {
      title: "Facilities",
      href: "/dashboard/facilities",
      icon: Home,
      roles: ["physician", "navigator", "admin"],
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: MessageSquare,
      roles: ["physician", "navigator", "admin"],
    },
    {
      title: "Documentation",
      href: "/dashboard/documentation",
      icon: FileText,
      roles: ["physician", "navigator", "admin"],
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: Activity,
      roles: ["admin"],
    },
    {
      title: "QR Generator",
      href: "/dashboard/qr-generator",
      icon: QrCode,
      roles: ["physician", "navigator", "admin"],
    },
  ]

  const filteredNavItems = navItems.filter((item) => user?.role && item.roles.includes(user.role))

  return (
    <div
      className={`bg-white dark:bg-clinical-gray-950 border-r border-border h-screen flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <Link href="/dashboard" className="font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
            StationConnect
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          <TooltipProvider delayDuration={0}>
            {filteredNavItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-clinical-blue-100 text-clinical-blue-700 dark:bg-clinical-blue-900 dark:text-clinical-blue-100"
                        : "text-clinical-gray-700 hover:bg-clinical-gray-100 dark:text-clinical-gray-300 dark:hover:bg-clinical-gray-800"
                    }`}
                  >
                    <item.icon className={`${collapsed ? "mx-auto" : "mr-3"} h-5 w-5`} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <TooltipProvider delayDuration={0}>
          <div className="space-y-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/dashboard/settings")
                      ? "bg-clinical-blue-100 text-clinical-blue-700 dark:bg-clinical-blue-900 dark:text-clinical-blue-100"
                      : "text-clinical-gray-700 hover:bg-clinical-gray-100 dark:text-clinical-gray-300 dark:hover:bg-clinical-gray-800"
                  }`}
                >
                  <Settings className={`${collapsed ? "mx-auto" : "mr-3"} h-5 w-5`} />
                  {!collapsed && <span>Settings</span>}
                </Link>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="right">Settings</TooltipContent>}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/help"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/dashboard/help")
                      ? "bg-clinical-blue-100 text-clinical-blue-700 dark:bg-clinical-blue-900 dark:text-clinical-blue-100"
                      : "text-clinical-gray-700 hover:bg-clinical-gray-100 dark:text-clinical-gray-300 dark:hover:bg-clinical-gray-800"
                  }`}
                >
                  <HelpCircle className={`${collapsed ? "mx-auto" : "mr-3"} h-5 w-5`} />
                  {!collapsed && <span>Help</span>}
                </Link>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="right">Help</TooltipContent>}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-start px-3 py-2 text-sm font-medium text-clinical-gray-700 hover:bg-clinical-gray-100 dark:text-clinical-gray-300 dark:hover:bg-clinical-gray-800`}
                  onClick={logout}
                >
                  <LogOut className={`${collapsed ? "mx-auto" : "mr-3"} h-5 w-5`} />
                  {!collapsed && <span>Logout</span>}
                </Button>
              </TooltipTrigger>
              {collapsed && <TooltipContent side="right">Logout</TooltipContent>}
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  )
}
