import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Loader from "../components/loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../certifications.css";
import LightBox from "../components/LightBox-certifications";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { changeCont } from "../store/slice/Content.slice";
import { changeRes } from "../store/slice/response.slice";
import ui from "../../schemas/ui.json";
import axios from "axios";
import BlurImage from "../components/blurImage";
import { motion } from "framer-motion";

function Certifications() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const currentData = useSelector((state) => state.Response);
  const data = useSelector((state) => state.Content);
  const [isOpenLB, setOpenLb] = useState(false);
  const [LightBoxContext, setLightBoxContext] = useState({});
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/64750cb58e4aa6225ea64b89", {
        headers: {
          "X-Access-Key":
            "$2b$10$e98drt8xbxpgLUdPBnsHuu.3YT1PCK1NnMizHwUXdIokGYD/6g5NS",
        },
      })
      .then((res) => setCertifications(res.data.record))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  function LightBoxSwitcher(context) {
    if (isOpenLB) {
      setOpenLb(false);
    } else if (!isOpenLB) {
      setLightBoxContext(context);
      setOpenLb(true);
    }
  }
  function switchLang() {
    if (currentData == "en") {
      dispatch(changeCont(ui.es));
      dispatch(changeRes("es"));
    } else if (currentData == "es") {
      dispatch(changeCont(ui.en));
      dispatch(changeRes("en"));
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
        <div className="btns-header btns-header-cert">
          <div
            onClick={() => {
              switchLang();
            }}
            className="header-switch header-switch-cert"
          >
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </div>
      <div className="overview-certifications">
        <p>{data.certifications?.overview}</p>
        <span>{data.certifications?.span}</span>
      </div>
      <div className="certifications-list">
        {certifications.map((e) => (
          <motion.div className="cert"
          animate={{opacity:0,transitionDelay:".1s",transitionDuration:".4s"}}
          whileInView={{opacity:1}}
          >
            <div
              className="imageSection"
              onClick={() => {
                LightBoxSwitcher(e);
              }}
            >
              <BlurImage
              config={{classWrapper:"cert-image"}}
                    src={e?.image}
                    lowSrc={
                      e?.lowQualityImage
                    }
                  />
            </div>
            <div className="cert_info">
              <h3
                onClick={() => {
                  LightBoxSwitcher(e);
                }}
              >
                {e?.name}
              </h3>
              <span>{e?.type}</span>
              <div className="cert_issuer">
                <div className="cert_issuer_img">
                  <img  alt="" />
                  <BlurImage src={e.issuer.image} lowSrc={e.issuer.low} config={{classWrapper:"cert-issuerImage"}}/>
                </div>
                <a href={e?.issuer?.link} target="_blank">
                  {e?.issuer.name}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
      {isOpenLB && (
        <LightBox setterVisible={setOpenLb}>
          <div className="modal_infosection">
            <a
              href={LightBoxContext.link}
              title="Link to certification page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{LightBoxContext.name}</h2>
            </a>
            <ul>
              {LightBoxContext.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
            {LightBoxContext.duration && (
              <span>
                <span>{currentData == "en" ? "Duration" : "Duracion"} </span>
                {LightBoxContext.duration}{" "}
                {currentData == "en"
                  ? LightBoxContext.duration > 1
                    ? "Months"
                    : " Month"
                  : LightBoxContext.duration > 1
                  ? "Meses"
                  : " Mes"}
              </span>
            )}
            <div className="modal_buttons">
              <div
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = LightBoxContext.image;
                  a.download = "certifier.png";
                  a.click();
                }}
                className="modal_downloadbutton"
              >
                <FontAwesomeIcon icon={faDownload} />{" "}
                {currentData == "en" ? "Download PNG" : "Descargar PNG"}
              </div>
              <div
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = LightBoxContext.pdf;
                  a.download = "certifier_pdf.pdf";
                  a.click();
                }}
                className="modal_downloadbutton"
              >
                <FontAwesomeIcon icon={faDownload} />{" "}
                {currentData == "en" ? "Download PDF" : "Descargar PDF"}
              </div>
            </div>
          </div>
        </LightBox>
      )}
    </>
  );
}
export default Certifications;
