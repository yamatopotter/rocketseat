import { ShoppingBag } from 'lucide-react'
import type { AppProps } from 'next/app'

import { globalStyles } from '@/src/styles/global'

import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt={''} />

        <CartButton>
          <ShoppingBag color={'gray'} />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
