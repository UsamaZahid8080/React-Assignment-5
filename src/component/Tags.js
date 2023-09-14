import React from 'react'
import "./Tags.css"
import images1 from "./images/8.png"
import images2 from "./images/10.png"
import images3 from "./images/11.png"
import images4 from "./images/12.png"
import images5 from "./images/13.png"

function Tags() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col text-center mt-5 style'>
                        <h1>All the best brands <br />already use us.</h1>
                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row mt-5 justify-content-evenly'>
                    <div className='col-lg-2 col-md-4 col-7 mt-5 offset-2 offset-md-0'>
                        <img src={images1} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-7 col-lg-2 col-md-4 mt-5 offset-2 offset-md-0'>
                        <img src={images2} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-7 col-lg-2 col-md-4 mt-5 offset-2 offset-md-0'>
                        <img src={images3} alt=''className='img-fluid'/>
                    </div>
                    <div className='col-7 col-lg-2 col-md-4 mt-5 offset-2 offset-md-0'>
                        <img src={images4} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-7 col-lg-2 col-md-4 mt-5 offset-2 offset-md-0'>
                        <img src={images5} alt='' className='img-fluid'/>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Tags