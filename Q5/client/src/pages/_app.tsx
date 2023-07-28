import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Monda } from 'next/font/google'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AuthProvider from '@/components/authProvider'

import store, { persistor } from '@/redux/store'

import '@/styles/globals.css'

const monda = Monda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>AgensSQL • Bitnine Global Inc.</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <style jsx global>
      {`
        :root {
          --font-monda: ${monda.style.fontFamily};
        }
      `}
    </style>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </>
)

export default App
