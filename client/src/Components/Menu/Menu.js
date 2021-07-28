import '../../index.css';

let Menu = ({ products, addProduct, userId, isEditMode}) => {
  return (
      <div className="Menu  BodyMainBlocks">
          <p>Menu</p>
          <div className="container">
          {

                  products.map((product) => (
                      <div className="BodySecondBlocks" key={product.id}>
                          {product.title}  {product.price}
                          <button onClick={() => addProduct(userId, product.id)} disabled={!isEditMode || product.isInOrder}>+</button>
                  </div>
              ))
              }
          </div>
    </div>
  );
}

export default Menu;
