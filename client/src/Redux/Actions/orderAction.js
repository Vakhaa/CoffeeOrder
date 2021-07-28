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

    CLEAN_ORDER,
    CREATE_ORDER,
    ORDER_EXISTS
}
    from './actionTypes'

import { database as db}  from '../../DAL/Firebase';
import { storage } from '../../DAL/Firebase/index';

export function cleanOrder() {
    return {
        type: CLEAN_ORDER
    }
}

export function createOrderSuccess() {
    return {
        type: CREATE_ORDER
    }
}

export function existsOrder() {
    return {
        type: ORDER_EXISTS
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

export function createOrder(userId) {
    return (dispatch) => {

        const order = db.ref('Order');
        
        order.on('value', snapOrders => {

            var userOrder = order.orderByChild("userId").equalTo(userId);

            userOrder.once('value', snap => {

                if (snap.val()) {
                    dispatch(existsOrder());
                } else {

                    let newOrder = [...snapOrders.val(), {
                            isSubmit: false,
                            userId: userId,
                        }]

                    order.set(newOrder);
                }
            });


        });

        dispatch(createOrderSuccess());
    }
}

export function getOrder(userId) {
    return async (dispatch) => {
        dispatch(requestGetOrder());

        try {
            
            const order = db.ref('Order');

            order.orderByChild("userId").equalTo(userId).on(
                'child_added', snap => {

                    let products = db.ref('Products');
                    
                    products.on('value', productsSnap => {

                        let data = {
                            ...snap.val(),
                            Products: snap.val()?.Products?.map(productOrder => (
                                productOrder = {
                                    ...productsSnap.val().find(product => productOrder?.productId === product?.id),
                                    count: productOrder.count
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
            const order = db.ref('Order');

            order.orderByChild("userId").equalTo(userId).once(
                'child_added', snap => {
                    if (snap.val()) db.ref('Order/' + snap.key).remove();
                }
            );

            dispatch(getOrder(userId));
            dispatch(receiveCancelOrder())

        } catch (error) {

            dispatch(errorCancelOrder(error));
        }
    }
}

export function submitOrder(userId, order) {
    return async (dispatch) => {
        dispatch(requestSubmitOrder());

        try {

            // convert your object into a JSON-string
            let jsonString = JSON.stringify(order);
            console.log(jsonString);
            // create a Blob from the JSON-string
            let blob = new Blob([jsonString], { type: "application/json" })

            storage.ref('orders/order ' + userId + '.json').put(blob).on('state_changed', snap => {
                console.log(snap.state);
            });

           let orderDb =  db.ref('Order');            

            orderDb.orderByChild("userId").equalTo(userId).once(
                'child_added', snap => {

                    let newOrder = {
                        ...order,
                        Products: order?.Products.map(product => (
                            product = {
                                productId: product.id,
                                count: product.count
                            })),
                        isSubmit: true
                    }

                    db.ref('Order/' + snap.key).set(newOrder);
                }
            );

            dispatch(receiveSubmitOrder())
            dispatch(getOrder(userId))
        } catch (error) {

            dispatch(errorSubmitOrder(error));
        }
    }
}

