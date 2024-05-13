import React from 'react'

import web from "./assets/about01.jpeg"

import Common from './Common'

function Home() {
  
  return (
    <>
    <Common 
    name = "Grow your business with"
    imgsrc = {web}
    visit = "/service"
    btname  = "Get started"
    />
    </>
  )
}

export default Home