import React from 'react'
import Vector from "../assets/Vector.png"

const Landing = ({ reference }) => {
  return (
    <div ref={reference} className='mt-120px'>
      <div className="background-general ht-auto p-500" >
        <div className='ps-6 pt-5 w-container-landing'>
          <div>
            <h1 className='text-light fw-bold fs-105 overflow-y-hidden'>Hey,</h1>
            <h1 className='text-light fw-bold fs-105 overflow-y-hidden'>I'm yoako</h1>
          </div>
          <div className='pt-5'>
            <button className='btn fs-18 text-light border rounded-pill ps-4 pe-4 pt-1 pb-1 me-3'>Digital design</button>
            <button className='btn fs-18 text-light border rounded-pill ps-4 pe-4 pt-1 pb-1 me-3'>Video edition</button>
            <button className='btn fs-18 text-light border rounded-pill ps-4 pe-4 pt-1 pb-1 me-3'>UX | UI</button>
            <button className='btn fs-18 text-light border rounded-pill ps-4 pe-4 pt-1 pb-1 me-3'>& More</button>
          </div>
          <p className='text-light fs-24 mt-5'>
            I’m a multidisciplinary digital designer & video editor with a strong interest in modern & technological styles.
          </p>
          <div className='d-flex align-items-center mt-5 justify-content-between'>
            <button className='btn btn-light fs-32 rounded-pill fw-semibold ps-5 pe-5 pt-2 pb-2'>Let's chat!</button>
            <div className='d-flex flex-column align-items-center me-5'>
              <p className='text-light fw-semibold'>Scroll down</p>
              <img className='fs-6 scroll-down' src={Vector} alt="Scroll down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
