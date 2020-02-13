import React from "react";
import {connect} from "react-redux";
import service from "../../services/ModuleService"

export default class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        this.props.findModulesForCourse(this.props.courseId)
    }
    state = {
        activeModuleId: this.props.moduleId,
        editingModuleId: '',
        module: {title: ''},
        currID: ''
    }
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <li className={`list-group-item`}
                            onClick={
                                () => {
                                    const moduleId = module._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                    this.setState({
                                        activeModuleId: module._id
                                    })
                                }
                            }
                            key={module._id}>
                            <a className={`list-group-item
                                            ${(this.state.editingModuleId === module._id || this.state.activeModuleId === module._id)?'active':''}`}>
                                {this.state.editingModuleId !== module._id &&
                                <span>{module.title}</span>}
                                {this.state.editingModuleId === module._id &&
                                <input
                                onChange={(e) =>
                                    this.setState({module:{title: e.target.value}})
                                }
                                    
                                    value={this.state.module.title}/>}
                                {this.state.editingModuleId === module._id && 
                                <button onClick={() =>
                                    {
                                        this.props.updateModule(this.state.currID, this.state.module)
                                            .then(() =>
                                                this.setState({
                                                    editingModuleId: ''
                                                })
                                            )
                                        this.forceUpdate();
                                    }
                                }>
                                    <i className="fa fa-save"></i>
                                </button>}
                                {this.state.editingModuleId === module._id && 
                                <button onClick={
                                    () => this.props.deleteModule(module._id)}>
                                    <i className="fa fa-trash"></i>
                                </button>}
                                {this.state.editingModuleId !== module._id && 
                                <button onClick={() => {
                                    const moduleId = module._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                    this.setState({
                                        module: module,
                                        currID: module._id,
                                        editingModuleId: module._id
                                    })
                                }}>
                                    <i className="fa fa-pencil"></i>
                                </button>}
                            </a>
                        </li>
                        )
                }
                <li className="list-group-item">
                    <button className="float-right" onClick={
                        () => this.props.createModule(this.props.courseId, {title: 'New Module'})
                    }>
                        <li className="fa fa-plus"></li>
                    </button>
                </li>
            </ul>
        );
    }
}

