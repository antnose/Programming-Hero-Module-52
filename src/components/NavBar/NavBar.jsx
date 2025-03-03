import { Link } from "react-router";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav space-x-5 ">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center ">
        <div className="">
          <img src={userIcon} alt="" />
        </div>
        <button className="btn rounded-none">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
