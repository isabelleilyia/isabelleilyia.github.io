import LogoTitle from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Profile from '../../assets/images/profile.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s', 'a', 'b', 'e', 'l', 'l', 'e', '.']
  const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2 style={{ marginBottom: 35, fontSize: 16 }}>
          Computer Science Major at the Georgia Institute of Technology
        </h2>
        <Link to="/about" className="flat-button">
          ABOUT ME
        </Link>
        <Link to="/projects" className="flat-button">
          MY PROJECTS
        </Link>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="profile-pic-container">
        <h2
          style={{
            fontSize: 40,
            fontFamily: 'Coolvetica',
            color: 'white',
            fontWeight: 400,
            position: 'relative',
            marginBottom: 40,
            marginTop: 0,
            marginRight: 15,
          }}
        >
          welcome.
        </h2>
        <img src={Profile} className="profile-picture" alt="profile" />
      </div>
      <Logo />
    </div>
  )
}

export default Home
