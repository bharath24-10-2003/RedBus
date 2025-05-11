import React from 'react'
import logo from '../../assets/download.png'
import { Button } from 'react-bootstrap'
import { CiBoxList } from 'react-icons/ci'
import { ImProfile } from 'react-icons/im'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { CgHome } from 'react-icons/cg'
const Header = () => {
    const nav = useNavigate()
    return (
        <div className='header d-flex justify-content-between p-3 align-items-center'>
            <div className="logo ms-2"><img src={logo} alt="" height={"50px"} width={"50px"} /></div>
            <div className="options d-flex justify-content-between">
                <div className="home px-3"><Button variant='light' className='d-flex  align-items-center' onClick={() => { nav("/") }}><CgHome className='me-2' /> Home</Button></div>
                <div className="bookings px-3"><Button variant='light' className='d-flex  align-items-center' onClick={() => { nav("/bookings") }}><CiBoxList className='me-2' /> Your Booking</Button></div>
                <div className="aboutUs px-3"><Button variant='light' className='d-flex  align-items-center'><ImProfile className='me-2' /> Profile</Button></div>
            </div>
        </div>
    )
}

export default Header