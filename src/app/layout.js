import Head from 'next/head'
import '../styles/global.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Link Sharing',
  description: 'SaaS to manage your links',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
