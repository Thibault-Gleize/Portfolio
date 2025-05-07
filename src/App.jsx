import './styles/App.scss'
import Header from './features/Header/Header'
import Banner from './features/Banner/Banner'
import AboutMe from './features/AboutMe/AboutMe'
import MySkills from './features/MySkills/MySkills'
import Projects from './features/Projects/Projects'
import Contact from './features/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <MySkills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
