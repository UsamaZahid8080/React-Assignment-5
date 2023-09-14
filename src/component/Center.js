import React from 'react'
import "./Center.css"
import Card from 'react-bootstrap/Card';
import images1 from "./images/4.png"
import images2 from "./images/3.png"

function Center() {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col-7 col-lg-3 col-md-5 mt-5 mt-md-0'>
                        <Card style={{ width: '18rem' }}>
                            <img src={images1} alt='' />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-7 col-lg-3 col-md-5 mt-lg-5 mt-5 mt-md-0'>
                        <Card style={{ width: '18rem' }}>
                            <img src={images2} alt='' />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-7 col-lg-3 col-md-5 mt-md-5 font mt-5 mt-md-0'>
                        <h1>The source for<br />proven,engaging<br />email campaigns</h1>
                        <p> Some quick example text to build on the card title and make up the
                        bulk of the card's content.Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Center