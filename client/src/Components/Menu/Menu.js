//import './App.css';

let Menu = ({products}) => {
  return (
      <div className="Menu">
          <p>Menu</p>
          <br/>
          {
              products.map( product => (
                  <div key={product.id}>
                      <p>{product.name}</p> . <p>{product.price}</p>
                      <button>+</button>
                  </div>
              ))
          }
    </div>
  );
}

export default Menu;
