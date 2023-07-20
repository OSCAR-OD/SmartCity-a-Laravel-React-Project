import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
//import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
    </div>
  );
};

export default Home;
