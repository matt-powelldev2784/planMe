import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Noto_Sans_JP } from '@next/font/google'

const notoSans = Noto_Sans_JP({ weight: ['300', '400', '700', '900'], subsets: ['latin'] })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
