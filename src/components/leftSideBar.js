import { Link } from "react-router-dom";

const SideBar = (props) => {

  const options = props.users.map(val => {
    return <option value={val.id}>{val.email}</option>
  })

  const onChange = e => {
    props.setUser(e.target.value)
  }

  return (
    <div class="sidenav">
      <Link to="/">Home</Link>
      <Link to="/liked">Liked</Link>
      <Link to="/play">Play</Link>
      <select multiple onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export default SideBar;
