import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Notecard from "./Notecard";
import { get, remove, put } from "./WebService/WebService";
import "./home.css";
import { GrAdd } from "react-icons/gr";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const fetchHandler = async () => {
    let data = await get("getAllnotes");
    setNotes(data);
  };

  const deleteHandler = async (id) => {
    let data = await remove(`delete/${id}`);
    const newData = notes.filter((item) => item.id !== id);
    setNotes(newData);
    console.log(data);
  };

  const updateHandler = async (id) => {
    let data = await put(`updatenotes/${id}`, {});
  };

  // const createHandler = async () => {
  //   console.log("ihh");
  //   let body = { id: 5, title: "hi", description: "dg" };
  //   let data = await post("addnotes", body);
  //   const newData = [...notes, body];
  //   setNotes(newData);
  //   console.log(data);
  // };
  useEffect(() => {
    fetchHandler();
  }, []);
  console.log(notes);
  return (
    <div className="homediv">
      <h1>Mr. SCHEDULER</h1>
      <div className="smallbox">
        <ul>
          {notes &&
            notes?.map((note) => (
              <div key={note.id}>
                <Notecard note={note} deleteHandler={deleteHandler} />
              </div>
            ))}
        </ul>
      </div>
      <div className="flexing">
        <Link to="/popup" className="add">
          <GrAdd className="gradd" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
