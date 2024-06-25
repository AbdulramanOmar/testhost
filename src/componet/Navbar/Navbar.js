import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../Assent/Data";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdTranslate } from "react-icons/md";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageToggled, setIsLanguageToggled] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageToggled(!isLanguageToggled);
    setIsLanguageMenuVisible(!isLanguageMenuVisible);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <img
            src={require("../Assent/flipsikjjgde logo.png")}
            alt=""
            style={{ width: "180px" }}
          />
          <ul className={`nav-links ${isMenuToggled ? "" : "show"}`}>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {t(link.title)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <NavLink to="/contact">
              <button style={{ margin: "0 10px" }}>{t("Contact")}</button>
            </NavLink>
            <button
              onClick={() => changeLanguage(isLanguageToggled ? "ar" : "en")}
            >
              {i18n.language === "en" ? "ar" : "en"}
            </button>
          </div>
          <div className="change">
            {isMenuToggled ? (
              <FaBars onClick={() => setIsMenuToggled(!isMenuToggled)} />
            ) : (
              <IoClose onClick={() => setIsMenuToggled(!isMenuToggled)} />
            )}
            <MdTranslate
              onClick={() => setIsLanguageMenuVisible(!isLanguageMenuVisible)}
            />
            <ol
              className={`language ${isLanguageMenuVisible ? "show-list" : ""}`}
              style={{ width: "150px" }}
            >
              <li>
                <Link onClick={() => changeLanguage("en")}>English</Link>
              </li>
              <li>
                <Link onClick={() => changeLanguage("ar")}>عربي</Link>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
