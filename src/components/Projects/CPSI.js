import OUs from '../../assets/images/project-clips/google-ou.mov'
import Groups from '../../assets/images/project-clips/google-groups.mov'
import Users from '../../assets/images/project-clips/google-users.mov'
import Login from '../../assets/images/project-clips/google-login.mov'
import AnimatedLetters from '../AnimatedLetters'
import './Meetr.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FirebaseLogo from '../../assets/images/firebase.png'
import Decoration1 from '../../assets/images/gcp.png'
import Xamarin from '../../assets/images/xamarinlogo.png'
import API from '../../assets/images/googleapis.png'
import CSharp from '../../assets/images/c-sharp.png'
import GRPC from '../../assets/images/grpc.png'
import GCP from '../../assets/images/gcp.png'

import {
  faFigma,
  faJs,
  faNode,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons'

const CPSI = () => {
  return (
    <div className="container project-page">
      <img className="decoration" src={Decoration1} alt="decoration" />
      <img className="decoration2" src={Decoration1} alt="decoration" />
      <img className="decoration3" src={Decoration1} alt="decoration" />
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
            <h1 style={{ marginTop: 40 }}>Google Directory Management App</h1>
          </div>
          <p style={{ fontSize: 20 }}>
            an app for managing school grades, groups, and users.{' '}
          </p>
          <p>project type: cross-platform Xamarin.Forms app</p>
          <p>
            with{' '}
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://www.cpsiltd.com/"
              style={{ color: 'white' }}
            >
              CPSI Ltd.{' '}
            </a>
          </p>
          <p>May 2022 - July 2022</p>
        </div>
        <video controls autoPlay loop muted>
          <source src={Login} type="video/mp4"></source>
        </video>
      </div>
      <div className="tools">
        <div className="cube">
          <div>
            <img className="logo-firebase" src={Xamarin} alt="Xamarin logo" />
          </div>
          <div>
            <img className="logo-firebase" src={API} alt="API logo" />
          </div>
          <div>
            <img className="logo-firebase" src={CSharp} alt="c-sharp logo" />
          </div>
          <div>
            <img className="logo-firebase" src={GRPC} alt="GRPC logo" />
          </div>
          <div>
            <img className="logo-firebase" src={GCP} alt="GCP logo" />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="about">
          <h2 className="subtitle">About this project</h2>
          <p>
            The Google Directory API offers tools to manage organizations,
            organizational units, groups, and users for low costs due to the
            power of Google Cloud. The domain that this project deals with is
            managing school and school district organization such as grades,
            classes, and students/staff. The inspiration of this project is to
            provide a simple UI for schools to use these services. <br />
            The prototype for the application uses Xamarin Forms for
            cross-platform development and interacts with a backend service in
            gRPC deployed on Google Cloud.
          </p>
        </div>
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={Groups} type="video/mp4"></source>
          </video>
          <p>classes</p>
        </div>
        <div className="about">
          <h2 className="subtitle">My Role</h2>
          <h3>Full Stack Developer</h3>
          <p>
            I was on this project during its introductory stages with only
            initial requirements laid out. I worked on testing and interacting
            with the Google Directory and Google Drive APIs, writing utility and
            service functions in C#. I then wireframed the UI of the application
            using Figma, and implemented parts of it using Xamarin Forms,
            including authentication with Google. Then, due to compatibility
            issues and limitations with the languages/frameworks being used, I
            designed a service-based solution for the interaction with the APIs,
            proposing a service written in gRPC hosted on Google Cloud that is
            abstracted from the native application. I wrote and deployed a
            prototype of this service using GCP tools Cloud Run and API Gateway.
          </p>
        </div>

        <div className="technology"></div>
      </div>
      <div className="description">
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={OUs} type="video/mp4"></source>
          </video>
          <p>grades</p>
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
            <li>.NET and C#, for all frontend and backend development</li>
            <li>Xamarin Forms, front-end developlment</li>
            <li>
              Google Cloud Platform tools, including Google Cloud Console, Cloud
              Run, API Gateway, and Google Cloud CLI for
              credentials/authentication and deploying a backend service
            </li>
            <li>
              Google Directory and Google Drive APIs, including authentication
              with these APIs
            </li>
            <li>
              gRPC-Web, for writing a backend service endpoint that would be
              deployed on Google Cloud
            </li>
            <li>
              Service-oriented architecture, for designing a backend solution
              that is robust, platform/language agnostic, and sustainable
            </li>
            <li>Figma, designing and prototyping the UI of the application</li>
            <li>Github for version control</li>
          </ul>
        </div>
        <div className="text-video">
          <video controls autoPlay loop muted>
            <source src={Users} type="video/mp4"></source>
          </video>
          <p style={{ marginLeft: 0, marginTop: 40 }}>students</p>
        </div>
      </div>
    </div>
  )
}
export default CPSI
