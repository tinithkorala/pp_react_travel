import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav__el nav__el--cta" : "nav__el"
      }
    >{text}</NavLink>
  );
};

NavLinks.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLinks;
