import React from "react";
import {connect} from "react-redux";
import service from "../services/WidgetService";
import {findWidgetsForTopic,createWidget,updateWidget,deleteWidget} from "../actions/widgetActions";
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
            )
})

const WidgetContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetComponent)

export default WidgetContainer