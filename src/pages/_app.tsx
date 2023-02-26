import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Noto_Sans_JP } from '@next/font/google'
import { wrapper } from '../redux/store/store'
import { Provider } from 'react-redux'

const notoSans = Noto_Sans_JP({ weight: ['300', '400', '700', '900'], subsets: ['latin'] })

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default App
