import { Link } from 'react-router-dom'
import { Card2, Card2Descricao, Card2Title } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product2 = ({ title, description, image }: Props) => (
  <Card2>
    <img src={image} alt="" />
    <Card2Title>{title}</Card2Title>
    <Card2Descricao>{description}</Card2Descricao>
    <Link className="links2" to={'carrinho'}>
      Adicionar ao carrinho
    </Link>
  </Card2>
)

export default Product2
