import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_RECEIVE,
    GET_PRODUCTS_ERROR
}from './actionTypes'

import firebase from '../../DAL/Firebase';

const db = firebase;

let requestProducts = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

export function receiveProducts(item) {
    return {
        type: GET_PRODUCTS_RECEIVE,
        products: item
    }
}

export function errorProducts(error) {
    return {
        type: GET_PRODUCTS_ERROR,
        error: error
    }
}


export function getProducts() {
    return async (dispatch) => {
        
        dispatch(requestProducts());

        try {
            const products = db.ref('Products');

            products.on('value', (elem) => dispatch(receiveProducts(elem.val())));
            
        } catch (error) {
            dispatch(errorProducts(error));
        }
    }
}
