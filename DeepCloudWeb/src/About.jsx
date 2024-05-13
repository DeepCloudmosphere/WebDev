import React from 'react'
import Common from './Common'
import web from "./assets/hpmeeee.png"

function About() {
  return (
    <>
    <Common 
    name = "Welcome to About page"
    imgsrc = {web}
    visit = "/contact"
    btname  = "Contact Now"
    />
    
    </>
  )
}

export default About