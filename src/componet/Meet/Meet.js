import "./meet.css";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Meet = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      viewport={{
        once: true,
      }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="meet"
    >
      <div className="container">
        <div className="meet-content">
          <div className="meet-imgs">
            <img src={require("../Assent/meet.jpg")} alt="" />
          </div>
          <div className="meet-text">
            <h1>{t("AboutHead")}</h1>
            <h2>
              <span>{t("meetHead2")}</span>
              <div>
                <GoArrowUpRight />
              </div>
            </h2>
            <p>{t("Aboutparg")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Meet;
