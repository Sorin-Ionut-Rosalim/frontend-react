import React from "react";
import "./Button-style.css";

export default function EventButton({ id, title, actions }) {
  return (
    <div className="event-div">
      <button
        className="button-event button-37"
        onClick={() => {
          actions.selectEvent(id);
          actions.setError("");
        }}
      >
        {title}
      </button>
    </div>
  );
}
