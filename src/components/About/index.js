import { useEffect, useState } from 'react'
import {
  faAndroid,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { SiDart, SiFirebase, SiFlutter } from "react-icons/si";
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CV from '../../../src/assets/CV/Görkem_ALYAGUT.pdf'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Eager to learn and goal-oriented, Flutter developer with nearly 2 years of experience with Dart. Able to work well independently or as a part of a team with a good communication skills and awareness of their responsibilities. Good knowledge on Data Structures, OOP, Analysis and Algorithms through University lectures. Researching mobile applications and try a few apps, I liked this area and made an effort. After then, I found an internship company related to mobile applications and developed myself further. Therefore, my main goal is to gain new experiences while improving myself. Also, I know introductory HTML/JS/CSS and React JS. I'm currently learning Flutter and developing applications. Depending on the position to be given to me, I can take different pieces of training and improve myself rapidly. That's why I am open to any position.
          </p>
          <div>
            <a href={CV} rel="noreferrer" target="_blank" className='cv-button'>My CV</a>
          </div>


        </div>

        <div className="stage-cube-cont">
          <div id="stars">
          </div>
          <div id="stars2">
          </div>
          <div id="stars3">
          </div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#a4c639" />
            </div>
            <div className="face2">
              <SiFlutter color="#039BE5" />
            </div>
            <div className="face3">
              <SiDart color="#0075BA" />
            </div>
            <div className="face4">
              <SiFirebase color="#FFA611" />
            </div>
            <div className="face5">
              <FontAwesomeIcon fontSize={65} icon={faHtml5} color="#F06529" />
              <FontAwesomeIcon fontSize={65} icon={faCss3} color="#28A4D9" />
              <FontAwesomeIcon fontSize={65} icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}

export default About
