import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import CV from '../../../src/assets/CV/Görkem_ALYAGUT.pdf'
import './index.scss'
import TagCloud from "./tag-cloud"

const Skills = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>

      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e',]}
              idx={10}
            />
          </h1>
          <p>

            Mobile and Web development including technologies like
            <span className='tech-tag'> Flutter</span>,
            <span className='tech-tag'> Dart</span>,
            <span className='tech-tag'> Firebase</span>,
            <span className='tech-tag'> Java</span>,
            <span className='tech-tag'> SQLite</span>,
            <span className='tech-tag'> HTML/CSS/JavaScript</span>,
            <span className='tech-tag'> React</span>,
            <span className='tech-tag'> Git</span>,
            <span className='tech-tag'> Bitbucket</span>, etc.
          </p>

          <p>
            I've been interested in Flutter for about two years. I am familiar with Firebase and SQLite databases and have used them with Flutter and React frameworks. For a short time, I was interested in HTML/CSS and JavaScript. I'm currently working and learning with Flutter. I put special effort into optimizing my code and providing the best user experience. Depending on the position to be given to me, I can take different pieces of training and improve myself rapidly. That's why I
            am open to any position.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gorkemalyagut/"
              rel='noreferrer'
            > LinkedIn  </a>
            profile for more details. Also you can checkout my cv on this
            <a href={CV} rel="noreferrer" target="_blank"> link</a>.
          </p>
        </div>

        <div class="skills-charts">
          <TagCloud></TagCloud>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />

    </>
  )
}

export default Skills
