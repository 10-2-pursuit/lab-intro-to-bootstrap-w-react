import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container-fluid navbar-expand-lg bg-body-tertiary'>
                <div className='navbar-nav'>
                    <span className='h1 p-1'>Travel <span className='script-font orange'>Blog</span></span>
                    <a className='nav-link p-3' href="">About</a>
                    <a className='nav-link p-3'href="">Popular posts</a>
                </div> 
            </div>
        </nav>
        // <div className='d-inline-flex p-4'>
        // </div>
    );
}

export default Navbar;
