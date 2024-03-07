import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

import { stripe } from '../../lib/stripe'

interface ProductDataProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
}

interface ProductProps {
  product: ProductDataProps
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={''} width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Pf0GeFwYAhtp5y' } }],
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<
  { product: ProductDataProps },
  { id: string }
> = async ({ params }) => {
  if (!params) {
    throw new Error('Id não encontrada')
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  const formattedProduct: ProductDataProps = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    description: product.description ? product.description : '',
  }

  return {
    props: {
      product: formattedProduct,
    },
    revalidate: 60 * 60 * 1,
  }
}
