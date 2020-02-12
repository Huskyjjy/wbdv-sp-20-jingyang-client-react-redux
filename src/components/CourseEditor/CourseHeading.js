import React, { Component } from "react";
import {findCourseById} from '../../services/CourseService'
class CourseHeading extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        routecourse: {}
    }
    
    componentDidMount = async () => {
        const c = await findCourseById(this.props.courseId)
        this.setState({
            routecourse: c
        })
    }


    render(){
        return(
        <h2>{this.state.routecourse.title}</h2>
        )
    }

}
export default CourseHeading;