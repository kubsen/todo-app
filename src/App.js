import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
	const [todo, setTodo] = useState([{ title: 'todo', complete: false }]);

	const addTodo = title => {
		const newTodo = {
			title,
			complete: false,
		};

		setTodo(prevState => [...prevState, newTodo]);
	};

	const deleteTodo = title => {
		setTodo(prevState => prevState.filter(e => e.title !== title));
	};

	const editTodo = (title, newTitle) => {
		setTodo(prevState =>
			prevState.map(e => {
				if (e.title === title) {
					return {
						...e,
						title: newTitle,
					};
				}

				return e;
			})
		);
	};

	const toggleComplete = title => {
		setTodo(prevState =>
			prevState.map(e => {
				if (e.title === title) {
					return {
						...e,
						complete: !e.complete,
					};
				}

				return e;
			})
		);
	};

	return (
		<div className='App'>
			<Form add={addTodo} />
			<TodoList
				todo={todo}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				toggleComplete={toggleComplete}
			/>
		</div>
	);
}

export default App;
