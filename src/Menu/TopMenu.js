// Layout.js
import { Outlet, Link } from "react-router-dom";
import "./TopMenu.scss";
import { Home, WhitePaper } from "@carbon/icons-react";

const TopMenu = () => {
  return (
    <div className="top-nav">
      <nav>
        <ul>
          <li title="Home">
            <Link to="/"><Home /></Link>
          </li>
          {/* <li title="Create Form">
            <Link to="/createIssue" ><WhitePaper /> </Link>
          </li> */}
        </ul>
      </nav>
      {/* Outlet component in React Router Dom allows nested routes to render their element content and anything else  */}
      <Outlet />
    </div>
  );
};

export default TopMenu;
