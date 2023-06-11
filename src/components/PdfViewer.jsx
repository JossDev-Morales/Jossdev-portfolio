import {motion} from 'framer-motion'

const MyPdfViewer = ({lenguage}) => {

  return (
    <motion.iframe animate={{opacity:0}} whileInView={{opacity:1}} src={lenguage=='en'?"https://drive.google.com/file/d/1V5qxcRbFPVdt9JOMWOKEcBKzLuWxZ6sW/preview":"https://drive.google.com/file/d/1OkJKOqDgqkXp6yW0tXj_XUBw4zZko4z7/preview"} width="100%" height="100%" allow="autoplay" className="pdfViewer"></motion.iframe>
  );
};
export default MyPdfViewer;
