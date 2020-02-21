export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"
export const findWidgetsForTopic = (widgets) => ({
    widgets: widgets,
    type: FIND_WIDGETS_FOR_TOPIC
})
export const CREATE_WIDGET = "CREATE_WIDGET"
export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const DELETE_WIDGET = "DELETE_WIDGET"
export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
})
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    widgetId: widget._id,
    widget: widget
})