
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './../App.css'

function Navigation() {
    const data=useSelector(state=>state.Content)
    const navigate=useNavigate()
    return(
        <nav>
            <p className="icon">JD</p>
            <div className="nav__btns">
                <div className="nav__btn-e btn" onClick={()=>navigate("/")}>{data.nav?.btn1}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/projects")}>{data.nav?.btn2}</div>
                <div className="nav__btn-e btn" onClick={()=>navigate("/certifications")}>{data.nav?.btn3}</div>
            </div>
        </nav>
    )
}
export default Navigation