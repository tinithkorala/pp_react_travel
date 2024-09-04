import { CiSettings } from "react-icons/ci";
import { LuBriefcase } from "react-icons/lu";
import { AiOutlineStar } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsFillMapFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

const SidebarNav = () => {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li className="side-nav--active">
          <a href="#">
            <CiSettings />
            Settings
          </a>
        </li>
        <li>
          <a href="#">
            <LuBriefcase />
            My bookings
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineStar />
            My reviews
          </a>
        </li>
        <li>
          <a href="#">
            <FaFileInvoiceDollar />
            Billing
          </a>
        </li>
      </ul>
      <div className="admin-nav">
        <h5 className="admin-nav__heading">Admin</h5>
        <ul className="side-nav">
          <li>
            <a href="#">
              <BsFillMapFill />
              Manage tours
            </a>
          </li>
          <li>
            <a href="#">
              <MdManageAccounts />
              Manage users
            </a>
          </li>
          <li>
            <a href="#">
              <MdReviews />
              Manage reviews
            </a>
          </li>
          <li>
            <a href="#">
              <RiAdminLine />
              Manage Bookings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarNav;
