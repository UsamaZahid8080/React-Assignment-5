import React from 'react'
import "./Middlenext.css"
import images1 from "./images/2.png"
import { Button } from 'react-bootstrap'
function Middlenext() {
  return (
    <>
      <div className='container position-relative mb-5'>
        <div className='row justify-content-center mt-5'>
          <div className='col-10 mt-5'>
            <img src={images1} alt='' className='img-fluid' />
            <div className='position-absolute top-50 translate-middle-x start-50 text-center'>
              <h1 style={{color:"white"}}>Reach More Customer</h1>
               <Button variant='light' style={{color:"green",borderRadius:"0px",fontWeight:"bold",padding:"7px 20px"}}
               >LEARN NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Middlenext