import React from 'react'
import Content from './Row_1/Content'
import './Home.css'
import Navbar from './Navbar'
import Row_2 from './Row_2/Row_2'
import Row_3 from './Row_3_Skill/Row_3_Skill'
import Row_4_Resume from './Row_4_Resume/Row_4_Resume'
import Row_5_Review from './Row_5_Review/Row_5_Review'


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset:130
});

export default function Home() {
  return (
    <>
    <Navbar/>
    <Content/>
    <Row_2/>
    <Row_3/>
    <Row_4_Resume/>
    <Row_5_Review/>
    </>
  )
}
