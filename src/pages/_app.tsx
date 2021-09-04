import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/css/uikit.css'
import '@/styles/globals.scss'

import {
  motion,
  AnimateSharedLayout,
  AnimatePresence
} from 'framer-motion'


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
