"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Book, Search, Video, FileText, ExternalLink, Share2, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PatientEducationScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const educationalResources = [
    {
      id: "res1",
      title: "Understanding Hypertension",
      category: "Cardiology",
      type: "video",
      description: "An animated video explaining what hypertension is, its causes, and management.",
      url: "https://www.youtube.com/watch?v=example1",
      duration: "5:30",
    },
    {
      id: "res2",
      title: "Managing Type 2 Diabetes at Home",
      category: "Endocrinology",
      type: "article",
      description: "A comprehensive guide on diet, exercise, and medication for diabetes management.",
      url: "https://www.example.com/diabetes-guide",
      readTime: "10 min",
    },
    {
      id: "res3",
      title: "Coping with Chronic Pain",
      category: "Pain Management",
      type: "pdf",
      description: "Downloadable PDF with strategies for living with chronic pain.",
      url: "/documents/chronic-pain-guide.pdf",
      fileSize: "2.5 MB",
    },
    {
      id: "res4",
      title: "Introduction to Telemedicine",
      category: "General Health",
      type: "video",
      description: "A short video explaining how telemedicine works and its benefits.",
      url: "https://www.youtube.com/watch?v=example2",
      duration: "3:00",
    },
    {
      id: "res5",
      title: "Flu vs. Common Cold: What's the Difference?",
      category: "Infectious Diseases",
      type: "article",
      description: "Learn to differentiate between flu and common cold symptoms and when to seek care.",
      url: "https://www.example.com/flu-cold",
      readTime: "5 min",
    },
  ]

  const filteredResources = educationalResources.filter((resource) => {
    const matchesCategory = filterCategory === "all" || resource.category === filterCategory
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4 text-clinical-blue-500" />
      case "article":
        return <FileText className="h-4 w-4 text-clinical-green-500" />
      case "pdf":
        return <Book className="h-4 w-4 text-clinical-orange-500" />
      default:
        return <Book className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Patient Education Library
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Provide patients with trusted health information and resources
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Resource
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources by title, topic..."
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
              <SelectItem value="Pain Management">Pain Management</SelectItem>
              <SelectItem value="General Health">General Health</SelectItem>
              <SelectItem value="Infectious Diseases">Infectious Diseases</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length === 0 ? (
          <div className="lg:col-span-3 text-center py-12 text-muted-foreground">
            No educational resources found matching your criteria.
          </div>
        ) : (
          filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    {getResourceTypeIcon(resource.type)}
                    <span className="ml-2">{resource.title}</span>
                  </CardTitle>
                  <Badge variant="outline">{resource.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Type:</span>{" "}
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </div>
                  {resource.duration && (
                    <div>
                      <span className="font-medium">Duration:</span> {resource.duration}
                    </div>
                  )}
                  {resource.readTime && (
                    <div>
                      <span className="font-medium">Read Time:</span> {resource.readTime}
                    </div>
                  )}
                  {resource.fileSize && (
                    <div>
                      <span className="font-medium">File Size:</span> {resource.fileSize}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Resource
                    </a>
                  </Button>
                  <Button className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share with Patient
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
