import { faFilePdf, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import esPDF from '../docs/Resume-es.pdf'
import enPDF from '../docs/Resume-en.pdf'
import { useSelector } from "react-redux";

function ResumeSubmenu({event,lenguage}) {
    const currentData = useSelector((state) => state.Response);
    const data = useSelector((state) => state.Content);
    const navigateTo=useNavigate()
    return (
        <div className="ResumeSubmenu-cont ResumeSubElement" style={{top:event.nativeEvent.offsetY-136,left:event.nativeEvent.offsetX}}>
            <ul>
                <li className="ResumeSubElement" id="ResumeSub1" onClick={()=>{navigateTo(`/resumes/${lenguage}`)}}>
                    <p className="ResumeSubElement">{data.home?.resumes.submenu.view}</p> <FontAwesomeIcon className="ResumeSubElement" icon={faFilePdf} />
                </li>
                <li className="ResumeSubElement" id="ResumeSub2" onClick={()=>{
                    const element=document.createElement('a')
                    element.href=lenguage=='en'?enPDF:esPDF
                    element.download=lenguage=='en'?"My-Resume-En":"My-Resume-Es"
                    element.click()
                }}>
                    <p className="ResumeSubElement">{data.home?.resumes.submenu.download}</p><FontAwesomeIcon className="ResumeSubElement" icon={faCloudArrowDown} />
                </li>
                <li className="ResumeSubElement" id="ResumeSub3" onClick={async()=>{
                    const element=document.createElement('a')
                    element.href= lenguage=='en'?'https://drive.google.com/file/d/1V5qxcRbFPVdt9JOMWOKEcBKzLuWxZ6sW/view?usp=sharing':'https://drive.google.com/file/d/1OkJKOqDgqkXp6yW0tXj_XUBw4zZko4z7/view?usp=sharing'
                    element.target='blank'
                    await navigator.clipboard.writeText(lenguage=='en'?'https://drive.google.com/file/d/1V5qxcRbFPVdt9JOMWOKEcBKzLuWxZ6sW/view?usp=sharing':'https://drive.google.com/file/d/1OkJKOqDgqkXp6yW0tXj_XUBw4zZko4z7/view?usp=sharing')
                    return element.click()               
                }}>
                    <p className="ResumeSubElement">{data.home?.resumes.submenu.share}</p> <FontAwesomeIcon className="ResumeSubElement" icon={faShareFromSquare} />
                </li>
            </ul>
        </div>
    )
}
export default ResumeSubmenu