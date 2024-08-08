import imagem from '../../assets/image/imagem de fundo.png'
import Italiana from '../../assets/image/Italiana.png'
import Trattoria from '../../assets/image/La Dolce Vita Trattoria.png'
import { FundoHero, HeroText1, HeroText2 } from './styles'

const Hero = () => (
  <>
    <FundoHero>
      <img src={imagem} />
    </FundoHero>
    <div className="container">
      <HeroText1>
        <img src={Italiana} />
      </HeroText1>
      <HeroText2>
        <img src={Trattoria} />
      </HeroText2>
    </div>
  </>
)
export default Hero
