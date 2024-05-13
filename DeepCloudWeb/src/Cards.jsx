import React from 'react'



function Cards(props) {
  return (
    <>
        <div className="col-md-4  card_div ">

            <div className="card   " >

            <img src={props.imgsrc} className="card-img-top " alt={props.imgsrc} />
            <div className="card-body ">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

            </div>

        </div>

    </>
  )
}

export default Cards