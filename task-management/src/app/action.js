export const SHOWTASK = 'task/getTaskByCategory'

export function reassignTask(payload) {
    return { type: SHOWTASK, payload }
}