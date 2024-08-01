import Comidas from '../../models/Comidas'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  background: 'write' | 'pink'
  comidas: Comidas[]
}

const ProductList = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida) => (
          <Product
            key={comida.id}
            title={comida.title}
            description={comida.description}
            image={comida.image}
            infos={comida.infos}
            button={comida.button}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default ProductList
