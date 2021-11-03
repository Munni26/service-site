import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Home from '../Home/Home';
import Data from "../../FakeData/FakeData";
import HomeMainCourse from '../HomeMainCourse/HomeMainCourse';

const HomeMain = () => {
    const [data, setData] = useState(Data.slice(0, 4));
    console.log(data);
    return (
        <div>
            <Home />

            <br />
            <div className="row">
                {
                    data.map(data => {
                        return <HomeMainCourse key={data.id} data={data} />
                    })
                }
            </div>

            <br />

            <Link to="/all-courses">
                <button className="btn btn-outline-primary mb-5">Show more courses</button>
            </Link>
            <br />
            <Footer />
        </div>
    );
};

export default HomeMain;