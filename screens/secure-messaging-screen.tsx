"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Archive, Bell, FileText, MessageSquare, Paperclip, Plus, Search, Send, Star, Trash2 } from "lucide-react"

export function SecureMessagingScreen() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("convo1")
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: "convo1",
      participants: [{ name: "Dr. Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40&text=SJ" }],
      subject: "Patient John Doe - Chest Pain",
      lastMessage: "Okay, I'll follow up with the facility.",
      lastMessageTime: "2:30 PM",
      unread: true,
      messages: [
        {
          id: "msg1",
          sender: "Dr. Sarah Johnson",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
          content: "Hi Michael, regarding John Doe in Room 204, he's experiencing chest pain.",
          time: "2:15 PM",
          isSelf: false,
        },
        {
          id: "msg2",
          sender: "You",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=You",
          content: "Understood. What are his current vitals and any recent history?",
          time: "2:17 PM",
          isSelf: true,
        },
        {
          id: "msg3",
          sender: "Dr. Sarah Johnson",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=SJ",
          content: "Temp 101.2F, BP 150/90, HR 95. History of hypertension and allergies to penicillin.",
          time: "2:20 PM",
          isSelf: false,
        },
        {
          id: "msg4",
          sender: "You",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=You",
          content: "Okay, I'll follow up with the facility.",
          time: "2:30 PM",
          isSelf: true,
        },
      ],
    },
    {
      id: "convo2",
      participants: [{ name: "Nurse Emily", avatar: "/placeholder.svg?height=40&width=40&text=NE" }],
      subject: "Medication Review for Mary Johnson",
      lastMessage: "Confirmed, prescription sent.",
      lastMessageTime: "Yesterday",
      unread: false,
      messages: [
        {
          id: "msg5",
          sender: "Nurse Emily",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=NE",
          content: "Dr. Chen, can you review Mary Johnson's medication list?",
          time: "Yesterday 10:00 AM",
          isSelf: false,
        },
        {
          id: "msg6",
          sender: "You",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=You",
          content: "Reviewed. Confirmed, prescription sent.",
          time: "Yesterday 10:15 AM",
          isSelf: true,
        },
      ],
    },
    {
      id: "convo3",
      participants: [{ name: "Admin Alex", avatar: "/placeholder.svg?height=40&width=40&text=AA" }],
      subject: "System Update Notification",
      lastMessage: "Acknowledged.",
      lastMessageTime: "3 days ago",
      unread: false,
      messages: [
        {
          id: "msg7",
          sender: "Admin Alex",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=AA",
          content: "Heads up: System maintenance scheduled for next Tuesday.",
          time: "3 days ago",
          isSelf: false,
        },
        {
          id: "msg8",
          sender: "You",
          senderAvatar: "/placeholder.svg?height=40&width=40&text=You",
          content: "Acknowledged.",
          time: "3 days ago",
          isSelf: true,
        },
      ],
    },
  ]

  const currentConversation = conversations.find((convo) => convo.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim() && currentConversation) {
      const updatedConversations = conversations.map((convo) =>
        convo.id === selectedConversation
          ? {
              ...convo,
              messages: [
                ...convo.messages,
                {
                  id: Date.now().toString(),
                  sender: "You",
                  senderAvatar: "/placeholder.svg?height=40&width=40&text=You",
                  content: newMessage,
                  time: "Just now",
                  isSelf: true,
                },
              ],
              lastMessage: newMessage,
              lastMessageTime: "Just now",
            }
          : convo,
      )
      // In a real app, you'd update state or send to backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const filteredConversations = conversations.filter(
    (convo) =>
      convo.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      convo.participants.some((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 flex flex-col">
      {" "}
      {/* Changed to flex-col */}
      {/* Header - Removed absolute positioning and z-index */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-6 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">Secure Messaging</h1>
            <p className="text-clinical-gray-600 dark:text-clinical-gray-400">
              Communicate securely with colleagues and staff
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>
      </div>
      {/* Main content area - Removed mt-[120px] */}
      <div className="flex flex-1">
        {/* Left Sidebar - Conversations List */}
        <div className="w-80 bg-white dark:bg-clinical-gray-900 border-r border-border flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <nav className="space-y-1 p-2">
              {filteredConversations.map((convo) => (
                <Button
                  key={convo.id}
                  variant="ghost"
                  className={`w-full justify-start h-auto p-3 ${
                    selectedConversation === convo.id
                      ? "bg-clinical-blue-100 text-clinical-blue-700 dark:bg-clinical-blue-900 dark:text-clinical-blue-100"
                      : "hover:bg-clinical-gray-100 dark:hover:bg-clinical-gray-800"
                  }`}
                  onClick={() => setSelectedConversation(convo.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={convo.participants[0].avatar || "/placeholder.svg"}
                        alt={convo.participants[0].name}
                      />
                      <AvatarFallback>{convo.participants[0].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm flex items-center justify-between">
                        <span>{convo.participants[0].name}</span>
                        <span className="text-xs text-muted-foreground">{convo.lastMessageTime}</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{convo.subject}</p>
                      <p className="text-sm truncate">{convo.lastMessage}</p>
                      {convo.unread && (
                        <Badge className="mt-1 bg-clinical-blue-500 text-white dark:bg-clinical-blue-400">New</Badge>
                      )}
                    </div>
                  </div>
                </Button>
              ))}
            </nav>
          </ScrollArea>
          <div className="p-4 border-t border-border flex justify-around">
            <Button variant="ghost" size="icon" title="Inbox">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Starred">
              <Star className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Archived">
              <Archive className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Trash">
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation && currentConversation ? (
            <>
              <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src={currentConversation.participants[0].avatar || "/placeholder.svg"}
                      alt={currentConversation.participants[0].name}
                    />
                    <AvatarFallback>{currentConversation.participants[0].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{currentConversation.participants[0].name}</h3>
                    <p className="text-sm text-muted-foreground">{currentConversation.subject}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View Patient Chart
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bell className="mr-2 h-4 w-4" />
                    Mute
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1">
                <div className="space-y-4 p-4">
                  {currentConversation.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex items-start space-x-2 ${
                          message.isSelf ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.sender} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`p-3 rounded-lg max-w-[70%] ${
                            message.isSelf
                              ? "bg-clinical-blue-500 text-white dark:bg-clinical-blue-700"
                              : "bg-clinical-gray-200 dark:bg-clinical-gray-700 text-clinical-gray-900 dark:text-clinical-gray-100"
                          }`}
                        >
                          <p className="text-xs font-medium mb-1">
                            {message.isSelf ? "You" : message.sender}
                            <span className="ml-2 text-muted-foreground text-[10px]">{message.time}</span>
                          </p>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="border-t border-border bg-white dark:bg-clinical-gray-900">
                <div className="flex items-center space-x-2 px-4 py-3">
                  <Textarea
                    placeholder="Type your message here..."
                    className="flex-1 min-h-[60px]"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button variant="outline" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-muted-foreground">
              Select a conversation to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
