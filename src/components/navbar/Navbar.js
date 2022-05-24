import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaAngleDown, FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/logo.png';


const Navbar = () => {

    const [show, setShow] = useState(false);

    function showSwitch() {
        return setShow(!show)
    }

    return <>
        <div className="navbar">
            <div className="logo">
                <img className='logo' src= {logo} alt=''/>
            </div>

            <div className={show ? "links active" : "links"}>
                <Link onClick={() => showSwitch()} to="/">Home</Link>
                <Link onClick={() => showSwitch()} to="/about">About</Link>
                <Link onClick={() => showSwitch()} to="/services">Services <FaAngleDown /> </Link>
                <Link onClick={() => showSwitch()} to="/blogs">Blogs</Link>
                <Link onClick={() => showSwitch()} to="/contact">Contact</Link>
                <button className='btn-navbar' onClick={() => showSwitch()} to="/login">Login</button>
            </div>

            <div className={show ? "bars-button active" : "bars-button"} onClick={() => showSwitch()} >
                {show ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}
            </div>
        </div>
    </>;
}

export default Navbar