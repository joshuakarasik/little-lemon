import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("form submitted!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            disabled={!name}
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default App;
