import '../../index.css';

let Order = (props) => {

  return (
      <div className="Order">
          <p>Order</p>
          <div className="container">
              {
                  props.order?.Products ? props.order.Products.map(product => (
                      <div className="product" key={product.id}>
                          <button onClick={() => props.deleteProduct(props.profile.id, product.id)}>x</button>
                          
                          {product.title}

                          <button onClick={() => props.changeCount(props.profile.id, product.id, false)}>-</button>
                          {product.count}
                          <button onClick={() => props.changeCount(props.profile.id, product.id, true)}>+</button>

                          {product.price}

                      </div>
                  )) :"Empty"
          }
              <button onClick={() => props.cancelOrder(props.profile.id)} disabled={!props.isEditMode}> Cancel </button>
              <button onClick={() => props.submitOrder(props.profile.id)} disabled={!props.isEditMode}> Submit </button>
          </div>
    </div>
  );
}

export default Order;
