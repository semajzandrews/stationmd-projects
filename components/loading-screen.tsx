import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Loader2 className="h-12 w-12 text-clinical-blue-500 animate-spin mb-4" />
      <h2 className="text-xl font-medium text-clinical-blue-800 dark:text-clinical-blue-200">Loading StationConnect</h2>
      <p className="text-clinical-gray-500 dark:text-clinical-gray-400 mt-2">
        Please wait while we prepare your secure environment
      </p>
    </div>
  )
}
