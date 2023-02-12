import { Link, Outlet } from "react-router-dom";

import { AppRoot, Content, Nav } from "./StyledApp";

const App = () => {
  return (
    <AppRoot>
      <Nav>
        <Link to="/">home</Link>
        <Link to="/other">other</Link>
        <Link to="/unknown">unknown</Link>
      </Nav>
      <Content>
        <Outlet />
      </Content>
    </AppRoot>
  );
};

export default App;
