import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './Containers/AppContainer';
import configureStore from './Redux/Store';


const store = configureStore();

window.store = store;

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)
