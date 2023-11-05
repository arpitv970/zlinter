import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Sidebar from '@/components/common/Sidebar'
import Navbar from '@/components/common/Navbar'
import Header from '@/components/common/Header'
import { GlobalContextProvider } from '@/contexts/globalContext'
import HeadSEO from '@/seo/HeadSEO'

const inter = Inter({ subsets: ['latin'] })

const SEOData = {
  title: 'Zintlr',
  description: 'From the most detailed B2B database comprising comprehensive company and profile pages.',
  img: '/public/images/seo-img.png'
}

export const metadata: Metadata = {
  title: SEOData.title,
  description: SEOData.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HeadSEO
        title={SEOData.title}
        desc={SEOData.description}
        img={SEOData.img}
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalContextProvider>
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
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
