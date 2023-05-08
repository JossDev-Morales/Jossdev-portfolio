import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function FormError({ type,clear }) {
    setTimeout(()=>{clear()},3100)

  return (
    <motion.span className="form-error" animate={{
        opacity:0,
        transition:{bounce:0.25,type:"tween",delay:2.8}
    }} >
      <p>{type}</p> {<FontAwesomeIcon bounce icon={faWarning} />}
    </motion.span>
  );
}
export default FormError;
