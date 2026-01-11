import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
    componentDidMount() {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    render() {
        return(
            <div>
                <Nav />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
