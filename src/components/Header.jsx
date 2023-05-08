import './../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { changeCont } from '../store/slice/Content.slice'
import { useState } from 'react'
import Navigation from './Navigation'
function Header() {
  const data = useSelector(state => state.Content)
  const res = useSelector(state => state.Response)
  const dispatch = useDispatch()
  const [currentData, setCurrentData] = useState("en")
  var mouseX, mouseY;
  var ww = window.innerWidth
  var wh = window.innerHeight
  var traX, traY;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    document.querySelector(".title").style.setProperty("background-position", `${traX}% ${traY}%`)

  });
  function switchLang() {
    if (currentData == "en") {
      dispatch(changeCont(res.es))
      setCurrentData("es")
    } else if (currentData == "es") {
      dispatch(changeCont(res.en))
      setCurrentData("en")
    }
  }
  return (
    <>
      <header className='title'>
      <Navigation />
        <div className="resumes">
          <div className="btn resume">{data.home?.resumes?.es.title} Es</div>
          <div className="btn resume">{data.home?.resumes?.en.title} En</div>
        </div>
        <div className="btns-header">
          <div onClick={() => { switchImage() }} className="header-switch "><FontAwesomeIcon icon={faImages} /></div>
          <div onClick={() => { switchLang() }} className="header-switch"><FontAwesomeIcon icon={faLanguage} /></div>
        </div>
      </header>
    </>
  )
}
export default Header