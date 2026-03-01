import { FC, useState } from "react";

import "./styles.css";

type OperationType = "divide" | "decrement" | "increment" | "multiply";
type Operation = "/2" | "-1" | "+1" | "x2";
type Operations = {
  [key in Operation]: { type: OperationType; number: number };
};

const OPERATIONS: Operations = {
  "/2": { type: "divide", number: 2 },
  "-1": { type: "decrement", number: 1 },
  "+1": { type: "increment", number: 1 },
  'x2': { type: "multiply", number: 2 },
};

const performOperation = (counter: number, operationLabel: Operation) => {
  const operation = OPERATIONS[operationLabel];
  switch (operation.type) {
    case "increment":
      return counter + operation.number;
    case "decrement":
      return counter + operation.number;
    case "multiply":
      return counter * operation.number;
    case "divide":
      return counter / operation.number;
    default:
      return counter;
  }
};

type HistoryItem = {
  operation: Operation;
  oldCounter: number;
  newCounter: number;
};

type History = Array<HistoryItem>;

type UndoableCounterHistoryProps = {
  history: History;
};

const UndoableCounterHistory: FC<UndoableCounterHistoryProps> = ({
  history,
}) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Old</th>
          <th>New</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={`${index}-${Math.random()}`}>
            <td>{item.operation}</td>
            <td>{item.oldCounter}</td>
            <td>{item.newCounter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState<History>([]);
  const [undoHistory, setUndoHistory] = useState<History>([]);

  const onReset = () => {
    setCounter(0);
    setHistory([]);
    setUndoHistory([]);
  };

  const onUndo = () => {
    const [latest, ...earlierHistory] = history;
    setCounter(latest.oldCounter);
    setUndoHistory([latest, ...undoHistory]);
    setHistory(earlierHistory);
  };

  const onRedo = () => {
    const [latest, ...earlierUndoHistory] = undoHistory;
    setCounter(latest.newCounter);
    setUndoHistory(earlierUndoHistory);
    setHistory([latest, ...history]);
  };

  const onClickOperation = (operation: Operation) => {
    const oldCounter = counter;
    const newCounter = performOperation(counter, operation);

    setCounter(newCounter);
    setHistory([{ operation, oldCounter, newCounter }, ...history]);
    setUndoHistory([]);
  };

  return (
    <div>
      <div className="row">
        <button disabled={history.length === 0} onClick={onUndo}>
          Undo
        </button>
        <button disabled={undoHistory.length === 0} onClick={onRedo}>
          Redo
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
      <hr />
      <div className="row">
        <button onClick={() => onClickOperation("/2")}>/2</button>
        <button onClick={() => onClickOperation("-1")}>-1</button>
        <div className="counter">{counter}</div>
        <button onClick={() => onClickOperation("+1")}>+1</button>
        <button onClick={() => onClickOperation("x2")}>x2</button>
      </div>
      <hr />
      <div className="row">
        <UndoableCounterHistory history={history} />
      </div>
    </div>
  );
}
