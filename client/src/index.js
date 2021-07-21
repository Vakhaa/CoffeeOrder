import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './Components/App'
import configureStore from './Redux/Store'

const store = configureStore();

window.store = store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
