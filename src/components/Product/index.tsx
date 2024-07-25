import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  button: string
}

const Product = ({ title, description, image, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Link to="/perfil">Saiba mais</Link>
  </Card>
)
export default Product
