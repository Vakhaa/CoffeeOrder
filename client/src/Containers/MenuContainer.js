import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Menu from '../Components/Menu/Menu';
import { addProduct } from '../Redux/Actions/productAction';
import { getProducts } from '../Redux/Actions/productsAction';

const MenuContainer = (props) => {

    let [isLogin, setIsLogin] = useState(false);
    let [products, setProducts] = useState(props.products);

    useEffect(() => {
        setProducts(props.products);
    }, [props.products]);

    useEffect(() => {

        let newProducts = products?.map(product => (
            product = {
                ...product,
                isInOrder: props.order?.Products?.find(orderProduct => orderProduct.id === product.id) ? true : false 
            }));

        setProducts(newProducts);
    }, [props.order]);

    useEffect(() => {
        props.getProducts();
        setIsLogin(props.profile ? true : false);
    }, [props.profile]);

    const menu = () => <Menu products={products} addProduct={props.addProduct} userId={props.profile ? props.profile.id : 0} isEditMode={isLogin} />;

    const loading = () => <>Loading</>;

    return !products ? loading() : menu();
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        order: state.order.order,
        profile: state.login.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (userId, productId) => (dispatch(addProduct(userId, productId))),
        getProducts: () => dispatch(getProducts()),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(MenuContainer)