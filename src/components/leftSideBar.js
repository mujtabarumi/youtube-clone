import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div class="sidenav">
      <Link to="/">Home</Link>
      <Link to="/liked">Liked</Link>
    </div>
  );
};

export default SideBar;
