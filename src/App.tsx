import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  const location = useLocation()

  const isPerfilPage = location.pathname === '/perfil'

  return (
    <>
      <EstiloGlobal />
      {!isPerfilPage && <Header />}
      <Rotas />
      {!isPerfilPage && <Footer />}
    </>
  )
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
