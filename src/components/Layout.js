import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-10">{children}</div>
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default Layout;
