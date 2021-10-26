import { useState } from "react";
import "./todo.css";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const handletext = (e) => {
    setText(e.target.value);
  };
  const handleTodos = () => {
    setTodo([...todo, text]);
    setText("");
  };
  return (
    <div className="mainDiv">
      {todo.map((e) => (
        <div className="tasks">{e} </div>
      ))}
      <input
        className="inputTask"
        onChange={handletext}
        value={text}
        placeholder="Write Something ..."
      />
      <button className="addedTask" onClick={handleTodos}>
        +
      </button>
    </div>
  );
}

export { Todo };
