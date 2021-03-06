import React from "react";
import CourseTableComponent from "../components/CourseList/CourseTableComponent";
import CourseGridComponent from "../components/CourseList/CourseGridComponent";
import CourseEditor from "../components/CourseEditor/CourseEditor";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"
import CourseListComponent from "../components/CourseList/CourseListComponent";

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerComponent extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'Whatever',
        courses: []

    }

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }
    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))
    }

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })

    render() {
        return (
            <div>
                <h1>Course Manager</h1>

                {/*<Router>*/}

                {/*    <Link to="/page1">*/}
                {/*        Page 1*/}
                {/*    </Link>*/}
                {/*    <Link to="/page2">*/}
                {/*        Page 2*/}
                {/*    </Link>*/}

                {/*    <Route*/}
                {/*        path="/page1"*/}
                {/*        component={Page1}/>*/}
                {/*    <Route*/}
                {/*        path="/page2/:message"*/}
                {/*        exact={true}*/}
                {/*        component={Page2}/>*/}
                {/*</Router>*/}

                <Router>
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                courseId={props.match.params.courseId}
                                {...props}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                           <CourseEditor
                               {...props}
                               moduleId={props.match.params.moduleId}
                               courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                           <CourseEditor
                               {...props}
                               lessonId={props.match.params.lessonId}
                               moduleId={props.match.params.moduleId}
                               courseId={props.match.params.courseId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                    exact={true}
                    render={(props) =>
                            <CourseEditor
                                {...props}
                                topicId={props.match.params.topicId}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                />
                    }/>
                    <Route
                        path="/"
                        exact={true}
                        render={() =>
                            <CourseListComponent
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                            />
                        }/>
                </Router>
            </div>
        )
    }
}

export default CourseManagerComponent
