import { useState } from "react";
import TaskContext from './TaskContext';

function Provider({ children }) {
    /**
     * list = {
     * id,
     * doing,
     * done
     * }
     */
    const [todos, setTodos] = useState([]);
    // const [doings, setDoings] = useState([]);
    // const [dones, setDones] = useState([]);

    const value = {
        todos,
        handleAdd,
        getTask,
        handleDoing,
        handleDone
    }
    function handleAdd(taskName) {
        let newId = todos.length + 1;
        console.log('Dang chay handleAdd');
        let newTodo = {
            id: newId,
            name: taskName,
            doing: false,
            done: false
        }
        setTodos(prev => [...prev, newTodo]);
    }

    function getTask(id) {
        return todos.find(todo => todo.id === id);
    }

    function handleDoing(doingId) {
        // thay doi todo id false thanh true
        const newTodos = todos.map(todo => {
            if (todo.id === doingId) {
                return { ...todo, doing: true }
            }
            return { ...todo }
        })
        setTodos(newTodos)
        console.log('Dang handle DOing');
    }
    function handleDone(doneId) {
        const newTodos = todos.map(todo => {
            if (todo.id === doneId) {
                return { ...todo, doing: false, done: true }
            }
            return { ...todo }
        })
        setTodos(newTodos);
        console.log('Dang handle Done');
    }

    console.log(todos);
    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default Provider;