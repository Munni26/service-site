import React from 'react';

const HomeMainCourse = ({ data }) => {
    return (
        <div className="col-md-4 mt-5" >
            <div className="card">
                <img src={require(`../../../Images/${data.course_pic}`).default} className="card-img-top img-fluid" alt="..." />

                <div className="card-body">
                    <h5 class="card-title">{data.course_title}</h5>
                    <p><strong>${data.course_price}</strong></p>

                    <button className="btn btn-secondary">Add Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeMainCourse;