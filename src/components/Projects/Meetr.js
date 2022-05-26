import Circles from '../../assets/images/project-clips/meetr-clip-circles.mov'
import Events from '../../assets/images/project-clips/meetr-clip-events.mov'
import Map from '../../assets/images/project-clips/meetr-clip-map.mov'
import Onboarding from '../../assets/images/project-clips/onboarding.mov'
import AnimatedLetters from '../AnimatedLetters'
import './Meetr.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FirebaseLogo from '../../assets/images/firebase.png'
import MeetrLogo from '../../assets/images/meetr.png'
import Decoration1 from '../../assets/images/meetr-decoration1.png'
import Decoration2 from '../../assets/images/meetr-decoration2.png'

import {
  faReact,
  faFigma,
  faJs,
  faNode,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons'

const Meetr = () => {
  return (
    <div className="container project-page">
      <img className="decoration" src={Decoration1} alt="decoration" />
      <img className="decoration2" src={Decoration2} alt="decoration" />
      <img className="decoration3" src={Decoration2} alt="decoration" />
      <div className="text-zone">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: 20,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <img className="logo" src={MeetrLogo} alt="Meetr logo" />

            <h1 style={{ marginTop: 40 }}>Meetr</h1>
          </div>
          <p style={{ fontSize: 20 }}>an app for organizing social events. </p>
          <p>project type: native IOS/Android app</p>
          <p>startup organization</p>
          <p>December 2021 - present</p>
        </div>
        <video controls autoPlay loop muted>
          <source src={Onboarding} type="video/mp4"></source>
        </video>
      </div>
      <div className="tools">
        <div className="cube">
          <div>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div>
            <img
              className="logo-firebase"
              src={FirebaseLogo}
              alt="Firebase logo"
            />
          </div>

          <div>
            <FontAwesomeIcon icon={faNode} color="#28A4D9" />
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
          </div>

          <div>
            <FontAwesomeIcon icon={faFigma} color="#FF7262" />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="about">
          <h2 className="subtitle">About this project</h2>
          <p>
            Meetr is a one-stop shop for all your social processes. It makes
            organising complex hangouts a three-click process, facilitates
            impromptu meetups, and helps you actually do the exciting things you
            want to do with your friends. The core features of Meetr consist of
            Events, Circles, and Map. Download Meetr on TestFlight! <br />
            Meetr uses a simple React-Native and React-Native Libraries for the
            Frontend, and Firebase as an all in one Backend as a Service for
            Object and File Storage, Authentication, and Optimisation.
          </p>
          <a
            target="_blank"
            rel="nonreferrer"
            href="https://testflight.apple.com/join/c4Xg6UUf"
            className="test-flight"
            style={{
              fontSize: 50,
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: 'rgb(81, 160, 213, 0.5)',
              padding: 10,
              borderRadius: 10,
            }}
          >
            <FontAwesomeIcon icon={faAppStore} />
            <h3
              style={{
                marginBottom: 0,
                marginLeft: 10,
                color: 'white',
              }}
            >
              Download Meetr on TestFlight
            </h3>
          </a>
        </div>
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={Events} type="video/mp4"></source>
          </video>
          <p>events</p>
        </div>
        <div className="about">
          <h2 className="subtitle">My Role</h2>
          <h3>Full Stack Developer</h3>
          <p>
            Meetr is a startup organization consisting of development, design,
            and business operational teams. We've created a functional
            full-stack application along with design that is currently in the
            testing and continued development stage. As a co-developer, I have
            built the front and backend of various features including Polls,
            Maps, and BucketLists.
          </p>
        </div>

        <div className="technology"></div>
      </div>
      <div className="description">
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={Circles} type="video/mp4"></source>
          </video>
          <p>circles</p>
        </div>
        <div className="about">
          <h2 className="subtitle">Technical Sheet</h2>
          <h3 style={{ marginBottom: 40 }}>
            Technologies/Skills I work with on this project:{' '}
          </h3>
          <ul
            style={{
              textAlign: null,
              position: 'relative',
              textAlign: 'left',
              listStyleType: 'circle',
            }}
          >
            <li>React Native, front-end and back-end developlment</li>
            <li>Firebase Firestore</li>
            <li>Cloud Functions, writing and deploying</li>
            <li>Figma, designing and prototyping</li>
            <li>Github</li>
            <li>UI/UX Animations</li>
          </ul>
        </div>
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={Map} type="video/mp4"></source>
          </video>
          <p style={{ marginLeft: 10, marginTop: -45 }}>map</p>
        </div>
      </div>
    </div>
  )
}
export default Meetr
