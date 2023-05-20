import axios from "axios";
import NavigationCom from "../components/Navigation";
import "./../projects.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Project from "../components/Project";
import Loader from "../components/loader";

function Projects() {
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

  return isLoading?(<Loader title={currentData=="en"?"My Projects":"Mis Proyectos"}/>): (
    <>
      <div className="hero">
        <NavigationCom />
        <h2>{data.projects?.pagetitle}</h2>
      </div>
      <div className="overview">
        <p>{data.projects?.overview}</p>
        <span>{data.projects?.span}</span>
      </div>
      <div className="tags">
        {data.projects?.tagbtns.map(tag=><div onClick={()=>{filter(tag)}} key={tag} className="tag">{tag}</div>)}
      </div>
      {filtered?.map(element=><Project element={element} key={element.id}/>)}
    </>
  )
}
export default Projects;
