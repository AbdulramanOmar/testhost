import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router-dom";
import { NavLinks } from "../Assent/Data";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section logo">
          <img src={require("../Assent/Logo.png")} alt="Company Logo" />
          <p>{t("footerparg")}</p>
          <a href="https://www.linkedin.com/company/flipsidewellbeing">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/flipsidewellbeing?igsh=MXc5c2YzemdqdTE5Yg==">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            {NavLinks.map((el) => {
              return (
                <li key={el.id}>
                  <Link to={el.path}>{t(el.title)}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h2>Contact</h2>
          <p>{t("footerloa")}</p>
          <p>{t("footertel")}</p>
          <p>{t("footeremail")}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved &copy; 2024 FlipSide | Privacy Polie</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
