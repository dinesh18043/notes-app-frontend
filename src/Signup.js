import React from "react";

const Signup = () => {
  return (
    <div>
      <form action="">
        <div className="name">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name..." />
        </div>
        <div className="name">
          <label htmlFor="">Age</label>
          <input type="text" placeholder="Enter your age..." />
        </div>
        <div className="name">
          <label htmlFor="">Mail id</label>
          <input type="email" placeholder="Enter your mail id..." />
        </div>
        <div className="name">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password..." />
        </div>
      </form>
    </div>
  );
};

export default Signup;
