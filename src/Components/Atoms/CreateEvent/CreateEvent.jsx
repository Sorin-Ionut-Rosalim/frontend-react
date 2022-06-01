import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./CreateEvent-style.css";
import { AppProviderContext } from "../../../Context/AppProvider";

export default function CreateEvent() {
  const { actions } = useContext(AppProviderContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("🚀 ~ file: CreateEvent.jsx ~ line 14 ~ onSubmit ~ data", data);

    const event = {
      title: data.title,
      sport: data.sport,
      currentPlayers: "0",
      maxPlayers: data.maxPlayers,
      author: data.ownerName,
      authorEmail: data.email,
      date: data.date,
      location: data.location,
      description: data.description,
    };
    console.log(
      "🚀 ~ file: CreateEvent.jsx ~ line 24 ~ onSubmit ~ event",
      event
    );
    console.log(errors);
    actions.addEvent(event);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-box">
      <legend>ADD NEW EVENT</legend>
      <input
        type="text"
        placeholder="Title"
        {...register("title", { required: true, maxLength: 80 })}
      />
      {errors.title?.type === "required" && (
        <span className="error">Title is required</span>
      )}
      {errors.title?.type === "maxLength" && (
        <span className="error">Max length is 80</span>
      )}
      <input
        type="text"
        placeholder="Sport"
        {...register("sport", { required: true, maxLength: 80 })}
      />
      {errors.sport?.type === "required" && (
        <span className="error">Title is required</span>
      )}
      {errors.sport?.type === "maxLength" && (
        <span className="error">Max length is 80</span>
      )}
      <input
        type="text"
        placeholder="Owner Name"
        {...register("ownerName", { required: true, maxLength: 80 })}
      />
      {errors.ownerName?.type === "required" && (
        <span className="error">Owner name is required</span>
      )}
      {errors.ownerName?.type === "maxLength" && (
        <span className="error">Max length is 80</span>
      )}
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email?.type === "required" && (
        <span className="error">Email is required</span>
      )}
      <input
        type="datetime-local"
        placeholder="Date"
        {...register("date", { required: true })}
      />{" "}
      {errors.date?.type === "required" && (
        <span className="error">Time is required</span>
      )}
      <input
        type="text"
        placeholder="Location"
        {...register("location", { required: true, maxLength: 80 })}
      />
      {errors.location?.type === "required" && (
        <span className="error">Location is required</span>
      )}
      {errors.location?.type === "maxLength" && (
        <span className="error">Max length is 80</span>
      )}
      <input
        type="number"
        placeholder="Max Players"
        {...register("maxPlayers", { required: true })}
      />
      {errors.maxPlayers?.type === "required" && (
        <span className="error">Max players are required</span>
      )}
      <textarea
        placeholder="Please insert a description for the event."
        {...register("description", { required: true, min: 0, maxLength: 200 })}
      />
      {errors.description?.type === "required" && (
        <span className="error">Description is required</span>
      )}
      <input id="test" type="submit" />
    </form>
  );
}
