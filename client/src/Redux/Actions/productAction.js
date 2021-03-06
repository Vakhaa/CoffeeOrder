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

import { database as db } from '../../DAL/Firebase';
import { getOrder } from './orderAction';

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

            let newProduct = {
                productId: productId,
                count: 1
            }
            
            order.orderByChild("userId").equalTo(userId).once(
                'child_added', snap => {
                    
                    let products = db.ref('Order/' + snap.key + '/Products');

                    products.once('value', snapProducts => {

                        let newProducts = snapProducts.val() ? [...snapProducts.val(), newProduct] : [newProduct];

                        db.ref('Order/' + snap.key).child('Products').set(newProducts);
                    });
                }
            );

            dispatch(receiveAddProduct());
            dispatch(getOrder(userId));
        } catch (error) {

            dispatch(errorAddProduct(error));
        }
    }
}

export function deleteProduct(userId, productId) {
    return async (dispatch) => {
        dispatch(requestDeleteProduct());

        try {
            const order = db.ref('Order');
            
            order.orderByChild("userId").equalTo(userId).once(
                'child_added', snap => {
                    
                    let products = db.ref('Order/' + snap.key + '/Products');

                    products.once('value', snapProducts => {

                        let newProducts = snapProducts.val()?.filter(item => item.productId !== productId);

                        db.ref('Order/' + snap.key + '/Products').set(newProducts);
                    });
                }
            );

            dispatch(deleteProduct());
            dispatch(getOrder(userId));
        } catch (error) {

            dispatch(errorDeleteProduct(error));
        }
    }
}

export function changeProductCountIntoOrder(userId, productId, isIncreased) {
    return async (dispatch) => {
        dispatch(requestChangeProductCount());

        try {
            const order = db.ref('Order');

            order.orderByChild("userId").equalTo(userId).on(
                'child_added', snap => {

                    let products = db.ref('Order/' + snap.key + '/Products')

                    products.once('value', snapProducts => {

                        let oldProducts = snapProducts.val();

                        if (oldProducts) {
                            let currentProduct = oldProducts?.filter(item => item.productId === productId);

                            if ((currentProduct ? currentProduct[0].count === 1 : false) && !isIncreased) { //remove product if hes count could be less then 1

                                let updateProducts = snapProducts.val()?.filter(item => item.productId !== productId);

                                db.ref('Order/' + snap.key).child('Products').set(updateProducts);
                            }
                            else { // change count
                                let updateProducts = oldProducts.map(product => (
                                    product.productId === productId ? product = {
                                        ...product,
                                        count: isIncreased ? ++product.count : --product.count
                                    } : product
                                ))

                                db.ref('Order/' + snap.key + '/Products').set(updateProducts);
                            }

                            dispatch(receiveChangeProductCount());
                        } else {
                            dispatch(errorChangeProductCount());
                        }
                    });
                }
            );

            dispatch(getOrder(userId));
        } catch (error) {

            dispatch(errorChangeProductCount(error));
        }
    }
}

