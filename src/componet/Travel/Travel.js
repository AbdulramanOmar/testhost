import "./travel.css";
import { useTranslation } from "react-i18next";
const Travel = () => {
  const { t } = useTranslation();
  return (
    <div className="travel">
      <div className="container">
        <div className="travel-content">
          <div className="travel-box">
            <div className="travel-img">
              <img src={require("../Assent/silder (3).jpg")} alt="flipside" />
            </div>
            <h3> {t("heroCard3")} </h3>
            <p>{t("heroCardparg3")}</p>
          </div>
          <div className="travel-cards">
            <div className="travel-card">
              <div className="travel-img">
                <img src={require("../Assent/footer (2).jpg")} alt="flipside" />
              </div>
              <h3>{t("AboutHead6")}</h3>
              <p>{t("heroCardparg3")}</p>
            </div>
            <div className="travel-card">
              <div className="travel-img">
                <img src={require("../Assent/silder (6).jpg")} alt="flipside" />
              </div>
              <h3>{t("AboutHead2")}</h3>
              <p>{t("heroCardparg3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
