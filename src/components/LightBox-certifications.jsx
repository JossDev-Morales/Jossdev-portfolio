import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function LightBox({ conf, setterVisible, children }) {
  const setOverflow = (hide) => {
    if (hide) {
      document.querySelector("#root").style.setProperty("overflow-y", "hidden");
    } else {
      document.querySelector("#root").style.setProperty("overflow-y", "scroll");
    }
  };
  setOverflow(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal_back"
    >
      <div
        onClick={() => {
          setterVisible(false);
          setOverflow(false);
        }}
        className="modal_closeHandler"
      ></div>
      <motion.div
        className="modal"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
          transform: [
            window.innerWidth <= 800 ? "translatex(10px)" : "translatex(80px)",
            "translatex(0px)",
          ],
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div
          onClick={() => {
            setterVisible(false);
            setOverflow(false);
          }}
          className="modal_closebutton"
        >
          <FontAwesomeIcon icon={faXmark} />
        </motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
}
