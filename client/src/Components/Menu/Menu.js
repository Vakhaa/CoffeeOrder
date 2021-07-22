import '../../index.css';

let Menu = ({ products, addProduct, userId}) => {
  return (
      <div className="Menu">
          <p>Menu</p>
          <div className="container">
          {

                  products.map((product) => (
                  <div className="product" key={product.id}>
                      {product.name}  {product.price}
                      <button onClick={() => addProduct(userId, product.id)} >+</button>
                  </div>
              ))
              }
          </div>
    </div>
  );
}

export default Menu;
