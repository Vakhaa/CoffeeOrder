//import { useEffect } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import App from '../Components/App';

const AppContainer = (props) => {

    /*useEffect(() => {
        // Get a reference to the database service
        const db = firebase;

        console.log(db);
    }, []);
*/
    return <App />;
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(AppContainer)