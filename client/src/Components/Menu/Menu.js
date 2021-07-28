import '../../index.css';

let Menu = ({ products, addProduct, userId, isEditMode}) => {
  return (
      <div className="Menu  container">
          <h3>Menu</h3>
          <div className="Products">
          {

                  products.map((product) => (
                      <div className="item Product" key={product.id}>
                          {product.title}  {product.price}
                          <button  onClick={() => addProduct(userId, product.id)} disabled={!isEditMode || product.isInOrder}>+</button>
                  </div>
              ))
              }
          </div>
    </div>
  );
}

export default Menu;
 