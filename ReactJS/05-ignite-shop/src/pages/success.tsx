import Link from 'next/link'

import { ImageContainer, SuccessContainer } from '@/src/styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul, <strong>User</strong> sua <strong>Camisa</strong> já está a
        caminho da sua casa
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
