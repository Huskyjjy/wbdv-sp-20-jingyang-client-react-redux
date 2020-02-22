import React from "react";
import {connect} from "react-redux";
import service from "../services/WidgetService";
import {findWidgetsForTopic,createWidget,updateWidget,deleteWidget,updateAllWidgets} from "../actions/widgetActions";
import WidgetComponent from '../components/CourseEditor/WidgetComponent'

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (topicId, widget) =>
        service.createWidget(topicId, widget)
            .then(actualWidget =>
                dispatch(createWidget(actualWidget))),
    findWidgetForTopic: (topicId) =>
        service.findWidgetForTopic(topicId)
            .then(widgets =>
                dispatch(findWidgetsForTopic(widgets))),
    updateWidget: (widgetId, widget) =>
        service.updateWidget(widgetId,widget)
            .then(status =>
                dispatch(updateWidget(widget))),
    deleteWidget: (widgetId) =>
        service.deleteWidget(widgetId)
            .then(status =>
                dispatch(deleteWidget(widgetId))
            ),
    updateAllWidgets: (widgets) =>
        service.updateAllWidgets(widgets)
            .then(status =>
                dispatch(updateAllWidgets(widgets))),
    moveUp: (widget) =>
        dispatch({
            type: 'MOVE_UP',
            widget: widget
        }),
    moveDown: (widget) =>
        dispatch({
            type:'MOVE_DOWN',
            widget: widget
        })
})

const WidgetContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetComponent)

export default WidgetContainer