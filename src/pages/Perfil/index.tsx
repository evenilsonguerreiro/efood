import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
import Cardapio from '../../models/Cardapio'

import image from '../../assets/image/image 3 (1).png'

const perfil: Cardapio[] = [
  {
    id: 1,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  },
  {
    id: 2,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  },
  {
    id: 3,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  },
  {
    id: 4,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  },
  {
    id: 5,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  },
  {
    id: 6,
    title: 'Pizza margarita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: image
  }
]

const Perfil = () => (
  <>
    <Header2 />
    <Hero />
    <ProductList2 cardapios={perfil} />
    <Footer />
  </>
)
export default Perfil
