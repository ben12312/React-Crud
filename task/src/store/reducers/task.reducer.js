

const intialState = {
    tasks: [],
    home: '',
    filtered: []
}

const taskReducer = (state = intialState, action) => {
    switch (action.type) {
        // penamaaan CASE BASED ON REST API
        case 'TASKS/FETCH':
            return { ...state, tasks: action.payload, filtered: action.payload }
        case 'TASK/ADD':
            // CARA ADD TANPA PUSH DENGAN CARA NYELIPIN
            return { ...state, tasks: [...state.tasks, action.payload] }
        case 'TASK/FILTER':
            if (action.payload !== "All") {
                let filtered = state.tasks.filter(task => task.category.includes(action.payload))
                return { ...state, filtered: filtered }
            } else {
                return { ...state, filtered: state.tasks }
            }
        default:
            return state
    }
}

export default taskReducer