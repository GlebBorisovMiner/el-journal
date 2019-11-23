import {userConstants} from '../constants'

const initialState = {
    value: null,
}

export function selectHeader(state=initialState, action) {
    switch(action.type) {
        case userConstants.SELECT_HEADER:
            return {
                ...state,
                subjectName: action.value
            }
        default:
            return state
    }
}