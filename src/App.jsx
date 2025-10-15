import Home from './components/homePage/Home'
import Navbar from './components/navbarPage/Navbar'
import SobreMim from './components/sobremimPage/SobreMim'
import Projetos from './components/projetosPage/Projetos'
import Habilidades from './components/habilidadesPage/Habilidades'
import Experiencia from './components/experienciaPage/Experiencia'
import Contato from './components/contatoPage/Contato'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <SobreMim />
        <Projetos />
        <Habilidades />
        <Experiencia />
        <Contato />
      </main>
    </>
  )
}

export default App
