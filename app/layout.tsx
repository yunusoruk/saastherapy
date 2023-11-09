import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import localFont from "next/font/local"
import { siteConfig } from '@/config/site'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { Toaster } from '@/components/ui/toaster'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const fontSans = FontSans({ subsets: ['latin'], variable: "--font-sans" })

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})


export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://www.saastherapy.com"),
  keywords: [
    "SaaS Therapy",
    "Online Therapist",
    "Psychology",
    "Depression",
    "Mental Health",
    "Therapy Session",
  ],
  authors: [
    {
      name: "saastherapy",
      url: "https://saastherapy.com",
    },
  ],
  creator: "saastherapy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`/api/og`]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`api/og`],
    // images: [`${siteConfig.url}/og.png`],
    creator: "@saastherapy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem >
          {children}
          <TailwindIndicator />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
