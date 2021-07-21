//import './App.css';

let Header = ({ name }) => {
  return (
      <div className="Header">
          <p>
              {name ? name : "You are guest. Please, log in."}
          </p>
          <button>
              Log in
          </button>
    </div>
  );
}

export default Header;
