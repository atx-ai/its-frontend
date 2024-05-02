// Layout.js
import { Outlet, Link } from "react-router-dom";
import "./TopMenu.scss";

const TopMenu = () => {
  return (
    <div className="top-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createIssue">Create Issue</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet component in React Router Dom allows nested routes to render their element content and anything else  */}
      <Outlet />
    </div>
  );
};

export default TopMenu;
