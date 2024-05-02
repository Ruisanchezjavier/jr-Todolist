import React from "react";
import "../../styles/TodoHeader.css"




const TodoHeader = () => {
	return (
		<>
		<header className="header">
            <h1>todos</h1>
            <input
            className="task-imput"
            type="text"
            placeholder="What needs to be done?"
            // value=""
            // onChange={() => write in the task}
            />
            <button
            // onClick={() => validate, them add the task}
            >Add Task</button>
        </header>
		</>
	);
};

export default TodoHeader;