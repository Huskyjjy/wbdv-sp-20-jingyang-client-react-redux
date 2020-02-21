import {TOPICS_WIDGETS_API_URL, WIDGETS_API_URL} from "../common/constants";

export const findWidgetForTopic = (topicId) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
        .then(response => response.json())
//Return a list of widgets as response

export const createWidget = (topicId, widget) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId), {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
//Return a created widget as response.

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
//Return an integer, 1 for success and 0 for failure.

export const updateWidget = async (widgetId, widget) =>
{
    const response = await fetch(`${WIDGETS_API_URL}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}
//Return an integer, 1 for success and 0 for failure.

export const findWidget = async (widgetId) => {
    const response = await fetch(`${WIDGETS_API_URL}/${widgetId}`)
    return await response.json()
}

export default {
    createWidget,
    deleteWidget,
    findWidgetForTopic,
    updateWidget
}