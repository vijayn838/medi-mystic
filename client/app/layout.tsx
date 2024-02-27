import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Medi Mystic - Your Personal Health Assistant",
  description:
    "Medi Mystic is your trusted AI-powered health companion. Quickly input your symptoms and receive precise disease predictions, making informed healthcare decisions effortless. Take control of your well-being today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
