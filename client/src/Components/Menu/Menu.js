import '../../index.css';

let Menu = ({ products, addProduct, userId, isEditMode}) => {
  return (
      <div className="Menu">
          <p>Menu</p>
          <div className="container">
          {

                  products.map((product) => (
                  <div className="product" key={product.id}>
                          {product.title}  {product.price}
                          <button onClick={() => addProduct(userId, product.id)} disabled={!isEditMode}>+</button>
                  </div>
              ))
              }
          </div>
    </div>
  );
}

export default Menu;
