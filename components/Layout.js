import React, { Children } from "react";
import NavBar from "./NavBar";
const Layout = ({children})=>{
  return(
    <div className="Layout">
      <NavBar />
      {children}
    </div>
  )
}

export default Layout