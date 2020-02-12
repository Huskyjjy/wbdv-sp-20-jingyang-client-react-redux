export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001051733/courses/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001051733/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    deleteModule,
    findModuleForCourse
}
