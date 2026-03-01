import { useState } from "react";

import "./styles.css";

type Operation = "increment" | "multiply" | "decrement" | "divide";
type Count = { operation: string | null; oldValue: number; newValue: number }[];

export default function App() {
  const [count, setCount] = useState<Count>([]);
  const [history, setHistory] = useState<Count>([]);

  const hasCountItems = count.length > 0;
  const hasHistoryItems = history.length > 0;

  const handleUpdateCount = (operation: Operation) => {
    setHistory([]);

    let currentValue = 0;

    if (hasCountItems) {
      currentValue = count[0].newValue;
    }

    switch (operation) {
      case "increment":
        setCount((prevValue) => [
          {
            operation: "+1",
            oldValue: currentValue,
            newValue: currentValue + 1,
          },
          ...prevValue,
        ]);
        break;
      case "decrement":
        if (currentValue < 1) return;
        setCount((prevValue) => [
          {
            operation: "-1",
            oldValue: currentValue,
            newValue: currentValue - 1,
          },
          ...prevValue,
        ]);
        break;
      case "multiply":
        setCount((prevValue) => [
          {
            operation: "x2",
            oldValue: currentValue,
            newValue: currentValue * 2,
          },
          ...prevValue,
        ]);
        break;
      case "divide":
        if (currentValue === 0) return;
        setCount((prevValue) => [
          {
            operation: "/2",
            oldValue: currentValue,
            newValue: currentValue / 2,
          },
          ...prevValue,
        ]);
        break;
      default:
        break;
    }
  };

  const handleUndo = () => {
    if (!hasCountItems) return;

    setHistory((prevValue) => [...prevValue, count[0]]);

    const nextCount = count.slice(1);
    setCount(nextCount);
  };

  const handleRedo = () => {
    if (!hasHistoryItems) return;

    setCount((prevValue) => [history[history.length - 1], ...prevValue]);

    const nextHistory = history.slice(0, -1);
    setHistory(nextHistory);
  };

  const handleReset = () => {
    setCount([]);
    setHistory([]);
  };

  return (
    <div className="wrapper">
      <div className="controls">
        <button
          className="button"
          onClick={handleUndo}
          disabled={!hasCountItems}
        >
          Undo
        </button>
        <button
          className="button"
          onClick={handleRedo}
          disabled={!hasHistoryItems}
        >
          Redo
        </button>
        <button
          className="button"
          onClick={handleReset}
          disabled={!hasCountItems}
        >
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
        <span className="count">
          {hasCountItems ? count[0]?.newValue : "0"}
        </span>
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
          {hasCountItems &&
            count.map((item) => (
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
