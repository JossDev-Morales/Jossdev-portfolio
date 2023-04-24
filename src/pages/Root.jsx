import Navigation from '../components/Navigation'
import Header from '../components/Header'
import images from '../assets/images'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '../components/Form'
function Root() {
    const data = useSelector(state => state.Content)
    return (
        <>
            <Header />
            <main>
                <div className="socials">
                    <div className="social_icon"><Icon icon="ri:linkedin-fill" color="white" /></div>
                    <div className="social_icon"><Icon icon="ph:github-logo-fill" color="white" /></div>
                    <div className="social_icon"><Icon icon="mdi:twitter" color="white" /></div>
                    <div className="social_icon"><Icon icon="ic:baseline-discord" color="white" /></div>
                </div>
                <div className="welcome">

                    <h1><span>Hi</span>,<br /> Im Josué Morales</h1>
                    <h2>Fullstack Web Developer</h2>
                </div>

                <div className={`custom-shape-divider-bottom divider-main`} >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="aboutme-title">{data.about?.title}</div>
            </main>
            <div className="aboutme">
                <p>
                    {data.about?.text}
                </p>
                <a href='#connect' className="btn aboutme-connect">{data.about?.button}</a>
                <Link id='projects-aboutme' to={'/projects'}>{data.about?.link}</Link>
                <div className={`custom-shape-divider-bottom divider-aboutme`} >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="slider" >
                <h2>{data.built?.title}</h2>
                <motion.div className="slider-cont" title='just drag on me'>
                    <motion.div title='just drag on me'
                        drag dragConstraints={{ top: 0, bottom: 0, right: 0, left: -(window.innerWidth * 138 / 100) }}
                        className="grab-band">
                        {images.map((image) => (<img key={image} src={image} alt="Project image" className='item-slider' />))}
                    </motion.div>
                </motion.div>
            </div>
            <div className="skills">
                <h2 className='textkrona'>{data.stack?.title}</h2>
                <div className="stacklist">{data.stack?.techs.map(element => (
                    <div
                        key={element.title}
                        className='tech'>
                        <h2>{element.title}</h2>
                        <a href={element.link} target="_blank">Docs</a>
                        <Icon icon={element.route} width="100" />
                    </div>
                ))}
                </div>
                <Link to={"/certifications"}>{data.stack?.link}</Link>
                <div className={`custom-shape-divider-bottom divider-skills`} >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="contact">
                <Form data={data} />
                <div className="copy">
                    <div className="copyarea">
                        <h2>{data.form?.gets.number}</h2>
                        <div className="copycont" onClick={(event) => {
                            navigator.clipboard.writeText(data.contact.phone)
                            document.getElementById("copycheck1").style.setProperty("right", "-23%")
                            setTimeout(() => {
                                document.getElementById("copycheck1").style.setProperty("right", "0%")
                            }, 700)
                        }}>
                            <div id='copycheck1' className="copycheck">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <motion.div whileTap={{ scale: 0.7 }} className="copybtn">
                                <FontAwesomeIcon icon={faCopy} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="copyarea">
                        <h2>{data.form?.gets.mail}</h2>
                        <div className="copycont" onClick={(event) => {
                            navigator.clipboard.writeText(data.contact.mail)
                            document.getElementById("copycheck2").style.setProperty("right", "-23%")
                            setTimeout(() => {
                                document.getElementById("copycheck2").style.setProperty("right", "0%")
                            }, 700)
                        }}>
                            <div id='copycheck2' className="copycheck">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <motion.div whileTap={{ scale: 0.7 }} className="copybtn">
                                <FontAwesomeIcon icon={faCopy} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <a href='https://github.com/JossDev-Morales/Jossdev-portfolio' target='_blank'><p>Coded by Joss<span>Dev</span></p><div className="social_icon"><Icon icon="ph:github-logo-fill" color="white" /></div></a>
            </footer>

        </>
    )
}
export default Root