import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <div>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <button onClick={addCount}>AddCount</button>
      <button onClick={subtractCount}>SubtractCount</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
export default Count;
