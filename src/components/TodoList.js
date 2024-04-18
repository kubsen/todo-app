import { useState } from 'react';

export const TodoList = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
	const [editedTodo, setEditedTodo] = useState({ id: null, title: '' });

	const handleEdit = (taskId, title) => {
		setEditedTodo({ id: taskId, title: title });
	};

	const handleSave = () => {
		editTodo(editedTodo.id, editedTodo.title);
		setEditedTodo({ id: null, title: '' });
	};

	const handleCancel = () => {
		setEditedTodo({ id: null, title: '' });
	};

	return (
		<div>
			<ul>
				{todo.map(e => (
					<li key={e.title}>
						{editedTodo.id === e.title ? (
							<>
								<input
									type='text'
									value={editedTodo.title}
									onChange={e => setEditedTodo({ id: editedTodo.id, title: e.target.value })}
								/>
								<button onClick={handleSave}>Save</button>
								<button onClick={handleCancel}>Cancel</button>
							</>
						) : (
							<>
								{e.title} {e.complete ? 'is-completed ' : 'is-not-completed '}
								<button onClick={() => deleteTodo(e.title)}>Delete</button>
								<button onClick={() => handleEdit(e.title, e.title)}>Edit</button>
								<button onClick={() => toggleComplete(e.title)}>{e.complete ? 'Undone' : 'Done'}</button>
							</>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
