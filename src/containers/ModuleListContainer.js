import React from "react";
import {connect} from "react-redux";
import service from "../services/ModuleService";
import {findModulesForCourse, createModule, updateModule, deleteModule} from "../actions/moduleActions";
import ModuleListComponent from '../components/CourseEditor/ModuleListComponent'

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        service.createModule(courseId, module)
            .then(actualModule =>
                dispatch(createModule(actualModule))),
    findModulesForCourse: (courseId) =>
        service.findModuleForCourse(courseId)
            .then(modules =>
                dispatch(findModulesForCourse(modules))),
    updateModule: async (moduleId, module) => {
        const actualModule = await service.updateModule(moduleId,module)
        dispatch(updateModule(actualModule))
    },
    deleteModule: (moduleId) =>
        service.deleteModule(moduleId)
            .then(status => 
                dispatch(deleteModule(moduleId))
            )
})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer