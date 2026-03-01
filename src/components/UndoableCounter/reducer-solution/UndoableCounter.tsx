import { FC, useReducer } from "react";

import "./styles.css";

type HistoryItem = {
  operation: string;
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

type State = {
  counter: number;
  history: History;
  undoHistory: History;
};

type Action =
  | {
      type: "increment";
      payload: {
        operation: string;
        number: 1;
      };
    }
  | {
      type: "decrement";
      payload: {
        operation: string;
        number: 1;
      };
    }
  | {
      type: "divide";
      payload: {
        operation: string;
        number: 2;
      };
    }
  | {
      type: "multiply";
      payload: {
        operation: string;
        number: 2;
      };
    }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "reset" };

const counterReducer = (state: State, action: Action) => {
  const { counter, history, undoHistory } = state;
  switch (action.type) {
    case "increment": {
      const newCounter = counter + action.payload.number;
      return {
        counter: newCounter,
        history: [
          {
            operation: action.payload.operation,
            oldCounter: counter,
            newCounter: newCounter,
          },
          ...history,
        ],
        undoHistory: [],
      };
    }
    case "decrement": {
      const newCounter = counter - action.payload.number;
      return {
        counter: newCounter,
        history: [
          {
            operation: action.payload.operation,
            oldCounter: counter,
            newCounter: newCounter,
          },
          ...history,
        ],
        undoHistory: [],
      };
    }
    case "multiply": {
      const newCounter = counter * action.payload.number;
      return {
        counter: newCounter,
        history: [
          {
            operation: action.payload.operation,
            oldCounter: counter,
            newCounter: newCounter,
          },
          ...history,
        ],
        undoHistory: [],
      };
    }
    case "divide": {
      const newCounter = counter / action.payload.number;
      return {
        counter: newCounter,
        history: [
          {
            operation: action.payload.operation,
            oldCounter: counter,
            newCounter: newCounter,
          },
          ...history,
        ],
        undoHistory: [],
      };
    }
    case "undo": {
      const [latest, ...earlierHistory] = history;
      return {
        counter: latest.oldCounter,
        history: earlierHistory,
        undoHistory: [latest, ...undoHistory],
      };
    }
    case "redo": {
      const [latest, ...earlierUndoHistory] = undoHistory;
      return {
        counter: latest.newCounter,
        history: [latest, ...history],
        undoHistory: earlierUndoHistory,
      };
    }
    case "reset":
      return {
        counter: 0,
        history: [],
        undoHistory: [],
      };
    default:
      return state;
  }
};

const initialState: State = {
  counter: 0,
  history: [],
  undoHistory: [],
};

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { counter, history, undoHistory } = state;

  return (
    <div>
      <div className="row">
        <button
          disabled={history.length === 0}
          onClick={() => dispatch({ type: "undo" })}
        >
          Undo
        </button>
        <button
          disabled={undoHistory.length === 0}
          onClick={() => dispatch({ type: "redo" })}
        >
          Redo
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <hr />
      <div className="row">
        <button
          onClick={() =>
            dispatch({
              type: "divide",
              payload: { operation: "/2", number: 2 },
            })
          }
        >
          /2
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: { operation: "-1", number: 1 },
            })
          }
        >
          -1
        </button>
        <div className="counter">{counter}</div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: { operation: "+1", number: 1 },
            })
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "multiply",
              payload: { operation: "x2", number: 2 },
            })
          }
        >
          x2
        </button>
      </div>
      <hr />
      <div className="row">
        <UndoableCounterHistory history={history} />
      </div>
    </div>
  );
}
