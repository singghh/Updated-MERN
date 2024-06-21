import React, { useState } from "react";

const PercentageColorViewer = () => {
  const [percentage, setPercentage] = useState(50);

  const handleChange = (event) => {
    setPercentage(event.target.value);
  };

  const color = `hsl(${percentage}, 100%, 50%)`;

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={percentage}
        onChange={handleChange}
      />
      <div style={{ backgroundColor: color }}>{percentage}%</div>
    </div>
  );
};

export default PercentageColorViewer;