import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/ARS-LOGO.svg';




let HomePage = (props) => {
    return(
        <div>
            <div className="home-body container d-flex flex-column flex-sm-row justify-content-center  align-items-center mb-5 pb-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={props.biglogo}
                        className="img-fluid main-logo"
                        width="225"
                        height='225'
                        alt=""
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    />
                    <h1
                        className="main-logo display-2 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >Arthur Rankin</h1>
                    <p
                        className="job-title"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >Front-End Engineer</p>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <p
                    className="main-logo"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >Treehouse track-star gone professional UI/UX Front-End Engineer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development. Currently seeking opportunities in related position.</p>
            </div>
        </div>
    )
}



class Home extends Component {


    render() {
        return(
            <div className="mt-5">
                <HomePage biglogo={LGLogo} />
            </div>
        )
    }
}

export default Home;