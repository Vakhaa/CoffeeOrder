import { useEffect } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Menu from '../Components/Menu/Menu';
import { addProduct } from '../Redux/Actions/productAction';
import { getProducts } from '../Redux/Actions/productsAction';

const MenuContainer = (props) => {

    useEffect(() => {
        props.getProducts();
    }, [props.products]);

    const menu = () => <Menu products={props.products} addProduct={props.addProduct} userId={1} />;

    const loading = () => <>Loading</>;

    return !props.products ? loading() : menu();
}

const mapStateToProps = state => {
    return {
        products: state.products.products
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