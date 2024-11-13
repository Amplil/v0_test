"use client"

import * as React from "react"
import { Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function NotificationDialog() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="p-4">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Card className="border-0 shadow-none">
            <div className="p-4 space-y-4">
              <h3 className="font-semibold text-lg">株式会社○○様</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-bold">山田たろう</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">返却完了</Badge>
                      <span className="text-xs text-muted-foreground">2024.10.11</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    返却完了のお知らせが届きました。タップして確認、認証をお願いします。
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="font-bold">山田たろう</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">エンジンオイル交換完了</Badge>
                      <span className="text-xs text-muted-foreground">2024.10.7</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    エンジンオイル交換完了のお知らせが届きました。タップして確認、認証をお願いします。
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  )
}