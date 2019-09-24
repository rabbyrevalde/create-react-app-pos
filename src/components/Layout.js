import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 p-0">
          <Header />
          {children}
        </div>
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default Layout;
