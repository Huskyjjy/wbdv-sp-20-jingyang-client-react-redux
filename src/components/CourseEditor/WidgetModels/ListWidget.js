import React from "react";
import "../../../css/style.css"

export default class ListWidget extends React.Component{
    state = {
        widget: this.props.widget,
        mode: 1
    }
    render() {
        return (
            <div>
                {this.props.previewmode === 0 &&
                <div>
                    <h1 className="inner"><span className="badge badge-secondary">List Widget</span></h1>
                    <div className="inner">
                        <select onChange={(event) => {
                            let type = event.target.value;
                            let w = this.state.widget;
                            w.type = type;
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
                    <textarea id="form7" className="md-textarea form-control" rows="3" defaultValue={"List text"}
                              onChange={(e)=>{
                                  let text = e.target.value;
                                  let w = this.state.widget;
                                  w.text = text;
                                  this.props.updateWidget(this.props.widget.id,w)
                              }}>
                    </textarea>
                </div>}
                {this.props.previewmode === 0 &&
                <div>
                    <select
                        className="browser-default custom-select"
                        onChange={(e) => {
                            let m = e.target.value
                            m = parseInt(m)
                            this.setState({mode:m})
                        }}
                        value={this.state.mode}>
                        <option value={1}>Unordered List</option>
                        <option value={2}>Ordered List</option>
                    </select>
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
                {this.state.mode === 1 &&
                    <ul>{
                    this.props.widget.text.split('\n').map((list,index) =>
                        <li key={index}>
                            {list}
                        </li>
                    )}
                    </ul>
                }
                {
                    this.state.mode === 2 &&
                        <ol>
                            {
                                this.props.widget.text.split('\n').map((list,index) =>
                                    <li key={index}>
                                        {list}
                                    </li>
                                )
                            }
                        </ol>
                }
                {/*
Here I "remembered" the textarea and assigned it to the server side as a property of the widget. Due to my comprehension
of requirements, I used widget.txt from the server side to be the default content of the preview section.
*/}
                <hr/>
            </div>
        )
    }
}