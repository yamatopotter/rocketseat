import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

export default function Id() {
  // const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad adipisci commodi delectus doloremque eius excepturi facere harum
          iste labore minus, nostrum numquam omnis porro quo, quod similique
          unde vel.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
