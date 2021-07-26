import {
    ADD_PRODUCT_TO_ORDER_REQUEST,
    ADD_PRODUCT_TO_ORDER_RECEIVE,
    ADD_PRODUCT_TO_ORDER_ERROR,

    DELETE_PRODUCT_FROM_ORDER_REQUEST,
    DELETE_PRODUCT_FROM_ORDER_RECEIVE,
    DELETE_PRODUCT_FROM_ORDER_ERROR,

    CHANGE_COUNT_PRODUCT_INTO_ORDER_REQUEST,
    CHANGE_COUNT_PRODUCT_INTO_ORDER_RECEIVE,
    CHANGE_COUNT_PRODUCT_INTO_ORDER_ERROR
} from './actionTypes'

import firebase from '../../DAL/Firebase';

const db = firebase;


export function requestAddProduct() {
    return {
        type: ADD_PRODUCT_TO_ORDER_REQUEST,
    }
}

export function receiveAddProduct() {
    return {
        type: ADD_PRODUCT_TO_ORDER_RECEIVE
    }
}

export function errorAddProduct(error) {
    return {
        type: ADD_PRODUCT_TO_ORDER_ERROR,
        error: error
    }
}

export function requestDeleteProduct() {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_REQUEST
    }
}

export function receiveDeleteProduct() {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_RECEIVE
    }
}

export function errorDeleteProduct(error) {
    return {
        type: DELETE_PRODUCT_FROM_ORDER_ERROR,
        error: error
    }
}


export function requestChangeProductCount() {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_REQUEST
    }
}

export function receiveChangeProductCount() {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_RECEIVE
    }
}

export function errorChangeProductCount(error) {
    return {
        type: CHANGE_COUNT_PRODUCT_INTO_ORDER_ERROR,
        error: error
    }   
}


export function addProduct(userId, productId) {
    return async (dispatch) => {
        dispatch(requestAddProduct());

        try {

            const order = db.ref('Order');

            order.orderByChild("userId").equalTo(userId).push(product)

            let product = {
                productId: productId,
                count: 1
            }

            db.ref('Order/Products/').push(product);   

            dispatch(receiveAddProduct());
        } catch (error) {

            dispatch(errorAddProduct(error));
        }
    }
}

export function deleteProduct(userId, productId) {
    return async (dispatch) => {
        dispatch(requestDeleteProduct());

        try {
            //let response = await profilesAPI.getProfile(id);

            //dispatch(receiveAddProduct())
        } catch (error) {

            dispatch(errorDeleteProduct(error));
        }
    }
}

export function changeProductCountIntoOrder(userId, productId, isIncreased) {
    return async (dispatch) => {
        dispatch(requestChangeProductCount());

        try {
            //let response = await profilesAPI.getProfile(id);

            dispatch(receiveChangeProductCount())
        } catch (error) {

            dispatch(errorChangeProductCount(error));
        }
    }
}

