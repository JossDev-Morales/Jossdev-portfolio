import { Link, useParams } from "react-router-dom";
import es from "./../docs/Resume-es.pdf";
import MyPdfViewer from "../components/PdfViewer";
import { useRef } from "react";
import "../resumes.css";
import { useSelector } from "react-redux";
function Resume() {
  const { lenguage } = useParams();
  const currentData = useSelector((state) => state.Response);
  document.title=currentData=='en'?'Joss Dev | Resume '+lenguage:'Joss Dev | Curriculum '+lenguage
  return (
    <>
        <Link to={'/'} className="back-to">{currentData=='en'?'Home':'Inicio'}</Link>
        <MyPdfViewer lenguage={lenguage}/>
    </>
  );
}
export default Resume;
