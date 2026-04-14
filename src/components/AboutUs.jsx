import { useState } from "react";

const AboutUs=()=> {
  const [count, setCount]=useState(0);

  const handleClick =()=>{
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>
        Click to like
      </button>
    </div>
  );
}

export default AboutUs;