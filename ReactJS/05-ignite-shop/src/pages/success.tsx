import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { stripeLib } from '@/src/lib/stripe'
import { ImageContainer, SuccessContainer } from '@/src/styles/pages/success'

interface SucessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: SucessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name={'robots'} content={'noindex'} />
      </Head>

      <SuccessContainer>
        <h1>Compra Efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt={''} />
        </ImageContainer>

        <p>
          Uhuul, <strong>{customerName}</strong> sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa
        </p>

        <Link href={'/'}>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripeLib.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
