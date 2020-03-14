import React from "react";
import {connect} from "react-redux";
import service from "../../services/TopicService"

export default class TopicPillComponent extends React.Component {

    componentDidMount() {
        console.log(this.props.lessonId)
        this.props.findTopicsForLesson(this.props.lessonId)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState !== this.state || prevProps.lessonId !== this.props.lessonId){
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }
    state = {
        activeTopicId: this.props.topicId,
        editingTopicId: '',
        topic: {title: ''},
        currID: ''
    }
    render() {
        return (
            <ul className="nav nav-pills">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <li className={`nav-item`}
                            onClick={
                                () => {
                                    const topicId = topic.id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`)
                                    this.setState({
                                        activeTopicId: topic.id
                                    })
                                }
                            }
                            key={topic.id}
                            >
                            <a className={`nav-item
                                            ${(this.state.editingTopicId === topic.id || this.state.activeTopicId === topic.id)?'active':''}`}>
                                {this.state.editingTopicId !== topic.id &&
                                <span>{topic.title}</span>}
                                {this.state.editingTopicId === topic.id &&
                                <input
                                onChange={(e) => {
                                    let title = e.target.value
                                    let w = this.state.topic
                                    w.title = title
                                    this.setState({topic:w})}
                                }
                                    
                                    value={this.state.topic.title}/>}
                                {this.state.editingTopicId === topic.id &&
                                <button onClick={() =>
                                    {
                                        console.log(this.state.topic)
                                        this.props.updateTopic(this.state.currID, this.state.topic)
                                            .then(() =>
                                                this.setState({
                                                    editingTopicId: ''
                                                })
                                            )
                                        this.forceUpdate();
                                    }
                                }>
                                    <i className="fa fa-save"></i>
                                </button>}
                                {this.state.editingTopicId === topic.id &&
                                <button onClick={
                                    () => this.props.deleteTopic(topic.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>}
                                {this.state.editingTopicId !== topic.id &&
                                <button onClick={() => {
                                    this.setState({
                                        topic: topic,
                                        currID: topic.id,
                                        editingTopicId: topic.id
                                    })
                                }}>
                                    <i className="fa fa-pencil"></i>
                                </button>}
                            </a>
                        </li>
                        )
                }
                {this.props.lessonId && <li className="nav-item">
                    <button className="float-right" onClick={
                        () => this.props.createTopic(this.props.lessonId, {title: 'New Topic'})
                    }>
                        <i className="fa fa-plus"></i>
                    </button>
                </li>}
            </ul>
        );
    }
}