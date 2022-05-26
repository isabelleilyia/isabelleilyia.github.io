import ToDoLogo from '../../assets/images/todo.png'
import './ToDo.scss'
import {
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Django from '../../assets/images/django.png'
import Decoration from '../../assets/images/todo-decoration.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDo = () => {
  return (
    <div className="container project-page">
      <img className="decoration" src={Decoration} alt="decoration" />
      <img className="decoration2" src={Decoration} alt="decoration" />
      <img className="decoration3" src={Decoration} alt="decoration" />
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
            <img className="logo" src={ToDoLogo} alt="ToDo logo" />

            <h1 style={{ marginTop: 40 }}>ToDo</h1>
          </div>
          <p style={{ fontSize: 20 }}>
            an app to organize and develop projects.{' '}
          </p>
          <p>project type: web application</p>
          <p>personal project</p>
          <p>June 2019 - August 2019</p>
          <div style={{ flexDirection: 'row', marginTop: 30 }}>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://github.com/isabelleilyia/TODO-Student-Planner"
              style={{
                fontSize: 40,
                color: 'white',
                padding: 15,
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://youtu.be/yMgb-5tzulw"
              style={{
                fontSize: 40,
                color: 'white',
                padding: 15,
              }}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        <div
          className="tools"
          style={{
            width: '40%',
            height: '80%',
          }}
        >
          <div className="cube">
            <div>
              <img className="logo-django" src={Django} alt="Django logo" />
            </div>

            {/* <div>
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div> */}
            <div>
              <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
            </div>
            <div>
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>

            <div>
              <FontAwesomeIcon icon={faCss3} color="#FF7262" />
            </div>
          </div>
        </div>
      </div>
      <div className="video-responsive">
        <iframe
          src="https://www.youtube.com/embed/yMgb-5tzulw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="description" style={{ alignItems: 'flex-start' }}>
        <div className="about">
          <h2 className="subtitle">About this Project</h2>

          <p>
            ToDo is a web application student planner created to organize all
            the work, research, and tasks associated with any project in a
            single dashboard. It is meant to address inconveniences such as
            having 20+ tabs to keep track of between the start and end date of a
            project, keeping track of which research links have been cited,
            keeping track of what tasks are left to accomplish for a project,
            and more. It would be a simple fix by just keeping this single tab
            open to keep track of all project progress.
          </p>
        </div>
        <div className="about">
          <h2 className="subtitle">My Role</h2>
          <h3 style={{ marginBottom: 40 }}>Full Stack Developer </h3>
          <p>
            I completed all stages of development for this product including
            ideation, design, development, and testing.
          </p>
        </div>
        <div className="about">
          <h2 className="subtitle">Technical Sheet</h2>
          <h3 style={{ marginBottom: 40 }}>
            Technologies/Skills I worked with on this project:{' '}
          </h3>
          <ul
            style={{
              textAlign: null,
              position: 'relative',
              textAlign: 'left',
              listStyleType: 'circle',
            }}
          >
            <li>Django, for backend</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ToDo
