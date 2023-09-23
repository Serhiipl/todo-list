"use client";
import React, { useState, useEffect, useRef } from "react";
import ITodo from "../app/data";
import TodoList from "./TodoList";
const AppTodo: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
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
  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });
  return (
    <>
      <div
        id="wrapper"
        className="w-screen h-screen bg-slate-600 flex flex-col justify-center items-center"
      >
        <div className="input-wrapper">
          <input
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-28 h-3 m-2 text-black p-4 rounded-lg"
            ref={inputRef}
          />
          <button className="bg-cyan-800 p-2 rounded-lg" onClick={addTodo}>
            add
          </button>
        </div>
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default AppTodo;
