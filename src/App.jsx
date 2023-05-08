import { useState, useEffect } from 'react'
//components import
import ErrorPage from "./components/error-page";
import NavigationCom from './components/Navigation'
import Root from './pages/Root'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
//style import
import './App.css'
//routes import
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { changeCont } from './store/slice/Content.slice';
import ui from '../schemas/ui.json'

function App() {
  
  const data=useSelector(state=>state.Response)
  
  const dispatch = useDispatch()
  

  
  useEffect(()=>{
    dispatch(changeCont(ui.en))
  },[data])
 
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root data={data} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
