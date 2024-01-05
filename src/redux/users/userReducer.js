import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./userTypes";

const initialState = {
    loading: false,
    usersArray: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case GET_USERS_SUCCESS: return {
            laoding: false,
            usersArray: action.payload
        }
        default: return state
    }
}