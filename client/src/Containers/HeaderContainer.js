import { connect } from 'react-redux'
import { compose } from 'redux'
import Header from '../Components/Header/Header';
import { login, logout } from '../Redux/Actions/loginAction';

const HeaderContainer = (props) => {

    return !props.profile? <Header onClick={props.login} /> :
        <Header name={props.profile.name} onClick={props.logout} /> ;
}

const mapStateToProps = state => {
    return {
        profile: state.login.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => (dispatch(login())),
        logout: () => (dispatch(logout()))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer)