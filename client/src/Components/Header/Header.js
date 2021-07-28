import '../../index.css';

let Header = ({ name, onClick }) => {
  return (
      <div className="Header container ">
          <div>
              {name ? name : "You are guest. Please, log in."}
          </div>
          <button onClick={() => onClick()}>
              {name ? "Log out":  "Log in"}
          </button>
    </div>
  );
}

export default Header;
