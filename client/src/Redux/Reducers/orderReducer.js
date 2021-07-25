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
    CLEAN_ORDER
} from '../Actions/actionTypes'


const initialState = []


export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAN_ORDER:
            return {
                order: null
            }
        case GET_ORDER_REQUEST:
            return {
                ...state
            }
        case GET_ORDER_RECEIVE:
            return {
                ...state,
                order: action.order
            }
        case GET_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CANCEL_ORDER_REQUEST:
            return {
                ...state
            }
        case CANCEL_ORDER_RECEIVE:
            return {
                ...state
            }
        case CANCEL_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SUBMIT_ORDER_REQUEST:
            return {
                ...state
            }
        case SUBMIT_ORDER_RECEIVE:
            return {
                ...state
            }
        case SUBMIT_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
