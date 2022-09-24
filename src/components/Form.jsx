import React from "react";

function Form(property) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!property.isRegistered ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">
        {property.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
