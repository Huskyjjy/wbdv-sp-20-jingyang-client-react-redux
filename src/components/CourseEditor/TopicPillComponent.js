import React from "react";
import {connect} from "react-redux";
import service from "../../services/TopicService"

export default class TopicPillComponent extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
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
                                    console.log(topic._id)
                                    const topicId = topic._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`)
                                    this.setState({
                                        activeTopicId: topic._id
                                    })
                                }
                            }
                            key={topic._id}
                            >
                            <a className={`nav-item
                                            ${(this.state.editingTopicId === topic._id || this.state.activeTopicId === topic._id)?'active':''}`}>
                                {this.state.editingTopicId !== topic._id &&
                                <span>{topic.title}</span>}
                                {this.state.editingTopicId === topic._id &&
                                <input
                                onChange={(e) =>
                                    this.setState({topic:{title: e.target.value}})
                                }
                                    
                                    value={this.state.topic.title}/>}
                                {this.state.editingTopicId === topic._id && 
                                <button onClick={() =>
                                    {
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
                                {this.state.editingTopicId === topic._id && 
                                <button onClick={
                                    () => this.props.deleteTopic(topic._id)}>
                                    <i className="fa fa-trash"></i>
                                </button>}
                                {this.state.editingTopicId !== topic._id && 
                                <button onClick={() => {
                                    this.setState({
                                        topic: topic,
                                        currID: topic._id,
                                        editingTopicId: topic._id
                                    })
                                }}>
                                    <i className="fa fa-pencil"></i>
                                </button>}
                            </a>
                        </li>
                        )
                }
                <li className="nav-item">
                    <button className="float-right" onClick={
                        () => this.props.createTopic(this.props.lessonId, {title: 'New Topic'})
                    }>
                        <li className="fa fa-plus"></li>
                    </button>
                </li>
            </ul>
        );
    }
}