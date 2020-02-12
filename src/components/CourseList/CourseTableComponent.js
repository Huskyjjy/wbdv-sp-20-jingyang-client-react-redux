import React from "react";
import CourseTableRow from "./CourseTableRow";

const CourseTableComponent = ({toggle, courses, deleteCourse}) =>
    <div>
        <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col" width="30%" className="wbdv-header wbdv-title">Title</th>
            <th scope="col" width="30%" className="wbdv-small">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle wbdv-header wbdv-owner" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Owned by
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Me</a>
                    </div>
                </div>
            </th>
            <th scope="col" width="20%" className="wbdv-middle">Last modifed by me</th>
            <th scope="col" width="10%" className="wbdv-button wbdv-grid-layout wbdv-list-layout">
                <button className="btn" onClick={toggle}><i className="fa fa-th"></i></button>
            </th>
            <th scope="col" width="10%" className="wbdv-header wbdv-sort">
                <button><i className="fa fa-sort"></i></button>
            </th>
            
          </tr>
        </thead>
        <tbody>
        {

            courses.map(function(course, index) {
                return <CourseTableRow
                    deleteCourse={deleteCourse}
                    key={course._id}
                    course={course}/>
            })
        }       
        </tbody>
    </table>
    </div>
export default CourseTableComponent
