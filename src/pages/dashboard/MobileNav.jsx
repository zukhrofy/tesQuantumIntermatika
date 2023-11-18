import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <header className="sm:hidden w-full px-6 py-5 bg-blue-600">
      <nav>
        <MobileNavMenu path={"/pegawai"} end={true} icon={faChartBar}>
          Pegawai
        </MobileNavMenu>
      </nav>
    </header>
  );
};

const MobileNavMenu = ({ path, end = false, icon, children }) => {
  const navMenuClass =
    "flex items-center gap-2 py-2 px-6 text-white opacity-75 hover:opacity-100 hover:bg-blue-500";
  return (
    <NavLink
      to={path}
      end={end}
      className={({ isActive }) =>
        isActive ? `bg-blue-700 ${navMenuClass}` : navMenuClass
      }>
      {children}
      <Icon icon={icon} />
    </NavLink>
  );
};

export default MobileNav;
