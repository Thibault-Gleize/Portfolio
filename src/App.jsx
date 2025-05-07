import './styles/App.scss'
import Header from './features/Header/Header'
import Banner from './features/Banner/Banner'
import AboutMe from './features/AboutMe/AboutMe'
import MySkills from './features/MySkills/MySkills'
import Projects from './features/Projects/Projects'
import EduAndExp from './features/EduAndExp/EduAndExp'
import Footer from './features/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <MySkills />
        <EduAndExp />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
