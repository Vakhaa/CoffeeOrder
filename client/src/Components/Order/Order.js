import '../../index.css';

let Order = (props) => {

  return (
      <div className="Order container">

          <h3>Order</h3>

          <div >
              {
                  props.order?.Products ? props.order.Products.map(product => (
                      <div className="item Product" key={product.id}>
                          <button onClick={() => props.deleteProduct(props.profile.id, product.id)} disabled={props.order?.isSubmit}>x</button>
                          
                          {product.title}

                          <button onClick={() => props.changeCount(props.profile.id, product.id, false)} disabled={props.order?.isSubmit}>-</button>
                          {product.count}
                          <button onClick={() => props.changeCount(props.profile.id, product.id, true)} disabled={props.order?.isSubmit}>+</button>

                          {product.price}

                      </div>
                  )) : <div className="item Product">Empty</div>
              }
              <div className="item Product">Total : {props.totalPrice}</div>
              <div className="item">
                  <button
                      onClick={() => props.cancelOrder(props.profile.id)}
                      disabled={!props.isEditMode || props.order?.isSubmit}>
                      Cancel </button>
                  <button
                      onClick={() => props.submitOrder(props.profile.id, props.order)}
                      disabled={!props.isEditMode || props.order?.isSubmit}>
                      Submit </button>
              </div>
          </div>
    </div>
  );
}

export default Order;
