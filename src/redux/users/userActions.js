import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./userTypes";
import axios from 'axios'

export const getUsersRequest = () => {
    return {
        type: GET_USERS_REQUEST
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const getUsersThunkFunction = () => {
    return (dispatch) => {
        dispatch(getUsersRequest())
        return axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                dispatch(getUsersSuccess(res.data))
            }
        )
    }
}