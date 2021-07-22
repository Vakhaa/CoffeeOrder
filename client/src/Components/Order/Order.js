import '../../index.css';

let Order = (props) => {
  return (
      <div className="Order">
          <p>Order</p>
          <div className="container">
          {
              props.products.map( product => (
                  <div className="product" key={product.id}>
                      <button onClick={() => props.deleteProduct(1, product.id)}>x</button>

                      {product.name}

                      <button onClick={() => props.changeCount(1, product.id, false)}>-</button>
                      {product.count}
                      <button onClick={() => props.changeCount(1, product.id, true)}>+</button>

                      {product.price}
                      
                  </div>
              ))
          }
              <button onClick={() => props.cancelOrder(1)}>Cancel</button> <button onClick={() => props.submitOrder(1)}>Submit</button>
          </div>
    </div>
  );
}

export default Order;
