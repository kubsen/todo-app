import { useContext, useState } from "react";
import { TodoContext } from "../App";

export const Form = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleTitle = ({ target: {value}}) => {
    setTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} type="text" onChange={handleTitle}/>
      <button type="submit">Add todo</button>
    </form>
  )
}