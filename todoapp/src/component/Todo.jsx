import { useState } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault(); //method which is to prevent from refreshing that particular page.
    setTodos([todo]);
    setTodo("");
  }
  return (
    //creating a form for TODO List
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      <h1>{todos}</h1>
    </div>
  );
}
