import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Title />
        <Fields />
      </div>
    </>
  );
}

function Title() {
  return (
    <div className="title">
      <h2>Create An Acount</h2>
      <p>Step 1</p>
    </div>
  );
}

function Fields() {
  return (
    <form className="fields">
      <Inputs />
      <Button />
    </form>
  );
}

function Inputs() {
  return (
    <>
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Last Name" required />
      <input type="password" placeholder="Password" name="password" required />
    </>
  );
}

function Button() {
  return (
    <div className="buttons">
      <button>Next Step</button>
    </div>
  );
}
export default App;
