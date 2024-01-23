import type { Metadata } from "next"
import { Kumbh_Sans } from "next/font/google"
import "./globals.css"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "FAQ Accordion",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} from-primary-soft-violet to-primary-soft-blue text-primary-very-dark-desat-blue flex min-h-screen flex-col items-center justify-center bg-gradient-to-b`}
      >
        {children}
      </body>
    </html>
  )
}
