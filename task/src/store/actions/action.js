const dbLink = 'http://localhost:3001/tasks'

// KALO PAKE THUNK KITA FETCH DI COMPONEN MAKA TIDAK ADA GUNA PAKE THUNK
export const fetchTask = () => {
    return (dispatch) => {
        fetch(dbLink, { method: "GET" })
            .then(response => response.json())
            .then(tasks => {
                return dispatch({
                    type: "TASKS/FETCH",
                    payload: tasks
                })
            })
    }
}

export const deleteTask = (taskId) => {
    return (dispatch) => {
        fetch(dbLink + `/${taskId}`, { method: "DELETE" })
            .then(response => response.json())
            .then(tasks => {
                return dispatch(fetchTask())
            })
    }
}

export const addTask = (payload) => {
    return (dispatch) => {
        fetch(dbLink, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(task => {
                return dispatch({
                    type: 'TASK/ADD',
                    payload: task
                })
            })
    }
}

export const filterTask = (payload) => {
    return (dispatch) => {
        return dispatch({
            type: 'TASK/FILTER',
            payload
        })
    }
}