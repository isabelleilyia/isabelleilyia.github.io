import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import Meetr from '../../assets/images/meetr.png'
import ToDo from '../../assets/images/todo.png'
import { Link } from 'react-router-dom'
import T from '../../assets/images/gt-tech.jpeg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
      </div>

      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src={Meetr}
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
          />
          <h2 className="project-title">MEETR</h2>
          <p className="project-details">
            React Native mobile app for organizing meet-ups, coordinating
            circles, and keeping up with your friends!
          </p>
          <Link to="/meetr" className="flat-button">
            CHECK IT OUT
          </Link>
        </div>
        <div className="project-container project-card">
          <img
            src={ToDo}
            alt="netflic-clone"
            loading="lazy"
            className="project-pic"
          />
          <h2 className="project-title">TODO</h2>
          <p className="project-details">
            Django web application for organizing projects in a single
            dashboard.
          </p>
          <Link to="/todo" className="flat-button">
            CHECK IT OUT
          </Link>
        </div>
        {/* <div className="project-container project-card">
          <img
            src={T}
            alt="greeny-earth"
            loading="lazy"
            className="project-pic"
          />
          <h2 className="project-title">T-HEIST</h2>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <Link to="/contact" className="flat-button">
            CHECK IT OUT
          </Link>
        </div> */}
      </div>
    </div>
  )
}
export default Projects
