'use client'

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusIcon } from "@radix-ui/react-icons"

export function VehicleList() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="destructive">車検期限</Badge>
        <Badge variant="secondary">オイル交換</Badge>
        <Badge variant="outline">任意保険未登録</Badge>
        <Badge variant="outline">空き車両</Badge>
        <Badge variant="outline">整備工場</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`relative p-4 border rounded-lg ${num === 2 ? "bg-yellow-100" : "bg-white"}`}
          >
            <div className="absolute top-2 right-2">
              <MapPin className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-16">
                <Image
                  src="/placeholder.svg?height=64&width=96"
                  alt="Vehicle illustration"
                  width={96}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">No.{num}</div>
                <div className="border rounded px-3 py-1 inline-block bg-gray-50">
                  <div className="text-xs text-gray-600">
                    {num === 2 ? "多摩 500" : "品川 300"}
                  </div>
                  <div className="text-lg font-bold text-green-700">
                    {num === 2 ? "20-20" : "12-34"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button size="lg" className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0">
        <PlusIcon className="w-6 h-6" />
        <span className="sr-only">Add new vehicle</span>
      </Button>
    </div>
  )
}