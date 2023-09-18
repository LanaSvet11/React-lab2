import React from "react";

function NavbarButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="navbar-button">
      {label}
    </button>
  );
}

export default NavbarButton;
