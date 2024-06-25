import "./tests.css";
import test from "../Assent/test.jpg";
import { testList } from "../Assent/Data";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import React from "react";
import { motion } from "framer-motion";
const Tests = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      viewport={{
        once: true,
      }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="tests"
    >
      <div className="container">
        <div className="test-content">
          <div className="test-list">
            {testList.map((el, i) => {
              return (
                <div className="test-prarg" key={i}>
                  <span></span>
                  <h2
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {t(el.title)}
                  </h2>
                  <GoArrowUpRight />
                  <p>{t(el.p)}</p>
                </div>
              );
            })}
          </div>
          <div className="test-img">
            <img src={test} alt="" />
          </div>
          <div className="test-text">
            <h1>{t("testHead")}</h1>
            <p>{t("testP")}</p>
            <button>{t("herobuttonOne")}</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Tests;
