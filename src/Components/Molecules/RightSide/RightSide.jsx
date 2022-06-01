import React, { useContext, useLayoutEffect, useState, useEffect } from "react";
import EventContent from "../../Atoms/EventContent/EventContent";
import CreateEvent from "../../Atoms/CreateEvent/CreateEvent";

import "./RightSide-style.css";
import { AppProviderContext } from "../../../Context/AppProvider";

const RightSide = () => {
  const { state } = useContext(AppProviderContext);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    console.log("🚀 ~ fasdasile: App.js ~ line 12 ~ useEffect ~ state", state);
  }, []);
  useLayoutEffect(() => {
    if (state?.selectedID !== "") {
      state?.events.forEach((event) => {
        if (event._id === state.selectedID) {
          setSelectedEvent(event);
          const eventDate = new Date(event.date);
          setDate(
            eventDate.toLocaleString("en-GB", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })
          );
        }
      });
    }
  }, [state?.selectedID, state?.events]);

  return (
    <div className="event-container">
      {state?.selectedID === "" ? (
        <CreateEvent />
      ) : (
        <EventContent
          id={state.selectedID}
          title={selectedEvent.title}
          sport={selectedEvent.sport}
          author={selectedEvent.author}
          authorEmail={selectedEvent.authorEmail}
          date={date}
          location={selectedEvent.location}
          currentPlayers={selectedEvent.currentPlayers?.length}
          maxPlayers={selectedEvent.maxPlayers}
          description={selectedEvent.description}
        />
      )}
    </div>
  );
};

export default RightSide;
