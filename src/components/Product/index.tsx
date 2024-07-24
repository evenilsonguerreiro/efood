import { ButtonContainer } from '../Button/styles'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <Titulo>hioki sushi</Titulo>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
      perspiciatis quos laudantium dolores temporibus, odio, quas excepturi fuga
      architecto illum vero perferendis laboriosam similique id doloribus nisi
      ullam blanditiis reprehenderit?
    </Descricao>
    <ButtonContainer>saiba mais</ButtonContainer>
  </Card>
)
export default Product
