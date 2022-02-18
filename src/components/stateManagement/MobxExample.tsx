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
          }}
        >
          Submit
        </button>
      </div>

      <ul>
        {todoStore.todos.map((todo: TodoItem) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
});

export default MobxExample;
