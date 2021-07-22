import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_RECEIVE,
    GET_PRODUCTS_ERROR
} from '../Actions/actionTypes'


const initialState =[]


export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state
            }
        case GET_PRODUCTS_RECEIVE:
            return {
                ...state,
                products: action.products
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}