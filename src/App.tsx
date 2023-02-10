import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <br />
      <Link to="/other">other</Link>
      <br />
      <Link to="/unknown">unknown</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default App;
