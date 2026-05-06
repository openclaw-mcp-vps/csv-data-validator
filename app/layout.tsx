import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSV Data Validator — Validate CSV uploads before they break your system',
  description: 'API service that validates CSV files for data types, required fields, formats, and business rules before processing.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5cf1a96c-873f-42a8-b015-c2f12a9b53b1"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
