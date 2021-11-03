import React, { useState } from 'react';
import Data from "../../FakeData/FakeData"
import CourseDetails from './CourseDetails';
const Courses = () => {
    const [data, setData] = useState(Data);
    console.log(data)
    return (
        <div className="mt-4">
            <h2 style={{ textAlign: 'center' }}>We Provide Friendly and Marketable Online Courses</h2>
            <div className="row">
                {
                    data.map(data => {
                        return (
                            <CourseDetails key={data.id} data={data} />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Courses;