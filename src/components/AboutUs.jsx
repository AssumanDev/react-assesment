import { useState } from "react";

const AboutUs=()=> {
  const [count, setCount]=useState(0);

  const handleClick =()=>{
    setCount(count + 1);
  };

  return (
    <div className="text-left mt-5">
      <h1 className="text-4xl font-bold mb-6 text-blue">Count: {count}</h1>
      <button onClick={handleClick} className="bg-blue-500 text-white px-2 py-3 rounded hover:bg-blue transition">
        Click to like
      </button>
    </div>
  );
}

export default AboutUs;