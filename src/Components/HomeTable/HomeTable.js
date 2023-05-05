import React from 'react'
import { Card, Col, Dropdown, Row, Tab, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function HomeTable() {
    return (
        <div>
            <div className="container mt-5">
                <Row>
                    <div className="col">
                        <Card className='shadow rounded'>
                            <Table className='align-items-center' responsive="sm">
                                <thead className=''>
                                    <tr className='table-dark'>
                                        <th>Id</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pavan</td>
                                        <td>PK@gmail.com</td>
                                        <td>Male</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="danger" id="dropdown-basic-1">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >InActive</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg/1200px-Ronaldo_vs._FC_Schalke_04_%2816854146922%29.jpg" alt="" width={'50px'} height={'50px'} className='' /></td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="danger" id="dropdown-basic-1">
                                                    <i className='fa-solid fa-ellipsis-vertical fs-4'></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link to={'/profile/1'} className='text-decoration-none'>
                                                            <i className='fa-solid fa-trash text-primary me-2 fs-5'></i>
                                                            View
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <Link to={'/edit/1'} className='text-decoration-none'>
                                                            <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
                                                            Edit
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <div>
                                                            <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
                                                            <span className='fs-5 text-dark'>Delete</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default HomeTable