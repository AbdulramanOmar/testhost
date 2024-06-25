import { useTranslation } from "react-i18next";
import "./hero.css";
import { HeroContent } from "../Assent/Data";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <span className="line"></span>
          <span>{t("weCare")}</span>
          <motion.h1  variants={textVariants}>
            {t("heroText")}
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={textVariants}>
            {t("heroPrag")}
          </motion.p>
        </div>
        <div className="hero-content">
          {HeroContent.map((el) => {
            return (
              <motion.div
                key={el.id} 
                initial="hidden"
                animate="visible"
                whileTap={{scale:0.8}}
                whileHover="hover"
                variants={cardVariants}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero-card"
                onClick={() => scrollToSection(el.id)}
              >
                <div className="hero-img">
                  <img src={el.img} alt={t(el.title)} />
                </div>
                <div className="heroText">
                  <h3>{t(el.title)}</h3>
                  {/* <p>{t(el.parg)}</p> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
