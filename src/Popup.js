import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "./WebService/WebService";
import "./popup.css";

const Popup = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const sendRequest = async () => {
    await post("addnotes", inputs)
      .then((res) => console.log("Registered successfully"))
      .catch((err) => err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/"));
  };

  const handleChange = (e) => {
    // setInputs((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.name,
    // }));
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="popup">
      <div className="for">
        <form className="form" onSubmit={handleSubmit}>
          <div className="tit">
            <h1>Title</h1>
            <input
              type="text"
              // value={inputs.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="des">
            <h2>Description</h2>
            <textarea
              id="des"
              cols="30"
              rows="10"
              name="description"
              // value={inputs.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
