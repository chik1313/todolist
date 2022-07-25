import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = "all" | "active" | "complete"

function App() {
    const todoListTitle = "What to learn"
    const [tasks, setTasks] = React.useState([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
    ])
    const [filter, setFilter] = React.useState<FilterValuesType>("all")

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
        console.log(tasks)
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    let tasksForRender;
    switch (filter) {
        case "complete":
            tasksForRender = tasks.filter(task => task.isDone === true)
            break
        case "active":
            tasksForRender = tasks.filter(task => task.isDone === false)
            break
        default:
            tasksForRender = tasks
    }
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
