import "./EventContent-style.css";
import * as yup from "yup";
import { AppProviderContext } from "../../../Context/AppProvider";
import { useContext } from "react";
const Event = (props) => {
  const { state, actions } = useContext(AppProviderContext);

  const handleParticipate = () => {
    const email = prompt("Please enter your email, john.doe@gmail.com");
    const schema = yup.object().shape({ email: yup.string().email() });

    schema.isValid({ email }).then((valid) => {
      if (!valid) {
        alert("Please enter a valid email address!");
      } else {
        actions.addPlayer({ eventID: props.id, playerEmail: email });
      }
    });
  };

  return (
    <div className="event-content-container">
      <h1 className="event-title">Event name: {props.title}</h1>
      <h2>Sport: {props.sport}</h2>
      <h2>Owner name: {props.author}</h2>
      <h2>Owner e-mail: {props.authorEmail}</h2>
      <h2>Date: {props.date}</h2>
      <h2>Location: {props.location}</h2>
      <h2>
        Players: {props.currentPlayers}/{props.maxPlayers}
      </h2>
      <h2>Description:</h2>
      <h2 className="h2Description">{props.description}</h2>
      <div className="participate-btn-container">
        <button
          className="participate-btn button-participate"
          onClick={() => handleParticipate()}
        >
          Attend
        </button>
      </div>
      {state.addPlayerError && (
        <h2 style={{ color: "red" }}>{state.addPlayerError}</h2>
      )}
    </div>
  );
};

export default Event;
