'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function VehicleRegistrationComponent() {
  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleNumber: '品川300 あ 1234',
    vehicleId: 'S321V-128376',
    vehicleType: 'ハイゼット',
    inspectionDate: '2024/12/31'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setVehicleInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    console.log('Vehicle information submitted:', vehicleInfo)
    // Here you would typically send this data to your backend
  }

  return (
    <Card className="w-full max-w-md mx-auto font-sans">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">読み取り内容確認</CardTitle>
        <p className="text-sm text-center text-gray-500">タップすると編集できます。</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicleNumber">車両番号</Label>
            <Input
              id="vehicleNumber"
              name="vehicleNumber"
              value={vehicleInfo.vehicleNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleId">車体番号</Label>
            <Input
              id="vehicleId"
              name="vehicleId"
              value={vehicleInfo.vehicleId}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleType">車種</Label>
            <Input
              id="vehicleType"
              name="vehicleType"
              value={vehicleInfo.vehicleType}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inspectionDate">車検有効期限</Label>
            <Input
              id="inspectionDate"
              name="inspectionDate"
              value={vehicleInfo.inspectionDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-lime-500 hover:bg-lime-600" onClick={handleSubmit}>
          登録する
        </Button>
      </CardFooter>
    </Card>
  )
}