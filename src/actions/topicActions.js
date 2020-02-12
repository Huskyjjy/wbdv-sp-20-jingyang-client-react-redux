export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const findtopicsForLesson = (topics) => ({
    topics: topics,
    type: FIND_TOPICS_FOR_LESSON
})
export const CREATE_TOPIC = "CREATE_TOPIC"
export const deletetopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const DELETE_TOPIC = "DELETE_TOPIC"
export const createtopic = (topic) => ({
    type: CREATE_TOPIC,
    newtopic: topic
})
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const updatetopic = (topic) => ({
    type: UPDATE_TOPIC,
    topicId: topic._id,
    topic: topic
})