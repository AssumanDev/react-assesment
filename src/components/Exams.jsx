import { useState } from "react";

const Exams=()=> {
  const [name, setName] = useState("");

  return (
    <div className="items-left mt-8">
      <p>Enter your name</p>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}className="border-gray-200 px-2 py-2 rounded"/>
      <h2 className="text-left text-2xl text-blue-500">Your name: {name}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">ok</button>
    </div>
  );
}

export default Exams;