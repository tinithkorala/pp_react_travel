import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/thunks/auth.thunk";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <button className="nav__el" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default Logout;
