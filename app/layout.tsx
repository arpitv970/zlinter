import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Sidebar from '@/components/common/Sidebar'
import Navbar from '@/components/common/Navbar'
import Header from '@/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zintlr',
  description: 'From the most detailed B2B database comprising comprehensive company and profile pages.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Sidebar />
            <section className='right-sec'>
              <Navbar />
              <Header />
              <section className='content'>
                {children}
              </section>
            </section>
          </main>
        </ThemeProvider>
      </body>

    </html>
  )
}
