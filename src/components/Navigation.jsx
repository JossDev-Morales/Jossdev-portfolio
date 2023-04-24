
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './../App.css'
import jossdev from '../assets/icons/jossdev.svg'
import {motion} from 'framer-motion'

function Navigation() {
    const data=useSelector(state=>state.Content)
    const navigate=useNavigate()
    return(
        <motion.nav whileInView={{top:0+'%'}}>
            <div className="icon-nav"><img src={jossdev} alt="Joss Dev icon" /></div>
            <div className="icon"><img src={jossdev} alt="Joss Dev icon" /></div>
            <div className="nav__btns">
                <div className="nav__btn-e btn" onClick={()=>navigate("/")}>{data.nav?.btn1}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/projects")}>{data.nav?.btn2}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/certifications")}>{data.nav?.btn3}</div>
            </div>
        </motion.nav>
    )
}
export default Navigation