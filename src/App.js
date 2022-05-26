import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Meetr from './components/Projects/Meetr'
import ToDo from './components/Projects/ToDo'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="meetr" element={<Meetr />} />
          <Route path="todo" element={<ToDo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
