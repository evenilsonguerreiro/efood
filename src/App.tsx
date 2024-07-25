import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Home from './components/pages/Home'
import Perfil from './components/pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
