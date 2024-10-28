'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RefreshTokenGenerator() {
  const [clientId, setClientId] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  const getRefreshToken = async () => {
    // 注意: これは実際のAPIコールではなく、モックアップです。
    // 実際の実装では、これらの操作はサーバーサイドで行うべきです。
    try {
      // APIコールをシミュレート
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // ランダムな文字列を生成してリフレッシュトークンとして使用
      const mockRefreshToken = Math.random().toString(36).substring(2, 15) + 
                               Math.random().toString(36).substring(2, 15)
      
      setRefreshToken(mockRefreshToken)
    } catch (error) {
      console.error('リフレッシュトークンの取得に失敗しました', error)
      setRefreshToken('エラーが発生しました')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>リフレッシュトークン生成器</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="clientId">クライアントID</Label>
            <Input
              id="clientId"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="クライアントIDを入力"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientSecret">クライアントシークレット</Label>
            <Input
              id="clientSecret"
              type="password"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="クライアントシークレットを入力"
            />
          </div>
          <Button 
            onClick={getRefreshToken}
            disabled={!clientId || !clientSecret}
            className="w-full"
          >
            リフレッシュトークンを取得
          </Button>
          {refreshToken && (
            <div className="mt-4 p-2 bg-gray-100 rounded">
              <Label>リフレッシュトークン:</Label>
              <p className="font-mono break-all">{refreshToken}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}