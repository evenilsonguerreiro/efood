import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <Hero />
    </>
  )
}
export default App
