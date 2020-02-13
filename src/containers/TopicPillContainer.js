import React from "react";
import {connect} from "react-redux";
import service from "../services/TopicService";
import {findTopicsForLesson, createTopic, updateTopic, deleteTopic} from "../actions/topicActions";
import TopicPillComponent from '../components/CourseEditor/TopicPillComponent'

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId, topic) =>
        service.createTopic(lessonId, topic)
            .then(actualTopic =>
                dispatch(createTopic(actualTopic))),
    findTopicsForLesson: (lessonId) =>
        service.findTopicForLesson(lessonId)
            .then(topics =>
                dispatch(findTopicsForLesson(topics))),
    updateTopic: async (topicId, topic) => {
        const actualTopic = await service.updateTopic(topicId,topic)
        dispatch(updateTopic(actualTopic))
    },
    deleteTopic: (topicId) =>
        service.deleteTopic(topicId)
            .then(status => 
                dispatch(deleteTopic(topicId))
            )
})

const TopicPillContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillComponent)

export default TopicPillContainer