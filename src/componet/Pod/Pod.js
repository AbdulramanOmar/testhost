import { useTranslation } from "react-i18next";
import "./Pod.css";
import { motion } from "framer-motion";

const Pod = () => {
  const { t } = useTranslation();
  return (
    <div className="pod">
      <div className="container">
        <motion.div
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pod-text"
        >
          <h2 className="pod-head">{t("Podcasts")}</h2>
          <p>{t("podcastprag")}</p>
        </motion.div>
        <motion.div
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pod-img"
        >
          <img src={require("../Assent/podcatss.png")} alt="filpside" />
        </motion.div>
      </div>
    </div>
  );
};

export default Pod;
