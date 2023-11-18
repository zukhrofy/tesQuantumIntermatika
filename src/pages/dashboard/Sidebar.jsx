import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex sm:flex-col h-screen w-60 bg-blue-600 shadow-xl">
      {/* play quiz button */}
      {/* nav menu */}
      <nav className="grow mt-5 font-semibold text-white overflow-y-auto">
        <SidebarMenu path={"/pegawai"} end={true} icon={faChartBar}>
          Pegawai
        </SidebarMenu>
      </nav>
    </aside>
  );
};

const SidebarMenu = ({ path, end = false, icon, children }) => {
  const navMenuClass =
    "flex items-center gap-2 py-4 pl-6 text-white opacity-75 hover:opacity-100 hover:bg-blue-500";
  return (
    <NavLink
      to={path}
      end={end}
      className={({ isActive }) =>
        isActive ? `bg-blue-700 ${navMenuClass}` : `${navMenuClass}`
      }>
      {children}
      <Icon icon={icon} />
    </NavLink>
  );
};

export default Sidebar;
