import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get, put } from "./WebService/WebService";
import "./Notecard.css";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const Notecard = ({ deleteHandler, note }) => {
  const navigate = useNavigate();
  const { title, description, id } = note;
  // const [checked, setChecked] = useState(false);

  const [task, setTask] = useState(null);

  const fetchCheck = async () => {
    const response = await get("getallitems");
    setTask(response.data);
  };
  useEffect(() => {
    fetchCheck();
  }, []);

  return (
    <div className="main">
      <div className="card">
        <div className="check">
          <input type="checkbox" className="hello" />
        </div>
        <div className="ptag" onClick={() => navigate(`/detail/${note.id}`)}>
          <p className="pin">{title}</p>
        </div>
        {/* <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} /> */}
        <div className="total">
          <div className="up">
            <GrUpdate
              className="icons update"
              onClick={() => navigate(`/update/${note.id}`)}
            />
            {/* <button
              className="upinside"
              onClick={() => navigate(`/update/${note.id}`)}
            >
              Update
            </button> */}
          </div>
          <div className="del">
            <MdDeleteForever
              className="icons delete"
              onClick={() => deleteHandler(id)}
            />
            {/* <button className="delinside" onClick={() => deleteHandler(id)}>
              Delete
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notecard;
