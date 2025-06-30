"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Book, Search, FileText, Plus, ExternalLink, Tag, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ClinicalGuidelinesScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const guidelines = [
    {
      id: "g1",
      title: "Hypertension Management Guidelines (JNC 8)",
      category: "Cardiology",
      type: "protocol",
      description:
        "Latest guidelines for the prevention, detection, evaluation, and management of high blood pressure.",
      lastUpdated: "2023-11-15",
      tags: ["blood pressure", "cardiac", "adult"],
      severity: "standard",
    },
    {
      id: "g2",
      title: "Diabetic Ketoacidosis (DKA) Protocol",
      category: "Endocrinology",
      type: "emergency-protocol",
      description: "Step-by-step protocol for the emergency management of DKA in adults.",
      lastUpdated: "2024-03-01",
      tags: ["diabetes", "emergency", "critical care"],
      severity: "critical",
    },
    {
      id: "g3",
      title: "Pediatric Asthma Exacerbation Management",
      category: "Pediatrics",
      type: "guideline",
      description: "Clinical guideline for assessing and treating acute asthma exacerbations in pediatric patients.",
      lastUpdated: "2023-09-20",
      tags: ["asthma", "pediatric", "respiratory"],
      severity: "standard",
    },
    {
      id: "g4",
      title: "Telemedicine Best Practices for Initial Consults",
      category: "General Telemedicine",
      type: "best-practice",
      description: "Recommendations for conducting effective and compliant initial telemedicine consultations.",
      lastUpdated: "2024-01-10",
      tags: ["telehealth", "consultation", "workflow"],
      severity: "standard",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return (
          <Badge variant="destructive" className="status-badge-error">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Critical
          </Badge>
        )
      case "standard":
        return <Badge variant="outline">Standard</Badge>
      default:
        return <Badge variant="secondary">{severity}</Badge>
    }
  }

  const filteredGuidelines = guidelines.filter((guideline) => {
    const matchesCategory = filterCategory === "all" || guideline.category === filterCategory
    const matchesType = filterType === "all" || guideline.type === filterType
    const matchesSearch =
      searchQuery === "" ||
      guideline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guideline.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Clinical Guidelines & Protocols
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Access and manage clinical best practices, protocols, and emergency procedures
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Guideline
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search guidelines by title, tag, content..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Cardiology">Cardiology</SelectItem>
              <SelectItem value="Endocrinology">Endocrinology</SelectItem>
              <SelectItem value="Pediatrics">Pediatrics</SelectItem>
              <SelectItem value="General Telemedicine">General Telemedicine</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="protocol">Protocol</SelectItem>
              <SelectItem value="emergency-protocol">Emergency Protocol</SelectItem>
              <SelectItem value="guideline">Guideline</SelectItem>
              <SelectItem value="best-practice">Best Practice</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuidelines.length === 0 ? (
          <div className="lg:col-span-3 text-center py-12 text-muted-foreground">
            No guidelines found matching your criteria.
          </div>
        ) : (
          filteredGuidelines.map((guideline) => (
            <Card key={guideline.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Book className="mr-2 h-5 w-5" />
                    {guideline.title}
                  </CardTitle>
                  {getSeverityBadge(guideline.severity)}
                </div>
                <p className="text-sm text-muted-foreground">{guideline.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Category:</span> {guideline.category}
                  </div>
                  <div>
                    <span className="font-medium">Type:</span>{" "}
                    {guideline.type.replace(/-/g, " ").charAt(0).toUpperCase() +
                      guideline.type.replace(/-/g, " ").slice(1)}
                  </div>
                  <div>
                    <span className="font-medium">Last Updated:</span> {guideline.lastUpdated}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {guideline.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Document
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
