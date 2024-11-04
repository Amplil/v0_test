'use client'

import { useState } from 'react'
import { Bell, ChevronRight, Circle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type Notification = {
  id: number
  title: string
  content: string
  date: string
  isRead: boolean
}

const initialNotifications: Notification[] = [
  { id: 1, title: "システムメンテナンスのお知らせ", content: "来週の火曜日午前2時から4時まで、システムメンテナンスを実施いたします。", date: "2023-05-15", isRead: false },
  { id: 2, title: "新機能リリースのお知らせ", content: "新しい分析ツールがリリースされました。詳細は設定画面からご確認ください。", date: "2023-05-10", isRead: true },
  { id: 3, title: "セキュリティアップデート", content: "最新のセキュリティパッチが適用されました。再ログインをお願いいたします。", date: "2023-05-05", isRead: false },
]

export function NotificationViewer() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">お知らせ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>お知らせ一覧</CardTitle>
            <CardDescription>最新のお知らせが表示されます</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {notifications.map((notif) => (
                <div key={notif.id}>
                  <div 
                    className="flex items-center justify-between py-2 px-4 hover:bg-accent cursor-pointer"
                    onClick={() => {
                      setSelectedNotification(notif)
                      markAsRead(notif.id)
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      {!notif.isRead && <Circle className="w-2 h-2 fill-current text-blue-500" />}
                      <span className={`${notif.isRead ? 'text-muted-foreground' : 'font-semibold'}`}>{notif.title}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{notif.date}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>お知らせ詳細</CardTitle>
            <CardDescription>選択したお知らせの詳細が表示されます</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedNotification ? (
              <div>
                <h2 className="text-xl font-semibold mb-2">{selectedNotification.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{selectedNotification.date}</p>
                <p>{selectedNotification.content}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
                <Bell className="w-12 h-12 mb-4" />
                <p>お知らせを選択してください</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}