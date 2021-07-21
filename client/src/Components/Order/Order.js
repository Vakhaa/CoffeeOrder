//import './App.css';

let Order = ({products}) => {
  return (
      <div className="Order">
          <p>Order</p>
          <br />
          {
              products.map( product => (
                  <div key={product.id}>
                      <button>x</button>
                      <p>{product.name}</p>

                      <button>-</button> <p>{product.count}</p> <button>+</button>

                      <p>{product.price}</p>
                      <p>{product.price}</p>
                  </div>
              ))
          }
          <button>Cancel</button> <button>Submit</button>
    </div>
  );
}

export default Order;
