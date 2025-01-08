import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { HeaderMenu } from "./components/HeaderMenu"
import { Projects } from "./components/Projects";
import { TextComponent } from "./components/TextComponent";


function App() {

  const username = 'kazbonfim'

  return (
    <>
      <Header username={username} />
      <HeaderMenu/>
      <TextComponent/>
      {/* Conteúdo */}
      <About/>
      <Projects/>
      {/* Conteúdo */}
      <Footer/>
    </>
  )
}

export default App
