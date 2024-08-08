import Cardapio from '../../models/Cardapio'
import Product2 from '../Product2'
import { Container, List2 } from './styles'

type Props = {
  cardapios: Cardapio[]
}

const ProductList2 = ({ cardapios }: Props) => (
  <Container>
    <div className="container">
      <List2>
        {cardapios.map((cardapio) => (
          <Product2
            key={cardapio.id}
            title={cardapio.title}
            description={cardapio.description}
            image={cardapio.image}
          />
        ))}
      </List2>
    </div>
  </Container>
)
export default ProductList2
