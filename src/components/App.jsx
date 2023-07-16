import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  const [currentTime, timeState] = useState(time);
  const [currentDate,dateState] = useState(date);

  setInterval(Showtime, 1000);
  setInterval(Showtime,1000);

  function Showtime() {
    const newTime = new Date().toLocaleTimeString();
    timeState(newTime);
    const newDate = new Date().toLocaleDateString();
    dateState(newDate)
  }


  return (
    <div className="container">
      <button onClick={Showtime}><p>The Date and Time is</p></button>
      <h1>{currentTime}</h1>
      <h2>{currentDate}</h2>
      
    </div>
  );
}

export default App;
