'use client'

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavbarWithMenu() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      <div className="text-xl font-bold">ロゴ</div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">メニューを開く</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>ホーム</DropdownMenuItem>
          <DropdownMenuItem>プロフィール</DropdownMenuItem>
          <DropdownMenuItem>設定</DropdownMenuItem>
          <DropdownMenuItem>ログアウト</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}