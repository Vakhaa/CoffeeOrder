import {
    GET_ORDER_REQUEST,
    GET_ORDER_RECEIVE,
    GET_ORDER_ERROR,

    CANCEL_ORDER_REQUEST,
    CANCEL_ORDER_RECEIVE,
    CANCEL_ORDER_ERROR,

    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_RECEIVE,
    SUBMIT_ORDER_ERROR,
}
    from './actionTypes'

import firebase from '../../DAL/Firebase';

const db = firebase;

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

export function getOrder(userId) {
    return async (dispatch) => {
        dispatch(requestGetOrder());

        try {
            //let handlesOrder = [];
            
            const order = db.ref('Order');

            order.orderByChild("userId").equalTo(userId).on(
                'child_added', snap => {

                    //handlesOrder.push(snap.val());
                    let product = db.ref('Products/' + snap.key);
                    product.once('value').then(productSnap => {
                        /*let response = handlesOrder.map(order => {
                            return {
                                ...order,
                                Products: [productSnap.val()]
                            }
                        })*/
                        let data = {
                            ...snap.val(),
                            Products: [productSnap.val()].map(product => (
                                product = {
                                    ...product,
                                    count: snap.val().Products[Object.keys(snap.val().Products).find(productId => product.id == productId)]
                                }
                            ))
                        }
                        dispatch(receiveGetOrder(data));
                    })

                }
            );
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

