import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Common(props) {
  return (
    <>
    <section id="header" className='d-flex align-items-center' >
    <div className='container-fluid '>
      <div className="row  ">
        <div className="col-10 mx-auto ">
          <div className='row '>
            <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>

              <h1>{props.name} <strong className='brand-name'>DeepCloud</strong> </h1>
              <h2 className='my-3'>We are the team of talented developer making website</h2>
              <div className='mt-3'>
                <NavLink to={props.visit} className='btn-get-started'>
                  {props.btname}
                </NavLink>
              </div>

            </div>

            <div className='col-lg-6 order-1 order-lg-2 header-image' >
              <img src={props.imgsrc} alt="image" className='img-fluid animated ' />
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
    </>
  )
}

export default Common