import type { Metadata } from "next"
import { Poppins, Radio_Canada, League_Spartan } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "A simple admin dashboard built with Next.js and Tailwind CSS.",
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-radio",
})

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spartan",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${radioCanada.variable} ${leagueSpartan.variable}`}
    >
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
