import "./App.css";
import React from "react";
import LeftSide from "./Components/Molecules/LeftSide/LeftSide";
import RightSide from "./Components/Molecules/RightSide/RightSide";
import AppProvider from "./Context/AppProvider";

const App = () => {
  return (
    <div className="container">
      <AppProvider>
        <LeftSide />
        <RightSide />
      </AppProvider>
    </div>
  );
};

export default App;
