import { HeaderBar, HeaderLogo, HeaderTitle } from './styles'

import fundo from '../../assets/image/fundo.png'
import logo from '../../assets/image/logo (1).png'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={fundo} />
    </div>
    <HeaderLogo>
      <img src={logo} />
    </HeaderLogo>
    <HeaderTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderTitle>
  </HeaderBar>
)

export default Header
