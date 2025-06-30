"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { User, Plus, Edit, Trash2, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PersonalizedCarePlansScreen() {
  const [carePlans, setCarePlans] = useState([
    {
      id: "cp1",
      patientName: "Alice Johnson",
      planName: "Diabetes Management Plan",
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-12-31"),
      status: "active",
      tasks: [
        { id: "t1", description: "Monitor blood glucose daily", completed: false, dueDate: new Date("2025-06-05") },
        {
          id: "t2",
          description: "30 mins moderate exercise, 3x/week",
          completed: true,
          dueDate: new Date("2025-06-03"),
        },
        {
          id: "t3",
          description: "Attend nutrition counseling session",
          completed: false,
          dueDate: new Date("2025-07-15"),
        },
      ],
      goals: ["Achieve target blood glucose levels", "Lose 5 lbs"],
      education: ["Understanding Insulin", "Healthy Eating for Diabetics"],
    },
    {
      id: "cp2",
      patientName: "Bob Williams",
      planName: "Post-Surgery Recovery",
      startDate: new Date("2025-05-10"),
      endDate: new Date("2025-08-10"),
      status: "completed",
      tasks: [
        { id: "t4", description: "Daily wound care", completed: true, dueDate: new Date("2025-05-20") },
        {
          id: "t5",
          description: "Physical therapy session, 2x/week",
          completed: true,
          dueDate: new Date("2025-08-01"),
        },
      ],
      goals: ["Full range of motion in knee", "Return to light activities"],
      education: ["Rehabilitation Exercises", "Pain Management Post-Op"],
    },
  ])

  const [newPlan, setNewPlan] = useState({
    patientName: "",
    planName: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    tasks: [] as { id: string; description: string; completed: boolean; dueDate: Date | undefined }[],
    goals: [] as string[],
    education: [] as string[],
  })
  const [newTaskDescription, setNewTaskDescription] = useState("")
  const [newTaskDueDate, setNewTaskDueDate] = useState<Date | undefined>(undefined)
  const [newGoal, setNewGoal] = useState("")
  const [newEducation, setNewEducation] = useState("")

  const handleAddTask = () => {
    if (newTaskDescription.trim()) {
      setNewPlan((prev) => ({
        ...prev,
        tasks: [
          ...prev.tasks,
          {
            id: `temp-${Date.now()}`,
            description: newTaskDescription.trim(),
            completed: false,
            dueDate: newTaskDueDate,
          },
        ],
      }))
      setNewTaskDescription("")
      setNewTaskDueDate(undefined)
    }
  }

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setNewPlan((prev) => ({
        ...prev,
        goals: [...prev.goals, newGoal.trim()],
      }))
      setNewGoal("")
    }
  }

  const handleAddEducation = () => {
    if (newEducation.trim()) {
      setNewPlan((prev) => ({
        ...prev,
        education: [...prev.education, newEducation.trim()],
      }))
      setNewEducation("")
    }
  }

  const handleCreatePlan = () => {
    if (newPlan.patientName && newPlan.planName && newPlan.startDate && newPlan.endDate) {
      setCarePlans((prev) => [
        ...prev,
        {
          ...newPlan,
          id: `cp-${Date.now()}`,
          status: "active",
          startDate: newPlan.startDate,
          endDate: newPlan.endDate,
        },
      ])
      setNewPlan({
        patientName: "",
        planName: "",
        startDate: undefined,
        endDate: undefined,
        tasks: [],
        goals: [],
        education: [],
      })
    }
  }

  const toggleTaskCompletion = (planId: string, taskId: string) => {
    setCarePlans((prev) =>
      prev.map((plan) =>
        plan.id === planId
          ? {
              ...plan,
              tasks: plan.tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
            }
          : plan,
      ),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-clinical-green-100 text-clinical-green-800 dark:bg-clinical-green-900 dark:text-clinical-green-100">
            Active
          </Badge>
        )
      case "completed":
        return <Badge variant="secondary">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 p-6">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6 -m-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Personalized Patient Care Plans
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Create, assign, and track individualized care plans for patients
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Care Plan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create New Care Plan */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="mr-2 h-5 w-5" />
              Create New Care Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Patient Name"
              value={newPlan.patientName}
              onChange={(e) => setNewPlan({ ...newPlan, patientName: e.target.value })}
            />
            <Input
              placeholder="Plan Name (e.g., Diabetes Management)"
              value={newPlan.planName}
              onChange={(e) => setNewPlan({ ...newPlan, planName: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newPlan.startDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newPlan.startDate ? format(newPlan.startDate, "PPP") : <span>Start Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={newPlan.startDate}
                    onSelect={(date) => setNewPlan({ ...newPlan, startDate: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newPlan.endDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newPlan.endDate ? format(newPlan.endDate, "PPP") : <span>End Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={newPlan.endDate}
                    onSelect={(date) => setNewPlan({ ...newPlan, endDate: date })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Separator />

            {/* Tasks */}
            <h3 className="text-md font-semibold">Tasks</h3>
            <div className="space-y-2">
              {newPlan.tasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {task.description} {task.dueDate && `(${format(task.dueDate, "MMM dd")})`}
                  </span>
                  <Trash2 className="h-4 w-4 cursor-pointer text-red-500" />
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="New task description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className="shrink-0">
                    <CalendarIcon className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={newTaskDueDate} onSelect={setNewTaskDueDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Button onClick={handleAddTask} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Goals */}
            <h3 className="text-md font-semibold">Goals</h3>
            <div className="space-y-2">
              {newPlan.goals.map((goal, index) => (
                <div key={index} className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{goal}</span>
                  <Trash2 className="h-4 w-4 cursor-pointer text-red-500" />
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input placeholder="New goal" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
              <Button onClick={handleAddGoal} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Education */}
            <h3 className="text-md font-semibold">Education Resources</h3>
            <div className="space-y-2">
              {newPlan.education.map((edu, index) => (
                <div key={index} className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{edu}</span>
                  <Trash2 className="h-4 w-4 cursor-pointer text-red-500" />
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="New education link/title"
                value={newEducation}
                onChange={(e) => setNewEducation(e.target.value)}
              />
              <Button onClick={handleAddEducation} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button onClick={handleCreatePlan} className="w-full">
              Create Plan
            </Button>
          </CardContent>
        </Card>

        {/* Existing Care Plans */}
        <div className="lg:col-span-2 space-y-6">
          {carePlans.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No care plans created yet.</div>
          ) : (
            carePlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      {plan.patientName} - {plan.planName}
                    </CardTitle>
                    {getStatusBadge(plan.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {format(plan.startDate, "MMM dd, yyyy")} - {format(plan.endDate, "MMM dd, yyyy")}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">
                      Tasks ({plan.tasks.filter((t) => !t.completed).length} pending)
                    </h3>
                    <div className="space-y-2">
                      {plan.tasks.map((task) => (
                        <div key={task.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onCheckedChange={() => toggleTaskCompletion(plan.id, task.id)}
                          />
                          <Label
                            htmlFor={`task-${task.id}`}
                            className={cn(task.completed && "line-through text-muted-foreground")}
                          >
                            {task.description}
                            {task.dueDate && (
                              <span className="ml-2 text-xs text-muted-foreground">
                                (Due: {format(task.dueDate, "MMM dd")})
                              </span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goals</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {plan.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Education Resources</h3>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {plan.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Plan
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share with Patient
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
