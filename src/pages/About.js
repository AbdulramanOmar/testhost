import React from "react";
import { AboutUs } from "../componet";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="container">
        <h1
          style={{
            fontSize: "64px",
            color: "var(--black-color)",
            margin: "20px",
          }}
        >
          {t("About")}
        </h1>
      </div>
      <AboutUs
        title="AboutHead"
        img={require("../componet/Assent/meet.jpg")}
        parg="Aboutparg"
      />
     
      <AboutUs
        title="AboutHead1"
        img={require("../componet/Assent/about 1.jpg")}
        parg="Aboutparg1"
        toogle={true}
      />
      <AboutUs
        title="AboutHead2"
        img={require("../componet/Assent/about 2.jpg")}
        parg="Aboutparg2"
      />
      <AboutUs
        title="AboutHead3"
        img={require("../componet/Assent/footer (4).jpg")}
        parg="Aboutparg3"
        toogle={true}
      />
      <AboutUs
        title="AboutHead4"
        img={require("../componet/Assent/about 3.jpg")}
        parg="Aboutparg4"
      />
      <AboutUs
        title="AboutHead5"
        img={require("../componet/Assent/MOHT7260-Enhanced-NR.jpg")}
        parg="Aboutparg5"
        toogle={true}
      />
      <AboutUs
        title="AboutHead6"
        img={require("../componet/Assent/footer (5).jpg")}
        parg="Aboutparg6"
      />
    </div>
  );
};

export default About;
