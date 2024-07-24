import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  background: 'write' | 'black'
}

const ProductList = ({ background }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)
export default ProductList
