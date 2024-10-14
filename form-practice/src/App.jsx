import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form action="form">
        <input
          type="text"
          value={value}
        />
      </form>
    </>
  );
}

export default App;
