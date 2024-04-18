import { useState } from "react";

export const Form = ({ add }) => {
  const [title, setTitle] = useState('');

  const handleTitle = ({ target: {value}}) => {
    setTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} type="text" onChange={handleTitle}/>
      <button type="submit">Add todo</button>
    </form>
  )
}