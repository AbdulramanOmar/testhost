import { useTranslation } from "react-i18next";
import "./section.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Section = (props) => {
  const { t } = useTranslation();
  return (
    <section className="section" id={props.id}>
      <div className="container">
        <div
          className="section-content"
          style={props.revres && { flexDirection: "row" }}
        >
          <div className="section-img">
            <img src={props.img} alt={t(props.title)} />
          </div>
          <motion.div
            // initial={{ y: 200, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, ease: "easeOut" }}
            // viewport={{
            //   once:true
            // }}
            className="section-text"
          >
            <h1>{t(props.title)}</h1>
            <p>{t(props.prag)}</p>
            <button>
              {" "}
              <Link to={props.path}>{t("herobuttonTwo")}</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
