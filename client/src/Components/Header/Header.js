//import './App.css';

let Header = ({ name, onClick }) => {
  return (
      <div className="Header">
          <p>
              {name ? name : "You are guest. Please, log in."}
          </p>
          <button onClick={() => onClick()}>
              {name ? "Log out":  "Log in"}
          </button>
    </div>
  );
}

export default Header;
