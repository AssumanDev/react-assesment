import { useState } from "react";

const Exams=()=> {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Your name: {name}</h2>
    </div>
  );
}

export default Exams;