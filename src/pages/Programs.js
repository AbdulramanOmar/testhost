import React from "react";
import { AboutUs, Cards } from "../componet";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();
  return (
    <div className="programs">
      <AboutUs
        title="proHead"
        img={require("../componet/Assent/about.jpg")}
        parg="proparg"
        toogle={true}
      />
      <h1 style={{textAlign:"center", textTransform:"uppercase" ,margin:"20px 0"}}> {t("ourprograms")} </h1>
      <Cards />
    </div>
  );
};

export default Programs;
