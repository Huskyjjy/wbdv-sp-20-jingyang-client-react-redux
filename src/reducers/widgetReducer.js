import {CREATE_WIDGET, DELETE_WIDGET, FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET,UPDATE_ALL_WIDGETS} from "../actions/widgetActions"

const reorderWidgets = (widgets, from, to) =>
{
    widgets = widgets.map((widget, index) =>
    {
        switch (index)
        {
            case from:
                return widgets[to];
            case to:
                return widgets[from];
            default:
                return widget;
        }
    })
    return widgets;
}
const widgetReducer = (state = {widgets: []}, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case'MOVE_UP':
        {
            let upIndex = state.widgets.indexOf(action.widget) - 1;
            const orderedWidgets = reorderWidgets(state.widgets, upIndex + 1, upIndex)
            return {
                widgets: orderedWidgets
            }
        }
        case'MOVE_DOWN':
        {
            let downIndex = state.widgets.indexOf(action.widget) + 1;
            const orderedWidgets = reorderWidgets(state.widgets, downIndex - 1, downIndex)
            return {
                widgets: orderedWidgets
            }
        }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widgetId ? action.widget : widget
                )
            }
        case UPDATE_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer
