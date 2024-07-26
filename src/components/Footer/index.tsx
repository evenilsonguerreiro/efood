import { ContainerFooter, Descricao, Section } from './styles'

import logo from '../../assets/image/logo (1).png'
import Vetor from '../../assets/image/Vector.png'
import Group from '../../assets/image/Group.png'
import instagram from '../../assets/image/instagram-round-svgrepo-com (1) 1.png'

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <img src={logo} alt="" />
      <Section>
        <img src={Group} alt="" />
        <img src={instagram} alt="" />
        <img src={Vetor} alt="" />
      </Section>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado. .
      </Descricao>
    </div>
  </ContainerFooter>
)

export default Footer
