import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faLanguage } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeCont } from "../store/slice/Content.slice";
import { useRef, useState } from "react";
import Navigation from "./Navigation";
import ui from "./../../schemas/ui.json";
import { changeRes } from "../store/slice/response.slice";
import ResumeSubmenu from "./ResumeSubmenu";
import image from '../assets/2.jpg'
function Header() {
  const [resumeSubmenu, setResumeSubmenu] = useState(false);
  const [resumeEventContext, setResumeEC] = useState({});
  const data = useSelector((state) => state.Content);
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.Response);
  const header=useRef()
  const [switchImagePos,setSwitchImagePos]=useState(1)
  var mouseX, mouseY;
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  var traX, traY;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    document
      .querySelector(".title")
      .style.setProperty("background-position", `${traX}% ${traY}%`);
  });
  function switchLang() {
    if (currentData == "en") {
      dispatch(changeCont(ui.es));
      dispatch(changeRes("es"));
    } else if (currentData == "es") {
      dispatch(changeCont(ui.en));
      dispatch(changeRes("en"));
    }
  }
  function switchImage() {
 
  }
  function resumeSubmenuSetter(event, lenguage) {
    if (resumeSubmenu == true) {
      setResumeSubmenu(false);
    } else if (resumeSubmenu == false) {
      setResumeEC({ e: event, lenguage });
      setResumeSubmenu(true);
    }
  }

  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ResumeSubElement")) {
      if (e.target.tagName!=='path') {
        setResumeSubmenu(false);
      }
    }
  });
  return (
    <>
      <header className="title" ref={header}>
        <Navigation />
        <div className="resumes">
          <div
            onClick={(e) => {
              resumeSubmenuSetter(e, "es");
            }}
            className="resume ResumeSubElement"
          >
            {data.home?.resumes?.es.title} Es
          </div>
          <div
            onClick={(e) => {
              resumeSubmenuSetter(e, "en");
            }}
            className="resume ResumeSubElement"
          >
            {data.home?.resumes?.en.title} En
          </div>
          {resumeSubmenu && (
            <ResumeSubmenu
              event={resumeEventContext.e}
              lenguage={resumeEventContext.lenguage}
            />
          )}
        </div>
        <div className="btns-header">
          <div
            onClick={() => {
              switchLang();
            }}
            className="header-switch"
          >
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
