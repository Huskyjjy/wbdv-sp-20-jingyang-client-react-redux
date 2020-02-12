import React from "react";

const ModuleListItem = ({module, deleteModule}) =>
    <li className="list-group-item">
        {module.title}
        <button className="float-right" onClick={
            () => deleteModule(module._id)
        }>
            <i className="fa fa-trash"></i>
        </button>
    </li>

export default ModuleListItem
