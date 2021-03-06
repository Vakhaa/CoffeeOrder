import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    LOGOUT_REQUEST,
    LOGOUT_RECEIVE,
    LOGOUT_ERROR,

}
    from './actionTypes'

import firebase from 'firebase/app';
import "firebase/auth";
import { cleanOrder, createOrder } from './orderAction';

var provider = new firebase.auth.GoogleAuthProvider();


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

export function login() {
    return async (dispatch) => {
        dispatch(requestLogin());

        try {
            
            let response = await firebase.auth().signInWithPopup(provider);

            dispatch(createOrder(response.additionalUserInfo.profile.id));

            dispatch(successLogin(response.additionalUserInfo.profile))

        } catch (error) {

            dispatch(errorLogin(error));
        }
    }
}

export function logout() {
    return async (dispatch) => {
        dispatch(requsetLogout());

        try {
            firebase.auth().signOut();

            dispatch(cleanOrder());
            dispatch(receiveLogout());
        } catch (error) {

            dispatch(errorLogout(error));
        }
    }
}
