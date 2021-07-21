import {
    /*GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    GET_PROFILES_REQUEST,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_ERROR,*/
} from '../Actions/actionTypes'

const initialState = {
    currentProfileId: 0,
    profile: null,
    profiles: null,
    fetching: false
}


export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        /*case GET_PROFILE_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile,
                fetching: false
            }
        case GET_PROFILE_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }

        case GET_PROFILES_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_PROFILES_SUCCESS:
            return {
                ...state,
                profiles: profiles,
                fetching: false
            }
        case GET_PROFILES_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }*/
        default:
            return state
    }
}