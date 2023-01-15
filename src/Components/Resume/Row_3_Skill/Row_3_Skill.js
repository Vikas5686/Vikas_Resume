import React from 'react'
import './Row_3.css'
import SKIL from '../gif/thoughtworks-gif_dribbble.gif'
export default function Row_3() {
  return (
    <div>
      <div className="row Row_3 " id='Skills' >
        <div className="col-md-9 reveal">
          <h1>Skills</h1>
          <img src={SKIL}  className="V" alt="" />
          <h5>I have Many Types of skills i mention it on belov:</h5>
          <div className="column_2 row ">
            <div className="col-md-6 border_l" data-aos="zoom-in-right" 
          data-aos-duration="1500"data-aos-easing="ease-in-out-cubic">
            
              <span className='Skills_progress'>
                <b>C Language</b>
                <b className='value'>75%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>C++ Language</b>
                <b className='value'>50%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>HTML</b>
                <b className='value'>90%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>CSS </b>
                <b className='value'>90%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-md-6 border_R" data-aos="zoom-in-left"
     data-aos-duration="1500"data-aos-easing="ease-in-out-cubic">
            
            <span className='Skills_progress'>
                <b>JavaScript</b>
                <b className='value'>70%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>NodeJs</b>
                <b className='value'>50%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>Bootstrap</b>
                <b className='value'>80%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className='Skills_progress'>
                <b>ReactJs</b>
                <b className='value'>70%</b>
              </span>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
    <h5 className='practice'>
      I am practice competetive programing questions daily 2 hours
    </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
