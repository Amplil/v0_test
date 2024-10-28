"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { DatePickerWithRange } from "./date-picker-with-range"
import { DateRange } from "react-day-picker"

// This function simulates a server-side API call
async function fetchAmazonReport(account: string, startDate: Date, endDate: Date) {
  // In a real implementation, you would call your server-side API here
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
  return `This is a sample report for account ${account} from ${startDate.toDateString()} to ${endDate.toDateString()}`
}

export function AmazonReport() {
  const [account, setAccount] = useState("")
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  const [report, setReport] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFetchReport = async () => {
    if (!account || !dateRange?.from || !dateRange?.to) {
      alert("Please select an account and date range")
      return
    }

    setIsLoading(true)
    try {
      const reportData = await fetchAmazonReport(account, dateRange.from, dateRange.to)
      setReport(reportData)
    } catch (error) {
      console.error("Error fetching report:", error)
      alert("An error occurred while fetching the report. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Amazon Report Generator</CardTitle>
        <CardDescription>Select an account and date range to generate a report</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="account">Account</Label>
          <Select onValueChange={setAccount} value={account}>
            <SelectTrigger id="account">
              <SelectValue placeholder="Select an account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="account1">Account 1</SelectItem>
              <SelectItem value="account2">Account 2</SelectItem>
              <SelectItem value="account3">Account 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Date Range</Label>
          <DatePickerWithRange date={dateRange} setDate={setDateRange} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={handleFetchReport} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Report...
            </>
          ) : (
            "Generate Report"
          )}
        </Button>
        {report && (
          <div className="w-full p-4 bg-muted rounded-md">
            <h3 className="font-semibold mb-2">Generated Report:</h3>
            <p>{report}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}