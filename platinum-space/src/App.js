import React from "react";
import ReactPlayer from "react-player";

function App() {
  console.cowsay('hi im cris :D')
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowY: "hidden",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=X1M69l7ZGlw&t=2s"
          playing
          loop
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default App;
