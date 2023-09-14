import React from 'react'
import "./Cardmini.css"
import images1 from "./images/5.png"
import images2 from "./images/6.png"
import images3 from "./images/7.png"
import { Button } from 'react-bootstrap'

function Cardmini() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5 justify-content-around mb-5'>
                    <div className='col-7 col-lg-4 col-md-6 mt-lg-5 offset-1 offset-md-0'>
                        <img src={images1} alt='' className='img-fluid' />
                    </div>
                    <div className='col-7 col-lg-4 col-md-6 mt-lg-5 offset-1 offset-md-0 mt-5 mt-md-0'>
                        <img src={images2} alt='' className='img-fluid' />
                    </div>
                    <div className='col-7 col-lg-4 col-md-6 mt-lg-5 mt-5 mt-lg-0 offset-1 offset-md-0'>
                        <img src={images3} alt='' className='img-fluid' />
                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                      <h1 className='style text-center'>Learn how others are reaching their<br />audience easier than ever before</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-12 text-center'>
                      <input type='' placeholder='Enter Your Email'style={{padding:"7px 80px 7px 2px"}}/>
                    </div>
                    <div className='col-lg-3 col-12 text-center mt-3 mt-lg-0'>
                      <Button style={{borderRadius:"0",marginLeft:"",fontWeight:"bold",padding:'10px 15px 10px 10px'}} variant='success'>JOIN OUR LIST</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardmini