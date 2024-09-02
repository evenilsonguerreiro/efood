import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <Titulo>titulo</Titulo>
    <Tag>category</Tag>
    <Tag>system</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
      libero officia quas incidunt esse dolores, nam vitae ipsum iure,
      voluptatem eveniet soluta minus dolor voluptatibus repudiandae neque
      veniam explicabo dicta?
    </Descricao>
    <ButtonContainer>saiba mais</ButtonContainer>
  </Card>
)
export default Product
