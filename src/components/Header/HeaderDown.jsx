import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import menu from "../../images/menu.svg";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
const HeaderDown = () => {
  const { user } = useSelector((state) => state.auth);
  const LogOut = () => {
    localStorage.removeItem("normalUser");
    window.location.reload();
  };
  return (
    <header className="header-botton py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div className="d-flex align-items-center">
                <Dropdown>
                  <DropdownToggle
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={menu} alt="menu" />
                    <span className="d-icon me-5"> Shop Categories</span>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="/">
                        Action
                      </Link>
                    </li>
                  </DropdownMenu>
                </Dropdown>
                <div className="line"></div>
              </div>
              <div className="menu-links">
                <div clas className="d-flex align-items-center gap-30">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/products">Our Store</NavLink>
                  <NavLink to="/my-order">My Order</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  {user && (
                    <button onClick={() => LogOut()} className="logout">
                      logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDown;
