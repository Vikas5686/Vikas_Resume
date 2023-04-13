import React from 'react'
import './Row_5_Review.css'
import Deep from '../img/deep.jpg'
import Mahan from '../img/mahan.jpg'
import Mama from '../img/Mama.jpg'
export default function Row_5_Review() {
  return (
    <>
  
      <section class="pos-r o-hidden Review" >
        <h1>Review</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div id="testimonial-inner" class="testimonial-carousel carousel slide testimonial-inner" data-ride="carousel" data-interval="2500">
                {/* <!-- Wrapper for slides --> */}
                <div class="row">
                  <div class="col-lg-10 col-md-9 col-sm-12 ml-auto">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="testimonial style-3">
                          <div class="testimonial-img">
                            <img class="img-center" src={Deep} alt=""/>
                          </div>
                          <div class="testimonial-content">
                            <div class="testimonial-quote"><i class="fa fa-quote-left"></i>
                            </div>
                            <p>
              This Site Design is very good it's really touch to me and i am very happy to see the dental student to
              make this awesome kind of website.
               </p>
                            <div class="testimonial-caption">
                              <h5>Deepali Sharma</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="testimonial style-3">
                          <div class="testimonial-img">
                            <img class="img-center" src={Mahan} alt=""/>
                          </div>
                          <div class="testimonial-content">
                            <div class="testimonial-quote"><i class="fa fa-quote-left"></i>
                            </div>
                            <p>
              This site is really Bueautiful i really very like it.
              </p>
                            <div class="testimonial-caption">
                              <h5>Mahan Sharma</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="testimonial style-3">
                          <div class="testimonial-img">
                            <img class="img-center" src={Mama} alt=""/>
                          </div>
                          <div class="testimonial-content">
                            <div class="testimonial-quote"><i class="fa fa-quote-left"></i>
                            </div>
                            <p>  This Site Design is very good it's really touch to me and i am very happy to see the dental student to
              make this awesome kind of website.</p>
                            <div class="testimonial-caption">
                              <h5>Bade Miya Chote Miya</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Item --> */}
                    </div>
                    {/* <!-- End Carousel Inner --> */}
                  </div>
                </div>
                {/* <div class="controls">
                  <ul class="nav">
                    <li data-target="#testimonial-inner" data-slide-to="0" class="active">
                      <a href="#">
                        <img class="img-fluid" src="https://www.tolmatol.com/uploads-images/bootrap-snippets-our-team/1.jpg" alt=""/>
                      </a>
                    </li>
                    <li data-target="#testimonial-inner" data-slide-to="1">
                      <a href="#">
                        <img class="img-fluid" src="https://www.tolmatol.com/uploads-images/bootrap-snippets-our-team/2.jpg" alt=""/>
                      </a>
                    </li>
                    <li data-target="#testimonial-inner" data-slide-to="2">
                      <a href="#">
                        <img class="img-fluid" src="https://www.tolmatol.com/uploads-images/bootrap-snippets-our-team/3.jpg" alt=""/>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <!-- End Carousel --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
