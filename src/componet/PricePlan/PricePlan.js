import { useTranslation } from "react-i18next";
import { PricePlanContent } from "../Assent/Data";
import "./PricePlan.css";
import {
  FaCheck,
  FaHeartPulse,
  FaMeetup,
  FaTree,
  FaUserDoctor,
  FaUsersLine,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const PricePlan = () => {
  const { t } = useTranslation();
  return (
    <div className="price">
      <div className="container">
        <div className="price-content">
          {PricePlanContent.map((el, i) => {
            return (
              <div key={i} className="price-card" style={el.tooogle && {marginBottom:`40px`}}>
                <h2>
                  {el.step} {t(el.title)}
                </h2>
                <article>
                  <span> ${el.price}.00 </span>
                    <img src={require("../Assent/meet.jpg")} alt={el.title} />
                </article>
                <ul>
                  <li className="light">
                    <FaHeartPulse />

                    {t(el.li1)}
                  </li>
                  <li className="light">
                    <FaUserDoctor /> {t(el.li2)}
                  </li>
                  <li className="light">
                    <FaTree />
                    {t(el.li3)}
                  </li>
                  <li>
                    <FaMeetup />
                    {t(el.li4)}
                  </li>
                  <li>
                    <FaUsersLine />
                    {t(el.li5)}
                  </li>
                  <li>
                    <FaCheck />
                    {t(el.li6)}
                  </li>
                </ul>
                <Link>
                  <button> {t("joinin")} </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
