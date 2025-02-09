import "./globals.css"
import type { Metadata } from "next"
import { Golos_Text } from "next/font/google"
import { ThemeProvider } from "next-themes"
import type React from "react"

const golosText = Golos_Text({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adrizz - Digital Marketing Agency",
  description: "Transform your digital presence with Adrizz",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${golosText.className} dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

