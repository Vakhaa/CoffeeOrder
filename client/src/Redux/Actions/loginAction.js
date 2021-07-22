import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    LOGOUT_REQUEST,
    LOGOUT_RECEIVE,
    LOGOUT_ERROR
}
    from './actionTypes'

//import { profilesAPI } from '../../DAL/profile-api'

export function requestLogin() {
    return {
        type: LOGIN_REQUEST,
    }
}

export function successLogin(item) {
    return {
        type: LOGIN_SUCCESS,
        profile: item

    }
}

export function errorLogin(error) {
    return {
        type: LOGIN_ERROR,
        error: error
    }
}

export function requsetLogout() {
    return {
        type: LOGOUT_REQUEST
    }
}

export function receiveLogout() {
    return {
        type: LOGOUT_RECEIVE
    }
}

export function errorLogout() {
    return {
        type: LOGOUT_ERROR
    }
}

let profile = {
    id: 1,
    name: "Sub Zero"
}

export function login() {
    return async (dispatch) => {
        dispatch(requestLogin());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(successLogin(profile))
        } catch (error) {

            dispatch(errorLogin(error));
        }
    }
}

export function logout() {
    return async (dispatch) => {
        dispatch(requsetLogout());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveLogout())
        } catch (error) {

            dispatch(errorLogout(error));
        }
    }
}
