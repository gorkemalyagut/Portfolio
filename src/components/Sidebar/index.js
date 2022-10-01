import './index.scss'
import LogoS from '../../assets/images/logo-g.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSuitcase, faUserTie, faHomeLgAlt, faBars, faClose, faCog } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="görkem" />
        
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/">
          <FontAwesomeIcon icon={faHomeLgAlt} color="#737374" />

        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          to="/about">
          <FontAwesomeIcon icon={faUserTie} color="#737374" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="skills-link"
          to="/skills">
          <FontAwesomeIcon icon={faCog} color="#737374" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#737374" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#737374" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#FCD12A"
          size="3x"
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gorkemalyagut/"
            target="_blank"
            rel="noreferrer"

          >
            <FontAwesomeIcon icon={faLinkedin} color="#737374" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gorkemalyagut"
            target="_blank"
            rel="noreferrer"

          >
            <FontAwesomeIcon icon={faGithub} color="#737374" className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/gorkemalyagut/"
            rel="noreferrer"
            target="_blank"

          >
            <FontAwesomeIcon icon={faInstagram} color="#737374"  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a 
          href="https://www.facebook.com/qorkem77" 
          rel="noreferrer" 
          target="_blank"

          >
            
            <FontAwesomeIcon icon={faFacebook} color="#737374" className="anchor-icon" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#FCD12A"
        size="3x"
        className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar
