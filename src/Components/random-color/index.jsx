import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomcolorutility(hex.length)];
    }
    console.log(hexColor);

    setColor(hexColor);
  }

  function handleCreateRgbColor() {
    const r = randomcolorutility(256);
    const g = randomcolorutility(256);
    const b = randomcolorutility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if(typeOfColor === "rgb") handleCreateRgbColor();
    else handleCreateHexColor();
  }, [typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
      className="container"
    >
      <button onClick={() => setTypeofColor("hex")}>Hex Color</button>
      <button onClick={() => setTypeofColor("rgb")}>RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color  " : "Hex Color  "}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
