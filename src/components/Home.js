import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/ARS-LOGO.svg';

// Custom TypeWriter component compatible with React 16
class TypeWriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopIndex: 0,
            charIndex: 0
        };
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    tick = () => {
        const { strings, typeSpeed, backSpeed, backDelay } = this.props;
        const { isDeleting, loopIndex, charIndex } = this.state;
        const currentString = strings[loopIndex % strings.length];

        if (isDeleting) {
            this.setState({
                text: currentString.substring(0, charIndex - 1),
                charIndex: charIndex - 1
            });
        } else {
            this.setState({
                text: currentString.substring(0, charIndex + 1),
                charIndex: charIndex + 1
            });
        }

        let delta = isDeleting ? backSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentString.length) {
            delta = backDelay;
            this.setState({ isDeleting: true });
        } else if (isDeleting && charIndex === 0) {
            this.setState({
                isDeleting: false,
                loopIndex: loopIndex + 1
            });
            delta = 500;
        }

        this.timeout = setTimeout(this.tick, delta);
    }

    render() {
        return (
            <span className={this.props.className}>
                {this.state.text}
            </span>
        );
    }
}

let HomePage = (props) => {
    return(
        <div className="hero-section">
            <div className="home-body container d-flex flex-column flex-sm-row justify-content-center  align-items-center mb-5 pb-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={props.biglogo}
                        className="img-fluid main-logo logo-glow"
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
                    >Arthur Smith</h1>
                    <div
                        className="job-title-container"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <TypeWriter
                            strings={[
                                'Product Engineer',
                                'UX Engineer',
                                'Creative Coder',
                                'Design Engineer'
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={2000}
                            className="job-title typed-text"
                        />
                        <span className="typed-cursor">|</span>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <p
                    className="main-logo bio-text"
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