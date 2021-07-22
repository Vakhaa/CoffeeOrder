import HeaderContainer from '../Containers/HeaderContainer';
import MenuContainer from '../Containers/MenuContainer';
import OrderContainer from '../Containers/OrderContainer';

function App() {
  return (
      <div className="App">
          <HeaderContainer />
          <div className="Body">
              <MenuContainer />
              <OrderContainer />
          </div>
  </div>
  );
}

export default App;
