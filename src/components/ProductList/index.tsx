import Product from '../Product'
import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <div>
      <List>
        <Product
          title="Hioki Sushi "
          category="japones"
          system={'destaque'}
          description={'teste'}
          imagen={'//placehold.it/472x217'}
          infos={[]}
        />
        <Product
          title="Hioki Sushi "
          category="japones"
          system={'destaque'}
          description={'teste'}
          imagen={'//placehold.it/472x217'}
          infos={[]}
        />
      </List>
    </div>
  </Container>
)
export default ProductList
