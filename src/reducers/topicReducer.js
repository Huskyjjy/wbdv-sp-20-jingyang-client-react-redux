import {CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from '../actions/topicActions'


const topicReducer = (state = {topics: []}, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case "FIND_TOPICS_FOR_LESSON":
            return {
                topics: action.topics
            }
        case "FIND_ALL_TOPICS":
            return {
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic =>
                    topic._id === action.topicId ? action.topic : topic
                )
            }
        default:
            return state
    }
}

export default topicReducer
