import React from 'react'
import "./Footer.css"
import images1 from "./images/9.png"

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-lg-2 col-md-6 col-10 offset-3 offset-md-0 mt-5 mt-lg-0'>
                         <img src={images1} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-lg-1 col-md-3 col-7 offset-3 offset-md-0 mt-5 mt-lg-0'>
                         <h5 className='font1'>Features</h5>
                         <h5 className='font1'>Pricing</h5>
                         <h5 className='font1'>Services</h5>
                         <h5 className='font1'>Partners</h5>
                    </div>
                    <div className='col-lg-1 col-md-3 col-7 offset-3 offset-md-0 mt-5 mt-lg-0'>
                         <h5 className='font1'>About Us</h5>
                         <h5 className='font1'>Tutorials</h5>
                         <h5 className='font1'>Resources</h5>
                         <h5 className='font1'>Help Center</h5>
                         <h5 className='font1'>Templates</h5>
                         <h5 className='font1'>Case Studies</h5>
                    </div>
                    <div className='col-lg-1 col-md-3 col-7 mt-5 mt-lg-0 offset-3 offset-md-6 offset-lg-0'>
                         <h5 className='font1'>Medium</h5>
                         <h5 className='font1'>Twitter</h5>
                         <h5 className='font1'>Facebook</h5>
                         <h5 className='font1'>Instagram</h5>
                         <h5 className='font1'>Linkedin</h5>
                    </div>
                    <div className='col-lg-1 col-md-3 col-7 mt-5 mt-lg-0 offset-3 offset-md-0'>
                         <h5 className='font1'>Contact Us</h5>
                         <h5 className='font1'>Slack</h5>
                         <h5 className='font1'>Jobs</h5>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer