import React from "react";
import Widget from "./WidgetModels/Widget";
export default class WidgetComponent extends React.Component{
    //We have this.props.topicId={topicId}, lessonId={lessonId}, moduleId={moduleId} courseId={courseId} history={history}
    //this.props.widgets from stateToPropertyMapper
    //this.props.createWidget(topicId, widget), findWidgetForTopic(topicId), updateWidget(widgetId, widget), deleteWidget(widgetId)
    componentDidMount() {
        console.log(this.props.topicId)
        this.props.findWidgetForTopic(this.props.topicId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId || prevState !== this.state){
            this.props.findWidgetForTopic(this.props.topicId)
        }
    }
    state = {
        previewmode: 0
    }
    render() {
        return(
            <div>
                {
                    this.props.topicId &&
                        <div>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                console.log(this.props.widgets)
                                this.props.updateAllWidgets(this.props.widgets)
                            }
                            }>
                            Save
                        </button>
                            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                    autoComplete="off"
                                    onClick={()=>{
                                        this.setState(prevState => ({
                                            previewmode: 1-prevState.previewmode
                                        }))
                                    }}>
                                Preview
                            </button>
                        </div>

                }
                {
                    this.props.topicId && this.props.widgets && this.props.widgets.map((widget, index) =>

                        <div key={widget.id}>

                            <Widget
                                index={index}
                                size={this.props.widgets.length}
                                deleteWidget={this.props.deleteWidget}
                                updateWidget={this.props.updateWidget}
                                widget={widget}
                                previewmode={this.state.previewmode}
                                moveUp={this.props.moveUp}
                                moveDown={this.props.moveDown}
                                />

                        </div>
                    )

                }
                {this.props.topicId &&
                <button className="btn btn-primary"
                    onClick={() => {
                    this.props.createWidget(this.props.topicId, {name: "New Widget"})
                }}>
                <i className="fa fa-plus"></i>
                </button>}
            </div>
        )
    }
}