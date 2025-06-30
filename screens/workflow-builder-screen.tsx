"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Trash2,
  Edit,
  Save,
  Share2,
  LayoutGrid,
  MessageSquare,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Search,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function WorkflowBuilderScreen() {
  const [workflows, setWorkflows] = useState([
    {
      id: "workflow-1",
      name: "New Patient Onboarding",
      status: "Active",
      lastModified: "2024-06-20",
      steps: [
        {
          id: "step-1",
          type: "Patient Intake Form",
          description: "Collect demographic and medical history",
          icon: FileText,
        },
        { id: "step-2", type: "Consent Forms", description: "Obtain digital consent for treatment", icon: CheckCircle },
        {
          id: "step-3",
          type: "Schedule Initial Consult",
          description: "Book first telemedicine appointment",
          icon: Calendar,
        },
        {
          id: "step-4",
          type: "Welcome Message",
          description: "Send automated welcome and platform guide",
          icon: MessageSquare,
        },
      ],
    },
    {
      id: "workflow-2",
      name: "Post-Visit Follow-up",
      status: "Draft",
      lastModified: "2024-06-18",
      steps: [
        {
          id: "step-5",
          type: "Send Patient Survey",
          description: "Collect feedback on visit experience",
          icon: MessageSquare,
        },
        {
          id: "step-6",
          type: "Prescription Reminder",
          description: "Automated reminder for medication adherence",
          icon: Clock,
        },
      ],
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedWorkflow, setSelectedWorkflow] = useState(null as any)

  const filteredWorkflows = workflows.filter((workflow) =>
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddWorkflow = () => {
    const newWorkflow = {
      id: `workflow-${Date.now()}`,
      name: "New Workflow",
      status: "Draft",
      lastModified: new Date().toISOString().slice(0, 10),
      steps: [],
    }
    setWorkflows([...workflows, newWorkflow])
    setSelectedWorkflow(newWorkflow)
  }

  const handleSaveWorkflow = (workflowId: string, newName: string, newStatus: string) => {
    setWorkflows(
      workflows.map((wf) =>
        wf.id === workflowId
          ? { ...wf, name: newName, status: newStatus, lastModified: new Date().toISOString().slice(0, 10) }
          : wf,
      ),
    )
    setSelectedWorkflow(null) // Close popover after saving
  }

  const handleDeleteWorkflow = (workflowId: string) => {
    setWorkflows(workflows.filter((wf) => wf.id !== workflowId))
    if (selectedWorkflow?.id === workflowId) {
      setSelectedWorkflow(null)
    }
  }

  const handleAddStep = (workflowId: string, type: string) => {
    setWorkflows(
      workflows.map((wf) =>
        wf.id === workflowId
          ? {
              ...wf,
              steps: [
                ...wf.steps,
                {
                  id: `step-${Date.now()}`,
                  type: type,
                  description: `New ${type} step`,
                  icon:
                    type === "Patient Intake Form"
                      ? FileText
                      : type === "Consent Forms"
                        ? CheckCircle
                        : type === "Schedule Initial Consult"
                          ? Calendar
                          : type === "Welcome Message"
                            ? MessageSquare
                            : type === "Send Patient Survey"
                              ? MessageSquare
                              : type === "Prescription Reminder"
                                ? Clock
                                : LayoutGrid, // Default icon
                },
              ],
            }
          : wf,
      ),
    )
  }

  const handleDeleteStep = (workflowId: string, stepId: string) => {
    setWorkflows(
      workflows.map((wf) =>
        wf.id === workflowId ? { ...wf, steps: wf.steps.filter((step) => step.id !== stepId) } : wf,
      ),
    )
  }

  return (
    <div className="h-full bg-clinical-gray-50 dark:bg-clinical-gray-950 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Customizable Telehealth Workflow Builder
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Design and automate patient journeys and clinical processes
            </p>
          </div>
          <Button onClick={handleAddWorkflow} className="self-start sm:self-center">
            <Plus className="mr-2 h-4 w-4" />
            New Workflow
          </Button>
        </div>

        {/* Search */}
        <div className="mt-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          <Input
            placeholder="Search workflows..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Workflow List */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredWorkflows.length > 0 ? (
            filteredWorkflows.map((workflow) => (
              <Card key={workflow.id} className="flex flex-col h-full">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold" title={workflow.name}>
                      {workflow.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground pt-1">Last modified: {workflow.lastModified}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge
                      className={
                        workflow.status === "Active"
                          ? "bg-clinical-green-100 text-clinical-green-800 border-clinical-green-200"
                          : "bg-clinical-gray-100 text-clinical-gray-800 border-clinical-gray-200"
                      }
                    >
                      {workflow.status}
                    </Badge>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit workflow</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium leading-none">Edit Workflow</h4>
                            <p className="text-sm text-muted-foreground">Make changes to workflow details.</p>
                          </div>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor={`name-${workflow.id}`}>Name</Label>
                              <Input
                                id={`name-${workflow.id}`}
                                defaultValue={workflow.name}
                                className="col-span-2 h-8"
                                onChange={(e) => setSelectedWorkflow({ ...workflow, name: e.target.value })}
                              />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                              <Label htmlFor={`status-${workflow.id}`}>Status</Label>
                              <Select
                                defaultValue={workflow.status}
                                onValueChange={(value) => setSelectedWorkflow({ ...workflow, status: value })}
                              >
                                <SelectTrigger id={`status-${workflow.id}`} className="col-span-2 h-8">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Active">Active</SelectItem>
                                  <SelectItem value="Draft">Draft</SelectItem>
                                  <SelectItem value="Archived">Archived</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button
                              onClick={() =>
                                handleSaveWorkflow(
                                  workflow.id,
                                  selectedWorkflow?.name || workflow.name,
                                  selectedWorkflow?.status || workflow.status,
                                )
                              }
                            >
                              <Save className="mr-2 h-4 w-4" /> Save
                            </Button>
                            <Button variant="destructive" onClick={() => handleDeleteWorkflow(workflow.id)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share workflow</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <h3 className="font-semibold mb-2">Workflow Steps:</h3>
                  <div className="flex-1 overflow-y-auto max-h-[180px] pr-2 space-y-3 mb-4">
                    {workflow.steps.length > 0 ? (
                      workflow.steps.map((step) => (
                        <div key={step.id} className="flex items-center gap-3 bg-white p-2 rounded-md">
                          {step.icon && (
                            <step.icon className="h-5 w-5 text-clinical-blue-600 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{step.type}</p>
                            <p className="text-sm text-muted-foreground truncate">{step.description}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteStep(workflow.id, step.id)}
                            className="h-8 w-8 flex-shrink-0"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                            <span className="sr-only">Delete step</span>
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm">No steps defined yet.</p>
                    )}
                  </div>
                  <CardFooter className="p-4 border-t">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Step
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-60">
                        <div className="grid gap-2">
                          <h4 className="font-medium leading-none mb-2">Add Step Type</h4>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Patient Intake Form")}>
                            <FileText className="mr-2 h-4 w-4" /> Patient Intake Form
                          </Button>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Consent Forms")}>
                            <CheckCircle className="mr-2 h-4 w-4" /> Consent Forms
                          </Button>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Schedule Initial Consult")}>
                            <Calendar className="mr-2 h-4 w-4" /> Schedule Initial Consult
                          </Button>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Welcome Message")}>
                            <MessageSquare className="mr-2 h-4 w-4" /> Welcome Message
                          </Button>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Send Patient Survey")}>
                            <MessageSquare className="mr-2 h-4 w-4" /> Send Patient Survey
                          </Button>
                          <Button variant="ghost" onClick={() => handleAddStep(workflow.id, "Prescription Reminder")}>
                            <Clock className="mr-2 h-4 w-4" /> Prescription Reminder
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </CardFooter>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground col-span-full text-center">
              No workflows found. Click "New Workflow" to get started!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
