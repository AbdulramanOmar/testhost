import { useTranslation } from "react-i18next";
import "./about.css";
import { motion } from "framer-motion";

const AboutUs = (props) => {
  
  const { t } = useTranslation();
  return (
    <motion.div
    initial={{y:200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1 ,ease:"easeOut"}}
      className="aboutus"
      style={props.toogle && { background: "var(--mobs-color)" }}
    >
      <div className="container">
        <div
          className="aboutus-content"
          style={props.toogle && { flexDirection: "row-reverse" }}
        >
          <div className="aboutus-text">
            <h2 style={props.toogle && { color: "var(--sand-color)" }}>
              {t(props.title)}
            </h2>
            <p style={props.toogle && { color: "var(--sand-color)" }}>
              {t(props.parg)}
            </p>
          </div>
          <div className="aboutus-img">
            {props.toogle && (
              <div
                className="back"
                style={
                  props.toogle && {
                    background: "var(--sand-color)",
                    right: "-70px",
                  }
                }
              ></div>
            )}
            <img src={props.img} alt={props.title} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
