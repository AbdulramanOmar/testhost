import React from "react";
import { Box } from "../componet";
import Sub from "../componet/Sub/Sub";

const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <div className="admin-content">
        <Box data="subcribes" />
        <Box data="podcasts" />
        <Box data="programs" />
        <Sub />
      </div>
    </div>
  );
};

export default Admin;
