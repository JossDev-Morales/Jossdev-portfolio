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
import { changeRes } from './store/slice/response.slice';
import { changeCont } from './store/slice/Content.slice';

export const url_base = `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_ID}/`
function App() {
  
  const data=useSelector(state=>state.Response)
  
  const dispatch = useDispatch()
  const config = {
    headers: {
      'X-Acces-Key': import.meta.env.VITE_ACCESKEY
    }
  };

  useEffect(()=>{
    axios.get(url_base, config)
    .then(res =>{
      dispatch(changeRes(res.data.record))
    })
    .catch(err => console.log(err))
  },[])
  useEffect(()=>{
    dispatch(changeCont(data.en))
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
