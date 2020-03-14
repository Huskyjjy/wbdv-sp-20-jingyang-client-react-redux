import React from "react";
import './CourseEditor.css'
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/widgetReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabs";
import CourseHeading from './CourseHeading';
import ModuleListContainer from '../../containers/ModuleListContainer';
import TopicPillContainer from '../../containers/TopicPillContainer';
import WidgetContainer from "../../containers/WidgetContainer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)

const CourseEditor = ({hideEditor, match, history, courseId, moduleId, lessonId, topicId}) =>
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
                        history={history}/>
                </div>
                <div className="col-8">
                    <LessonTabs
                        courseId={courseId}
                        history={history}
                        moduleId={moduleId}
                        />
                    <TopicPillContainer
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        history={history}/>
                    <WidgetContainer
                        topicId={topicId}
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        history={history}
                    />
                </div>

            </div>
        </div>
    </Provider>

export default CourseEditor
