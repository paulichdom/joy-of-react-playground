import * as React from "react";
import { api } from "./api";
import { Task } from "@doist/todoist-api-typescript";

type Todo = {
  id: number;
  value: string;
  isCompleted: boolean;
};

type State = Todo[];

type Action =
  | { type: "create-todo"; payload: { value: string } }
  | { type: "toggle-todo"; payload: { id: number } }
  | { type: "delete-todo"; payload: { id: number } };

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "create-todo": {
      return [
        ...state,
        {
          id: Math.random(),
          value: action.payload.value,
          isCompleted: false,
        },
      ];
    }
    case "toggle-todo": {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
    case "delete-todo": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

// TODO (no pun intended):
// 1. Add data fetching
// 2. Add search functionality
function Todo() {
  const [todos, dispatch] = React.useReducer(reducer, []);
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState<Task[]>([]);

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: "create-todo",
      payload: { value },
    });

    setValue("");
  };

  const handleToggleTodo = (id: number) => {
    dispatch({
      type: "toggle-todo",
      payload: { id },
    });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "delete-todo",
      payload: { id },
    });
  };

  const hasTodos = todos.length > 0;

  React.useEffect(() => {
    api.getTasks().then((tasks) => setList(tasks.results));
  }, []);

  console.log({ list });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {!hasTodos && <h3>Todo list empty. Add a todo below</h3>}
      <ol>
        {hasTodos &&
          todos.map(({ id, value, isCompleted }) => (
            <li key={id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 16,
                }}
              >
                <button
                  onClick={() => handleToggleTodo(id)}
                  style={{
                    textDecoration: isCompleted ? "line-through" : "none",
                  }}
                >
                  {value}
                </button>
                <button onClick={() => handleDeleteTodo(id)}>X</button>
              </div>
            </li>
          ))}
      </ol>
      <form
        onSubmit={handleAddTodo}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          border: "1px solid grey",
          padding: 8,
          borderRadius: 4,
        }}
      >
        <label>New Item:</label>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Todo;
