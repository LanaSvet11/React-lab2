import React from "react";
import Navbar from "./components/Navbar";
import NavbarButton from "./components/NavbarButton";
function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use the Navbar component */}
      <NavbarButton /> {/* Use the NavbarButton component */}
    </div>
  );
}

export default App;
