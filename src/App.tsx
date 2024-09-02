import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Product from './components/Product'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Product />
      </>
    )
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <div>
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}
export default App
