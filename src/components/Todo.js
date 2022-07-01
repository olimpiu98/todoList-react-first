import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { AiOutlineFileDone } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	return todos.map((todo, index) => (
		<div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
			<div key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-text'>
				{todo.text.substring(0, 40)} {todo.text.length >= 40 && "..."}
			</div>
			<div className='icons'>
				<TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
				<RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
				<AiOutlineFileDone onClick={() => completeTodo(todo.id)} className='complete-icon' />
			</div>
		</div>
	));
}

export default Todo;
