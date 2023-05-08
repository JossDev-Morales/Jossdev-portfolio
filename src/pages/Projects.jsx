import axios from "axios";
import NavigationCom from "../components/Navigation";
import "./../projects.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Projects() {
  const data = useSelector((state) => state.Content);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(
      `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_PROJECTS_BIN}/`,
      {
        headers: {
          "X-Access-Key":
            "$2b$10$e98drt8xbxpgLUdPBnsHuu.3YT1PCK1NnMizHwUXdIokGYD/6g5NS",
        },
      }
    ).then((res)=>setProjects(res.data.record))
  }, []);
  function filterprojects(tag) {}

  return (
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
        <div className="tag">{data.projects?.tagbtns[0]}</div>
        <div className="tag">{data.projects?.tagbtns[1]}</div>
        <div className="tag">{data.projects?.tagbtns[2]}</div>
      </div>
      {projects?.map((element) => (
        <div key={Math.random()} className="project">
          <h2>{element.title}</h2>
          <img src={element.image} alt="" />
        </div>
      ))}
    </>
  );
}
export default Projects;
