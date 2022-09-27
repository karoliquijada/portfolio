import Header from './components/header/header.component'
import Projects from './components/projects/proyects.component'
import Skills from './components/skills/proyects.component'
import './App.scss'


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
