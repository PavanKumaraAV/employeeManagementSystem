import React from 'react'
import './Profile.css'
import { Card, Col, Row } from 'react-bootstrap'


function Profile() {
    return (
        <>
            <div className="container">
                <Card className='shadow col-lg-6 mx-auto mt-5' bsStyle="primary">
                    <Card.Body>
                        <Row>
                            <div className="col">
                                <div className="profile__img d-flex justify-content-center">
                                    <img className='border p-1 rounded-circle' width={'200px'} height={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg/1200px-Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg" alt="" />
                                </div>
                            </div>
                        </Row>
                        <div className='text-center mt-3'>
                            <h3>Tasbi</h3>
                            <h5><i className="fa-solid fa-envelope"></i> : Email</h5>
                            <h5><i className="fa-solid fa-envelope"></i> : 1234567890</h5>
                            <h5><i className="fa-solid fa-envelope"></i> : male</h5>
                            <h5><i className="fa-solid fa-envelope"></i> : BRooklyn</h5>
                            <h5><i className="fa-solid fa-envelope"></i> : active</h5>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Profile