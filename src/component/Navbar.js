import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NEWS-24</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link a" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/business">Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/technology">Technology</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sports">Sports</Link>
        </li>
        
      </ul>

     {/* <div className={`form-check form-switch text-${props.mode==="light"?"black":"white"}   `} >
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
  <label class="form-check-label" for="flexSwitchCheckDefault" >{props.btn}</label>
  </div>*/}
      
    </div>
  </div>
</nav>
    </div>
  )
}
