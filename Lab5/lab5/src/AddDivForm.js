import React, { useState } from "react";

function AddDivForm() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiv = { height, width, bgColor };
    setDivs([...divs, newDiv]);
    setHeight("");
    setWidth("");
    setBgColor("");
  };

  return (
    <div>
      <h2>Add Div</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Background Color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.bgColor,
              marginBottom: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AddDivForm;
