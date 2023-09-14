import React from 'react'
import "./Secondlast.css"
import { Button } from 'react-bootstrap'

function Secondlast() {
    return (
        <>
            <div className='bg mt-5 mb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center' style={{padding:"70px 100px"}}>
                            <h1 style={{ color: "white" }}>Get Started today!</h1>
                            <Button style={{color:"MediumSeaGreen",fontWeight:"bold",borderRadius:"0px"}} variant='light'>PICK A PLAN</Button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Secondlast