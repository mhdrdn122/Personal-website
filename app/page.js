import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import './globals.css'
export default async function Home() {
  

 return (
  <div className="container" >
    <Header />
    <Hero />
    <Main />
    <Contact />
    <About />
  </div>
  )
}
