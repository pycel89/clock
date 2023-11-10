import { useEffect, useState } from "react";

import TimePart from "./../timePart/TimePart";
import Points from "./../points/Points";

const Clock = () => {
  const [tick, setTick] = useState(false);
  const [sec, setSec] = useState(0);
  const [minut, setMinut] = useState(0);
  const [hour, setHour] = useState(0);

  const getTime = () => {
    const date = new Date();
    setHour(date.getHours());
    setMinut(date.getMinutes());
    const seconds = date.getSeconds();
    setSec(seconds);
    if (seconds % 2 === 1) setTick(true);
    else setTick(false);
    setTimeout(getTime, 1000);
  };

  useEffect(getTime, []);
  return (
    <div className="container">

    <div className="clockFace">
      <TimePart>{hour}</TimePart>
      <Points>points tick</Points>
      <TimePart>{minut}</TimePart>
      <Points>{"points" + (tick ? " tick" : "")}</Points>
      <TimePart>{sec}</TimePart>
    </div>
        <div className="clockFace">
        <TimePart>{hour}</TimePart>
        <Points>{"points" + (tick ? " tick" : "")}</Points>
        <TimePart>{minut}</TimePart>
      </div>
      </div>
    
  );
};
export default Clock;
