import React from "react";
import './CourseEditor.css'
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseHeading from './CourseHeading'
import ModuleListContainer from '../../containers/ModuleListContainer'

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
})

const store = createStore(rootReducer)

const CourseEditor = ({hideEditor, match, history, courseId, moduleId, lessonId}) =>
    <Provider store={store}>
        <div>
            <button onClick={() => history.push("/")}>
                <i className="fa fa-times"></i>
            </button>
            <CourseHeading courseId={courseId}/>
            <div className="row">
                <div className="col-4">
                    <h4>Module List</h4>
                    <ModuleListContainer
                        courseId={courseId}
                        history={history}
                        moduleId={moduleId}/>
                </div>
                <div className="col-8">
                    <LessonTabs
                        moduleId={moduleId}/>
                    <TopicPills
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor
