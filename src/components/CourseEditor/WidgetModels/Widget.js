import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
export default class Widget extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                        <HeadingWidget
                            index={this.props.index}
                            size={this.props.size}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            widget={this.props.widget}
                            previewmode={this.props.previewmode}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}
                            />

                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                        <ParagraphWidget
                            index={this.props.index}
                            size={this.props.size}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            widget={this.props.widget}
                            previewmode={this.props.previewmode}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}
                            />
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidget
                        index={this.props.index}
                        size={this.props.size}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        widget={this.props.widget}
                        previewmode={this.props.previewmode}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                    />
                }
                {
                    this.props.widget.type === "IMAGE" &&
                    <ImageWidget
                        index={this.props.index}
                        size={this.props.size}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        widget={this.props.widget}
                        previewmode={this.props.previewmode}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}
                    />
                }

            </div>
        )
    }
}