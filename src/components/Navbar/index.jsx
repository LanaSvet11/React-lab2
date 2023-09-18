import React from "react";
import NavbarButton from "../NavbarButton";

function Navbar() {
  return (
    <div className="navbar">
      <NavbarButton label="Home" />
      <NavbarButton label="About" />
      <NavbarButton label="Services" />
      <NavbarButton label="Contact" />
    </div>
  );
}

export default Navbar;
