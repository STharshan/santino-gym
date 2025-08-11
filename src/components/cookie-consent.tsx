"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <Card className="bg-white text-black p-6 shadow-lg">
        <p className="text-sm mb-4">
          We use cookies to improve your experience. By continuing, you accept our use of cookies.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsVisible(false)} className="text-xs">
            Customize
          </Button>
          <Button variant="outline" size="sm" onClick={() => setIsVisible(false)} className="text-xs">
            Reject All
          </Button>
          <Button
            size="sm"
            onClick={() => setIsVisible(false)}
            className="bg-red-500 hover:bg-red-600 text-white text-xs"
          >
            Accept All
          </Button>
        </div>
      </Card>
    </div>
  )
}
