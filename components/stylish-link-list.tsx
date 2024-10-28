'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function StylishLinkList() {
  const links = [
    { url: "https://example.com", title: "Example Website" },
    { url: "https://github.com", title: "GitHub" },
    { url: "https://developer.mozilla.org", title: "MDN Web Docs" },
  ]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <span className="flex-grow">{link.title}</span>
                <ExternalLink className="w-5 h-5 ml-2 flex-shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}