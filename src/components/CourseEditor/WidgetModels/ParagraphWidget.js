import React from "react";
import "../../../css/style.css"
export default class ParagraphWidget extends React.Component{
    state = {
        widget: this.props.widget,
        context: "Paragraph text"
    }
    render() {
        return (
            <div>
                {this.props.previewmode === 0 &&
                <div>
                    <h1 className="inner"><span className="badge badge-secondary">Paragraph Widget</span></h1>
                    <div className="inner">
                    <select onChange={(event) => {
                                let type = event.target.value
                                let w = this.state.widget
                                w.type = type
                                this.props.updateWidget(this.props.widget.id, w)}
                            }
                            value={this.state.widget.type}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                    {this.props.index !== 0 &&
                    <button className="btn btn-primary"
                        onClick={() => this.props.moveUp(this.props.widget)}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
                    }
                    {this.props.index !== this.props.size-1 &&
                        <button className="btn btn-primary"
                            onClick={() => this.props.moveDown(this.props.widget)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                    }
                    <button className="btn btn-primary"
                        onClick={()=>this.props.deleteWidget(this.props.widget.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    </div>
                </div>}
                {this.props.previewmode === 0 &&
                <div className="md-form">
                    <textarea id="form7" className="md-textarea form-control" rows="3" defaultValue={"Paragraph text"}
                              onChange={(e)=>{
                                  let context = e.target.value
                                  let w = this.state.widget
                                  w.text = context
                                  this.props.updateWidget(this.props.widget.id,w)
                              }}>
                    </textarea>
                </div>}
                {this.props.previewmode === 0 &&
                <div>
                    <input type="text" className="form-control" placeholder={this.state.widget.name} aria-label="Heading text"
                           aria-describedby="basic-addon1"/>
                </div>}
                {this.props.previewmode === 0 &&
                <div>
                    <label className="font-weight-bold">Preview</label>
                </div>}
                <div>
                    <h1>{this.props.widget.text}</h1>
                </div>

{/*
Here I "remembered" the textarea and assigned it to the server side as a property of the widget. Due to my comprehension
of requirements, I used widget.txt from the server side to be the default content of the preview section.
*/}
                <hr/>
            </div>
        )
    }
}