import ProductList from '../../components/ProductList'
import Comidas from '../../models/Comidas'

import image from '../../assets/image/image 1.png'
import imagem from '../../assets/image/imagem.png'

const inicil: Comidas[] = [
  {
    id: 1,
    title: 'Hiok sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['destaque', 'japones'],
    image: imagem,
    button: 'saiba mais'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: image,
    button: 'saiba mais'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: image,
    button: 'saiba mais'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: image,
    button: 'saiba mais'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: image,
    button: 'saiba mais'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Italiana'],
    image: image,
    button: 'saiba mais'
  }
]

const Home = () => (
  <>
    <ProductList comidas={inicil} background="write" />
  </>
)
export default Home
