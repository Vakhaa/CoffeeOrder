import {
    ADD_PRODUCT_TO_ORDER_REQUEST,
    ADD_PRODUCT_TO_ORDER_RECEIVE,
    ADD_PRODUCT_TO_ORDER_ERROR,

    DELETE_PRODUCT_FROM_ORDER_REQUEST,
    DELETE_PRODUCT_FROM_ORDER_RECEIVE,
    DELETE_PRODUCT_FROM_ORDER_ERROR,

    CHANGE_COUNT_PRODUCT_INTO_ORDER_REQUEST,
    CHANGE_COUNT_PRODUCT_INTO_ORDER_RECEIVE,
    CHANGE_COUNT_PRODUCT_INTO_ORDER_ERROR,

    GET_ORDER_REQUEST,
    GET_ORDER_RECEIVE,
    GET_ORDER_ERROR,

    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_RECEIVE,
    CANCEL_ORDER_ERROR,

    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_RECEIVE,
    SUBMIT_ORDER_ERROR
}
    from './actionTypes'

//import { profilesAPI } from '../../DAL/profile-api'

let productsOrderMock = [
    {
        id: 1,
        name: "Americano",
        price: 19,
        count: 1
    },
    {
        id: 3,
        name: "Espresso",
        price: 25,
        count: 1
    }
]

export function requestAddProductToOrder() {
    return {
        type: ADD_PRODUCT_TO_ORDER_REQUEST,
    }
}

export function receiveAddProductToOrder() {
    return {
        type: ADD_PRODUCT_TO_ORDER_RECEIVE
    }
}

export function errorAddProductToOrder(error) {
    return {
        type: ADD_PRODUCT_TO_ORDER_ERROR,
        error: error
    }
}

export function requestDeleteProductFromOrder() {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_REQUEST,
    }
}

export function receiveDeleteProductFromOrder() {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_RECEIVE
    }
}

export function errorDeleteProductFromOrder(error) {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_ERROR,
        error: error
    }
}

export function requestChangeProductCountIntoOrder() {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_REQUEST,
    }
}

export function receiveChangeProductCountIntoOrder() {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_RECEIVE,
    }
}

export function errorChangeProductCountIntoOrder(error) {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_ERROR,
        error : error
    }
}

export function requestGetOrder() {
    return {
        type: GET_ORDER_REQUEST,
    }
}

export function receiveGetOrder(item) {
    return {
        type: GET_ORDER_RECEIVE,
        order: item 
    }
}

export function errorGetOrder(error) {
    return {
        type: GET_ORDER_ERROR,
        error: error
    }
}

export function requestCancelOrder() {
    return {
        type: CANCEL_ORDER_REQUEST,
    }
}

export function receiveCancelOrder() {
    return {
        type: CANCEL_ORDER_RECEIVE
    }
}

export function errorCancelOrder(error) {
    return {
        type: CANCEL_ORDER_ERROR,
        error: error
    }
}

export function requestSubmitOrder() {
    return {
        type: SUBMIT_ORDER_REQUEST,
    }
}

export function receiveSubmitOrder() {
    return {
        type: SUBMIT_ORDER_RECEIVE
    }
}

export function errorSubmitOrder(error) {
    return {
        type: SUBMIT_ORDER_ERROR,
        error: error
    }
}



export function addProductToOrder() {
    return async (dispatch) => {
        dispatch(requestAddProductToOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveAddProductToOrder())
        } catch (error) {

            dispatch(errorAddProductToOrder(error));
        }
    }
}

export function deleteProductToOrder(userId, productId) {
    return async (dispatch) => {
        dispatch(requestDeleteProductFromOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveDeleteProductFromOrder())
        } catch (error) {

            dispatch(errorDeleteProductFromOrder(error));
        }
    }
}

export function changeProductCountIntoOrder(userId, productId, isIncreased) {
    return async (dispatch) => {
        dispatch(requestChangeProductCountIntoOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveChangeProductCountIntoOrder())
        } catch (error) {

            dispatch(errorChangeProductCountIntoOrder(error));
        }
    }
}

export function getOrder(userId) {
    return async (dispatch) => {
        dispatch(requestGetOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveGetOrder(productsOrderMock))
        } catch (error) {

            dispatch(errorGetOrder(error));
        }
    }
}

export function cancelOrder(userId) {
    return async (dispatch) => {
        dispatch(requestCancelOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveCancelOrder())
        } catch (error) {

            dispatch(errorCancelOrder(error));
        }
    }
}

export function submitOrder(userId) {
    return async (dispatch) => {
        dispatch(requestSubmitOrder());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveSubmitOrder())
        } catch (error) {

            dispatch(errorSubmitOrder(error));
        }
    }
}

