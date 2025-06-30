"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, MessageSquare, Settings, Video, Users, ImageIcon, LinkIcon } from "lucide-react"

export function VirtualWaitingRoomScreen() {
  const [waitingRoomEnabled, setWaitingRoomEnabled] = useState(true)
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to StationConnect! Please wait for your provider to join the call.",
  )
  const [estimatedWaitTime, setEstimatedWaitTime] = useState("5-10 minutes")
  const [backgroundOption, setBackgroundOption] = useState("default-image")
  const [customImageUrl, setCustomImageUrl] = useState("")
  const [customVideoUrl, setCustomVideoUrl] = useState("")
  const [displayQueuePosition, setDisplayQueuePosition] = useState(true)
  const [displayProviderName, setDisplayProviderName] = useState(true)
  const [preCallInstructions, setPreCallInstructions] = useState(
    "Please ensure your camera and microphone are working. Have your ID and insurance information ready.",
  )

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              Virtual Waiting Room Management
            </h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Customize the patient experience in the virtual waiting room
            </p>
          </div>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="waiting-room-toggle">Enable Virtual Waiting Room</Label>
              <Switch id="waiting-room-toggle" checked={waitingRoomEnabled} onCheckedChange={setWaitingRoomEnabled} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="welcome-message">Welcome Message</Label>
              <Textarea
                id="welcome-message"
                placeholder="Enter a welcome message for patients"
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimated-wait-time">Estimated Wait Time Display</Label>
              <Input
                id="estimated-wait-time"
                placeholder="e.g., 5-10 minutes, Less than 15 minutes"
                value={estimatedWaitTime}
                onChange={(e) => setEstimatedWaitTime(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                This message will be displayed to patients in the waiting room.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pre-call-instructions">Pre-Call Instructions</Label>
              <Textarea
                id="pre-call-instructions"
                placeholder="Instructions for patients before their call starts"
                value={preCallInstructions}
                onChange={(e) => setPreCallInstructions(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">e.g., "Ensure camera/mic are working, have ID ready."</p>
            </div>
          </CardContent>
        </Card>

        {/* Display Options & Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="mr-2 h-5 w-5" />
              Display Options & Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="display-queue-position">Display Queue Position</Label>
              <Switch
                id="display-queue-position"
                checked={displayQueuePosition}
                onCheckedChange={setDisplayQueuePosition}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="display-provider-name">Display Provider Name</Label>
              <Switch
                id="display-provider-name"
                checked={displayProviderName}
                onCheckedChange={setDisplayProviderName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="background-option">Waiting Room Background</Label>
              <Select value={backgroundOption} onValueChange={setBackgroundOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select background option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default-image">Default Image</SelectItem>
                  <SelectItem value="custom-image">Custom Image</SelectItem>
                  <SelectItem value="custom-video">Custom Video</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {backgroundOption === "custom-image" && (
              <div className="space-y-2">
                <Label htmlFor="custom-image-url">Custom Image URL</Label>
                <Input
                  id="custom-image-url"
                  placeholder="Enter URL for background image"
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  <ImageIcon className="inline-block mr-1 h-3 w-3" />
                  Upload your own image for the waiting room background.
                </p>
              </div>
            )}

            {backgroundOption === "custom-video" && (
              <div className="space-y-2">
                <Label htmlFor="custom-video-url">Custom Video URL</Label>
                <Input
                  id="custom-video-url"
                  placeholder="Enter URL for background video (e.g., YouTube, Vimeo)"
                  value={customVideoUrl}
                  onChange={(e) => setCustomVideoUrl(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  <LinkIcon className="inline-block mr-1 h-3 w-3" />
                  Provide a link to a calming video for patients to watch.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="additional-resources">Additional Resources/Links</Label>
              <Textarea
                id="additional-resources"
                placeholder="Add links to patient education, FAQs, etc. (one per line)"
                rows={4}
              />
              <p className="text-sm text-muted-foreground">
                <MessageSquare className="inline-block mr-1 h-3 w-3" />
                These will appear as clickable links in the waiting room.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section (Placeholder) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Video className="mr-2 h-5 w-5" />
              Waiting Room Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-clinical-blue-100 dark:bg-clinical-blue-900 rounded-md flex items-center justify-center text-center text-clinical-blue-700 dark:text-clinical-blue-200">
              <div className="space-y-2">
                <Video className="h-12 w-12 mx-auto" />
                <p className="text-lg font-semibold">Your Waiting Room Preview</p>
                <p className="text-sm">
                  {welcomeMessage || "Welcome to StationConnect! Please wait for your provider to join the call."}
                </p>
                {displayQueuePosition && (
                  <p className="text-sm">
                    <Users className="inline-block mr-1 h-4 w-4" />
                    You are currently 1st in line.
                  </p>
                )}
                {displayProviderName && (
                  <p className="text-sm">
                    <Clock className="inline-block mr-1 h-4 w-4" />
                    Estimated wait: {estimatedWaitTime || "5-10 minutes"}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              This is a simplified preview. Actual appearance may vary.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
