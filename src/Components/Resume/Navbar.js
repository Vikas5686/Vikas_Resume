import React from 'react'
import loge from './img/WhatsApp Image 2023-04-10 at 21.04.42.jpg'
import Togle from './img/Toggle.png'
import R from './img/close.png'


export default function Navbar() {
  let run =()=>{
    console.log('this is clikc')
    document.getElementById('Close_navbar').click()
}
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-transparent bg-transparent fixed-top">
        <div class="container-fluid">
          <a href="">
            <img className='logo' src={loge} alt="" /></a>
          <img src={Togle} className='toogler'   type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"/>   
          <div class="offcanvas 	d-lg-none offcanvas-end"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">About Me</h5>
              <img src={R} className="toogle_Close" alt="" data-bs-dismiss="offcanvas" id='Close_navbar' aria-label="Close" />
            </div>
            <div class="offcanvas-body ">
            <ul class="navbar-nav   justify-content-end flex-grow-1">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><img src={loge} alt="" />
                                <h2>Vikas Sharma</h2>
                                <i class="bi-facebook"></i>
                                <i class="bi-linkedin"></i>
                                <i class="bi-instagram"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={run} href="#Home"> <i class="bi-house-fill"></i>  Home</a>
                            </li>
                            <li>
                                <a class="nav-link" onClick={run} href="#AboutMe"><i class="bi-person-square" ></i> About</a>

                            </li>
                            <li>

                                <a class="nav-link"onClick={run} href="#Resume"><i class="bi-gear-fill"></i> Resume</a>
                            </li>
                            <li>

                                <a class="nav-link"onClick={run} href="#Skills"> <i class="bi-file-earmark-person-fill"></i> Skills</a>
                            </li>
                        </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
