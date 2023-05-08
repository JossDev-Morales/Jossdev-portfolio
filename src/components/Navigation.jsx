
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './../App.css'
import jossdev from '../assets/icons/jossdev.svg'
import {motion} from 'framer-motion'
import { Icon } from '@iconify/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark,faHouseSignal, faHouse, faCode, faAward, faFolder } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

function Navigation() {
    const data=useSelector(state=>state.Content)
    const navigate=useNavigate()
    const [iconAnimation,setIconAnimation]=useState(false)
    const [isOpen,setIsOpen]=useState(false)
    const nav=useRef()
    return(
        <motion.nav whileInView={{top:0+'%'}} ref={nav} className={isOpen?'nav-mobile-open':undefined}>
            <div className="icon-nav" onClick={()=>{
                setTimeout(()=>{iconAnimation?setIconAnimation(false):setIconAnimation(true)},200)
                isOpen?setIsOpen(false):setIsOpen(true)
                isOpen?document.querySelector('#root').setAttribute('style','overflow-y:scroll;'):document.querySelector('#root').setAttribute('style','overflow-y:hidden;')
                }}>
                <FontAwesomeIcon  icon={isOpen?faXmark:faBars} beatFade={iconAnimation} style={{color: "#f6f7f9",}} /></div>
            <div className="icon"><img src={jossdev} alt="Joss Dev icon" /></div>
            <div className="nav__btns">
                <div className="nav__btn-e btn" onClick={()=>{setTimeout(()=>navigate("/"),200)}}>{data.menu?.btn1}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/projects")}>{data.menu?.btn2}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/certifications")}>{data.menu?.btn3}</div>
            </div>
            {isOpen&&(
            <>  
            <div className="icon-mobile"><img src={jossdev} alt="Joss Dev icon" /></div>
            <div className='menu-options' >
                <div className="menu-option" onClick={()=>{
                    setTimeout(()=>navigate("/"),200)
                    if (window.location.hash.split('/').pop()!=='') {
                        document.querySelector('#root').setAttribute('style','overflow-y:scroll;')
                    }
                }}>{data.menu?.btn1} <FontAwesomeIcon icon={faHouse} /></div>
                <div className="menu-option" onClick={()=>{
                    setTimeout(()=>navigate("/projects"),200)
                    if (window.location.hash.split('/').pop()!=='projects') {
                        document.querySelector('#root').setAttribute('style','overflow-y:scroll;')
                    }
                    }}>{data.menu?.btn2} <FontAwesomeIcon icon={faFolder} /></div>
                <div className="menu-option" onClick={()=>{
                    setTimeout(()=>navigate("/certifications"),200)
                    if (window.location.hash.split('/').pop()!=='certifications') {
                        document.querySelector('#root').setAttribute('style','overflow-y:scroll;')
                    }
                    }}>{data.menu?.btn3} <FontAwesomeIcon icon={faAward} /></div>
            </div>
            </>
            )}
        </motion.nav>
    )
}
export default Navigation