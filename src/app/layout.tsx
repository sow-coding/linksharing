import '../styles/global.css'
import { Inter } from 'next/font/google'
import { UseCustomHook } from './linksharing/page'
import AppContextProvider from './../context/appContext'
import LinksContextProvider from './../context/linksContext'
import PrevieuwAllowedContextProvider from './../context/previeuwAllowedContext'
import { ImageContextProvider } from '../context/imageContext'
import { UserContextProvider } from '../context/userContext'
import CannotPassContextProvider from '../context/cannotPassContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Link Share',
  description: 'SaaS to share your links',
}

export default function RootLayout({ children }: UseCustomHook) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <AppContextProvider>
      <LinksContextProvider>
      <PrevieuwAllowedContextProvider>
      <ImageContextProvider>
      <UserContextProvider>
      <CannotPassContextProvider>
      <body className={inter.className}>{children}</body>
      </CannotPassContextProvider>
      </UserContextProvider>
      </ImageContextProvider>
      </PrevieuwAllowedContextProvider>
      </LinksContextProvider>
      </AppContextProvider>
    </html>
  )
}
