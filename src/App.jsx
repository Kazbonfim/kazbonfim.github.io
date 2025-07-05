import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { HeaderMenu } from "./components/HeaderMenu"
import { TextComponent } from "./components/TextComponent";
import Cards from "./components/Cards";
import { useEffect } from 'react'
import Inspirations from './components/Inspirations';
import Projects from './components/Projects';


function App() {

  const username = 'kazbonfim';

  return (
    <>
      <Header username={username} />
      <HeaderMenu />
      <About />
      <Inspirations/>
      <Projects/>
      <Cards />
      <Footer />
      {/* <TextComponent/> */}
    </>
  )
}

export default App
