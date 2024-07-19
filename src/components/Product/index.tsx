import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Descricao, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  imagen: string
  infos: string[]
}

const Product = ({
  title,
  category,
  description,
  imagen,
  system,
  infos
}: Props) => (
  <Card>
    <img src={imagen} alt={title} />
    <div>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <Title>{title}</Title>
    <Infos>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
    </Infos>
    <Descricao>{description}</Descricao>
    <ButtonContainer>saiba mais</ButtonContainer>
  </Card>
)
export default Product
