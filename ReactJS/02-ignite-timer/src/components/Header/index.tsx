import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/ignite-logo.svg'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
