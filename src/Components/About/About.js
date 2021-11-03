import React from 'react';
import Footer from '../Footer/Footer';
import AboutHeader from './AboutHeader/AboutHeader';

const About = () => {
    return (
        <div >
            <AboutHeader />
            <hr />

            <div className="container">
                <h2>Our Mission</h2>
                <p className="text-align-justify">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                <br />
                <br />
                <h2>Our Vision</h2>
                <p className="text-align-justify">Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default About;