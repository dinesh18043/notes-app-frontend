import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { get, put } from "./WebService/WebService";
import "./Update.css";
const Update = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      // const res = await axios.get(`http://localhost:5000/getbyid/${id}`);
      const res = await get(`getbyid/${id}`);
      // console.log(res.data);
      setInputs(res[0]);
    };
    fetchHandler();
  }, [id]);
  console.log(inputs);
  const SendRequest = async () => {
    await put(`updatenotes/${id}`, {
      title: String(inputs.title),
      description: String(inputs.description),
    }).then((res) => console.log(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SendRequest().then(() => navigate("/"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="popup">
      {/* {inputs && ( */}
      <div className="for">
        <form className="form" onSubmit={handleSubmit}>
          <div className="tit">
            <h1>Title</h1>
            <input
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />
          </div>
          <div className="des">
            <h1>Description</h1>
            <textarea
              id="des"
              cols="30"
              rows="10"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
      {/* )} */}
    </div>
  );
};

export default Update;
