import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer"
const Speedometer = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    updateMeter();

  });

  const updateMeter = () => {
      setValue(props.value);
  };

  return (
    <div className="speedometer">
<ReactSpeedometer maxValue={100}
  value={parseInt(value)}
  needleColor="#555"
  startColor="green"
  segments={10000}
  textColor={"transparent"}
  endColor="red" />
  </div>
  );
};

export default Speedometer;
