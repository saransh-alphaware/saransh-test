import "./globals.css"
import type { Metadata } from "next"
// import { Montserrat } from "next/font/google"
import { ThemeProvider } from "next-themes"
import type React from "react"
import localFont from "next/font/local"

const customFont = localFont({
  src: [
    {
      path: "../app/fonts/MortendR.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/MortendR.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/MortendR.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-custom",
})

// const montserrat = Montserrat({ subsets: ["latin"] })

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
      <body className={`${customFont.className} dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

