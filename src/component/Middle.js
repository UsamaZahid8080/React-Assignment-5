import React from 'react'
import "./Middle.css"
import { Button } from 'react-bootstrap'
import images1 from "./images/1.png"

function Middle() {
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 mt-5 ms-5 ms-lg-0'>
                        <h1 className='h1' style={{ fontWeight: "bold" }}>Create Stunning<br />Emails Campaigns</h1>
                        <p>Create and lainch email campaigns that captivate<br />your customer in just a few clicks</p>
                        <Button variant='success' className='rounded-0 fw-bold px-4 py-2'>TRY NOW</Button>
                        <Button variant='outline-success' className='rounded-0 fw-bold px-4 py-2 ms-3'>GET A DEMO</Button>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <img src={images1} alt='' className='img-fluid' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Middle