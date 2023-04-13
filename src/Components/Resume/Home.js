import React from 'react'
import Content from './Row_1/Content'
import './Home.css'
import Navbar from './Navbar'
import Row_2 from './Row_2/Row_2'
import Row_3 from './Row_3_Skill/Row_3_Skill'
import Row_4_Resume from './Row_4_Resume/Row_4_Resume'
import Row_5_Review from './Row_5_Review/Row_5_Review'
import { useState } from 'react'



import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 130
});

export default function Home() {

  const [cursorMove, setcursorMove] = useState({
    x: 0,
    y: 0
  })


  function moving(e) {
    setcursorMove({
      x: e.clientY - 50, y: e.clientX - 50
    })
  }

  function ClickAbout(e) {
    console.log('clck the about')
  }

  return (
    <>
      <div className="home_container" onMouseMove={moving}>
        <div style={{ top: cursorMove.x, left: cursorMove.y }} className="mousehovering"></div>
        <div style={{ top: cursorMove.x + 47, left: cursorMove.y + 41 }} className="mouseRing"></div>
        <div style={{ top: cursorMove.x + 47, left: cursorMove.y + 41 }} className="mouseRing" id="ring1"></div>
        <Navbar />
        <Content />
        <Row_2 />
        <Row_3 />
        <Row_4_Resume />
        <Row_5_Review />
      </div>
    </>
  )
}
