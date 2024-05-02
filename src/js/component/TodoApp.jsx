import React from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";


import "../../styles/TodoApp.css"

const TASK = [
    {id: 0, task: "Wash a car"},
    {id: 1, task: "Do homework"},
    {id: 2, task: "Mow the lawn"},
]



const TodoApp = () => {
	return (
		<>
        <div className="todos-wrapper">
            <div>
                <TodoHeader />
            </div>
            <div>
                <TodoBody todos={TASK}/>
            </div>
            <div>
                <TodoFooter todos={TASK}/>
            </div>  
        </div>
		</>
	);
};

export default TodoApp;