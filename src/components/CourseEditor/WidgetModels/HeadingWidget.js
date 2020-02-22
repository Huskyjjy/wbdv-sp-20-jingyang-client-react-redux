import React from "react";
import "../../../css/style.css"
export default class Widget extends React.Component{

    state = {
        widget: this.props.widget,
    }
    render() {
        return(
            <div>
                {this.props.previewmode === 0 &&
                <div>
                    {
                        this.state.widget.size === 1 &&
                        <h1 className="inner"><span className="badge badge-secondary">Heading Widget</span></h1>
                    }
                    {
                        this.state.widget.size === 2 &&
                        <h2 className="inner"><span className="badge badge-secondary">Heading Widget</span></h2>
                    }
                    {
                        this.state.widget.size === 3 &&
                        <h3 className="inner"><span className="badge badge-secondary">Heading Widget</span></h3>
                    }
                    {
                        this.state.widget.size === 4 &&
                        <h4 className="inner"><span className="badge badge-secondary">Heading Widget</span></h4>
                    }
                    {
                        this.state.widget.size === 5 &&
                        <h5 className="inner"><span className="badge badge-secondary">Heading Widget</span></h5>
                    }
                    {
                        this.state.widget.size === 6 &&
                        <h6 className="inner"><span className="badge badge-secondary">Heading Widget</span></h6>
                    }
                    <div className="inner">
                    {this.props.index !== 0 &&
                    <button className="btn btn-primary"
                        onClick={() => this.props.moveUp(this.props.widget)}>
                        <i className="fa fa-arrow-up"></i>
                    </button>}
                    {this.props.index !== this.props.size-1 &&
                    <button className="btn btn-primary"
                        onClick={() => this.props.moveDown(this.props.widget)}>
                        <i className="fa fa-arrow-down"></i>
                    </button>
                    }
                    <select
                        onChange={(event) => {
                            let type = event.target.value
                            let w = this.state.widget
                            w.type = type
                            this.props.updateWidget(this.props.widget.id, w)}
                        }
                        value={this.state.widget.type}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>

                    </select>
                    <button className="btn btn-primary"
                        onClick={()=>this.props.deleteWidget(this.props.widget.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    </div>
                </div>}
                {this.props.previewmode === 0 &&
                <div>
                    <input type="text" className="form-control" placeholder="Heading text" aria-label="Heading text"
                           aria-describedby="basic-addon1"
                        onChange={(e)=>{
                            let context = e.target.value
                            let w = this.state.widget
                            w.text = context
                            this.props.updateWidget(this.props.widget.id,w)
                        }}/>
                </div>}
                {this.props.previewmode === 0 &&
                <div>
                    <select
                        className="browser-default custom-select"
                        onChange={(e) => {
                        let newsize = e.target.value
                        newsize = parseInt(newsize)
                        let w = this.state.widget
                        w.size = newsize
                        this.setState(prevState => ({
                            widget: {
                                ...prevState.widget,
                                size: newsize
                            }
                        }))
                        this.props.updateWidget(this.props.widget.id,w)
                    }}
                        value={this.state.widget.size}>
                        <option value={1}>Heading1</option>
                        <option value={2}>Heading2</option>
                        <option value={3}>Heading3</option>
                        <option value={4}>Heading4</option>
                        <option value={5}>Heading5</option>
                        <option value={6}>Heading6</option>
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
                <div>
                    <h1>{this.props.widget.text}</h1>
                </div>
{/*
Here I "remembered" the input field and assigned it to the server side as a property of the widget. Due to my comprehension
of requirements, I used widget.txt from the server side to be the default content of the preview section.
*/}
                <hr/>
            </div>
        )
    }
}