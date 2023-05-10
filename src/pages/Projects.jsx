import axios from "axios";
import NavigationCom from "../components/Navigation";
import "./../projects.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";

function Projects() {
  const data = useSelector((state) => state.Content);
  const [projects, setProjects] = useState([]);
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
      .then((res) => setProjects(res.data.record));
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
        <motion.div
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          key={element.id}
          id={element.id}
          className="project"
        >
          <h2>{element.title}</h2>
          <motion.span
            animate={{
              opacity: 0,
              transitionDuration: ".3s",
              transitionDelay: ".2s",
            }}
            whileInView={{ opacity: 1 }}
          >
            {element.type}
          </motion.span>
          <motion.img
            onClick={()=>{alert('xd')}}
            animate={{
              translateX: -150,
              opacity: 0,
              transitionDuration: ".3s",
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
            src={element.image}
            alt="project image"
          />
          <div className="project-techs_list">
            {element.stack.map((tech) => (
              <div className="project_tech">
                <Icon icon={tech.route} />
              </div>
            ))}
          </div>
          <p>{element["description-es"]}</p>
          <motion.a
            animate={{ opacity: 0, transitionDuration: ".3s" }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            href={element.github}
            className="gh-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="uiw:github" width="25" color="#f0f6fc" /> <p>Github</p>
          </motion.a>
          <motion.a
            animate={{ opacity: 0, transitionDuration: ".3s" }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployment
          </motion.a>
        </motion.div>
      ))}
    </>
  );
}
export default Projects;
