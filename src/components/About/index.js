import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,
  faFigma,
  faGithub,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faAngleUp,
  faCode,
  faFile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import C_sharp from '../../assets/images/c-sharp.png'
import Django from '../../assets/images/django.png'
import VSCode from '../../assets/images/vscode.png'
import Terminal from '../../assets/images/terminal.png'
import Xamarin from '../../assets/images/xamarinlogo.png'
import Dotnet from '../../assets/images/dotnet.png'
import FirebaseLogo from '../../assets/images/firebase.png'
import APIs from '../../assets/images/googleapis.png'
import GRPC from '../../assets/images/grpc.png'
import GCP from '../../assets/images/gcp.png'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div style={{ top: '-14.5%' }} className="container about-page">
      <div className="text-zone" id="beginning">
        <div style={{ width: '50%' }}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a second year computer science major at the Georgia Institute
            of Technology. My{' '}
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://www.cc.gatech.edu/threads-better-way-learn-computing"
              style={{ color: 'white' }}
            >
              {' '}
              threads{' '}
            </a>{' '}
            (concentrations) are "People" (Designing, building, and evaluating
            systems that treat humans as the central component) and "Information
            Internetworks" (Representing, transforming, transmitting, and
            presenting information).
          </p>
          <div style={{ flexDirection: 'row', width: '100%' }}>
            <h3 style={{ color: 'white', marginTop: '5rem' }}>
              Short on Time? Cut to the chase.
            </h3>
            <div className="glass-btn button2">
              <a
                rel="nonreferrer"
                target="_blank"
                href="https://www.canva.com/design/DAE6zW17kRg/g2zqucCv9QWn5d-7jfoQDQ/view?utm_content=DAE6zW17kRg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              >
                <FontAwesomeIcon
                  icon={faFile}
                  className="quick-icon"
                  color="white"
                />
              </a>
            </div>
          </div>
          <div className="button-container">
            {/* <div className="glass-btn button1">
              <Link to="/projects">
                <FontAwesomeIcon
                  icon={faCode}
                  className="quick-icon"
                  color="white"
                />
              </Link>
            </div> */}

            {/* <div className="glass-btn button3">
              <Link to="/contact">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="quick-icon"
                  color="white"
                />
              </Link>
            </div> */}
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#F89820" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="transition"
        style={{ position: 'absolute', bottom: '7%' }}
      >
        <h3 style={{ marginBottom: 0, color: '#ccccff' }}>
          Discover more about Isabelle
        </h3>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => {
            document
              .getElementById('scrollTo1')
              .scrollIntoView({ behavior: 'smooth', block: 'end' })
            for (var element of document.querySelectorAll('.skill-circle')) {
              element.classList.Add('animated-skill')
            }
          }}
        />
      </div>
      <div className="skills" id="scrollTo1">
        <h1 style={{ marginBottom: 0 }}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'M',
              'y',
              ' ',
              'T',
              'o',
              'p',
              ' ',
              'S',
              'k',
              'i',
              'l',
              'l',
              's',
            ]}
            idx={15}
          />
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            marginLeft: '9%',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <div className="skill-circle language">
            <FontAwesomeIcon icon={faJava} color="#F89820" />
            <h3 class="skill-name">JAVA</h3>
          </div>
          <div className="skill-circle language">
            <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            <h3 class="skill-name">PYTHON</h3>
          </div>
          <div className="skill-circle language">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            <h3 class="skill-name">JAVASCRIPT</h3>
          </div>
          <div className="skill-circle language">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            <h3 class="skill-name">HTML5</h3>
          </div>
          <div className="skill-circle language">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <h3 class="skill-name">CSS3</h3>
          </div>

          <div className="skill-circle language">
            <img style={{ height: 50, width: 50 }} src={C_sharp} alt="C#" />
            <h3 class="skill-name">C#</h3>

            <h3 class="curved">
              <span>L</span>
              <span>A</span>
              <span>N</span>
              <span>G</span>
              <span>U</span>
              <span>A</span>
              <span>G</span>
              <span>E</span>
              <span>S</span>
            </h3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            marginLeft: '9%',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <div className="skill-circle framework">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <h3 class="skill-name2">REACTJS + REACT NATIVE</h3>
          </div>
          <div className="skill-circle framework">
            <img
              className="logo-django"
              style={{ height: 50, width: 50 }}
              src={Django}
              alt="Django logo"
            />
            <h3 class="skill-name2">DJANGO</h3>
          </div>
          <div className="skill-circle framework">
            <img
              className="logo-xamarin"
              style={{ height: 50, width: 50 }}
              src={Xamarin}
              alt="Xamarin logo"
            />
            <h3 class="skill-name2">XAMARIN</h3>
          </div>
          <div className="skill-circle framework">
            <h3 class="skill-name2">.NET CORE</h3>
            <img
              style={{ height: 50, width: 50 }}
              src={Dotnet}
              alt="Dotnet logo"
            />
            <h3 class="curved">
              <span>F</span>
              <span>R</span>
              <span>A</span>
              <span>M</span>
              <span>E</span>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span>
              <span>S</span>
            </h3>
          </div>
          <div className="skill-circle google">
            <img
              className="logo-firebase"
              style={{ height: 50, width: 50 }}
              src={FirebaseLogo}
              alt="Firebase logo"
            />
            <h3 class="skill-name2">FIREBASE</h3>
          </div>

          <div className="skill-circle google">
            <img
              className="logo-API"
              style={{ height: 50, width: 50 }}
              src={APIs}
              alt="APIs logo"
            />
            <h3 class="skill-name2">DIRECTORY/DRIVE APIS</h3>
            <h3 class="curved">
              <span> </span>
              <span> </span>
              <span>G</span>
              <span>O</span>
              <span>O</span>
              <span>G</span>
              <span>L</span>
              <span>E</span>
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            <div className="skill-circle dev">
              <FontAwesomeIcon icon={faGithub} />
              <h3 class="skill-name3">GITHUB</h3>
            </div>
            <div className="skill-circle dev">
              <img
                className="logo-vs"
                style={{ height: 50, width: 50 }}
                src={VSCode}
                alt="VSCode logo"
              />
              <h3 class="skill-name3">VS / VS CODE</h3>
            </div>
            <div className="skill-circle dev">
              <img
                className="logo-terminal"
                style={{ height: 50, width: 50 }}
                src={Terminal}
                alt="Termninal logo"
              />
              <h3 class="skill-name3">COMMAND-LINE</h3>
            </div>

            <div className="skill-circle dev">
              <FontAwesomeIcon icon={faFigma} color="#FF7262" />
              <h3 class="skill-name3">FIGMA</h3>

              <h3 class="curved">
                <span> </span>
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span> </span>
                <span>T</span>
                <span>O</span>
                <span>O</span>
                <span>L</span>
                <span>S</span>
              </h3>
            </div>
            <div className="skill-circle google">
              <img
                className="logo-firebase"
                style={{ height: 60, width: 60 }}
                src={GRPC}
                alt="GRPC logo"
              />
              <h3 class="skill-name3">GRPC</h3>
            </div>
            <div className="skill-circle google">
              <img
                className="logo-firebase"
                style={{ height: 40, width: 50 }}
                src={GCP}
                alt="GCP logo"
              />
              <h3 class="skill-name3">GOOGLE CLOUD PLATFORM</h3>
            </div>
          </div>
        </div>
        <div className="transition">
          <h3 style={{ marginBottom: 0, marginTop: 0, color: '#ccccff' }}>
            My Values
          </h3>
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={() =>
              document
                .getElementById('values-section')
                .scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
          />
        </div>
      </div>
      <div
        className="values"
        id="values-section"
        style={{ background: '#022c43' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            maxHeight: '100%',
            marginLeft: '10%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '70%',
              marginTop: '10%',
              flexWrap: 'wrap',
            }}
          >
            <h1 style={{ left: 0, marginLeft: 0 }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'V', 'a', 'l', ' u', 'e', 's']}
                idx={15}
              />
            </h1>

            <p>
              For the longest time, I thought architecture was my calling. I
              loved the idea of designing something from scratch and envisioning
              the structure of a functional, attractive, charming product for
              the consumer. But I came to realize that I very much hate drawing
              (and am very much sub-par at it). But my passion nonetheless
              remained in the realm of innovation. The first programming pool I
              dipped my toe into was the *not so* wonderful world of C. While
              frustratingly "malloc"-ing memory and confusing assignment with
              equality operators, I decided that computer science was not for
              me. It wasn't until I began creating– building and designing my
              own solutions in the form of applications and others– that I found
              the Stockholm Syndrome charm of the 0's and 1's that I am now
              bound to for life.
            </p>
            <p>
              As I delve deeper and deeper into the field of technology,
              understanding the 'why' behind the 'what' will form the bread and
              butter of my endeavours. Technology, although seemingly inanimate,
              is engineered both by humans and for humans, each of whom have
              needs and backgrounds to share. To me, creating meaningful
              innovation is truly understanding the stories behind those it is
              aimed to help, increasing the fervor with which I devote myself to
              it.
            </p>
            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '-10%',
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                marginLeft: '9%',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              <Carousel />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              justifyContent: 'space-around',
            }}
          >
            <div className="value-square">
              <h3
                style={{ marginBottom: 0, color: 'rgb(0,0,0,0.7)', zIndex: 1 }}
              >
                Productivity
              </h3>
            </div>
            <div
              // style={{
              //   borderRadius: '25%',
              //   width: 120,
              //   height: 80,
              //   marginBottom: 0,
              // }}
              className="value-square"
            >
              <h3
                style={{ marginBottom: 0, color: 'rgb(0,0,0,0.7)', zIndex: 1 }}
              >
                Efficiency
              </h3>
            </div>
            <div
              // style={{
              //   borderRadius: '25%',
              //   width: 120,
              //   height: 80,
              //   marginBottom: 0,
              // }}
              className="value-square"
            >
              <h3
                style={{ marginBottom: 0, color: 'rgb(0,0,0,0.7)', zIndex: 1 }}
              >
                Compassion
              </h3>
            </div>
            <div
              // style={{
              //   borderRadius: '25%',
              //   width: 120,
              //   height: 80,
              //   marginBottom: 0,
              // }}
              className="value-square"
            >
              <h3
                style={{ marginBottom: 0, color: 'rgb(0,0,0,0.7)', zIndex: 1 }}
              >
                Innovation
              </h3>
            </div>
            <div
              // style={{
              //   borderRadius: '25%',
              //   width: 120,
              //   height: 80,
              //   marginBottom: 0,
              // }}
              className="value-square"
            >
              <h3
                style={{ marginBottom: 0, color: 'rgb(0,0,0,0.7)', zIndex: 1 }}
              >
                Discipline
              </h3>
            </div>
          </div>
        </div>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </div>
  )
}

export default About
