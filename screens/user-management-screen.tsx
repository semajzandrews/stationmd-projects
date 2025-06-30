"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Mail, Search, Shield, UserCheck, UserMinus, UserPlus } from "lucide-react"

export function UserManagementScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const users = [
    {
      id: "p1",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@stationmd.com",
      role: "physician",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      status: "active",
      lastActive: "2025-06-05T14:00:00Z",
    },
    {
      id: "n1",
      name: "Michael Chen",
      email: "michael.chen@stationmd.com",
      role: "navigator",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
      status: "active",
      lastActive: "2025-06-05T13:30:00Z",
    },
    {
      id: "a1",
      name: "Alex Rodriguez",
      email: "alex.rodriguez@stationmd.com",
      role: "admin",
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
      status: "active",
      lastActive: "2025-06-05T12:00:00Z",
    },
    {
      id: "p2",
      name: "Dr. Emily White",
      email: "emily.white@stationmd.com",
      role: "physician",
      avatar: "/placeholder.svg?height=40&width=40&text=EW",
      status: "inactive",
      lastActive: "2025-06-03T09:00:00Z",
    },
    {
      id: "n2",
      name: "Jessica Lee",
      email: "jessica.lee@stationmd.com",
      role: "navigator",
      avatar: "/placeholder.svg?height=40&width=40&text=JL",
      status: "active",
      lastActive: "2025-06-05T11:00:00Z",
    },
  ]

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "physician":
        return <Badge variant="default">Physician</Badge>
      case "navigator":
        return <Badge variant="secondary">Navigator</Badge>
      case "admin":
        return <Badge variant="outline">Admin</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getUserStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Active
          </Badge>
        )
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">User Management</h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Manage platform users, roles, and permissions
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users by name, email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="physician">Physician</SelectItem>
              <SelectItem value="navigator">Navigator</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="role">Role</SelectItem>
              <SelectItem value="lastActive">Last Active</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                {getRoleBadge(user.role)}
                {getUserStatusBadge(user.status)}
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
                </div>
                <div className="flex items-center">
                  <UserCheck className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Last Active: {new Date(user.lastActive).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="destructive" className="flex-1">
                  <UserMinus className="mr-2 h-4 w-4" />
                  Deactivate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
