import React from "react";
import {connect} from "react-redux";
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../../common/constants";
import service from "../../services/LessonServices";
import {updateLesson} from "../../services/LessonServices";
class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState !== this.state || prevProps.moduleId !== this.props.moduleId){
            this.props.findLessonsForModule(this.props.moduleId)
        }


    }

    state = {
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: ''
        },
        currID: ''
    }

    render() {
        return(
            <ul className="nav nav-tabs">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li className={`nav-item`}
                            onClick={() => 
                                {
                                    const lessonId = lesson._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`)
                                    this.setState({
                                        selectedLessonId: lesson._id
                                    })
                                }
                            }
                            key={lesson._id}>
                            <a className={`nav-link
                                            ${(this.state.editingLessonId === lesson._id || this.state.selectedLessonId === lesson._id)?'active':''}`}>
                                {this.state.editingLessonId !== lesson._id &&
                                <span>{lesson.title}</span>}
                                {this.state.editingLessonId === lesson._id &&
                                <input
                                onChange={(e) =>{
                                    const newTitle = e.target.value
                                    this.setState(prevState => ({
                                            lesson: {
                                                ...prevState.lesson,
                                                title: newTitle
                                            }
                                        }))
                                }}
                                    
                                    value={this.state.lesson.title}/>}
                                {this.state.editingLessonId === lesson._id && 
                                <button onClick={() =>
                                    {
                                        this.props.updateLesson(this.state.currID, this.state.lesson)
                                            .then(() =>
                                                this.setState({
                                                    editingLessonId: ''
                                                })
                                            )
                                    }
                                }>
                                    <i className="fa fa-save"></i>
                                </button>}
                                {this.state.editingLessonId === lesson._id && 
                                <button onClick={
                                    () => this.props.deleteLesson(lesson._id)}>
                                    <i className="fa fa-trash"></i>
                                </button>}
                                {this.state.editingLessonId !== lesson._id && 
                                <button onClick={() => {
                                    const lessonId = lesson._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`)
                                    this.setState({
                                        lesson: lesson,
                                        currID: lesson._id,
                                        editingLessonId: lesson._id
                                    })
                                }}>
                                    <i className="fa fa-pencil"></i>
                                </button>}
                            </a>
                        </li>)
                }
                {this.props.moduleId && <li className="nav-item">
                    <button onClick={() => this.props.addLesson(this.props.moduleId)}>+</button>
                </li>}
            </ul>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
            .then(lessons => dispatcher({
                type: 'FIND_LESSONS_FOR_MODULE',
                lessons: lessons
            })),
    updateLesson: async (lessonId, lesson) => {
        const actualLesson = await updateLesson(lessonId, lesson)
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: actualLesson,
            lessonId: actualLesson._id
        })
    },
    addLesson: (moduleId) =>
        fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'CREATE_LESSON',
                    lesson: actualLesson
                })),
    deleteLesson: (lessonId) =>
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                })),
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)

