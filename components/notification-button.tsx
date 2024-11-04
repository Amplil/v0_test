'use client'

import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false)

  const notifications = [
    { id: 1, title: '新しいメッセージ', time: '5分前' },
    { id: 2, title: 'タスクが完了しました', time: '1時間前' },
    { id: 3, title: '明日の予定があります', time: '3時間前' },
  ]

  return (
    <div className="fixed top-4 right-4">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle>通知</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary w-2 h-2 mt-2" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  )
}