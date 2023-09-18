"use client";
import React, { useState, useEffect, useRef } from "react";
import ITodo from "../app/data";
import TodoList from "./TodoList";
const AppTodo: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value.trim(),
          complete: false,
        },
      ]);
      setValue("");
    }
  };
  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-screen bg-slate-600 flex flex-row justify-center items-center"
      >
        <input
          value={value}
          onChange={handleChange}
          className="w-28 h-3 text-black"
          ref={inputRef}
        />
        <button onClick={addTodo}>add</button>
        <TodoList items={todos} />
      </div>
    </>
  );
};

export default AppTodo;
