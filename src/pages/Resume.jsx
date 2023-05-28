import { useParams } from "react-router-dom";
import es from "./../docs/Resume-es.pdf";
import MyPdfViewer from "../components/PdfViewer";
import { useRef } from "react";
import "../resumes.css";
function Resume() {
  const { lenguage } = useParams();
  return (
    <>

        {/*<button
          onClick={() => {
            const element =
              pdfRef.current.children[0].children[0].children[0].children[0]
                .children[0].children[0].children[0].children[0];
            console.log(element);
          }}
        >
          print
        </button>*/}


        <MyPdfViewer lenguage={lenguage}/>

    </>
  );
}
export default Resume;
