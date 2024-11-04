'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

// ダミーデータ
const logs = [
  { id: 1, date: '2023-10-31', driverName: '山田太郎', content: '貸出', status: '認証' },
  { id: 2, date: '2023-10-31', driverName: '佐藤花子', content: '待機', status: '非認証' },
  { id: 3, date: '2023-11-01', driverName: '鈴木一郎', content: '貸出', status: '認証' },
  { id: 4, date: '2023-11-01', driverName: '田中美咲', content: '待機', status: '認証' },
  { id: 5, date: '2023-11-02', driverName: '高橋健太', content: '貸出', status: '非認証' },
]

export function VehicleLogListComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [contentFilter, setContentFilter] = useState('全て')
  const [statusFilter, setStatusFilter] = useState('全て')

  const filteredLogs = logs.filter(log => 
    log.driverName.includes(searchTerm) &&
    (contentFilter === '全て' || log.content === contentFilter) &&
    (statusFilter === '全て' || log.status === statusFilter)
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">車両管理ログ一覧</h1>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="ドライバー名で検索"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={contentFilter} onValueChange={setContentFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="内容で絞り込み" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="全て">全て</SelectItem>
            <SelectItem value="貸出">貸出</SelectItem>
            <SelectItem value="待機">待機</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="ステータスで絞り込み" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="全て">全て</SelectItem>
            <SelectItem value="認証">認証</SelectItem>
            <SelectItem value="非認証">非認証</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" /> 検索
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日付</TableHead>
            <TableHead>ドライバー名</TableHead>
            <TableHead>内容</TableHead>
            <TableHead>ステータス</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLogs.map(log => (
            <TableRow key={log.id}>
              <TableCell>{log.date}</TableCell>
              <TableCell>{log.driverName}</TableCell>
              <TableCell>{log.content}</TableCell>
              <TableCell>{log.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}