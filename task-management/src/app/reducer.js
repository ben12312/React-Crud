import { SHOWTASK } from './action'

const initialState = {
    tasks: []
}

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case SHOWTASK:
            return { ...state, tasks: action.payload }
        default:
            return state
    }
}