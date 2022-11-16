import React, { useState } from "react";

const Home = () => {
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    let output = input.replaceAll('-', '').toUpperCase();
    setOutput(output)
  }


  return (
    <div className="container my-4">
      <h3>Convert UUID string to UUID</h3>
      <h5>Enter UUID string</h5>
      <input onChange={handleChange}></input>
      <h5 className="mt-4">Output: </h5>
      <p>{output}</p>
    </div>
  )
};

export default Home;
