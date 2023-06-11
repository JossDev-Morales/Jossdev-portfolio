import axios from "axios";
import NavigationCom from "../components/Navigation";
import "./../projects.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Project from "../components/Project";
import Loader from "../components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { changeCont } from "../store/slice/Content.slice";
import { changeRes } from "../store/slice/response.slice";
import ui from '../../schemas/ui.json'
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Projects() {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.Content);
  const [isLoading,setIsLoading]=useState(true)
  const currentData = useSelector((state) => state.Response);
  const [projects, setProjects] = useState([]);
  const [filtered,setFiltered]=useState([])
  const filter=(filterBy)=>{
    if (filterBy=="All") {
      setFiltered(projects)
    }else{
      setFiltered(projects.filter(project=>project.type==filterBy));
    }
    
  }
  document.title=`Joss Dev | ${currentData=='en'?'Projects':'Proyectos'}`
  useEffect(() => {
    axios
      .get(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_PROJECTS_BIN}/`,
        {
          headers: {
            "X-Access-Key":
              "$2b$10$e98drt8xbxpgLUdPBnsHuu.3YT1PCK1NnMizHwUXdIokGYD/6g5NS",
          },
        }
      )
      .then((res) => {
        setProjects(res.data.record)
        setFiltered(res.data.record) 
         
      }).finally(()=>{setIsLoading(false)})
  }, []);
  function switchLang() {
    if (currentData == "en") {
      dispatch(changeCont(ui.es));
      dispatch(changeRes("es"));
    } else if (currentData == "es") {
      dispatch(changeCont(ui.en));
      dispatch(changeRes("en"));
    }
  }
  return isLoading?(<Loader title={currentData=="en"?"My Projects":"Mis Proyectos"}/>): (
    <>
      <div className="hero">
        <NavigationCom />
        <motion.h2 animate={{opacity:0}} whileInView={{opacity:1}}>{data.projects?.pagetitle}</motion.h2>
        <div className="btns-header btns-header-cert">
          <div
            onClick={() => {
              switchLang();
            }}
            className="header-switch header-switch-cert"
          >
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </div>
      <div className="overview">
        <p>{data.projects?.overview}</p>
        <span>{data.projects?.span}</span>
      </div>
      <div className="tags">
        {data.projects?.tagbtns.map(tag=><div onClick={()=>{filter(tag)}} key={tag} className="tag">{tag}</div>)}
      </div>
      {filtered?.map(element=><Project element={element} key={element.id}/>)}
      <Footer/>
    </>
  )
}
export default Projects;
