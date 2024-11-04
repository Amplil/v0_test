'use client'

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function BorrowerList() {
  return (
    <div className="min-h-screen bg-[#a4c639]">
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">貸し先一覧</h1>
        
        <div className="relative">
          <Input 
            className="w-full pl-4 pr-10 py-2 rounded-full bg-white" 
            placeholder="検索"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          {[
            { name: "山田たろう", phone: "090-6363-1717", count: 1 },
            { name: "車田じろう", phone: "090-6423-5666", count: 1 },
            { name: "株式会社HM", phone: "090-6112-3677", count: 24 }
          ].map((borrower, index) => (
            <div 
              key={index}
              className="flex items-center justify-between bg-white rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-[#a4c639]/20">
                    {borrower.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">{borrower.name}</div>
                  <div className="text-sm text-gray-600">{borrower.phone}</div>
                </div>
              </div>
              <div className="text-xl font-bold">
                {borrower.count}台
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}