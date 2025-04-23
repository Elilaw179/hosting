



import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Body showSidebar={showSidebar} />
    </>
  );
}

export default App;
