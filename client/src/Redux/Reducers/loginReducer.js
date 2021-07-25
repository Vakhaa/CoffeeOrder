import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    LOGOUT_REQUEST,
    LOGOUT_RECEIVE,
    LOGOUT_ERROR,
} from '../Actions/actionTypes'


const initialState = {}


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            }
        case LOGOUT_REQUEST:
            return {
                ...state
            }
        case LOGOUT_RECEIVE:
            return {
                profile: null
            }
        case LOGOUT_ERROR:
            return {
                error: action.error
            }
        default:
            return state
    }
}