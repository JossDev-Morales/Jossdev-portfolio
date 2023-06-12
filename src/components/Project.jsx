import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import BlurImage from "../components/blurImage";

function Project({ element }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [sliderPosition, setSliderPosition] = useState(0);
  const settingWidth = () => {
    setWidth(window.innerWidth);
  };
  const directions = {
    left: "left",
    right: "right",
  };
  
  const slidePos = (direction) => {
    if (direction == directions.left) {
      if (sliderPosition == 0) {
        setSliderPosition(element.images.length - 1);
      } else {
        setSliderPosition(sliderPosition - 1);
      }
    }
    if (direction == directions.right) {
      if (sliderPosition == element.images.length - 1) {
        setSliderPosition(0);
      } else {
        setSliderPosition(sliderPosition + 1);
      }
    }
  };
  const currentData = useSelector((state) => state.Response);
  const data = useSelector((state) => state.Content);
  useEffect(() => {
    window.addEventListener("resize", settingWidth);
    return () => {
      window.removeEventListener("resize", settingWidth);
    };
  }, []);
  if (width < 768) {
    return (
      <motion.div
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
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
          onClick={() => {
            alert("xd");
          }}
          animate={{
            translateX: -150,
            opacity: 0,
            transitionDuration: ".3s",
          }}
          whileInView={{ opacity: 1, translateX: 0 }}
          src={element?.image}
          alt="project image"
        />
        <div className="project-techs_list">
          {element.stack.map((tech, i) => (
            <motion.div
              animate={{
                opacity: 0,
                translateX: -28,
                transitionDelay: `.${i}s`,
                transitionDuration: ".3s",
              }}
              whileInView={{ translateX: 0, opacity: 1 }}
              className="project_tech"
            >
              <Icon icon={tech.route} />
            </motion.div>
          ))}
        </div>
        {currentData == "en" ? (
          <p>{element["description-en"]}</p>
        ) : (
          <p>{element["description-es"]}</p>
        )}
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
          {currentData == "en"
            ? data.projects?.deploy.en
            : data.projects?.deploy.es}
        </motion.a>
      </motion.div>
    );
  }
  if (width > 768) {
    return (
      <motion.div
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        id={element.id}
        className="d_project"
      >
        <div className="p_slider">
          <div className="p_slider_card">
            <motion.div
              onClick={() => {
                slidePos(directions.left);
              }}
              animate={{ translateX: 0 }}
              whileInView={{translateX:12}}
              whileTap={{ scale: 1.1 }}
              className="p_slider_arrow"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </motion.div>
            <BlurImage src={element?.images[sliderPosition]?.high} lowSrc={element?.images[sliderPosition]?.low} config={{classWrapper:"p-img"}}/>
            <motion.div
              onClick={() => {
                slidePos(directions.right);
              }}
              animate={{ translateX: 0 }}
              whileInView={{translateX:-12}}
              whileTap={{ scale: 1.1 }}
              className="p_slider_arrow"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </motion.div>
          </div>
          <div className="project-techs_list">
            {element.stack.map((tech, i) => (
              <motion.div
                animate={{
                  opacity: 0,
                  translateX: -20,
                  transitionDelay: `.${i}s`,
                  transitionDuration: ".3s",
                }}
                whileInView={{ translateX: 0, opacity: 1 }}
                className="project_tech"
              >
                <Icon icon={tech.route} color={tech.color?tech.color:"#fff"} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p_content">
          <motion.h2
            animate={{ opacity: 0, transitionDuration: ".3s" }}
            whileInView={{ opacity: 1 }}
          >
            {element.title}
          </motion.h2>
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
          {currentData == "en" ? (
            <p>{element["large-description-en"]}</p>
          ) : (
            <p>{element["large-description-es"]}</p>
          )}
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
            {currentData == "en"
              ? data.projects?.deploy.en
              : data.projects?.deploy.es}
          </motion.a>
        </div>
      </motion.div>
    );
  }
}
export default Project;
