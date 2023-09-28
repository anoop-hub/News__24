import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar' 
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(props) {

const[progress,setProgress]=useState(0)
const[mode,setMode]=useState(hjhh"light")
const[btn,setBtn]=useState("Enable Dark mode")


/*const toggle = () => {
  if (mode === "light") {
    setMode("dark")
    document.body.style.backgroundColor = "#354259";
    setBtn("Enable Light mode")
    
  }
  else {
    setMode("light")
    document.body.style.backgroundColor = "#1e2126";
    setBtn("Enable Dark mode")
    
  }
}*/


  
  return (

    <div>
      <Router>
      <Navbar  />
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      <Routes>
     <Route exact path="/" element={<News  setProgress={setProgress} key={"general"} pageSize={15} category={"general"}/>} /> 
     <Route exact path="/business" element={<News setProgress={setProgress} key={"business"} pageSize={15} category={"business"}/>} />
     <Route exact path="/health" element={<News setProgress={setProgress} key={"health"} pageSize={15} category={"health"}/>} />
     <Route exact path="/entertainment" element={<News setProgress={setProgress} key={"entertainment"} pageSize={15} category={"entertainment"}/>} />
     <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} pageSize={15} category={"technology"}/>} />
     <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports"} pageSize={15} category={"sports"}/>} />
     <Route exact path="/general" element={<News setProgress={setProgress} key={"general"} pageSize={15} category={"general"}/>} />

      </Routes>
      </Router>
    </div>
  )
}

export default App
