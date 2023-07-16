import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [currentTime, timeState] = useState(time);

  setInterval(Showtime, 1000);

  function Showtime() {
    const newTime = new Date().toLocaleTimeString();
    timeState(newTime);
  }

  return (
    <div className="container">
      <h2>{currentTime}</h2>
      <button onClick={Showtime}>Get Time</button>
    </div>
  );
}

export default App;
