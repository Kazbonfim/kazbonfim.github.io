import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { HeaderMenu } from "./components/HeaderMenu"
import { Projects } from "./components/Projects";
import { TextComponent } from "./components/TextComponent";
import Cards from "./components/Cards";


function App() {

  const username = 'kazbonfim'

  return (
    <>
      <Header username={username} />
      <HeaderMenu/>
      <About/>
      <Cards/>
      {/* <TextComponent/> */}
      {/* <Projects/> */}
      <Footer/>
    </>
  )
}

export default App
