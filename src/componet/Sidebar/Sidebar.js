import "./sidebar.css";
import { FiSettings } from "react-icons/fi";
import {
  FaBoxOpen,
  FaFileAudio,
  FaFolderOpen,
  FaMessage,
  FaMusic,
  FaPlus,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const listDashboard = [
  {
    title: "Dashboard",
    icon: <FaFolderOpen />,
    to: "/admin",
  },
  {
    title: "AllPrograms",
    icon: <FaBoxOpen />,
    to: "/admin/programs",
  },
  {
    title: "AddProgram",
    icon: <FaPlus />,
    to: "/admin/addProgram",
  },
  {
    title: "AllPodcast",
    icon: <FaMusic />,
    to: "/admin/podcasts",
  },
  {
    title: "AddPodcast",
    icon: <FaFileAudio />,
    to: "/admin/addPodcast",
  },
  {
    title: "SendMessage",
    icon: <FaMessage />,
    to: "/admin/send",
  },
];
const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="side">
      <div className="head">
        <FiSettings />
        <h3>Dashboard</h3>
        <span>v.01</span>
      </div>
      <ul>
        {listDashboard.map((el, i) => {
          return (
            <li key={i}>
              <NavLink
                className={({ isActive }) => (isActive ? "activee" : "")}
                to={el.to}
              >
                <span>{el.icon}</span> <h3>{t(el.title)}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
