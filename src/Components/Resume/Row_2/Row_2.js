import React from 'react'
import './Row_2.css'
import Logo from '../img/WhatsApp Image 2023-04-10 at 21.04.42.jpg'
import Count from 'react-countup'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Row_2() {
  return (
    <div>
      <div className="row " id='AboutMe' >
        <div className="col-md-9 reveal Row_2">
         

          <h1>About Me</h1>
          <h5>Don’t stop smiling</h5>
         <img src={Logo} alt="" />
          <h2>Frontent React Developer & Software Developer.</h2>
          <p>I am a Web Developer. I love Developing of Websites as well as software. i am also a Competitive Programer .</p>
         
          <div className="row resume_list ">
          <div className="col-md-6 border_l" data-aos="flip-right" data-aos-delay="50"data-aos-duration="1000"
            >
              <ul>
                <li><strong>Birthday</strong> : 2 June 2000</li>
                <li><strong>Website</strong> : https://vikas5686.github.io/</li>
                <li><strong>Phone</strong>  : +91 8103725651 </li>
                <li><strong>Address</strong> : Sony Colony,GUNA</li>
                <li><strong>State</strong>  : Madhya Pradesh</li>
              </ul>
            </div>
            <div className="col-md-6 border_R" data-aos="flip-left" data-aos-delay="50"data-aos-duration="1000"
           >
              <ul>
                <li><strong>Age</strong> : <Count end={22}/> </li>
                <li><strong>Degree</strong>  :Bachelor of science [Computer science]</li>
                <li><strong>Collage</strong> : Jiwaji University</li>
                <li><strong>Email</strong>  : Vs5686377@gmail.com</li>
                <li><strong>Contry</strong> : India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
