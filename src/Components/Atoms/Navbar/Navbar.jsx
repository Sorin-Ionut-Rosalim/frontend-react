import React, { useContext, useState } from "react";
import { AppProviderContext } from "../../../Context/AppProvider";
import "./Navbar-style.css";
const initialPressedButtons = {
  fotbal: false,
  basket: false,
  golf: false,
  box: false,
  pingpong: false,
  volley: false,
};
export default function Navbar() {
  const { state, actions } = useContext(AppProviderContext);
  const [pressedButtons, setPressedButtons] = useState(initialPressedButtons);

  const plusOnClickHandler = () => {
    actions.selectEvent("");
  };
  const handleClick = (event, type) => {
    if (pressedButtons[type] === true) {
      actions.setFilter({ ...state.filter, sportType: "" });
      setPressedButtons(initialPressedButtons);
    } else {
      actions.setFilter({ ...state.filter, sportType: type });
      const newPressedButtons = { ...initialPressedButtons };
      newPressedButtons[type] = true;
      setPressedButtons(newPressedButtons);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-buttons-container">
        <button
          className="navButton"
          style={pressedButtons.fotbal ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "fotbal")}
        >
          ⚽
        </button>
        <button
          className="navButton"
          style={pressedButtons.basket ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "basket")}
        >
          🏀
        </button>
        <button
          className="navButton"
          style={pressedButtons.golf ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "golf")}
        >
          🏌🏻
        </button>
        <div id="+">
          <button id="+btn" onClick={plusOnClickHandler}>
            ➕
          </button>
        </div>
        <button
          className="navButton"
          style={pressedButtons.box ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "box")}
        >
          🥊
        </button>
        <button
          className="navButton"
          style={pressedButtons.pingpong ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "pingpong")}
        >
          🏓
        </button>
        <button
          className="navButton"
          style={pressedButtons.volley ? { backgroundColor: "green" } : {}}
          onClick={(event) => handleClick(event, "volley")}
        >
          🏐
        </button>
      </div>
    </div>
  );
}
