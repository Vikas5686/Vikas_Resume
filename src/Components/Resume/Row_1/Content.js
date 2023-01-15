import React from 'react'
// import loge from '../img/WhatsApp Image 2022-03-23 at 8.48.38 AM.jpg'
import React_logo from '../img/react.png'
import { Typewriter } from 'react-simple-typewriter'



export default function Content() {
    
    return (
        <>
            <div className="row px-0 "  id='Home'>
                <div className="col-md-9 reveal left_Content"  data-aos="fade-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="400"
     data-aos-duration="500">


                    <h1>Vikas~sharma</h1>
                    <h2>I AM
                    </h2>
                    <span>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            words={['Frontend Developer','React Developer' ,' software developer']}
                        />
                    </span>
                    <img className='React_LOgo' src={React_logo} alt="" />
                </div>
                <div className="col-md-3 right_aboutMe" data-aos="fade-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="400"
     data-aos-duration="500">
                    <div class="offcanvas-body ">
                        <ul class="navbar-nav   justify-content-end flex-grow-1">
                            <li class="nav-item">
                                {/* <a class="nav-link active"  aria-current="page" href="#Home"><img src={loge} alt="" /> */}
                                <h2>Vikas Sharma</h2>
                                <i class="bi-facebook"></i>
                                <i class="bi-linkedin"></i>
                                <i class="bi-instagram"></i>
                                {/* </a> */}
                            </li>
                            <li class="nav-item">
                              
                                <a class="nav-link" href="#Home">  <i class="bi-house-fill"></i> Home</a>
                            </li>
                            <li >
                                
                                <a class="nav-link" href="#AboutMe"><i class="bi-person-square" ></i> About</a>
                            </li>
                            <li>
                               
                                <a class="nav-link" href="#Skills"> <i class="bi-gear-fill"></i> Skills</a>
                            </li>
                            <li>
                              
                                <a class="nav-link" href="#Resume">  <i class="bi-file-earmark-person-fill"></i> Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
