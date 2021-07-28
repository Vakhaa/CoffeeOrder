import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Order from '../Components/Order/Order';
import { cancelOrder,  getOrder, submitOrder } from '../Redux/Actions/orderAction';
import { changeProductCountIntoOrder, deleteProduct} from '../Redux/Actions/productAction';

import '../index.css';


const OrderContainer = (props) => {

    let [order, setOrder] = useState(props.order);

    useEffect(() => {
        setOrder(props.order);
    }, [props.order]);

    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        order?.Products?.map(product => (
            total += product.count * product.price
        ));
        setTotalPrice(total);
    }, [order?.Products]);


    useEffect(() => {
        if (props.profile ? true : false) props.getOrder(props.profile.id);
    }, [props.profile]);

    const orderComplete = () => {
        return <div className="BodyMainBlocks">
            <p className="BodySecondBlocks">Thank you for complete order. The total cost is {totalPrice} tugrikow.</p>
                  <button onMouseEnter={() => alert("*coming soon*")}>Make a new order</button>
        </div>
    }

    const orderComponent = () => {
        return <Order order={order} totalPrice={totalPrice}
            submitOrder={props.submitOrder} cancelOrder={props.cancelOrder}
            changeCount={props.changeCount} deleteProduct={props.deleteProduct}
            isEditMode={props.profile ? true : false} profile={props.profile}/>
    }

    return props.order?.isSubmit ? orderComplete() : orderComponent();
}

const mapStateToProps = state => {
    return {
        order: state.order.order,
        profile: state.login.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrder: (userId, order) => dispatch(submitOrder(userId, order)),
        cancelOrder: (userId) => dispatch(cancelOrder(userId)),
        getOrder: (userId) => dispatch(getOrder(userId)),
        changeCount: (userId, productId, isIncreased) => dispatch(changeProductCountIntoOrder(userId, productId, isIncreased)),
        deleteProduct: (userId, productId) => dispatch(deleteProduct(userId, productId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(OrderContainer)