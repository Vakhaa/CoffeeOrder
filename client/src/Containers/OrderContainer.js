import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Order from '../Components/Order/Order';
import { cancelOrder,  getOrder, submitOrder } from '../Redux/Actions/orderAction';
import { changeProductCountIntoOrder, deleteProduct} from '../Redux/Actions/productAction';

const OrderContainer = (props) => {

    //total count

    let [order, setOrder] = useState(props.order);

    useEffect(() => {
        setOrder(props.order);
    }, [props.order]);


    useEffect(() => {
        
        if (props.profile ? true : false) props.getOrder(props.profile.id);
    }, [props.profile]);

    return <Order order={order}
        submitOrder={props.submitOrder} cancelOrder={props.cancelOrder}
        changeCount={props.changeCount} deleteProduct={props.deleteProduct}
        isEditMode={props.profile ? true : false} profile={props.profile}
    />;;
}

const mapStateToProps = state => {
    return {
        order: state.order.order,
        profile: state.login.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrder: (userId) => dispatch(submitOrder(userId)),
        cancelOrder: (userId) => dispatch(cancelOrder(userId)),
        getOrder: (userId) => dispatch(getOrder(userId)),
        changeCount: (userId, productId, isIncreased) => dispatch(changeProductCountIntoOrder(userId, productId, isIncreased)),
        deleteProduct: (userId, productId) => dispatch(deleteProduct(userId, productId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(OrderContainer)