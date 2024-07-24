import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList background="write" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
