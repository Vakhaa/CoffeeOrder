import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import productsReducer   from './productsReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    order: orderReducer,
    login: loginReducer,
});

export default rootReducer;