import React, {Component} from 'react';
import PCLogo from '../images/parents.jpeg';
import './projects.css';
import logo from '../images/ARS-LOGO.svg';
import DoLogo from '../images/doLogo.png';
import wirePic from '../images/wireframing.JPG';
import personaPic from '../images/persona.png';
import { Link } from 'react-router-dom';





let ProjectsPage = (props) => {
    return(
        <div >
            <h3
                className="mb-5 mt-5 text-center display-3"
                data-aos="fade-down"
                data-aos-duration="800"
            >Projects</h3>
            <div className="d-flex flex-column mb-5 mt-5">
                <div
                    className="media flew-row-sm flex-column mt-5 mb-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img className="mr-3" src={`${PCLogo}/64x64`} alt="Generic placeholder image" />
                    <div className="media-body">
                        <h3 className="card-title title">Parenting Conundrum</h3>
                        <p className="card-text">Parenting Conundrum is my first large scale indivdual project. It is a Forum App developed for parents with special needs children to able to share and recieve advice from others in the same situation.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={props.logo} width="100" height="70"  alt="" />
                            <div className="d-flex flex-row">
                                <Link to="/Portfolio/ParentingConundrum" className="btn repo-btn p-2 m-2">For Case Study</Link>
                                <a href="https://arthurrankin.github.io/CapStone-ParConun/#" target="_blank" className=" btn repo-btn p-2 m-2">For Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="media flew-row-sm flex-column mt-5 mb-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <img className="mr-3" src={DoLogo} alt="Generic placeholder image" />
                    <div className="media-body">
                        <h3 className="card-title title">do.</h3>
                        <p className="card-text text-dark">Day Out, or do., is a Tinder style app that allows users to "match" with new points of interest in the Nashville area. Using data from data.nashville.gov, do. pulls from Nashville's Public Art, Historical Markers, and Parks data.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={props.logo} width="100" height="70"  alt="" />
                            <div className="d-flex flex-row">
                                <Link to="/Portfolio/do" className="btn repo-btn p-2 m-2">For Case Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="media flew-row-sm flex-column mt-5 mb-5"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h1 className="display-1">ViewPoint</h1>
                    <div className="media-body">
                        <h3 className="card-title title">ViewPoint</h3>
                        <p className="card-text text-dark">ViewPoint is my second Indvidual app. When I started this project, I had a couple things in mind: one, that I wanted to try out a new tech. What ever it was, I wanted to dive right into it and implement it. And two, I wanted to build my design on a heavy amount of UX research and testing. </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={props.logo} width="100" height="70"  alt="" />
                            <div className="d-flex flex-row">
                                <Link to="/Portfolio/ViewPoint" className="btn repo-btn p-2 m-2">For Case Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



class Projects extends Component {
    render() {
        return(
            <ProjectsPage 
                logo={logo}
                wirepic={wirePic}
                personapic={personaPic} 
            />
        )
    }
}

export default Projects;