import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants";

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001051733/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const createLesson = (moduleId, lesson) =>
    fetch(MODULES_LESSONS_API_URL(moduleId), {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateLesson = async (lessonId, lesson) =>
{
    const response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        return await response.json()
}
export const deleteLesson = async (lessonId) =>
{
    const response = fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'DELETE'
    })
    return await response.json()
}
export default {
    findLessonsForModule, createLesson, updateLesson
}