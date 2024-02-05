import React from "react";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default LoginSignup;
