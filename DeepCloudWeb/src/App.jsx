import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from './Footer'

function App() {
  return (
   <>
   <Navbar />

   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/contact" component={Contact}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/service" component={Service}/>
   <Redirect to="/" />
   </Switch>
   <Footer />

   
   </>
   
  )
}

export default App