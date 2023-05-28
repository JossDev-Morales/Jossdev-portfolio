import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Loader from "../components/loader";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../certifications.css";
import LightBox from "../components/LightBox-certifications";
import ReactplosiveModal from "reactplosive-modal";
function Certifications() {
  const [isLoading, setIsLoading] = useState(false);
  const currentData = useSelector((state) => state.Response);
  const data = useSelector((state) => state.Content);
  const [isOpenLB,setOpenLb]=useState(false)
  const [LightBoxContext,setLightBoxContext]=useState({})
  const [certifications, setCertifications] = useState([
    {
      name: "Fundamentos de Desarrollo Web",
      image:
        "https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/47731177315743.png",
      type: "Education Badge Class",
      tags: [
        "Web Development",
        "Cascading Style Sheets (CSS)",
        "JavaScript (Programming Language)",
        "HyperText Markup Language (HTML)",
        "Web Design",
      ],
      issuer: {
        name: "Academlo",
        image:
          "https://api.sertifier.com/userdata/08d9dad1-9e6f-61d5-c24d-ed8404a6fae0/e7fec3bf-d5f7-476b-a1d1-fb8db4ffe735.png",
        link: "https://www.academlo.com/",
      },
    },
    {
      name: "Desarrollo de Aplicaciones Web con React",
      image:
        "https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/20176558465037.png",
      type: "Education Badge Class",
      tags: [
        "JavaScript Frameworks",
        "JavaScript (Programming Language)",
        "Full Stack Software Engineering",
        "React.js",
        "Front End Design",
        "Object-Oriented JavaScript",
        "React Jsx",
      ],
      issuer: {
        name: "Academlo",
        image:
          "https://api.sertifier.com/userdata/08d9dad1-9e6f-61d5-c24d-ed8404a6fae0/e7fec3bf-d5f7-476b-a1d1-fb8db4ffe735.png",
        link: "https://www.academlo.com/",
      },
    },
  ]);
  function LightBoxSwitcher(context){
    if (isOpenLB) {
      setOpenLb(false)
    }else if(!isOpenLB){
      setLightBoxContext(context)
      setOpenLb(true)
    }
  }
  return isLoading ? (
    <Loader
      title={currentData == "en" ? "Certifications" : "Certificaciones"}
    />
  ) : (
    <>
      <div className="hero-certifications">
        <Navigation />
        <h2>{data.certifications?.pagetitle}</h2>
      </div>
      <div className="overview-certifications">
        <p>{data.certifications?.overview}</p>
        <span>{data.certifications?.span}</span>
      </div>
      <div className="certifications-list">
        {certifications.map((e) => (
          <div className="cert">
            <div className="imageSection" onClick={()=>{LightBoxSwitcher(e)}}>
              <img src={e?.image} alt="" />
            </div>
            <div className="cert_info">
              <h3 onClick={()=>{LightBoxSwitcher(e)}}>{e?.name}</h3>
              <span>{e?.type}</span>
              <div className="cert_issuer">
                <div className="cert_issuer_img">
                  <img src={e?.issuer?.image} alt={`Issuer ${e?.issuer.name}`} />
                </div>
                <a href={e?.issuer?.link} target="_blank">{e?.issuer.name}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isOpenLB&&(
      <ReactplosiveModal
      isVisible={isOpenLB}
      onClose={()=>setOpenLb(false)}
      >

      </ReactplosiveModal>
      )}
    </>
  );
}
export default Certifications;
