import { useEffect } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Order from '../Components/Order/Order';
import { cancelOrder, changeProductCountIntoOrder, deleteProductToOrder, getOrder, submitOrder } from '../Redux/Actions/orderAction';

const OrderContainer = (props) => {

    //total count

    useEffect(() => {
        props.getOrder(1);
    }, [props.products]);

    const order = () => <Order products={props.products}
        submitOrder={props.submitOrder} cancelOrder={props.cancelOrder}
        changeCount={props.changeCount} deleteProduct={props.deleteProduct} />;

    const loading = () => <>Loading</>;

    return !props.products ? loading() : order();
}

const mapStateToProps = state => {
    return {
        products: state.order.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrder: (userId) => dispatch(submitOrder(userId)),
        cancelOrder: (userId) => dispatch(cancelOrder(userId)),
        getOrder: (userId) => dispatch(getOrder(userId)),
        changeCount: (userId, productId, isIncreased) => dispatch(changeProductCountIntoOrder(userId, productId, isIncreased)),
        deleteProduct: (userId, productId) => dispatch(deleteProductToOrder(userId, productId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(OrderContainer)