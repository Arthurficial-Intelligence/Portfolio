import React from 'react';
import Logo from '../images/ARS-LOGO.svg';
import './main.css';



let Footer = () => {
    return(
        <div className="text-center  mt-5 pt-5 main-logo">
            <div className="d-flex justify-content-center flex-column pt-5">
                <div className="mb-5">
                    <h1
                        className="m-0 text-center"
                        data-aos="fade-up"
                    > Contact </h1>
                    <div className="d-flex flew-row justify-content-center">
                        <p
                            className="text-center d-flex justify-content-center align-items-center mt-5"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        ><img src={Logo} width="100" height="70"  alt="" /><a className="nav-link" href="mailto:arthurrankin1992@gmail.com">Email Me!</a></p>
                        <p
                            className="text-center d-flex justify-content-center align-items-center mt-5"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        ><a className="nav-link" href="https://github.com/ArthurRankin">/    Github</a></p>
                        <p
                            className="text-center d-flex justify-content-center align-items-center mt-5"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        ><a className="nav-link" href="https://www.linkedin.com/in/arthur-smith-2281b5156/">/     LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <small data-aos="fade-in" data-aos-delay="400">&copy;2018 Arthur Rankin Smith</small>
        </div>
    )
}

export default Footer;