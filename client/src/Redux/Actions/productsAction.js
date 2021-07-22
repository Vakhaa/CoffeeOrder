import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_RECEIVE,
    GET_PRODUCTS_ERROR
}from './actionTypes'

//import { profilesAPI } from '../../DAL/profile-api'

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

let products = [
    {
        id: 1,
        name: "Americano",
        price: 19
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 20
    },
    {
        id: 3,
        name: "Espresso",
        price: 25
    }
]


export function getProducts() {
    return async (dispatch) => {
        
        dispatch(requestProducts());

        try {
            //let response = await profilesAPI.getProfile(id);
            
            //dispatch(receiveProducts(response.data))
            dispatch(receiveProducts(products))
        } catch (error) {
            dispatch(errorProducts(error));
        }
    }
}
