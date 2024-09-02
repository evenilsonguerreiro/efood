import { HeaderBar, HeaderTexto, Logo } from './styles'

import fundo from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo (1).png'

const Header = () => (
  <HeaderBar>
    <img src={fundo} alt="" />
    <Logo>
      <img src={logo} alt="" />
    </Logo>
    <HeaderTexto>
      Viva experiencia gastronômicas no conforto da sua casa
    </HeaderTexto>
  </HeaderBar>
)

export default Header
