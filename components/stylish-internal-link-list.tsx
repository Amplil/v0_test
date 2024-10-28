'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function StylishInternalLinkList() {
  const links = [
    { href: "/dashboard", title: "Dashboard" },
    { href: "/profile", title: "User Profile" },
    { href: "/settings", title: "Settings" },
  ]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex items-center p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <span className="flex-grow">{link.title}</span>
                <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}