import React from 'react';

import Courses from "../HomeMain/Courses/Courses";
import Footer from "../Footer/Footer";
import AllCourseHeader from './AllCourseHeader/AllCourseHeader';

const AllCourses = () => {
    return (
        <div>
            <AllCourseHeader />
            <hr />
            <Courses />
            <hr />
            <Footer />
        </div>
    );
};

export default AllCourses;