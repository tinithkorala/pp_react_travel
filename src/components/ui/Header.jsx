import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import whiteLogo from "./../../assets/logos/logo-white.png";
import defaultUserIcon from "./../../assets/icons/default.jpg";
import { getIsAuth, getUser } from "../../features/authSlice";
import NavLinks from "./NavLinks";
import { urlImageHelper } from "../../utils/urlHelper";
import Logout from "../../pages/auth/Logout";

const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const authUser = useSelector(getUser);

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src={whiteLogo} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {isAuth && (
          <>
            <Link to="/booking" className="nav__el">
              My bookings
            </Link>
            <Logout />
            <Link to="/me" className="nav__el">
              <img
                src={
                  authUser?.photo
                    ? urlImageHelper("users/", authUser.photo)
                    : defaultUserIcon
                }
                alt={authUser.name}
                className="nav__user-img"
              />
              <span>{authUser.name}</span>
            </Link>
          </>
        )}
        {!isAuth && (
          <>
            <NavLinks to="/sign-in" text="SignIn" />
            <NavLinks to="/sign-up" text="SignUp" />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
