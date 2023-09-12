import React from "react";

const Login = () => {
  return (
    <div>
      <form action="">
        <div className="lname">
          <label htmlFor="">Mail id</label>
          <input type="email" placeholder="Enter your mail id..." />
        </div>
        <div className="lname">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter your password..." />
        </div>
      </form>
    </div>
  );
};

export default Login;
