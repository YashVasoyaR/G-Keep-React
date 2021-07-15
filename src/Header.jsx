import React from 'react';
import DnsIcon from '@material-ui/icons/Dns';
import './index.css';

const Header = () => {
    return (
        <>
            <div className='container-fluid m-0 p-0 ' style={{background:' rgb(251, 188, 5)'}}>
            <nav className=" navbar navbar-light ">
                    <a className="navbar-brand mx-2 " ><DnsIcon /> <span>Yash Keep</span></a>
                  
                </nav>

            </div>
        </>
    )
}

export default Header;