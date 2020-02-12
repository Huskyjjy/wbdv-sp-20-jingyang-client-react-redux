import React from "react";
import {connect} from "react-redux";
import {CREATE_MODULE, createModule, DELETE_MODULE, deleteModule} from "../../actions/moduleActions";
import moduleService, {findModuleForCourse} from '../../services/ModuleService'
import ModuleListItem from './ModuleListItem'

class ModuleList extends React.Component {
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.modules.map(module =>
                        <ModuleListItem
                            key={module._id}
                            module={module}
                            deleteModule={this.props.deleteModule}/>
                    )
                }
                <li className="list-group-item">
                    <button className="float-right" onClick={
                        () => this.props.createModule(this.props.courseId)
                    }>
                        <li className="fa fa-plus"></li>
                    </button>
                </li>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                })),
        findAllModules: () =>

            fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules")
                .then(response => response.json())
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules
                    })),
        deleteModule: (moduleId) =>
            moduleService.deleteModule()
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
            fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}/modules`, {
                method: "POST",
                body: JSON.stringify({title: "New Module"}),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleList)
