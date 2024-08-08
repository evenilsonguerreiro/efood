import fundo from '../../assets/image/fundo (1).png'
import Restaurante from '../../assets/image/Restaurantes.png'
import carrinho from '../../assets/image/0 produto(s) no carrinho.png'
import logo from '../../assets/image/logo (1).png'
import { HeaderLogo, HeaderPerfil, HeaderText1, HeaderText2 } from './styles'

const Header2 = () => (
  <>
    <HeaderPerfil>
      <img src={fundo} />
    </HeaderPerfil>
    <HeaderText1>
      <img src={Restaurante} />
    </HeaderText1>
    <HeaderLogo>
      <img src={logo} />
    </HeaderLogo>
    <HeaderText2>
      <img src={carrinho} />
    </HeaderText2>
  </>
)

export default Header2
