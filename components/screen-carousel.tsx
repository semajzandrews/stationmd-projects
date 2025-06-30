"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Screen {
  id: string
  title: string
  description: string
  component: React.ComponentType
  category: string
}

interface ScreenCarouselProps {
  screens: Screen[]
}

export function ScreenCarousel({ screens }: ScreenCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>()
    screens.forEach((screen) => categories.add(screen.category))
    return Array.from(categories).sort()
  }, [screens])

  const filteredScreens = useMemo(() => {
    if (selectedCategory === "All") {
      return screens
    }
    return screens.filter((screen) => screen.category === selectedCategory)
  }, [screens, selectedCategory])

  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory])

  const currentScreen = filteredScreens[currentIndex]

  const nextScreen = () => {
    if (filteredScreens.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % filteredScreens.length)
  }

  const prevScreen = () => {
    if (filteredScreens.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + filteredScreens.length) % filteredScreens.length)
  }

  const goToScreen = (index: number) => {
    setCurrentIndex(index)
  }

  const getViewportClasses = () => {
    return "w-full h-full"
  }

  const CurrentComponent = currentScreen?.component

  return (
    <div className="h-screen bg-clinical-gray-50 dark:bg-clinical-gray-950 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-clinical-gray-900 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-clinical-blue-700 dark:text-clinical-blue-300">
              StationConnect 2.0
            </h1>
            <Badge variant="secondary" className="text-xs">
              Design Showcase
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            {/* Navigation Controls (number clicker) */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={prevScreen} disabled={filteredScreens.length === 0}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {filteredScreens.length > 0 ? `${currentIndex + 1} / ${filteredScreens.length}` : "0 / 0"}
              </span>
              <Button variant="outline" size="sm" onClick={nextScreen} disabled={filteredScreens.length === 0}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Screen Info */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">{currentScreen?.title || "No Screen Selected"}</h2>
            {currentScreen && <Badge variant="outline">{currentScreen.category}</Badge>}
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {currentScreen?.description || "Select a screen to view details."}
          </p>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        {currentScreen ? (
          <div className={`${getViewportClasses()} overflow-hidden transition-all duration-300`}>
            <div className="w-full h-full overflow-auto">
              <CurrentComponent />
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground text-lg">No screens found.</div>
        )}
      </div>
    </div>
  )
}
