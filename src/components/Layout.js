import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ notes, addNotes }) {
  
  const [ sideBarCollapsed, setSideBarCollapsed ] = useState(false);

  return (
    <>
      <Header setSideBarCollapsed = { () => setSideBarCollapsed(!sideBarCollapsed) } /> { /* header */}
      <div className="body-container">
        <SideBar
        sideBarCollapsed={ sideBarCollapsed }
        notes={ notes }
        addNotes={ addNotes }
         />
        <Outlet/>
      </div> {/* end of body-container div*/}
    </>
    );
}

export default Layout;
