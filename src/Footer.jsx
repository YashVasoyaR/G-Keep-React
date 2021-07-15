import React from 'react'

export const Footer = () => {
    let year=new Date().getFullYear();
    return (
        <>
            <footer className='container-fluid position-fixed bottom-0 top-3 m-0 p-0 d-flex justify-content-center align-items-center bg-danger '>
                <p className='pt-1 position-sticky'>copyright ©️ {year}</p>
            </footer>
        </>
    )
}

export default Footer;
