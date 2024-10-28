'use client'

import { useState, useRef, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CameraAppComponent() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const handleCapture = () => {
    // 実際のカメラ撮影の代わりに、ダミー画像を使用
    setPhotoUrl("/placeholder.svg?height=1080&width=1920")
  }

  const handleFullscreen = useCallback(() => {
    if (fullscreenRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        fullscreenRef.current.requestFullscreen()
      }
    }
  }, [])

  const handleClose = () => {
    setPhotoUrl(null)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!photoUrl ? (
        <div className="text-center">
          <div className="w-64 h-48 bg-gray-300 mb-4 flex items-center justify-center">
            <span className="text-gray-600">カメラプレビュー</span>
          </div>
          <Button onClick={handleCapture}>撮影する</Button>
        </div>
      ) : (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 bg-black flex items-center justify-center"
        >
          <img
            src={photoUrl}
            alt="撮影した写真"
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleFullscreen}
              aria-label="全画面表示の切り替え"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleClose}
              aria-label="閉じる"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}