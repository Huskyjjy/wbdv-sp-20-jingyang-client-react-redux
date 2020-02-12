import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent =
    ({
         toggle,
         updateForm,
         newCourseTitle,
         addCourse,
         layout,
         deleteCourse,
         courses
     }) =>
                    <div>
                        
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div>
                                <button>
                                    <i className="fa fa-bars"></i>
                                </button>
                
                            </div>
                            <div className="collapse navbar-collapse">
                            <label className="navbar-brand wbdv-label wbdv-course-manager wbdv-middle">Course Manager</label>
                            </div>
                            <div>
                    
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control wbdv-field wbdv-new-course" 
                                        onChange={updateForm}
                                        value={newCourseTitle}/>
                                    <div className="input-group-append">
                                        <button 
                                            className="btn btn-outline-secondary wbdv-button wbdv-add-new-course" 
                                            onClick={addCourse}>
                                            <i className="fa fa-fw fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </nav>
                        </div>                      
                        {layout === 'table' &&
                        <CourseTableComponent
                            toggle={toggle}
                            deleteCourse={deleteCourse}
                            courses={courses}/>}
                        {layout === 'grid' && 
                        <CourseGridComponent 
                            toggle={toggle}
                            deleteCourse={deleteCourse}
                            courses={courses}
                        />}
                    </div>
               


export default CourseListComponent
