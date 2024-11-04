'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload } from "lucide-react"

export function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setError(null)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div 
      className="w-full max-w-md mx-auto p-6 space-y-4 border rounded-lg shadow-sm"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">ファイルアップローダー</h2>
        <p className="text-sm text-muted-foreground">ファイルを選択するか、ドラッグ＆ドロップしてください。</p>
      </div>
      <div className="space-y-2">
        <Input
          type="file"
          onChange={handleFileChange}
          className="sr-only"
          id="file-upload"
          ref={fileInputRef}
          aria-label="ファイルを選択"
        />
        <Button onClick={handleButtonClick} className="w-full">
          <Upload className="mr-2 h-4 w-4" />
          ファイルから取り込む
        </Button>
      </div>
      {file && (
        <Alert>
          <AlertTitle>アップロードされたファイル</AlertTitle>
          <AlertDescription>
            ファイル名: {file.name}<br />
            サイズ: {(file.size / 1024).toFixed(2)} KB<br />
            タイプ: {file.type}
          </AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive">
          <AlertTitle>エラー</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}