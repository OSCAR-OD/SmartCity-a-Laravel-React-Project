import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      //-- =============== sidebar ================ -->

      <div className="sidebar">
            <ul>
                <li>
                <Link to="/">
                   <span className="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span className="title">Service System</span>
                    </Link>
                </li>

                <li>
                  <Link to="/">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>

                <li>
                <Link to="/apiorders">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Orders</span>
                    </Link>
                </li>

                <li>
                <Link to="/viewworker">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="title">Workers</span>
                    </Link>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li>
                <Link to="/logout">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
 

  );
};

export default Sidebar;
