import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  title: "Rivky Riyantoro — Portfolio",
  description: "QA Engineer · Frontend Developer · UI/UX Designer based in Yogyakarta, Indonesia.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
