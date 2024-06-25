import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./componet/Sidebar/Sidebar";
const LayoutAdmin = () => {
  
  return (
    <div style={{ background: "#eff2f1" , display:"flex"}} className="admbin">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
