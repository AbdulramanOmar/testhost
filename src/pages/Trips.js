import React from "react";
import { Background , Silder, Travel} from "../componet";
const Trips = () => {
  return (
    <div className="trip">
      <Background
        title="backTitle"
        parg="backprag"
        img={require("../componet/Assent/back  (3).jpg")}
      />
       <Silder />
      <Background
        title="backTitle1"
        img={require("../componet/Assent/footer (4).jpg")}
        font={true}
      />
      <Travel />
      <Background
        title="backTitle2"
        img={require("../componet/Assent/back  (2).jpg")}
        font={true}
      />

    </div>
  );
};

export default Trips;
