import { observer } from "mobx-react";
import React, { useState } from "react";
import { TodoItem, TodoStoreImpl } from "./TodoStore";

interface ITodoListProps {
  todoStore: TodoStoreImpl;
}

const MobxExample: React.FC<ITodoListProps> = observer(({ todoStore }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <h1>State Management</h1>
      <h3> Todo List</h3>
      <div>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            todoStore.addTodo(value);
            setValue("");
          }}
        >
          Submit
        </button>
      </div>

      <ol className="list-group list-group-numbered">
        {todoStore.todos.map((todo: TodoItem) => {
          return (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between align-items-center" ${!todo.completed ? 'list-group-item-primary': 'list-group-item-success'}`}
            >
              <span>{todo.title}</span>
              <input
                className="form-check-input me-1"
                type="checkbox"
                checked={todo.completed}
                onClick={() => todoStore.markCompleted(todo.id)}
              />
              <span onClick={() => todoStore.deleteTodo(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
});

export default MobxExample;