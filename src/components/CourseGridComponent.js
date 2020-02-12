import React from "react";
import CourseCard from './CourseCard'
import '../css/gridstyle.css'

const CourseGridComponent = ({toggle, courses, deleteCourse, showCourseEditor}) =>
    <div className="container-fluid">
        <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col" width="60%" className="wbdv-header wbdv-title">Recent Documents</th>
            <th scope="col" width="20%" className="wbdv-small">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle wbdv-header wbdv-owner" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Owned by
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Me</a>
                    </div>
                </div>
            </th>
            <th scope="col" width="10%" className="wbdv-button wbdv-grid-layout wbdv-list-layout">
                <button className="btn" onClick={toggle}><i className="fa fa-th"></i></button>
            </th>
            <th scope="col" width="10%" className="wbdv-header wbdv-sort">
                <button><i className="fa fa-sort"></i></button>
            </th>
            
          </tr>
        </thead>
        </table>
        <div class="cards">
        {courses.map(function(course, index) {
            return <CourseCard
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
            })
        }
        </div>
    </div>

export default CourseGridComponent
