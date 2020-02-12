import React from "react";
import {updateCourse} from "../../services/CourseService";
import {Link} from "react-router-dom";
import '../../css/style.css'

class CourseCard extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        editing: false,
        course: this.props.course,
        currID: this.props.course._id
    }
    render(){
        return(
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                    src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <div>
                        <span className="wbdv-icon"><i className="fa fa-file"></i></span>
                        <span className="wbdv-title">
                            {   !this.state.editing &&
                                <Link to={`/course-editor/${this.state.course._id}`}>
                                    {this.state.course.title}
                                </Link>
                            }
                            {this.state.editing &&
                            <input
                                onChange={(e) => this.setState({
                                    course: {
                                        ...this.state.course,
                                    title: e.target.value
                                    }
                                    })
                                }
                                value={this.state.course.title}
                            />
                            }
                        </span>
                    </div>
                    <div>
                        <span className="wbdv-owner">me</span>
                        <span className="wbdv-time"><time>2/5/2020</time></span>
                    </div>
                    <div>
                    <div className="inner">
                    <button onClick={() => this.props.deleteCourse(this.props.course)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    </div>
                    <div className="inner">
                    <button onClick={() => this.setState({editing: true})}>
                    <i className="fa fa-pencil"></i>
                    </button>
                    </div>
                    <div className="inner">
                    <button onClick={(e) => {
                        updateCourse(this.state.currID, this.state.course).then(status => {})
                        this.setState({
                            currID: this.state.course._id,
                            editing: false
                        })
                    }}>
                    <i className="fa fa-save"></i>
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCard