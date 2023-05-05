import React from 'react'
import './Edit.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

function Edit() {
   const option = [ {value : 'Active', label : 'Active'},
    {value : 'Inactive', label : 'Inactive'} ];
    return (
        <>
            <div className="container">
                <h2 className='text-center mt-3'>Edit Employee Details</h2>
                <Card className='shadow mt-5 p-3'>
                    <div className='text-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg/1200px-Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg" alt="" width={'50px'} height={'50px'} className='' />
                    </div>

                    <Form>
                        <Row>
                            <Form.Group className='mb-3 col-lg-6' controlId='formFirstName'>
                                <Form.Label>
                                    First Name
                                </Form.Label>
                                <Form.Control type='text' name='fname' placeholder='First Name'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-6' controlId='formLastName'>
                                <Form.Label>
                                    Last Name
                                </Form.Label>
                                <Form.Control type='text' name='lname' placeholder='Last Name'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-6' controlId='formEmailId'>
                                <Form.Label>
                                    Email Adress
                                </Form.Label>
                                <Form.Control type='email' name='fname' placeholder='Email Address'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-6' controlId='formMobileNumber'>
                                <Form.Label>
                                    Mobile
                                </Form.Label>
                                <Form.Control type='number' name='fname' placeholder='mobile'></Form.Control>
                            </Form.Group>

                            <Form.Group className='mb-3 col-lg-6' controlId='formGender'>
                                 <Form.Label>
                                    Gender
                                </Form.Label>
                                <Form.Check

                                    type={'radio'}
                                    label={'Male'}
                                    name='gender'
                                    value={'male'}

                                />
                                <Form.Check
                                    type={'radio'}
                                    label={'Female'}
                                    name='gender'
                                    value={'female'}

                                />
                            </Form.Group>

                            <Form.Group className='mb-3 col-lg-6' controlId='formEmployeeStatus'>
                                <Form.Label>
                                    Select Employee Status
                                    <Select className='col-lg-12' options={option}></Select>
                                </Form.Label>
                            </Form.Group>
                             <Form.Group className='mb-3 col-lg-6' controlId='formProfilePic'>
                                <Form.Label>
                                   Choose Profile Picture
                                </Form.Label>
                                <Form.Control type='file' name='user__profile' placeholder='mobile'></Form.Control>
                            </Form.Group>
                             <Form.Group className='mb-3 col-lg-6' controlId='formLocation'>
                                <Form.Label>
                                  Employee Location
                                </Form.Label>
                                <Form.Control type='text' name='button' placeholder='Enter employee location'></Form.Control>
                            </Form.Group>
                            <Button className='mt-3' varient='primary' type='submit'> Submit</Button>
                        </Row>
                    </Form>
                </Card>
            </div>


        </>
    )
}

export default Edit