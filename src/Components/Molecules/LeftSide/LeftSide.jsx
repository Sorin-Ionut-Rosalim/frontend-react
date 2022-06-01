import React, { useContext, useState, useLayoutEffect } from "react";
import EventButton from "../../Atoms/EventButton/EventButton";
import Navbar from "../../Atoms/Navbar/Navbar";
import SearchBar from "../../Atoms/SearchBar/SearchBar";

import "./LeftSide-style.css";
import { AppProviderContext } from "../../../Context/AppProvider";
// filter = { text : string, sportType : string}
// title, author, authorEmail, date, location, description
// sport type
//
const fieldsIncludes = (event, text, notSport = false) => {
  const ftext = text.replaceAll("[],.@#! ", "").toLowerCase().trim();

  if (
    event.title.toLowerCase().includes(ftext) ||
    (event.sport.toLowerCase().includes(ftext) && !notSport) ||
    event.author.toLowerCase().includes(ftext) ||
    event.authorEmail.toLowerCase().includes(ftext) ||
    event.date.toString().toLowerCase().includes(ftext) ||
    event.location.toLowerCase().includes(ftext) ||
    event.description.toLowerCase().includes(ftext)
  ) {
    return true;
  }
  return false;
};
const filterEvent = (event, filter) => {
  if (filter.sportType === "") {
    return fieldsIncludes(event, filter.text);
  } else if (event.sport.toLowerCase() === filter.sportType) {
    return fieldsIncludes(event, filter.text, true);
  }
};

export default function LeftSide() {
  const { state, actions } = useContext(AppProviderContext);
  const [buttonComponents, setButtonComponents] = useState("");
  const [events, setEvents] = useState(state.events);
  useLayoutEffect(() => {
    if (state?.events) {
      if (state.filter.text === "" && state.filter.sportType === "") {
        setEvents(state.events);
      } else {
        const newEvents = state.events.filter((event) =>
          filterEvent(event, state.filter)
        );
        setEvents(newEvents);
      }
    }
  }, [state?.events, actions, state?.filter]);
  useLayoutEffect(() => {
    const buttons = events.map((event) => (
      <EventButton
        key={event._id}
        id={event._id}
        title={event.title}
        actions={actions}
      />
    ));
    setButtonComponents(buttons);
  }, [events, actions]);
  return (
    <div className="leftside-container">
      <SearchBar />
      <Navbar />
      <div className="buttons-container">{buttonComponents}</div>
    </div>
  );
}
