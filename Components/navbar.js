import './style.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
export function Navbar() {
    const [icon, setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        setIcon(!icon)
    }
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='nav-logo' onClick={closeSideDrawer}>Logo</Link>
                <div className='menu-icon' onClick={handleClick}>
                    {
                        icon ? <FaTimes className='fa-times'></FaTimes> : <FaBars className='fa-bars'></FaBars>
                    }

                </div>
                <ul className={
                    icon ? 'nav-menu active' :
                        'nav-menu'
                }>
                    <li>
                        <Link to='/' className='nav-link' onClick={closeSideDrawer}>Home</Link>
                    </li>

                    <li>
                        <Link to='/about' className='nav-link' onClick={closeSideDrawer}>About</Link>
                    </li>
                    <li>
                        <Link to='/contactus' className='nav-link' onClick={closeSideDrawer}>Contactus</Link>
                    </li>
                    <li>
                        <Link to='/project' className='nav-link' onClick={closeSideDrawer}>Project</Link>
                    </li>
                    <li>
                        <Link to='/service' className='nav-link' onClick={closeSideDrawer}>Service</Link>
                    </li>
                    <li>
                        <Link to='/signup' className='nav-link' onClick={closeSideDrawer}>Signup</Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}
export default Navbar;