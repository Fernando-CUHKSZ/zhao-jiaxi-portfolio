import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "../components/language-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const interSerif = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sf-pro",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Zhao Jiaxi · AI Product Manager / LLM & Multi-Agent Deployment",
  description:
    "Led SONY AurionX, FATE federated learning fintech project (Global Top 10), specializing in LLM, AIGC, multi-agent industrial deployment.",
  keywords: "AI Product Manager, Federated Learning, LLM, AIGC, Multi-Agent, NLP, RAG, Industrial IoT, Growth",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interSerif.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
