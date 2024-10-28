"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

// DatePickerWithRange component
function DatePickerWithRange({
  className,
  date,
  setDate,
}: {
  className?: string
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// This function simulates a server-side API call
async function fetchAmazonReport(accounts: string, startDate: Date, endDate: Date) {
  // In a real implementation, you would call your server-side API here
  await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
  return `This is a sample report for accounts ${accounts} from ${startDate.toDateString()} to ${endDate.toDateString()}`
}

export function AmazonReport() {
  const [selectedAccounts, setSelectedAccounts] = React.useState<string[]>([])
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })
  const [report, setReport] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleFetchReport = async () => {
    if (selectedAccounts.length === 0 || !dateRange?.from || !dateRange?.to) {
      alert("Please select at least one account and a date range")
      return
    }

    setIsLoading(true)
    try {
      const reportData = await fetchAmazonReport(selectedAccounts.join(", "), dateRange.from, dateRange.to)
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
          <Label>Accounts</Label>
          <div className="space-y-2">
            {["account1", "account2", "account3"].map((account) => (
              <div key={account} className="flex items-center space-x-2">
                <Checkbox
                  id={account}
                  checked={selectedAccounts.includes(account)}
                  onCheckedChange={(checked) => {
                    setSelectedAccounts(
                      checked
                        ? [...selectedAccounts, account]
                        : selectedAccounts.filter((a) => a !== account)
                    )
                  }}
                />
                <Label htmlFor={account}>{`Account ${account.slice(-1)}`}</Label>
              </div>
            ))}
          </div>
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