import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import SobreMi from './components/SobreMi'
import fondo from './assets/fondo.png'
import Header from './components/Header'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Educacion from './components/Educacion'
import Contacto from './components/Contacto'
import esp from './JSON/esp.json'
import eng from './JSON/eng.json'
import fotoChapatriste from './assets/chapatriste.jpg';
import fotoRedie from './assets/redie.png';

const imagenesProyectos = {
  Chapatriste: fotoChapatriste,
  "Re:Die": fotoRedie
};


function App() {
  const [idioma, setIdioma] = useState("esp");
  const leng = idioma == "esp" ? esp:eng;
  return (
    <>
      <NavBar leng={leng} idioma={idioma} setIdioma={setIdioma}/>
      <SobreMi leng={leng}/>
      <Header titulo={leng.navbar.sections[1]} id='experiencia' />
      <Experiencia leng={leng}/>
      <Header titulo={leng.navbar.sections[2]} id='proyecto' />
      <div className='proyectos'>
        <Proyectos leng={leng} imagenes={imagenesProyectos}/>
      </div>
      <Header titulo={leng.navbar.sections[3]} id='educacion' />
      <Educacion leng={leng}/>
      <Header titulo={leng.navbar.sections[4]} id='contacto' leng={leng}/>
      <Contacto/>
    </>
  )
}

export default App
