import React from 'react';
import HomePic from '../../../Images/online-education.jpg';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-5 pt-5">
                        <h3 className="mb-4 text-light">Learn Like Yourself, <br />Build Confidence</h3>
                        <p className="text-light" style={{ textAlign: "justify" }}>Acquire the most important skills of the present time by enrolling in online courses, training and career track programs of your choice.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-5 pt-5">
                        <img className="homeImage img-fluid" style={{ height: '400px', width: '900px' }} src={HomePic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;