import React from 'react'
import './Home.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HomeTable from '../../Components/HomeTable/HomeTable';



function Home() {
    const navigate = useNavigate()
    // navigate to register page
    const addUsers = ()=> {
        navigate('/register')
    }
  return (
    <>
        <div className='container mt-5'>
            {/* search and button */}
            <div className='first__div'>
                <div className='search__add d-flex justify-content-between'>
                    <div className="search col-md-4">
                        <form className='d-flex'>
                            <Form.Control type="text" placeholder="search" className="me-2"/>
                            <Button variant='primary'>Search</Button>
                        </form>
                    </div>
                    <div className="add__btn">
                        <Button variant='success' onClick={addUsers}><i className='fa-solid fa-user-plus'></i>Add</Button>
                    </div>
                </div>
            </div>
            {/* table div */}
        <div className='second__div'>
            <HomeTable/>
        </div>
        </div>
    </>
  )
}

export default Home