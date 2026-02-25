import { useState } from "react";

import './styles.css'

type Count = { operation: string | null; oldValue: number; newValue: number }[];

export default function App() {
  const defaultCountValue: Count = [
    { operation: null, oldValue: 0, newValue: 0 },
  ];
  const [count, setCount] = useState(defaultCountValue);

  const handleUpdateCount = (operation: string) => {
    const { newValue: currentValue } = count[count.length - 1];

    switch (operation) {
      case "increment":
        setCount((prevValue) => [
          ...prevValue,
          {
            operation: "+1",
            oldValue: currentValue,
            newValue: currentValue + 1,
          },
        ]);
        break;
      case "decrement":
        if (currentValue < 1) return;
        setCount((prevValue) => [
          ...prevValue,
          {
            operation: "-1",
            oldValue: currentValue,
            newValue: currentValue - 1,
          },
        ]);
        break;
      case "multiply":
        setCount((prevValue) => [
          ...prevValue,
          {
            operation: "x2",
            oldValue: currentValue,
            newValue: currentValue * 2,
          },
        ]);
        break;
      case "divide":
        if (currentValue === 0) return;
        setCount((prevValue) => [
          ...prevValue,
          {
            operation: "/2",
            oldValue: currentValue,
            newValue: currentValue / 2,
          },
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="controls">
        <button className="button">Undo</button>
        <button className="button">Redo</button>
        <button className="button" onClick={() => setCount(defaultCountValue)}>
          Reset
        </button>
      </div>
      <div className="controls">
        <button className="button" onClick={() => handleUpdateCount("divide")}>
          /2
        </button>
        <button
          className="button"
          onClick={() => handleUpdateCount("decrement")}
        >
          -1
        </button>
        <span className="count">{count[count.length - 1].newValue}</span>
        <button
          className="button"
          onClick={() => handleUpdateCount("increment")}
        >
          +1
        </button>
        <button
          className="button"
          onClick={() => handleUpdateCount("multiply")}
        >
          x2
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Old</th>
            <th>New</th>
          </tr>
        </thead>
        <tbody>
          {count.map((item) => (
            <tr key={Math.random()}>
              <th>{item.operation}</th>
              <th>{item.oldValue}</th>
              <th>{item.newValue}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
