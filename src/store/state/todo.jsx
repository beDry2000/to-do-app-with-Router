import TaskContext from "../TaskContext";
import { Link, Outlet } from 'react-router-dom';
import { useState, useContext, useRef } from "react";



function Todo() {
    const refInput = useRef();
    const data = useContext(TaskContext);
    const tasks = data.todos;
    const [todo, setTodo] = useState('');
    const handleInput = e => {
        setTodo(e.target.value);
        console.log(todo);
    }

    const onAdd = () => {
        data.handleAdd(todo);
        setTodo("");
        refInput.current.focus();
    }
    const onDoing = (_, id) => {
        data.handleDoing(id);
    }

    return (
        <div>
            <h1>To do lists</h1>
            <input
                ref={refInput}
                value={todo}
                onChange={handleInput}
                placeholder="Enter a task here!"
            />
            <button onClick={onAdd}>Add</button>

            <div style={{width:' 40%'}}>
                {
                    tasks
                    .filter(task => task.doing === false)
                    .map(task => (
                        <>
                            <Link
                                to={`${task.id}`}
                                key={task.id}>
                                <p style={{display: 'inline-block'}}>{task.name}</p>

                            </Link>
                            <button 
                                style={{marginLeft: '20px'}}
                                onClick={e => onDoing(e, task.id)}
                            >Doing</button>
                            <br />
                        </>
                    ))
                }

            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default Todo;