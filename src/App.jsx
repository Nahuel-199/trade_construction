import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Novedades from './components/novedades/Novedades';
import Parallax from './components/parallax/Parallax';
import ScrollUp from './components/scrollup/ScrollUp';
import Wsp from "./components/wsp/Wsp";

function App() {

  return (
    <div>
      <Navbar />
      <main className='main'>
        <Header />
        <Wsp />
        <About />
        <Parallax />
        <Novedades />
        <Contact />
        </main>
        <Footer />
        <ScrollUp />
    </div>
  )
}

export default App
