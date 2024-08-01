import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <div>
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
