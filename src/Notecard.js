import React from "react";

const Notecard = (props) => {
  const { title } = props.note;
  return (
    <div>
      <p>{title}</p>
      <p>Delete</p>
    </div>
  );
};

export default Notecard;
