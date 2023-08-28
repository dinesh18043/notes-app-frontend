import React, { useState, useEffect } from "react";
import axios from "axios";
import Notecard from "./Notecard";

const URL = "http://localhost:5000/getAllnotes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Home = () => {
  const [notes, setNotes] = useState();
  useEffect(() => {
    fetchHandler()
      .then((data) => setNotes(data.notes))
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);
  console.log(notes);
  return (
    <div>
      <ul>
        {notes &&
          notes.map((note, id) => (
            <li key={id}>
              <Notecard note={note} />
            </li>
          ))}
      </ul>
      <h1>hii</h1>
    </div>
  );
};

export default Home;
