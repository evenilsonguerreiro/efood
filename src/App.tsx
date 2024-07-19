import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <div></div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
