import React from "react";
import {connect} from 'react-redux'
import service from "../../services/ModuleService";
import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../../common/constants";

class ModuleListItem extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        editing: this.props.editing,
        active: this.props.active,
        module: this.props.module,
        currID: this.props.module._id
    }
    render(){
    return(
    <li className={`list-group-item ${this.state.active ? 'active':''}`} onClick={() => this.props.select(this.state.currID)}>
        <span>
        {!this.state.editing && <label>{this.state.module.title}</label>}
        {this.state.editing &&
            <input onChange={(e) => this.props.setState({
                module: {
                    title: e.target.value
                }
            })}
            value={this.props.state.module.title}/>
        }
        </span>
        {this.state.editing && 
        <span>
        <button className="float-right" onClick={
            () => this.props.deleteModule(module._id)
        }>
            <i className="fa fa-trash"></i>
        </button>
        <button onClick={this.props.save}>
            <i className="fa fa-save"></i>
        </button>
        </span>}
        {!this.state.editing && <button onClick={this.props.edit}>
            <i className="fa fa-pencil"></i>
        </button>}
    </li>
    );}
}
const stateToPropertyMapper = (state) => ({})
const dispatchToPropertyMapper = (dispatch) => ({
    deleteModule: (moduleId) => {
        service.deleteModule(moduleId)
            .then(status => dispatch({
                type: 'DELETE_MODULE',
                moduleId: moduleId
            }))
    }
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItem)
