'use client'

import { Bell } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function VehicleDashboard() {
  return (
    <div className="max-w-md mx-auto bg-[#D1E751] min-h-screen">
      <header className="p-4 bg-[#D1E751] text-center">
        <h1 className="text-2xl font-bold text-white">MO-BIKU</h1>
      </header>
      
      <div className="p-4 bg-white rounded-t-3xl min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg">株式会社○○様</h2>
          <div className="relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
              1
            </span>
          </div>
        </div>

        <Button variant="outline" className="w-full py-6 text-lg mb-4 hover:bg-accent">
          車両管理
        </Button>

        <Button className="w-full py-6 text-lg mb-6 bg-[#D1E751] hover:bg-[#D1E751]/90 text-black">
          貸し先管理
        </Button>

        <Card className="p-4 mb-4">
          <h3 className="text-lg font-medium mb-4">車検満了</h3>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white mb-1">
                1
              </div>
              <div className="text-sm">90日前</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white mb-1">
                0
              </div>
              <div className="text-sm">60日前</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white mb-1">
                2
              </div>
              <div className="text-sm">30日前</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium">エンジンオイル</h3>
        </Card>
      </div>
    </div>
  )
}