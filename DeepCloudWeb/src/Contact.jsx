import React, { useState } from 'react'

function Contact() {
  const [data,setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  })

  function InputEvent(event){
    const {name, value} = event.target;

    setData((preValue)=>{
      return {
          ...preValue,
          [name]: value

      }
    })
  }

  function  formSubmit(e){
    e.preventDefault();
    alert(

      `
      My name is ${data.fullname} and my mb number is ${data.phone} and email addr is ${data.email} and my message is ${data.message} 
      `
    )

    setData(()=>{
      return {
        fullname: '',
        phone: '',
        email: '',
        message: ''

      }
    })
  }

  async function postData(e){
    e.preventDefault();

    const { fullname, phone, email, message } = data;

    const res = await fetch('https://deepcloud-5c754-default-rtdb.firebaseio.com/deepcloud.json',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        fullname,
        phone,
        email,
        message
      })
    });

  }
  return (
    <>
    <section className='contact-main'>

    <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container form'>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto my-5 ">
          
        <form  onSubmit={postData} method="POST">

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Full Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange = {InputEvent} placeholder="Enter your name"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange = {InputEvent}  placeholder="Mobile number"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange = {InputEvent}  placeholder="name@example.com"/>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control"   name="message" value={data.message} onChange = {InputEvent}  id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <div class="col-12">
          <button class="btn btn-outline-primary " type="submit" >Submit form</button>
        </div>
        </form>



        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Contact