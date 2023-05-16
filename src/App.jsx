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
import { changeRes } from './store/slice/response.slice';

function App() {
  
  
  const dispatch = useDispatch()
  

  
  useEffect(()=>{
    dispatch(changeCont(ui.en))
    dispatch(changeRes('en'))
  },[])
 
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root  />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
