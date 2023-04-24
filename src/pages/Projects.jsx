import NavigationCom from '../components/Navigation'
import './../projects.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
function Projects() {
    const data=useSelector(state=>state.Content)
      function filterprojects(tag) {
        
      }
      
    return(
        <>
            
            <div className="hero">
            <NavigationCom/>
                <h2>{data.projects?.pagetitle}</h2>
            </div>
            <div className='overview'>
                <p>{data.projects?.overview}</p>
                <span>{data.projects?.span}</span>
            </div>
            <div className="tags">
                <div className="tag">{data.projects?.tagbtns[0]}</div>
                <div className="tag">{data.projects?.tagbtns[1]}</div>
                <div className="tag">{data.projects?.tagbtns[2]}</div>
            </div>
            {data.projects?.list.map(element=>(
                <div key={Math.random()} className="project">
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                </div>
            ))}

        </>
    )
}
export default Projects