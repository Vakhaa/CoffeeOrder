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
} from '../Actions/actionTypes'


const initialState = {}


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_ORDER_REQUEST:
            return {
                ...state
            }
        case ADD_PRODUCT_TO_ORDER_RECEIVE:
            return {
                ...state
            }
        case ADD_PRODUCT_TO_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        case DELETE_PRODUCT_FROM_ORDER_REQUEST:
            return {
                ...state
            }
        case DELETE_PRODUCT_FROM_ORDER_RECEIVE:
            return {
                ...state
            }
        case DELETE_PRODUCT_FROM_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CHANGE_COUNT_PRODUCT_INTO_ORDER_REQUEST:
            return {
                ...state
            }
        case CHANGE_COUNT_PRODUCT_INTO_ORDER_RECEIVE:
            return {
                ...state
            }
        case CHANGE_COUNT_PRODUCT_INTO_ORDER_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
