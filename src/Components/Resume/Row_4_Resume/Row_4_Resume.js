import React from 'react'
import './Resum.css'
import P from '../gif/dribbble_problem-solved.gif'

export default function Row_4_Resume() {
  return (
    <div>
      <div className="row Row_4 " id='Resume'>
        <div className="col-md-9 reveal" data-aos="fade-up" data-aos-offset="200"
          data-aos-duration="300">
          <h1>Resume</h1>
          <h5>The expert in anything was once a beginner.</h5>
          <img className='P' src={P} alt="" />
          <p style={{fontFamily:"monospace",color:"green"}}>Born To Solve Problem That Did Not Solve Before</p>
          <button type="button"  class="btn btn-outline-primary"> <a href="../img/Vikas Resume (1).pdf" download> Download latest Resume</a></button>
          <div className="internship">
            <h3 className='border_l border_R'>---- Internship ----</h3>
            <h4>Andromeda Digital</h4>
            <strong>Frontend developer</strong>
            <h5><span class="badge bg-secondary">March 2022 - Running</span></h5>
            <p>Here i work as a Frontend developer. here i learn too many things and explore much more.</p>
          </div>
        </div>
        <div className="row edu">
          <div className="col-md-9 internship">
            <h3 className='border_l border_R'>---- Education ----</h3>
            <h4>Bachler's of Science - Bsc[CS]</h4>
            <strong>Jiwaji University</strong>
            <h5><span class="badge bg-secondary">May 2018 - May 2021</span></h5>
            <strong>Aggregate</strong> <span>65% (percentile)</span>
            <p>I have completed Bsc from @Jiwaji University in Computer Science </p>
            <br />
            <h4 className='border_l border_R'>12th Science with Mathematics</h4>
            <strong>Pink Flower H S School</strong>
            <h5><span class="badge bg-secondary">May 2017 - May 2018</span></h5>
            <strong>Aggregate</strong> <span>75% (percentile)</span>
            <p>This school is very nice for me and from this school im becomes here Thank you Pink flower school</p>
            <br />
            <h4 className='border_l border_R'>10th with c subjects</h4>
            <strong>Pink Flower H S School</strong>
            <h5><span class="badge bg-secondary">May 2015 - May 2016</span></h5>
            <strong>Aggregate</strong> <span>77% (percentile)</span>
            <p>This school is very nice for me and from this school im becomes here Thank you Pink flower school</p>
            <br />
            <h3 className='border_l border_R'>---- Projects ----</h3>
          <h5>Don’t call it a dream, call it a plan.</h5>

            <h3 className='border_l border_R'>--Advance Projects--</h3>
            <div className="row Advance_projects">
              <div className="col-md-12">
              <h4>
                1.Projectile Collision
              </h4>
              <h5 style={{fontFamily:"monospace",color:"green"}}>[HTML CSS JAVASCRIPT  NODEJS(for backend)  MONGODB ATLAS]</h5>
              <p>This is a Game which is made by using pure javascript,html,and css.This game use backend server to store the users score and by using backend your score is saved on MongoDB Atlas DataBase. </p>
              <p>
                If you load it than you can play it offline your score save on your local storage and when you are online then it update your score.Because this game use backend then you will see the worldWide users score and compete with them </p>
              <p > Multicolor balls come with random positions and you have to distroy it.In these game you will never face the game over because the motive of these game is to compete with other users</p>
              <a href="https://vikas5686.github.io/Javascript_Game/"><button className='btn my-3 btn-outline-primary'>Link -You can try it</button></a>
              <h4 style={{fontFamily:"monospace",color:"green"}}>! Spy App Comming Soon !</h4>
              </div>

            </div>
            <h3 className='border_l border_R'>---- Basic Projects ----</h3>
            <div className='Projects row'>
              <div className="col-md-6"> <h4>1. Text-Converter :</h4><p>- Made a Web Application. In which user can Convert Text to Upper or Lowercase and also remove extra spaces.</p><p>- It also has Dark and light Mode.</p><p>- In Web Application also have images. </p>LINK - <a href="https://vikas5686.github.io/Text-Converter/"><strong>https://Vikas5686.github.io/Text-Converter/</strong></a></div>
            
              <div className="col-md-6">
              <h4>2. News-Monkey :</h4><p>- Made a Web Application. In which user can read Top Latest News in world.</p><p>- These is made up with fetching News API</p>
              <p>- In Web Application also have images. </p>LINK - <a href="https://vikas5686.github.io/NewsMonkey/"><strong>https://Vikas5686.github.io/NewsMonkey/</strong></a>
              </div>
            </div>
            <div className="row Projects">
              <div className="col-md-6">
                <h4>3. Magic-book :</h4><p>- Made an UI for the application in which user can add there daily routine, important date or important notes and also be delete there notes</p><p>- All the data save in Mobile Local storage</p><p>- It has beautiful interface. </p>LINK - <a href="https://vikas5686.github.io/Magic/"><strong>https://Vikas5686.github.io/Magic/</strong></a>

              </div>
              <div className="col-md-6">
                <h4>5. ChatBot_Page :</h4><p>- Made a Web Application. In which user can type his query and it search to google.</p><p>- It Massage automatically using concepts</p><p>- It is madeup with javascript logics</p> LINK - <a href="https://vikas5686.github.io/ChatBotPage_/"><strong>https://vikas5686.github.io/ChatBotPage_/</strong></a>

              </div>
            </div>

            <div className="row Projects">
              <div className="col-md-6">
                <h4>5. Sipto :</h4><p>This is simple UI. This is fully responsibe and in black theme</p>LINK -<a href='https://Vikas5686.github.io/Sipto/'> https://Vikas5686.github.io/Sipto/</a>
              </div>
              <div className="col-md-6">
                <h4>6. Whatsapp_clone : </h4><a ><p>This only work on my local network these work with the help of socket io module</p></a>
              </div>
            </div>
            <div className="row Projects">
              <div className="col-12">
                <h4>7. Whatsapp_genrator :</h4> <a ><p>This only work on my local network these work with the help of puppteer module</p></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}
