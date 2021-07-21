import './App.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Order from './Order/Order';

let productsMock = [
    {
        id: 1,
        name: "Americano",
        price: 19
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 20
    },
    {
        id: 3,
        name: "Espresso",
        price: 25
    }
]

let productsOrderMock = [
    {
        id: 1,
        name: "Americano",
        price: 19,
        count: 1
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 20,
        count: 1
    },
    {
        id: 3,
        name: "Espresso",
        price: 25,
        count: 1
    }
]

function App() {
  return (
      <div className="App">
          <Header />
          {/*<Header name="Vasya"/>*/}
          <Menu products={productsMock} />
          <Order products={productsOrderMock} />
  </div>
  );
}

export default App;
